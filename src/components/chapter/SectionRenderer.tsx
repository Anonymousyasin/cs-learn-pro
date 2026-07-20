"use client";

import { type Section } from "@/lib/courses/types";
import {
  Lightbulb,
  Info,
  AlertTriangle,
  BookMarked,
  ListChecks,
  Terminal,
  Quote,
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

export default function SectionRenderer({ section, index }: { section: Section; index: number }) {
  switch (section.type) {
    case "text":
      return (
        <div key={index} className="leading-relaxed text-text-secondary space-y-3">
          {section.content.split("\n\n").filter(Boolean).map((block, bi) => {
            if (block.startsWith("## ")) {
              return <h3 key={bi} className="text-lg font-semibold text-text-primary pt-2">{block.replace("## ", "")}</h3>;
            }
            if (block.startsWith("**") || block.includes("*")) {
              return <p key={bi}>{formatText(block)}</p>;
            }
            return <p key={bi}>{formatText(block)}</p>;
          })}
        </div>
      );

    case "code":
      return (
        <div key={index} className="group relative">
          {section.caption && (
            <p className="mb-1.5 text-xs font-medium text-text-muted">{section.caption}</p>
          )}
          <div className="overflow-hidden rounded-xl border border-border bg-bg-tertiary/80">
            <div className="flex items-center justify-between border-b border-border/50 px-4 py-1.5">
              <span className="text-xs font-medium text-text-muted">{section.language}</span>
              <Terminal className="size-3 text-text-muted" />
            </div>
            <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
              <code className="font-mono text-text-primary">{section.content}</code>
            </pre>
          </div>
        </div>
      );

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
          <CalloutIcon className={cn("mt-0.5 size-5 shrink-0", calloutStyles[section.style].iconColor)} />
          <div className="text-sm leading-relaxed text-text-secondary">
            {formatText(section.content)}
          </div>
        </div>
      );
    }

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

    case "image":
      return (
        <figure key={index} className="space-y-2">
          <div
            className="overflow-hidden rounded-xl border border-border bg-bg-tertiary p-6"
            dangerouslySetInnerHTML={{ __html: section.svg }}
          />
          {section.caption && (
            <figcaption className="text-center text-xs text-text-muted">
              {section.caption}
            </figcaption>
          )}
        </figure>
      );

    case "formula":
      return (
        <div key={index} className="flex flex-col items-center gap-2 rounded-xl border border-border bg-bg-tertiary/50 p-6">
          <span className="text-xl font-mono font-bold text-accent-primary">{section.content}</span>
          {section.description && (
            <span className="text-xs text-text-muted">{section.description}</span>
          )}
        </div>
      );

    case "comparison":
      return (
        <div key={index} className="overflow-hidden rounded-xl border border-border">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-bg-tertiary">
                {section.headers.map((h, i) => (
                  <th key={i} className="px-4 py-2.5 font-medium text-text-primary">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, i) => (
                <tr key={i} className="border-b border-border/50 last:border-0">
                  {row.map((cell, j) => (
                    <td key={j} className={cn("px-4 py-2 text-text-secondary", j === 0 && "font-medium text-text-primary")}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "exercise":
      return (
        <div key={index} className="rounded-xl border-2 border-accent-warning/30 bg-accent-warning/5 p-5">
          <h4 className="mb-1 font-semibold text-text-primary">{section.title}</h4>
          <p className="mb-3 text-sm text-text-secondary">{section.description}</p>
          <ol className="space-y-1.5">
            {section.instructions.map((inst, i) => (
              <li key={i} className="flex gap-2 text-sm text-text-secondary">
                <span className="size-5 shrink-0 text-center text-xs font-bold text-accent-warning">{i + 1}</span>
                {inst}
              </li>
            ))}
          </ol>
          {section.expectedOutput && (
            <div className="mt-3 rounded-lg border border-border bg-bg-tertiary p-3">
              <p className="mb-1 text-xs font-medium text-text-muted">Expected Output</p>
              <pre className="text-sm text-text-secondary">{section.expectedOutput}</pre>
            </div>
          )}
          {section.hint && (
            <details className="mt-3">
              <summary className="cursor-pointer text-xs font-medium text-accent-primary">Hint</summary>
              <p className="mt-1 text-sm text-text-secondary">{section.hint}</p>
            </details>
          )}
        </div>
      );

    default:
      return null;
  }
}
