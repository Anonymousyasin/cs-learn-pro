"use client";

// ─── Types ───────────────────────────────────────────────────────
export interface UserProgress {
  completedChapters: string[];   // ["html-ch1", "html-ch2", ...]
  xp: number;
  lastActive: number;            // timestamp
  currentStreak: number;         // consecutive days
  longestStreak: number;
  streakStart: number;           // timestamp of when current streak started
  totalExamsPassed: number;
  totalLessonsCompleted: number;
  lastExamResults: Record<string, { passed: boolean; score: number; date: number }>;
  completedExercises: Record<string, string[]>;  // chapterId → exercise IDs completed
  exerciseResults: Record<string, { exerciseId: string; correct: boolean; answer: string }[]>;
}

export type ChapterStatus = "locked" | "in-progress" | "completed";

// ─── Storage ────────────────────────────────────────────────────
const STORAGE_KEY = "cs-user-progress";

const defaultProgress: UserProgress = {
  completedChapters: [],
  xp: 0,
  lastActive: Date.now(),
  currentStreak: 1,
  longestStreak: 1,
  streakStart: Date.now(),
  totalExamsPassed: 0,
  totalLessonsCompleted: 0,
  lastExamResults: {},
  completedExercises: {},
  exerciseResults: {},
};

export function loadProgress(): UserProgress {
  if (typeof window === "undefined") return { ...defaultProgress };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as UserProgress;
      // Ensure all fields exist (migration safety)
      return {
        ...defaultProgress,
        ...parsed,
      };
    }
  } catch (e) {
    console.warn("Failed to load progress:", e);
  }
  return { ...defaultProgress };
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.warn("Failed to save progress:", e);
  }
}

// ─── Chapter Status Logic ───────────────────────────────────────
export function getChapterStatus(
  chapterId: string,
  chapterIndex: number,
  completedChapters: string[]
): ChapterStatus {
  if (completedChapters.includes(chapterId)) return "completed";
  // First chapter or previous chapter completed = unlocked
  if (chapterIndex === 0) return "in-progress";
  // Need previous chapter's ID — we determine this by index
  return "in-progress"; // caller handles this with full context
}

export function getChapterStatusWithPrev(
  chapterId: string,
  chapterIndex: number,
  completedChapters: string[],
  prevChapterId?: string
): ChapterStatus {
  if (completedChapters.includes(chapterId)) return "completed";
  if (chapterIndex === 0) return "in-progress";
  if (prevChapterId && completedChapters.includes(prevChapterId)) return "in-progress";
  return "locked";
}

// ─── Streak Calculation ─────────────────────────────────────────
export function updateStreak(progress: UserProgress): UserProgress {
  const now = Date.now();
  const today = new Date().toDateString();
  const lastActiveDate = new Date(progress.lastActive).toDateString();

  if (today === lastActiveDate) {
    // Already active today — just return
    return progress;
  }

  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (lastActiveDate === yesterday) {
    // Consecutive day — increment streak
    const newStreak = progress.currentStreak + 1;
    return {
      ...progress,
      currentStreak: newStreak,
      longestStreak: Math.max(newStreak, progress.longestStreak),
      lastActive: now,
    };
  }

  // Streak broken — reset
  return {
    ...progress,
    currentStreak: 1,
    lastActive: now,
    streakStart: now,
  };
}

// ─── Actions ────────────────────────────────────────────────────
export function completeChapter(
  progress: UserProgress,
  chapterId: string,
  xpReward: number
): UserProgress {
  if (progress.completedChapters.includes(chapterId)) return progress;
  const updated = updateStreak(progress);
  return {
    ...updated,
    completedChapters: [...updated.completedChapters, chapterId],
    xp: updated.xp + xpReward,
    totalLessonsCompleted: updated.totalLessonsCompleted + 1,
  };
}

export function passExam(
  progress: UserProgress,
  chapterId: string,
  score: number,
  xpReward: number
): UserProgress {
  const updated = updateStreak(progress);
  return {
    ...updated,
    xp: updated.xp + xpReward,
    totalExamsPassed: updated.totalExamsPassed + 1,
    lastExamResults: {
      ...updated.lastExamResults,
      [chapterId]: { passed: score >= 0.95, score, date: Date.now() },
    },
  };
}

// ─── XP Calculation ──────────────────────────────────────────────
export function getLevel(xp: number): number {
  return Math.floor(xp / 200) + 1;
}

export function getXPForLevel(level: number): number {
  return (level - 1) * 200;
}

export function getXPToNextLevel(xp: number): number {
  const currentLevel = getLevel(xp);
  const currentLevelXP = getXPForLevel(currentLevel);
  const nextLevelXP = getXPForLevel(currentLevel + 1);
  return nextLevelXP - xp;
}

