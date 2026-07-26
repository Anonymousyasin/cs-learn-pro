"use client";

import { useState, useRef, useEffect, type ReactNode } from "react";
import { type Section } from "@/lib/courses/types";
import {
  Lightbulb,
  Info,
  AlertTriangle,
  BookMarked,
  Terminal,
  Copy,
  Check,
  CheckCircle2,
  XCircle,
  Lock,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Exercise State Props ────────────────────────────────────
interface ExerciseState {
  completedIds: string[];
  currentExerciseIndex: number;
  totalExercises: number;
  exerciseOrder: string[];        // Exercise IDs in order for position lookup
}

interface SectionRendererProps {
  section: Section;
  index: number;
  exerciseState?: ExerciseState;
  onExerciseAnswer?: (exerciseId: string, answer: string, correct: boolean) => void;
}

function formatText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-semibold text-text-primary">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={i} className="rounded border border-border bg-bg-tertiary px-1.5 py-0.5 text-sm font-mono text-accent-info">
          {part.slice(1, -1)}
        </code>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

const calloutStyles = {
  info: {
    icon: Info,
    container: "border-accent-info/30 bg-accent-info/5",
    iconColor: "text-accent-info",
  },
  tip: {
    icon: Lightbulb,
    container: "border-accent-secondary/30 bg-accent-secondary/5",
    iconColor: "text-accent-secondary",
  },
  warning: {
    icon: AlertTriangle,
    container: "border-accent-warning/30 bg-accent-warning/5",
    iconColor: "text-accent-warning",
  },
  important: {
    icon: BookMarked,
    container: "border-accent-primary/30 bg-accent-primary/5",
    iconColor: "text-accent-primary",
  },
};

// ─── Scroll Fade Wrapper ─────────────────────────────────────
function ScrollFade({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasOverflow, setHasOverflow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const check = () => setHasOverflow(el.scrollWidth > el.clientWidth + 2);
    check();
    el.addEventListener("scroll", check);
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", check);
      ro.disconnect();
    };
  }, []);

  return (
    <div className="relative">
      <div ref={ref} className="overflow-x-auto">
        {children}
      </div>
      {hasOverflow && (
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black/15 to-transparent" />
      )}
    </div>
  );
}

// ─── Copy Button ─────────────────────────────────────────────
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Clipboard API may fail (insecure context, etc.)
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium transition-all",
        "opacity-0 group-hover:opacity-100 focus-visible:opacity-100 group-hover:opacity-100",
        "bg-bg-secondary/80 text-text-muted hover:bg-bg-secondary hover:text-text-secondary",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
      )}
      aria-label={copied ? "Copied" : "Copy code"}
    >
      {copied ? (
        <>
          <Check className="size-3 text-accent-secondary" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Copy className="size-3" />
          <span>Copy</span>
        </>
      )}
    </button>
  );
}

