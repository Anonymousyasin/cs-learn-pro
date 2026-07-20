"use client";

import Link from "next/link";
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
        const StatusIcon = status === "completed" ? CheckCircle2
          : status === "in-progress" ? PlayCircle
          : Lock;
        const statusColor = status === "completed" ? "text-accent-secondary"
          : status === "in-progress" ? "text-accent-primary"
          : "text-text-muted";
        const href = status === "locked" ? "#" : `/courses/${courseId}/${chapter.id}`;

        return (
          <Link
            key={chapter.id}
            href={href}
            className={status === "locked" ? "pointer-events-none" : ""}
          >
            <div
              className={cn(
                "group flex items-center justify-between rounded-lg px-3 py-3 transition-colors",
                status === "locked" ? "opacity-50" : "hover:bg-bg-hover"
              )}
            >
              <div className="flex items-center gap-3 min-w-0">
                <StatusIcon className={`size-4 shrink-0 ${statusColor}`} />
                <div className="min-w-0">
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
                </div>
              </div>
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
    <div className="flex items-center gap-3 rounded-lg px-3 py-3 animate-pulse">
      <div className="size-4 rounded-full bg-bg-tertiary" />
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
