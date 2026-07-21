"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  CheckCircle2, Lock, PlayCircle, ChevronRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useProgress } from "@/lib/progress";
import { cn } from "@/lib/utils";
import type { Chapter } from "@/lib/courses/types";

export function CourseChapters({
  courseId,
  chapters,
  courseColor,
}: {
  courseId: string;
  chapters: Chapter[];
  courseColor: string;
}) {
  const { progress, loaded } = useProgress();

  if (!loaded) {
    return <div className="space-y-1">
      {chapters.map((ch, i) => (
        <SkeletonChapter key={ch.id} />
      ))}
    </div>;
  }

  return (
    <div className="space-y-1">
      {chapters.map((chapter, i) => {
        const prevChapterId = i > 0 ? chapters[i - 1].id : undefined;
        const completed = progress.completedChapters.includes(chapter.id);
        const status = getStatus(chapter.id, i, prevChapterId, progress.completedChapters);
        const href = status === "locked" ? "#" : `/courses/${courseId}/${chapter.id}`;

        return (
          <Link
            key={chapter.id}
            href={href}
            className={cn(
              "block",
              status === "locked" && "pointer-events-none"
            )}
            aria-disabled={status === "locked"}
          >
            <div
              className={cn(
                "group relative flex items-center gap-3 rounded-lg px-3 py-3.5 sm:py-3 transition-colors",
                "min-h-[52px] sm:min-h-0",
                status === "in-progress" && "border-l-2 border-accent-primary bg-accent-primary/5",
                status === "completed" && "border-l-2 border-accent-secondary/40",
                status === "locked" ? "opacity-50" : "hover:bg-bg-hover cursor-pointer"
              )}
            >
              {/* Left border accent for in-progress */}
              {status === "in-progress" && (
                <div className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full bg-accent-primary" />
              )}

              {/* Status icon with animation */}
              <div className="relative size-5 shrink-0">
                {status === "completed" ? (
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
                  >
                    <CheckCircle2 className="size-5 text-accent-secondary" />
                  </motion.div>
                ) : status === "in-progress" ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
                  >
                    <PlayCircle className="size-5 text-accent-primary" />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
                  >
                    <Lock className="size-5 text-text-muted" />
                  </motion.div>
                )}
              </div>

              {/* Chapter number badge */}
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div
                  className={cn(
                    "flex size-7 shrink-0 items-center justify-center rounded-md text-xs font-bold transition-colors",
                    status === "completed"
                      ? "bg-accent-secondary/15 text-accent-secondary"
                      : status === "in-progress"
                        ? "bg-accent-primary/15 text-accent-primary"
                        : "bg-bg-tertiary text-text-muted"
                  )}
                >
                  {i + 1}
                </div>

                <div className="min-w-0 flex-1">
                  <p
                    className={cn(
                      "text-sm font-medium truncate",
                      status === "locked" ? "text-text-muted" : "text-text-primary"
                    )}
                  >
                    {chapter.title}
                  </p>
                  <p className="text-xs text-text-muted">
                    {chapter.estimatedMinutes} min &middot; {chapter.xpReward} XP
                    {completed && " \u00b7 Completed"}
                  </p>
                  {/* Section progress dots */}
                  <div className="flex items-center gap-0.5 mt-1.5">
                    {chapter.sections.map((_, si) => (
                      <div
                        key={si}
                        className={cn(
                          "h-1 rounded-full transition-colors duration-300",
                          si < Math.ceil(chapter.sections.length * (completed ? 1 : 0.3))
                            ? "bg-accent-primary"
                            : "bg-bg-tertiary"
                        )}
                        style={{ width: `calc(${100 / chapter.sections.length}% - 1px)` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right side: badges + chevron */}
              <div className="flex items-center gap-2 shrink-0 ml-3">
                {status === "completed" && (
                  <Badge variant="secondary">Done</Badge>
                )}
                {status === "in-progress" && (
                  <Badge variant="default" className="bg-accent-primary-light text-accent-primary">
                    {completed ? "Review" : "Start"}
                  </Badge>
                )}
                {status !== "locked" && (
                  <ChevronRight className="size-4 text-text-muted opacity-0 transition-opacity group-hover:opacity-100" />
                )}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

function SkeletonChapter() {
  return (
    <div className="flex items-center gap-3 rounded-lg px-3 py-3.5 sm:py-3 animate-pulse">
      <div className="size-7 rounded-md bg-bg-tertiary" />
      <div className="flex-1 space-y-1.5">
        <div className="h-4 w-3/4 rounded bg-bg-tertiary" />
        <div className="h-3 w-1/4 rounded bg-bg-tertiary" />
      </div>
    </div>
  );
}

function getStatus(
  chapterId: string,
  index: number,
  prevChapterId: string | undefined,
  completedChapters: string[]
): "locked" | "in-progress" | "completed" {
  if (completedChapters.includes(chapterId)) return "completed";
  if (index === 0) return "in-progress";
  if (prevChapterId && completedChapters.includes(prevChapterId)) return "in-progress";
  return "locked";
}