export function getLevelProgress(xp: number): number {
  const currentLevel = getLevel(xp);
  const currentLevelXP = getXPForLevel(currentLevel);
  const nextLevelXP = getXPForLevel(currentLevel + 1);
  return (xp - currentLevelXP) / (nextLevelXP - currentLevelXP);
}

// ─── Exercise Tracking ──────────────────────────────────────────
export function completeExercise(
  progress: UserProgress,
  chapterId: string,
  exerciseId: string,
  correct: boolean,
  answer: string
): UserProgress {
  const chapterExercises = progress.completedExercises[chapterId] ?? [];
  if (chapterExercises.includes(exerciseId)) return progress; // already recorded

  return {
    ...progress,
    completedExercises: {
      ...progress.completedExercises,
      [chapterId]: [...chapterExercises, exerciseId],
    },
    exerciseResults: {
      ...progress.exerciseResults,
      [chapterId]: [
        ...(progress.exerciseResults[chapterId] ?? []),
        { exerciseId, correct, answer },
      ],
    },
  };
}

export function getExercisesForChapter(
  progress: UserProgress,
  chapterId: string
): string[] {
  return progress.completedExercises[chapterId] ?? [];
}

export function areAllExercisesDone(
  progress: UserProgress,
  chapterId: string,
  totalExercises: number
): boolean {
  return (progress.completedExercises[chapterId] ?? []).length >= totalExercises;
}

// ─── React Hook ──────────────────────────────────────────────────
import { useState, useCallback, useEffect } from "react";
import {
  safeLoadProgress,
  safeSaveProgress,
  safeCompleteChapter,
} from "./supabase-storage";

export function useProgress(userId?: string | null) {
  const [progress, setProgress] = useState<UserProgress>(() => loadProgress());
  const [loaded, setLoaded] = useState(false);
  const [syncing, setSyncing] = useState(false);

  // Load from Supabase on mount (if userId available), fall back to localStorage
  useEffect(() => {
    if (userId) {
      setSyncing(true);
      safeLoadProgress(userId).then((p) => {
        setProgress(p);
        setLoaded(true);
        setSyncing(false);
      });
    } else {
      setLoaded(true);
    }
  }, [userId]);

  const save = useCallback(
    (p: UserProgress) => {
      setProgress(p);
      saveProgress(p);
      if (userId) safeSaveProgress(userId, p);
    },
    [userId]
  );

  const completeChapterAction = useCallback(
    (chapterId: string, xpReward: number) => {
      setProgress((prev) => {
        const updated = completeChapter(prev, chapterId, xpReward);
        saveProgress(updated);
        if (userId) {
          safeCompleteChapter(userId, chapterId, xpReward);
          safeSaveProgress(userId, updated);
        }
        return updated;
      });
    },
    [userId]
  );

  const passExamAction = useCallback(
    (chapterId: string, score: number, xpReward: number) => {
      setProgress((prev) => {
        const updated = passExam(prev, chapterId, score, xpReward);
        saveProgress(updated);
        if (userId) safeSaveProgress(userId, updated);
        return updated;
      });
    },
    [userId]
  );

  const touch = useCallback(() => {
    setProgress((prev) => {
      const updated = updateStreak(prev);
      saveProgress(updated);
      if (userId) safeSaveProgress(userId, updated);
      return updated;
    });
  }, [userId]);

  const completeExerciseAction = useCallback(
    (chapterId: string, exerciseId: string, correct: boolean, answer: string) => {
      setProgress((prev) => {
        const updated = completeExercise(prev, chapterId, exerciseId, correct, answer);
        saveProgress(updated);
        if (userId) safeSaveProgress(userId, updated);
        return updated;
      });
    },
    [userId]
  );

  const areExercisesDone = useCallback(
    (chapterId: string, totalExercises: number) =>
      areAllExercisesDone(progress, chapterId, totalExercises),
    [progress]
  );

  return {
    progress,
    loaded,
    syncing,
    completeChapter: completeChapterAction,
    passExam: passExamAction,
    completeExercise: completeExerciseAction,
    areExercisesDone,
    touch,
    getLevel: () => getLevel(progress.xp),
    getLevelProgress: () => getLevelProgress(progress.xp),
    getXPToNextLevel: () => getXPToNextLevel(progress.xp),
    getChapterStatus: (chapterId: string, chapterIndex: number, prevChapterId?: string) =>
      getChapterStatusWithPrev(chapterId, chapterIndex, progress.completedChapters, prevChapterId),
  };
}
