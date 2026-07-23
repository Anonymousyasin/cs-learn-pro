"use client";

import type { UserProgress } from "./progress";
import type { Course } from "./courses/types";

export interface CGPAResult {
  cgpa: number;          // 0–100 scale
  totalChapters: number;
  completedChapters: number;
  totalXP: number;
  passedExams: number;
  totalExams: number;
}

export function calculateCGPA(
  progress: UserProgress,
  course: Course
): CGPAResult {
  const allChapterIds = course.chapters.map((c) => c.id);
  const completedIds = allChapterIds.filter((id) =>
    progress.completedChapters.includes(id)
  );

  // Sum scores from completed chapters
  let totalScore = 0;
  let scoredChapters = 0;

  for (const chapterId of completedIds) {
    const result = progress.lastExamResults[chapterId];
    if (result) {
      // score is stored as 0–1, convert to 0–100
      totalScore += result.score * 100;
      scoredChapters++;
    }
  }

  const cgpa = scoredChapters > 0
    ? Math.round((totalScore / scoredChapters) * 100) / 100
    : 0;

  const passedExams = Object.values(progress.lastExamResults).filter(
    (r) => r.passed
  ).length;

  return {
    cgpa,
    totalChapters: allChapterIds.length,
    completedChapters: completedIds.length,
    totalXP: progress.xp,
    passedExams,
    totalExams: Object.keys(progress.lastExamResults).length,
  };
}

export function isCourseComplete(
  progress: UserProgress,
  course: Course
): boolean {
  return course.chapters.every((c) => progress.completedChapters.includes(c.id));
}