// ─── Interactive Exercise ────────────────────────────────────
function InteractiveExercise({
  section,
  exerciseNumber,
  totalExercises,
  isCurrent,
  isCompleted,
  completedIds,
  onAnswer,
}: {
  section: Section & { type: "exercise" };
  exerciseNumber: number;
  totalExercises: number;
  isCurrent: boolean;
  isCompleted: boolean;
  completedIds: string[];
  onAnswer: (exerciseId: string, answer: string, correct: boolean) => void;
}) {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState<{ correct: boolean; submitted: boolean } | null>(null);

  const handleCheck = () => {
    const correct = inputValue.trim() === section.correctOutput.trim();
    setResult({ correct, submitted: true });
    onAnswer(section.id, inputValue.trim(), correct);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && inputValue.trim()) {
      handleCheck();
    }
  };

  // If completed and has no result show, show it as done
  if (isCompleted && !result) {
    return (
      <div className="rounded-xl border-2 border-accent-secondary/20 bg-accent-secondary/5 p-5 max-sm:p-4">
        <div className="mb-3 flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-md bg-accent-secondary/15 px-2 py-0.5 text-xs font-semibold text-accent-secondary">
            <CheckCircle2 className="size-3" />
            Exercise {exerciseNumber} — Completed
          </span>
        </div>
        <h4 className="mb-1 font-semibold text-text-primary">{section.title}</h4>
        <p className="mb-3 text-sm text-text-secondary">{section.description}</p>
        <div className="rounded-lg border border-border bg-bg-tertiary p-3">
          <pre className="text-sm text-text-primary font-mono">{section.code}</pre>
        </div>
        <div className="mt-3 flex items-center gap-2 text-sm text-accent-secondary">
          <CheckCircle2 className="size-4" />
          <span>Completed</span>
        </div>
      </div>
    );
  }

  // Locked state (future exercise)
  if (!isCurrent && !isCompleted) {
    return (
      <div className="rounded-xl border-2 border-border/50 bg-bg-tertiary/50 p-5 max-sm:p-4 opacity-60">
        <div className="mb-3 flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-md bg-text-muted/10 px-2 py-0.5 text-xs font-semibold text-text-muted">
            <Lock className="size-3" />
            Exercise {exerciseNumber}
          </span>
        </div>
        <h4 className="mb-1 font-semibold text-text-primary">{section.title}</h4>
        <p className="text-sm text-text-muted">Complete the previous exercise first</p>
      </div>
    );
  }

  // Current/active exercise
  return (
    <div className="rounded-xl border-2 border-accent-warning/30 bg-accent-warning/5 p-5 max-sm:p-4">
      {/* Exercise badge */}
      <div className="mb-3 flex items-center justify-between">
        <span className="inline-flex items-center gap-1 rounded-md bg-accent-warning/15 px-2 py-0.5 text-xs font-semibold text-accent-warning">
          <Terminal className="size-3" />
          Exercise {exerciseNumber}
        </span>
      </div>

      <h4 className="mb-1 font-semibold text-text-primary">{section.title}</h4>
      <p className="mb-4 text-sm text-text-secondary">{section.description}</p>

      {/* Code block */}
      <div className="mb-4 overflow-hidden rounded-lg border border-border bg-bg-tertiary">
        <div className="flex items-center justify-between border-b border-border/50 px-4 py-1.5">
          <span className="text-xs font-medium text-text-muted">Python</span>
          {/* Note: exercise language is currently Python; add `language` to ExerciseSection type to make dynamic */}
        </div>
        <pre className="p-4 text-sm font-mono leading-relaxed text-text-primary">
          <code>{section.code}</code>
        </pre>
      </div>

      {/* Instructions */}
      {section.instructions.length > 0 && (
        <ol className="mb-4 space-y-1.5">
          {section.instructions.map((inst, i) => (
            <li key={i} className="flex gap-2 text-sm text-text-secondary">
              <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-accent-warning/15 text-[10px] font-bold text-accent-warning">
                {i + 1}
              </span>
              {inst}
            </li>
          ))}
        </ol>
      )}

      {/* Input + Check */}
      <div className="space-y-2">
        <label className="text-xs font-medium text-text-muted">Your answer:</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              if (result) setResult(null);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Type the expected output..."
            className="flex-1 rounded-lg border border-border bg-white px-3 py-2 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20"
            disabled={result?.submitted}
          />
          <button
            onClick={handleCheck}
            disabled={!inputValue.trim() || result?.submitted}
            className={cn(
              "rounded-lg px-4 py-2 text-sm font-medium transition-all",
              "bg-accent-primary text-white hover:bg-accent-primary-hover",
              "disabled:cursor-not-allowed disabled:opacity-40"
            )}
          >
            Check
          </button>
        </div>
      </div>

      {/* Result feedback */}
      {result && (
        <div className={cn(
          "mt-3 flex items-start gap-2 rounded-lg p-3 text-sm",
          result.correct
            ? "bg-accent-secondary/10 text-accent-secondary"
            : "bg-red-50 text-red-600"
        )}>
          {result.correct ? (
            <>
              <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
              <div>
                <p className="font-medium">Correct!</p>
                <p className="mt-0.5 text-xs opacity-80">Output was: <code className="rounded bg-black/10 px-1 font-mono">{section.correctOutput}</code></p>
              </div>
            </>
          ) : (
            <>
              <XCircle className="mt-0.5 size-4 shrink-0" />
              <div>
                <p className="font-medium">Not quite right.</p>
                <p className="mt-0.5 text-xs opacity-80">Your answer: <code className="rounded bg-red-200/50 px-1 font-mono">{inputValue}</code></p>
                <p className="mt-0.5 text-xs opacity-80">Correct output: <code className="rounded bg-red-200/50 px-1 font-mono">{section.correctOutput}</code></p>
              </div>
            </>
          )}
        </div>
      )}

      {/* Deep explanation on correct answer (using hint content) */}
      {result?.correct && section.hint && (
        <div className="mt-3 rounded-lg border border-accent-info/20 bg-accent-info/5 p-3">
          <p className="mb-1 flex items-center gap-1 text-xs font-semibold text-accent-info">
            <BookMarked className="size-3" />
            Why this works
          </p>
          <p className="text-sm text-text-secondary">{section.hint}</p>
        </div>
      )}

      {/* Hint (before answering) */}
      {!result && section.hint && (
        <details className="mt-3">
          <summary className="cursor-pointer text-xs font-medium text-accent-primary">
            Need a hint?
          </summary>
          <p className="mt-1 text-sm text-text-secondary">{section.hint}</p>
        </details>
      )}
    </div>
  );
}



