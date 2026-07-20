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

// ─── React Hook ──────────────────────────────────────────────────
import { useState, useCallback, useEffect } from "react";

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(() => loadProgress());
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const p = loadProgress();
    setProgress(p);
    setLoaded(true);
  }, []);

  const save = useCallback((p: UserProgress) => {
    setProgress(p);
    saveProgress(p);
  }, []);

  const completeChapterAction = useCallback((chapterId: string, xpReward: number) => {
    setProgress((prev) => {
      const updated = completeChapter(prev, chapterId, xpReward);
      saveProgress(updated);
      return updated;
    });
  }, []);

  const passExamAction = useCallback((chapterId: string, score: number, xpReward: number) => {
    setProgress((prev) => {
      const updated = passExam(prev, chapterId, score, xpReward);
      saveProgress(updated);
      return updated;
    });
  }, []);

  const touch = useCallback(() => {
    setProgress((prev) => {
      const updated = updateStreak(prev);
      saveProgress(updated);
      return updated;
    });
  }, []);

  return {
    progress,
    loaded,
    completeChapter: completeChapterAction,
    passExam: passExamAction,
    touch,
    getLevel: () => getLevel(progress.xp),
    getLevelProgress: () => getLevelProgress(progress.xp),
    getXPToNextLevel: () => getXPToNextLevel(progress.xp),
    getChapterStatus: (chapterId: string, chapterIndex: number, prevChapterId?: string) =>
      getChapterStatusWithPrev(chapterId, chapterIndex, progress.completedChapters, prevChapterId),
  };
}
