"use client";

import { useState, useRef, useEffect, type ReactNode } from "react";
import { type Section } from "@/lib/courses/types";
import {
  Lightbulb,
  Info,
  AlertTriangle,
  BookMarked,
  ListChecks,
  Terminal,
  Quote,
  Copy,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

function formatText(text: string) {
  // Support **bold** and `inline code`
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

// ─── Scroll Fade Wrapper ──────────────────────────────────────────────────────
// Detects horizontal overflow and shows a subtle fade shadow on the right edge
// so mobile users know there is more content to scroll to.
function ScrollFade({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasOverflow, setHasOverflow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const check = () => {
      setHasOverflow(el.scrollWidth > el.clientWidth + 2);
    };

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

// ─── Copy Button (visual feedback only) ────────────────────────────────────────
// Displays "Copy" → "Copied!" on click with a checkmark. Does not use clipboard
// APIs so it is safe for SSR / Next.js server context.
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium transition-all",
        "opacity-0 group-hover:opacity-100 focus-visible:opacity-100 sm:opacity-0 sm:group-hover:opacity-100",
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

// ─── Main Renderer ─────────────────────────────────────────────────────────────
export default function SectionRenderer({ section, index }: { section: Section; index: number }) {
  switch (section.type) {
    // ── Text ──────────────────────────────────────────────────────────────────
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
            if (block.startsWith("**") || block.includes("*")) {
              return <p key={bi}>{formatText(block)}</p>;
            }
            return <p key={bi}>{formatText(block)}</p>;
          })}
        </div>
      );

    // ── Code block ────────────────────────────────────────────────────────────
    case "code":
      return (
        <div key={index} className="group relative">
          {section.caption && (
            <p className="mb-1.5 text-xs font-medium text-text-muted">{section.caption}</p>
          )}
          <div className="overflow-hidden rounded-xl border border-border bg-bg-tertiary/80">
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-border/50 px-4 py-1.5">
              <span className="text-xs font-medium text-text-muted">{section.language}</span>
              <div className="flex items-center gap-2">
                <CopyButton text={section.content} />
                <Terminal className="size-3 text-text-muted" />
              </div>
            </div>
            {/* Code content with horizontal scroll + fade indicator */}
            <ScrollFade>
              <pre className="p-4 text-sm leading-relaxed">
                <code className="font-mono text-text-primary">{section.content}</code>
              </pre>
            </ScrollFade>
          </div>
        </div>
      );

    // ── Callout card ──────────────────────────────────────────────────────────
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
          <CalloutIcon
            className={cn(
              "mt-0.5 size-5 shrink-0 max-sm:size-6",
              calloutStyles[section.style].iconColor
            )}
          />
          <div className="text-sm leading-relaxed text-text-secondary">
            {formatText(section.content)}
          </div>
        </div>
      );
    }

    // ── List ──────────────────────────────────────────────────────────────────
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
              <ListChecks className="mt-0.5 size-4 shrink-0 text-accent-secondary" />
              {formatText(item)}
            </li>
          ))}
        </ul>
      );

    // ── Key Points ────────────────────────────────────────────────────────────
    case "key-points":
      return (
        <div key={index} className="rounded-xl border border-accent-primary/20 bg-accent-primary/5 p-4">
          <div className="mb-3 flex items-center gap-2">
            <Quote className="size-4 text-accent-primary" />
            <span className="text-sm font-semibold text-accent-primary">Key Points</span>
          </div>
          <ul className="space-y-2">
            {section.points.map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent-primary" />
                {formatText(point)}
              </li>
            ))}
          </ul>
        </div>
      );

    // ── Image (responsive) ────────────────────────────────────────────────────
    case "image":
      return (
        <figure key={index} className="space-y-2">
          <div className="flex items-center justify-center overflow-hidden rounded-xl border border-border bg-bg-tertiary p-6">
            <div
              className="max-w-full h-auto"
              dangerouslySetInnerHTML={{ __html: section.svg }}
            />
          </div>
          {section.caption && (
            <figcaption className="text-center text-xs text-text-muted">
              {section.caption}
            </figcaption>
          )}
        </figure>
      );

    // ── Formula ───────────────────────────────────────────────────────────────
    case "formula":
      return (
        <div key={index} className="flex flex-col items-center gap-2 rounded-xl border border-border bg-bg-tertiary/50 p-6">
          <span className="text-xl font-mono font-bold text-accent-primary">{section.content}</span>
          {section.description && (
            <span className="text-xs text-text-muted">{section.description}</span>
          )}
        </div>
      );

    // ── Comparison table ──────────────────────────────────────────────────────
    case "comparison":
      return (
        <div key={index} className="overflow-hidden rounded-xl border border-border">
          <ScrollFade>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-bg-tertiary">
                  {section.headers.map((h, i) => (
                    <th key={i} className="whitespace-nowrap px-4 py-2.5 font-medium text-text-primary">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.rows.map((row, i) => (
                  <tr key={i} className="border-b border-border/50 last:border-0">
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={cn(
                          "whitespace-nowrap px-4 py-2 text-text-secondary",
                          j === 0 && "font-medium text-text-primary"
                        )}
                      >
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

    // ── Exercise ──────────────────────────────────────────────────────────────
    case "exercise":
      return (
        <div
          key={index}
          className="rounded-xl border-2 border-accent-warning/30 bg-accent-warning/5 p-5 max-sm:p-4"
        >
          {/* Exercise badge */}
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-md bg-accent-warning/15 px-2 py-0.5 text-xs font-semibold text-accent-warning">
              <Terminal className="size-3" />
              Exercise
            </span>
          </div>

          <h4 className="mb-1 font-semibold text-text-primary">{section.title}</h4>
          <p className="mb-4 text-sm text-text-secondary">{section.description}</p>

          <ol className="space-y-2">
            {section.instructions.map((inst, i) => (
              <li key={i} className="flex gap-2 text-sm text-text-secondary">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent-warning/15 text-xs font-bold text-accent-warning">
                  {i + 1}
                </span>
                {inst}
              </li>
            ))}
          </ol>

          {section.expectedOutput && (
            <div className="mt-4 rounded-lg border border-border bg-bg-tertiary p-3">
              <p className="mb-1 text-xs font-medium text-text-muted">Expected Output</p>
              <pre className="text-sm text-text-secondary">{section.expectedOutput}</pre>
            </div>
          )}

          {section.hint && (
            <details className="mt-3">
              <summary className="cursor-pointer text-xs font-medium text-accent-primary">
                Hint
              </summary>
              <p className="mt-1 text-sm text-text-secondary">{section.hint}</p>
            </details>
          )}
        </div>
      );

    default:
      return null;
  }
}