// ─── Fix-Code Exercise ──────────────────────────────────────
function FixCodeExercise({
  section,
  exerciseNumber,
  totalExercises,
  isCurrent,
  isCompleted,
  onAnswer,
}: {
  section: Section & { type: "fix-code" };
  exerciseNumber: number;
  totalExercises: number;
  isCurrent: boolean;
  isCompleted: boolean;
  onAnswer: (exerciseId: string, answer: string, correct: boolean) => void;
}) {
  const [inputValue, setInputValue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState<{ correct: boolean; diff: Array<{ type: "match" | "diff" | "missing"; userLine: string; correctLine: string }> } | null>(null);

  const handleSubmit = () => {
    const userLines = inputValue.split("\n");
    const correctLines = section.correctCode.split("\n");
    const maxLen = Math.max(userLines.length, correctLines.length);
    const diff: Array<{ type: "match" | "diff" | "missing"; userLine: string; correctLine: string }> = [];
    let allMatch = true;

    for (let i = 0; i < maxLen; i++) {
      const uLine = userLines[i] ?? "";
      const cLine = correctLines[i] ?? "";

      if (uLine === cLine) {
        diff.push({ type: "match", userLine: uLine, correctLine: cLine });
      } else if (i < userLines.length) {
        diff.push({ type: "diff", userLine: uLine, correctLine: cLine });
        allMatch = false;
      } else {
        diff.push({ type: "missing", userLine: "", correctLine: cLine });
        allMatch = false;
      }
    }

    setResult({ correct: allMatch, diff });
    setSubmitted(true);
    onAnswer(section.id, inputValue, allMatch);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter" && inputValue.trim()) {
      handleSubmit();
    }
  };

  if (isCompleted && !submitted) {
    return (
      <div className="rounded-xl border-2 border-accent-secondary/20 bg-accent-secondary/5 p-5 max-sm:p-4">
        <div className="mb-3 flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-md bg-accent-secondary/15 px-2 py-0.5 text-xs font-semibold text-accent-secondary">
            <CheckCircle2 className="size-3" />
            Fix-Code {exerciseNumber} — Completed
          </span>
        </div>
        <h4 className="mb-1 font-semibold text-text-primary">{section.title}</h4>
        <p className="mb-3 text-sm text-text-secondary">{section.instructions}</p>
        <pre className="rounded-lg border border-border bg-bg-tertiary p-3 text-sm font-mono text-text-primary">{section.correctCode}</pre>
        <div className="mt-3 flex items-center gap-2 text-sm text-accent-secondary">
          <CheckCircle2 className="size-4" />
          <span>Completed</span>
        </div>
      </div>
    );
  }

  if (!isCurrent && !isCompleted) {
    return (
      <div className="rounded-xl border-2 border-border/50 bg-bg-tertiary/50 p-5 max-sm:p-4 opacity-60">
        <div className="mb-3 flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-md bg-text-muted/10 px-2 py-0.5 text-xs font-semibold text-text-muted">
            <Lock className="size-3" />
            Fix-Code {exerciseNumber}
          </span>
        </div>
        <h4 className="mb-1 font-semibold text-text-primary">{section.title}</h4>
        <p className="text-sm text-text-muted">Complete the previous exercise first</p>
      </div>
    );
  }

  const showDiff = submitted && result;

  return (
    <div className="rounded-xl border-2 border-accent-warning/30 bg-accent-warning/5 p-5 max-sm:p-4">
      {/* Badge */}
      <div className="mb-3 flex items-center gap-2">
        <span className="inline-flex items-center gap-1 rounded-md bg-accent-destructive/15 px-2 py-0.5 text-xs font-semibold text-accent-destructive">
          <XCircle className="size-3" />
          Fix-Code {exerciseNumber}
        </span>
      </div>

      <h4 className="mb-1 font-semibold text-text-primary">{section.title}</h4>
      <p className="mb-3 text-sm text-text-secondary">{section.instructions}</p>

      {/* Broken code display */}
      {!submitted && (
        <>
          <div className="mb-3 rounded-lg border border-accent-destructive/30 bg-accent-destructive/10 p-3">
            <div className="mb-1 text-xs font-semibold text-accent-destructive">Broken code:</div>
            <pre className="text-sm font-mono text-text-primary">{section.brokenCode}</pre>
          </div>

          {/* Editor */}
          <div className="mb-3">
            <label className="mb-1 block text-xs font-semibold text-text-secondary">
              Type the fixed code:
            </label>
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className="min-h-[120px] w-full rounded-lg border border-border bg-bg-primary p-3 font-mono text-sm text-text-primary placeholder-text-muted focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary"
              placeholder="Type your fixed code here..."
              spellCheck={false}
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={!inputValue.trim()}
            className="inline-flex items-center gap-1.5 rounded-lg bg-accent-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-primary-hover disabled:opacity-50"
          >
            <Check className="size-4" />
            Check Fix
          </button>
        </>
      )}

      {/* Result / Diff comparison */}
      {showDiff && (
        <div>
          <div className={`mb-3 flex items-center gap-2 text-sm font-semibold ${result!.correct ? "text-accent-secondary" : "text-accent-destructive"}`}>
            {result!.correct ? (
              <><CheckCircle2 className="size-4" /> Correct!</>
            ) : (
              <><XCircle className="size-4" /> Not quite — see the differences below</>
            )}
          </div>

          {/* Diff table */}
          <div className="mb-3 overflow-hidden rounded-lg border border-border">
            <table className="w-full border-collapse text-sm font-mono">
              <thead>
                <tr className="bg-bg-tertiary text-xs text-text-muted">
                  <th className="w-8 border-r border-border px-2 py-1 text-right">#</th>
                  <th className="border-r border-border px-3 py-1">Your code</th>
                  <th className="px-3 py-1">Correct code</th>
                </tr>
              </thead>
              <tbody>
                {result!.diff.map((row, i) => (
                  <tr key={i} className={cn(
                    "border-t border-border/50",
                    row.type === "match" && "bg-accent-secondary/5",
                    row.type === "diff" && "bg-accent-destructive/10",
                    row.type === "missing" && "bg-accent-destructive/10"
                  )}>
                    <td className="w-8 border-r border-border px-2 py-1 text-right text-text-muted">{i + 1}</td>
                    <td className={cn(
                      "border-r border-border px-3 py-1 whitespace-pre",
                      row.type === "match" && "text-text-primary",
                      row.type === "diff" && "text-accent-destructive line-through",
                      row.type === "missing" && "text-text-muted"
                    )}>
                      {row.userLine || "\u00A0"}
                    </td>
                    <td className={cn(
                      "px-3 py-1 whitespace-pre",
                      row.type === "match" && "text-text-primary",
                      row.type === "diff" && "text-accent-secondary",
                      row.type === "missing" && "text-accent-secondary"
                    )}>
                      {row.correctLine || "\u00A0"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Explanation on success */}
          {result!.correct && (
            <div className="rounded-lg border border-accent-secondary/20 bg-accent-secondary/5 p-3">
              <p className="text-xs font-semibold text-accent-secondary mb-1">Explanation:</p>
              <p className="text-sm text-text-primary">{section.explanation}</p>
            </div>
          )}

          {/* Retry button */}
          {!result!.correct && (
            <button
              onClick={() => { setSubmitted(false); setResult(null); setInputValue(""); }}
              className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-bg-secondary px-4 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-bg-tertiary"
            >
              Try Again
            </button>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Main Renderer ───────────────────────────────────────────
export default function SectionRenderer({
  section,
  index,
  exerciseState,
  onExerciseAnswer,
}: SectionRendererProps) {
  switch (section.type) {
    // ── Text ──────────────────────────────────────────────────
    case "text":
      return (
        <div key={index} className="leading-relaxed text-text-secondary space-y-3">
          {section.content.split("\n\n").filter(Boolean).map((block, bi) => {
            if (block.startsWith("## ")) {
              return (
                <h3 key={bi} className="text-lg font-semibold text-text-primary pt-2">
                  {block.replace("## ", "")}
                </h3>
              );
            }
            return <p key={bi}>{formatText(block)}</p>;
          })}
        </div>
      );

    // ── Code block ────────────────────────────────────────────
    case "code":
      return (
        <div key={index} className="group relative">
          {section.caption && (
            <p className="mb-1.5 text-xs font-medium text-text-muted">{section.caption}</p>
          )}
          <div className="overflow-hidden rounded-xl border border-border bg-bg-tertiary/80">
            <div className="flex items-center justify-between border-b border-border/50 px-4 py-1.5">
              <span className="text-xs font-medium text-text-muted">{section.language}</span>
              <div className="flex items-center gap-2">
                <CopyButton text={section.content} />
                <Terminal className="size-3 text-text-muted" />
              </div>
            </div>
            <ScrollFade>
              <pre className="p-4 text-sm leading-relaxed">
                <code className="font-mono text-text-primary">{section.content}</code>
              </pre>
            </ScrollFade>
          </div>
        </div>
      );

    // ── Callout ───────────────────────────────────────────────
    case "callout": {
      const CalloutIcon = calloutStyles[section.style].icon;
      return (
        <div
          key={index}
          className={cn(
            "flex gap-3 rounded-xl border p-4",
            calloutStyles[section.style].container
          )}
        >
          <CalloutIcon className={cn("mt-0.5 size-5 shrink-0 max-sm:size-6", calloutStyles[section.style].iconColor)} />
          <div className="text-sm leading-relaxed text-text-secondary">
            {formatText(section.content)}
          </div>
        </div>
      );
    }

    // ── List ──────────────────────────────────────────────────
    case "list":
      if (section.ordered) {
        return (
          <ol key={index} className="space-y-2 text-text-secondary">
            {section.items.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent-primary-light text-xs font-medium text-accent-primary">
                  {i + 1}
                </span>
                {formatText(item)}
              </li>
            ))}
          </ol>
        );
      }
      return (
        <ul key={index} className="space-y-2 text-text-secondary">
          {section.items.map((item, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-0.5 block size-1.5 shrink-0 rounded-full bg-accent-primary/40" />
              {formatText(item)}
            </li>
          ))}
        </ul>
      );

    // ── Image ─────────────────────────────────────────────────
    case "image":
      return (
        <figure key={index} className="my-6">
          <div
            className="overflow-hidden rounded-xl border border-border"
            dangerouslySetInnerHTML={{ __html: section.svg }}
          />
          {section.caption && (
            <figcaption className="mt-2 text-center text-xs text-text-muted">
              {section.caption}
            </figcaption>
          )}
        </figure>
      );

    // ── Formula ───────────────────────────────────────────────
    case "formula":
      return (
        <div key={index} className="rounded-xl border border-border bg-bg-tertiary/50 p-4 text-center">
          <code className="text-lg font-mono font-semibold text-text-primary">{section.content}</code>
          {section.description && (
            <p className="mt-1 text-xs text-text-muted">{section.description}</p>
          )}
        </div>
      );

    // ── Interactive ───────────────────────────────────────────
    case "interactive":
      return (
        <div key={index} className="rounded-xl border border-accent-info/20 bg-accent-info/5 p-5 text-center text-sm text-text-muted">
          Interactive component: {section.component}
        </div>
      );

    // ── Comparison Table ──────────────────────────────────────
    case "comparison":
      return (
        <div key={index} className="my-6">
          <h4 className="mb-2 text-sm font-semibold text-text-primary">{section.title}</h4>
          <ScrollFade>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  {section.headers.map((h, i) => (
                    <th key={i} className="border border-border bg-bg-tertiary px-3 py-2 text-left font-medium text-text-primary first:rounded-tl-lg last:rounded-tr-lg">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.rows.map((row, ri) => (
                  <tr key={ri}>
                    {row.map((cell, ci) => (
                      <td key={ci} className={cn(
                        "border border-border px-3 py-2 text-text-secondary",
                        ci === 0 && "font-medium text-text-primary"
                      )}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollFade>
        </div>
      );

    // ── Exercise ──────────────────────────────────────────────
    case "exercise":
      if (!exerciseState || !onExerciseAnswer) {
        // Render as static fallback
        return (
          <div key={index} className="rounded-xl border-2 border-accent-warning/30 bg-accent-warning/5 p-5 max-sm:p-4">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-md bg-accent-warning/15 px-2 py-0.5 text-xs font-semibold text-accent-warning">
                <Terminal className="size-3" />
                Exercise
              </span>
            </div>
            <h4 className="mb-1 font-semibold text-text-primary">{section.title}</h4>
            <p className="text-sm text-text-muted">Sign in to track your progress</p>
          </div>
        );
      }

      // Find which exercise number this is among all exercise sections
      const exerciseIdx = exerciseState.exerciseOrder.indexOf(section.id);
      const exerciseNumber = exerciseIdx + 1;
      const isCompleted = exerciseState.completedIds.includes(section.id);
      const isCurrent = !isCompleted && exerciseIdx === exerciseState.currentExerciseIndex;

      return (
        <InteractiveExercise
          key={index}
          section={section}
          exerciseNumber={exerciseNumber}
          totalExercises={exerciseState.totalExercises}
          isCurrent={isCurrent}
          isCompleted={isCompleted}
          completedIds={exerciseState.completedIds}
          onAnswer={onExerciseAnswer}
        />
      );

    // ── Fix-Code ─────────────────────────────────────────────
    case "fix-code": {
      if (!exerciseState || !onExerciseAnswer) {
        return (
          <div key={index} className="rounded-xl border-2 border-accent-destructive/30 bg-accent-destructive/5 p-5 max-sm:p-4">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-md bg-accent-destructive/15 px-2 py-0.5 text-xs font-semibold text-accent-destructive">
                <XCircle className="size-3" />
                Fix the Code
              </span>
            </div>
            <h4 className="mb-1 font-semibold text-text-primary">{section.title}</h4>
            <p className="text-sm text-text-muted">Sign in to track your progress</p>
          </div>
        );
      }

      const fixIdx = exerciseState.exerciseOrder.indexOf(section.id);
      const fixNumber = fixIdx + 1;
      const isCompleted = exerciseState.completedIds.includes(section.id);
      const isCurrent = !isCompleted && fixIdx === exerciseState.currentExerciseIndex;

      return (
        <FixCodeExercise
          key={index}
          section={section}
          exerciseNumber={fixNumber}
          totalExercises={exerciseState.totalExercises}
          isCurrent={isCurrent}
          isCompleted={isCompleted}
          onAnswer={onExerciseAnswer}
        />
      );
    }

    default:
      return null;
  }
}
