"use client";

import { getSupabaseClient } from "./supabase";
import type { UserProgress } from "./progress";

// ─── Profile ↔ UserProgress ───────────────────────────────────

function profileToProgress(profile: {
  xp: number;
  current_streak: number;
  longest_streak: number;
  last_active: string;
  streak_start: string;
  total_exams_passed: number;
  total_lessons_completed: number;
  completedChapters?: string[];
  lastExamResults?: Record<string, { passed: boolean; score: number; date: number }>;
}): UserProgress {
  return {
    completedChapters: profile.completedChapters ?? [],
    xp: profile.xp,
    lastActive: new Date(profile.last_active).getTime(),
    currentStreak: profile.current_streak,
    longestStreak: profile.longest_streak,
    streakStart: new Date(profile.streak_start).getTime(),
    totalExamsPassed: profile.total_exams_passed,
    totalLessonsCompleted: profile.total_lessons_completed,
    lastExamResults: profile.lastExamResults ?? {},
  };
}

// ─── Load Progress from Supabase ───────────────────────────────

export async function loadProgressFromSupabase(
  userId: string
): Promise<UserProgress | null> {
  const supabase = getSupabaseClient();

  // Fetch profile
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  if (!profile) return null;

  // Fetch completed chapters
  const { data: chapters } = await supabase
    .from("completed_chapters")
    .select("chapter_id")
    .eq("user_id", userId);

  // Fetch exam results
  const { data: exams } = await supabase
    .from("exam_results")
    .select("chapter_id, passed, score, completed_at")
    .eq("user_id", userId);

  const completedChapters = (chapters ?? []).map((c) => c.chapter_id);
  const lastExamResults: Record<string, { passed: boolean; score: number; date: number }> = {};
  for (const exam of exams ?? []) {
    lastExamResults[exam.chapter_id] = {
      passed: exam.passed,
      score: exam.score,
      date: new Date(exam.completed_at).getTime(),
    };
  }

  return profileToProgress({
    ...profile,
    completedChapters,
    lastExamResults,
  });
}

// ─── Save Progress to Supabase ─────────────────────────────────

export async function saveProgressToSupabase(
  userId: string,
  progress: UserProgress
): Promise<void> {
  const supabase = getSupabaseClient();

  // Update profile fields
  await supabase
    .from("profiles")
    .update({
      xp: progress.xp,
      current_streak: progress.currentStreak,
      longest_streak: progress.longestStreak,
      last_active: new Date(progress.lastActive).toISOString(),
      streak_start: new Date(progress.streakStart).toISOString(),
      total_exams_passed: progress.totalExamsPassed,
      total_lessons_completed: progress.totalLessonsCompleted,
    })
    .eq("id", userId);
}

// ─── Complete a Chapter ────────────────────────────────────────

export async function completeChapterInSupabase(
  userId: string,
  chapterId: string,
  xpReward: number
): Promise<void> {
  const supabase = getSupabaseClient();

  // Insert completed chapter (no-op if already exists due to unique constraint)
  await supabase.from("completed_chapters").upsert(
    {
      user_id: userId,
      chapter_id: chapterId,
      xp_earned: xpReward,
    },
    { onConflict: "user_id, chapter_id", ignoreDuplicates: true }
  );
}

// ─── Record Exam Result ────────────────────────────────────────

export async function recordExamInSupabase(
  userId: string,
  chapterId: string,
  passed: boolean,
  score: number,
  xpEarned: number
): Promise<void> {
  const supabase = getSupabaseClient();

  await supabase.from("exam_results").insert({
    user_id: userId,
    chapter_id: chapterId,
    passed,
    score,
    xp_earned: xpEarned,
  });
}

// ─── Review Cards ──────────────────────────────────────────────

export interface ReviewCardData {
  id: string;
  chapterId: string;
  question: string;
  answer: string;
  strength: "weak" | "medium" | "strong";
  interval: number;
  easeFactor: number;
  nextReview: number; // timestamp
}

function rowToCard(row: {
  id: string;
  chapter_id: string;
  question: string;
  answer: string;
  strength: string;
  interval: number;
  ease_factor: number;
  next_review: string;
}): ReviewCardData {
  return {
    id: row.id,
    chapterId: row.chapter_id,
    question: row.question,
    answer: row.answer,
    strength: row.strength as "weak" | "medium" | "strong",
    interval: row.interval,
    easeFactor: row.ease_factor,
    nextReview: new Date(row.next_review).getTime(),
  };
}

export async function loadReviewCardsFromSupabase(
  userId: string
): Promise<ReviewCardData[]> {
  const supabase = getSupabaseClient();

  const { data } = await supabase
    .from("review_cards")
    .select("*")
    .eq("user_id", userId)
    .order("next_review", { ascending: true });

  return (data ?? []).map(rowToCard);
}

export async function saveReviewCardsToSupabase(
  userId: string,
  cards: ReviewCardData[]
): Promise<void> {
  const supabase = getSupabaseClient();

  // Delete all existing cards for this user and re-insert
  await supabase.from("review_cards").delete().eq("user_id", userId);

  if (cards.length === 0) return;

  await supabase.from("review_cards").insert(
    cards.map((c) => ({
      user_id: userId,
      chapter_id: c.chapterId,
      question: c.question,
      answer: c.answer,
      strength: c.strength,
      interval: c.interval,
      ease_factor: c.easeFactor,
      next_review: new Date(c.nextReview).toISOString(),
    }))
  );
}

// ─── LocalStorage Fallback ─────────────────────────────────────
// If Supabase is unavailable, fall back to localStorage transparently.

import { loadProgress, saveProgress } from "./progress";

export async function safeLoadProgress(
  userId: string | null
): Promise<UserProgress> {
  if (userId) {
    try {
      const result = await loadProgressFromSupabase(userId);
      if (result) return result;
    } catch (e) {
      console.warn("Supabase load failed, falling back to localStorage:", e);
    }
  }
  return loadProgress();
}

export async function safeSaveProgress(
  userId: string | null,
  progress: UserProgress
): Promise<void> {
  if (userId) {
    try {
      await saveProgressToSupabase(userId, progress);
    } catch (e) {
      console.warn("Supabase save failed, falling back to localStorage:", e);
    }
  }
  saveProgress(progress); // Always save locally as cache/fallback
}

export async function safeCompleteChapter(
  userId: string | null,
  chapterId: string,
  xpReward: number
): Promise<void> {
  if (userId) {
    try {
      await completeChapterInSupabase(userId, chapterId, xpReward);
    } catch (e) {
      console.warn("Supabase chapter save failed:", e);
    }
  }
}
