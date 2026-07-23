"use client";

import { useMemo, useState, useCallback } from "react";
import { useProgress, areAllExercisesDone } from "@/lib/progress";
import { useUser } from "@/lib/supabase-provider";
import type { Chapter, Section } from "@/lib/courses/types";
import SectionRenderer from "./SectionRenderer";
import LockGate from "./LockGate";
import {
  BookOpen, CheckCircle2, Zap, Sparkles, CheckCircle,
  ArrowLeft, ArrowRight, Lock, ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface ChapterClientProps {
  courseId: string;
  courseTitle: string;
  chapter: Chapter;
  chapterIndex: number;
  totalChapters: number;
  prevChapter: { id: string; title: string } | null;
  nextChapter: { id: string; title: string } | null;
}

export default function ChapterClient({
  courseId,
  courseTitle,
  chapter,
  chapterIndex,
  totalChapters,
  prevChapter,
  nextChapter,
}: ChapterClientProps) {
  const { user } = useUser();
  const userId = user?.id ?? null;
  const {
    progress,
    completeExercise: saveExercise,
    passExam,
  } = useProgress(userId);

  // ── Lock Check ──────────────────────────────────────────────
  const isLocked = useMemo(() => {
    if (chapterIndex === 0) return false;
    if (!chapter.prerequisites || chapter.prerequisites.length === 0) return false;
    return !chapter.prerequisites.every((prereq) =>
      progress.completedChapters.includes(prereq)
    );
  }, [chapterIndex, chapter.prerequisites, progress.completedChapters]);

  const firstUnmetPrerequisite = useMemo(() => {
    if (!isLocked || !chapter.prerequisites) return null;
    for (const prereq of chapter.prerequisites) {
      if (!progress.completedChapters.includes(prereq)) return prereq;
    }
    return null;
  }, [isLocked, chapter.prerequisites, progress.completedChapters]);

  // ── Exercise State ──────────────────────────────────────────
  const exerciseSections = useMemo(
    () => chapter.sections.filter((s): s is Section & { type: "exercise" } => s.type === "exercise"),
    [chapter.sections]
  );

  const completedIds = useMemo(
    () => progress.completedExercises[chapter.id] ?? [],
    [progress.completedExercises, chapter.id]
  );

  const currentExerciseIndex = useMemo(() => {
    for (let i = 0; i < exerciseSections.length; i++) {
      if (!completedIds.includes(exerciseSections[i].id)) return i;
    }
    return exerciseSections.length; // all done
  }, [exerciseSections, completedIds]);

  const allExercisesDone = useMemo(
    () => areAllExercisesDone(progress, chapter.id, exerciseSections.length),
    [progress, chapter.id, exerciseSections.length]
  );

  const exerciseOrder = useMemo(
    () => exerciseSections.map((s) => s.id),
    [exerciseSections]
  );

  const handleExerciseAnswer = useCallback(
    (exerciseId: string, answer: string, correct: boolean) => {
      saveExercise(chapter.id, exerciseId, correct, answer);
    },
    [saveExercise, chapter.id]
  );

  // ── Render ──────────────────────────────────────────────────
  if (isLocked) {
    const requiredChapterTitle = firstUnmetPrerequisite
      ? `Chapter ${chapter.prerequisites!.indexOf(firstUnmetPrerequisite) + 1}`
      : "the previous chapter";
    return (
      <LockGate
        courseId={courseId}
        chapterTitle={chapter.title}
        requiredChapterId={firstUnmetPrerequisite ?? ""}
        requiredChapterTitle={requiredChapterTitle}
      />
    );
  }

  return (
    <div className="mx-auto max-w-4xl p-4 pt-6 sm:p-6 lg:p-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-text-muted">
        <Link href={`/courses/${courseId}`} className="transition-colors hover:text-text-primary">
          {courseTitle}
        </Link>
        <ChevronRight className="size-3.5" />
        <span className="truncate text-text-primary">{chapter.title}</span>
      </nav>

      <div className="space-y-8">
        {/* Chapter Header */}
        <div className="space-y-3">
          <Badge variant="default" className="w-fit bg-accent-primary-light text-accent-primary">
            Chapter {chapter.order} of {totalChapters}
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight text-text-primary">
            {chapter.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-text-secondary">
            <span className="flex items-center gap-1.5">
              <Zap className="size-3.5" />
              {chapter.xpReward} XP
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="size-3.5" />
              {chapter.estimatedMinutes} min
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="size-3.5" />
              {chapter.sections.length} sections
            </span>
          </div>
        </div>

        {/* Chapter Content */}
        <div className="space-y-5">
          {chapter.sections.map((section, i) => (
            <SectionRenderer
              key={i}
              section={section}
              index={i}
              exerciseState={{
                completedIds,
                currentExerciseIndex,
                totalExercises: exerciseSections.length,
                exerciseOrder,
              }}
              onExerciseAnswer={handleExerciseAnswer}
            />
          ))}
        </div>

        {/* Exercise Progress Bar */}
        {exerciseSections.length > 0 && (
          <div className="rounded-xl border border-border bg-bg-card p-4">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-medium text-text-primary">
                {allExercisesDone ? (
                  <span className="flex items-center gap-1.5 text-accent-secondary">
                    <CheckCircle className="size-4" />
                    All exercises completed!
                  </span>
                ) : (
                  `Exercises: ${completedIds.length} / ${exerciseSections.length}`
                )}
              </span>
              <span className="text-xs text-text-muted">
                {Math.round((completedIds.length / exerciseSections.length) * 100)}%
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-bg-tertiary">
              <div
                className="h-full rounded-full bg-accent-secondary transition-all duration-500"
                style={{ width: `${(completedIds.length / exerciseSections.length) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Key Points Summary */}
        {chapter.keyPoints.length > 0 && (
          <div className="rounded-xl border border-accent-secondary/20 bg-accent-secondary/5 p-5">
            <div className="mb-3 flex items-center gap-2">
              <Sparkles className="size-4 text-accent-secondary" />
              <span className="text-sm font-semibold text-accent-secondary">Chapter Summary</span>
            </div>
            <ul className="space-y-2">
              {chapter.keyPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                  <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-accent-secondary" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        )}

        <Separator className="my-2" />

        {/* Exam CTA */}
        <div className="flex items-center justify-between rounded-xl border border-border bg-gradient-to-r from-bg-tertiary to-bg-card p-5">
          <div className="flex items-center gap-3">
            <div className={`flex size-10 items-center justify-center rounded-lg ${allExercisesDone ? "bg-accent-secondary/10" : "bg-accent-warning/10"}`}>
              {allExercisesDone ? (
                <CheckCircle className="size-5 text-accent-secondary" />
              ) : (
                <Lock className="size-5 text-accent-warning" />
              )}
            </div>
            <div>
              <p className="text-sm font-medium text-text-primary">
                {allExercisesDone
                  ? "Ready to test your knowledge?"
                  : `Complete all ${exerciseSections.length} exercises first`}
              </p>
              <p className="text-xs text-text-muted">
                {allExercisesDone
                  ? "Pass with 95% to unlock the next chapter"
                  : `Exercises done: ${completedIds.length} / ${exerciseSections.length}`}
              </p>
            </div>
          </div>
          {allExercisesDone ? (
            <Link href={`/courses/${courseId}/${chapter.id}/exam`}>
              <Button className="gap-2 bg-accent-primary text-white hover:bg-accent-primary-hover">
                Take Exam
                <ArrowLeft className="size-4 rotate-180" />
              </Button>
            </Link>
          ) : (
            <Button disabled className="gap-2 bg-text-muted/30 text-text-muted cursor-not-allowed">
              <Lock className="size-4" />
              Locked
            </Button>
          )}
        </div>

        {/* Prev / Next Navigation */}
        <div className="flex items-center justify-between gap-4">
          {prevChapter ? (
            <Link href={`/courses/${courseId}/${prevChapter.id}`} className="group flex-1">
              <div className="rounded-xl border border-border p-4 transition-colors hover:border-border-light hover:bg-bg-hover">
                <p className="text-xs text-text-muted">Previous</p>
                <p className="mt-0.5 flex items-center gap-1 text-sm font-medium text-text-primary transition-colors group-hover:text-accent-primary">
                  <ArrowLeft className="size-3.5" />
                  {prevChapter.title}
                </p>
              </div>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
          {nextChapter ? (
            <Link href={`/courses/${courseId}/${nextChapter.id}`} className="group flex-1 text-right">
              <div className="rounded-xl border border-border p-4 transition-colors hover:border-border-light hover:bg-bg-hover">
                <p className="text-xs text-text-muted">Next</p>
                <p className="mt-0.5 flex items-center justify-end gap-1 text-sm font-medium text-text-primary transition-colors group-hover:text-accent-primary">
                  {nextChapter.title}
                  <ArrowRight className="size-3.5" />
                </p>
              </div>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </div>
    </div>
  );
}
