"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import {
  RotateCcw, Brain, Clock, Layers, RefreshCw, ChevronRight,
  CheckCircle2, XCircle, ThumbsUp, ThumbsDown, Meh,
  BookOpen, Sparkles, ArrowLeft,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { courseRegistry } from "@/lib/courses";
import type { ExamQuestion } from "@/lib/courses/types";

// ─── SM-2 Spaced Repetition ─────────────────────────────────────
interface CardData {
  id: string;
  topic: string;
  question: ExamQuestion;
  lastReviewed: number;    // timestamp
  nextReview: number;      // timestamp
  interval: number;        // days
  ease: number;            // 1.3 - 2.5
  repetitions: number;
  strength: "weak" | "medium" | "strong";
}

function sm2Next(card: CardData, quality: number): Partial<CardData> {
  // quality: 0 (hard) | 1 (good) | 2 (easy)
  const newEase = Math.max(1.3, card.ease + (quality === 0 ? -0.2 : quality === 1 ? 0 : 0.15));
  let newReps: number;
  let newInterval: number;

  if (quality === 0) {
    newReps = 0;
    newInterval = 1;
  } else if (card.repetitions === 0) {
    newReps = 1;
    newInterval = 1;
  } else if (card.repetitions === 1) {
    newReps = 2;
    newInterval = quality === 2 ? 4 : 3;
  } else {
    newReps = card.repetitions + 1;
    newInterval = Math.round(card.interval * (quality === 2 ? newEase * 1.2 : newEase));
  }

  const now = Date.now();
  const nextReview = now + newInterval * 86400000;
  const strength: "weak" | "medium" | "strong" =
    newInterval <= 2 ? "weak" : newInterval <= 7 ? "medium" : "strong";

  return {
    ease: newEase,
    repetitions: newReps,
    interval: newInterval,
    lastReviewed: now,
    nextReview,
    strength,
  };
}

// ─── Generate Review Cards from Course Data ──────────────────────
function generateCards(): CardData[] {
  const cards: CardData[] = [];
  const now = Date.now();

  for (const course of courseRegistry.courses) {
    for (const chapter of course.chapters) {
      const pool = chapter.examPool.slice(0, 3);
      for (const question of pool) {
        const daysAgo = Math.floor(Math.random() * 14);
        const lastReviewed = now - daysAgo * 86400000;
        const interval = Math.max(1, Math.floor(Math.random() * 8));
        const strength: "weak" | "medium" | "strong" =
          interval <= 2 ? "weak" : interval <= 5 ? "medium" : "strong";

        cards.push({
          id: `${question.id}-review`,
          topic: `${course.title}: ${chapter.title}`,
          question,
          lastReviewed,
          nextReview: lastReviewed + interval * 86400000,
          interval,
          ease: 1.8 + Math.random() * 0.5,
          repetitions: Math.floor(Math.random() * 4),
          strength,
        });
      }
    }
  }

  return cards;
}

// ─── Load / Save Cards ───────────────────────────────────────────
const STORAGE_KEY = "cs-review-cards";

function loadCards(): CardData[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as CardData[];
      // Ensure all cards have the strength field from migration
      return parsed.map((c) => ({
        ...c,
        strength: c.strength || (c.interval <= 2 ? "weak" : c.interval <= 5 ? "medium" : "strong"),
      }));
    }
  } catch {}
  const fresh = generateCards();
  saveCards(fresh);
  return fresh;
}

function saveCards(cards: CardData[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
}

// ─── Pages ───────────────────────────────────────────────────────
type ReviewPhase = "list" | "session" | "done";

export default function ReviewPage() {
  const [cards, setCards] = useState<CardData[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [phase, setPhase] = useState<ReviewPhase>("list");
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [sessionResults, setSessionResults] = useState<{ correct: number; total: number }>({ correct: 0, total: 0 });

  // Load cards on mount
  useEffect(() => {
    const c = loadCards();
    setCards(c);
    setLoaded(true);
  }, []);

  const dueCards = useMemo(() => {
    const now = Date.now();
    return cards
      .filter((c) => c.nextReview <= now)
      .sort((a, b) => {
        const strengthOrder = { weak: 0, medium: 1, strong: 2 };
        return strengthOrder[a.strength] - strengthOrder[b.strength];
      });
  }, [cards]);

  const dueToday = dueCards.length;
  const weakCount = cards.filter((c) => c.strength === "weak").length;
  const totalCards = cards.length;

  const startSession = useCallback(() => {
    setCurrentIdx(0);
    setShowAnswer(false);
    setSessionResults({ correct: 0, total: 0 });
    setPhase("session");
  }, []);

  const handleRating = useCallback(
    (quality: number) => {
      if (currentIdx >= dueCards.length) return;

      const card = dueCards[currentIdx];
      const updated = { ...card, ...sm2Next(card, quality) };
      const isCorrect = quality > 0;

      const newCards = cards.map((c) => (c.id === card.id ? updated : c));
      setCards(newCards);
      saveCards(newCards);
      setSessionResults((prev) => ({
        correct: prev.correct + (isCorrect ? 1 : 0),
        total: prev.total + 1,
      }));

      if (currentIdx + 1 >= dueCards.length) {
        setPhase("done");
      } else {
        setCurrentIdx((i) => i + 1);
        setShowAnswer(false);
      }
    },
    [currentIdx, dueCards, cards]
  );

  if (!loaded) {
    return (
      <div className="mx-auto max-w-4xl p-4 pt-6 sm:p-6 lg:p-8">
        <div className="flex items-center justify-center py-20">
          <RefreshCw className="size-6 animate-spin text-text-muted" />
        </div>
      </div>
    );
  }

  if (phase === "session" && dueCards.length > 0) {
    const card = dueCards[currentIdx];
    return (
      <SessionView
        card={card}
        currentIdx={currentIdx}
        total={dueCards.length}
        showAnswer={showAnswer}
        onReveal={() => setShowAnswer(true)}
        onRate={handleRating}
      />
    );
  }

  if (phase === "done") {
    return (
      <DoneView
        correct={sessionResults.correct}
        total={sessionResults.total}
        cards={cards}
        dueCards={dueCards}
        onBackToList={() => setPhase("list")}
        onNewSession={startSession}
      />
    );
  }

  return (
    <ListView
      dueToday={dueToday}
      weakCount={weakCount}
      totalCards={totalCards}
      cards={cards}
      onStart={startSession}
    />
  );
}

// ─── List View ──────────────────────────────────────────────────
function ListView({
  dueToday, weakCount, totalCards, cards, onStart,
}: {
  dueToday: number; weakCount: number; totalCards: number;
  cards: CardData[]; onStart: () => void;
}) {
  const now = Date.now();
  const sorted = [...cards].sort((a, b) => {
    const aDue = a.nextReview <= now ? 0 : 1;
    const bDue = b.nextReview <= now ? 0 : 1;
    if (aDue !== bDue) return aDue - bDue;
    const order = { weak: 0, medium: 1, strong: 2 };
    return order[a.strength] - order[b.strength];
  });

  const strengthConfig = {
    weak: { label: "Needs Review", color: "text-accent-danger", bg: "bg-accent-danger/10" },
    medium: { label: "Reviewing", color: "text-accent-warning", bg: "bg-accent-warning/10" },
    strong: { label: "Strong", color: "text-accent-secondary", bg: "bg-accent-secondary/10" },
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6 p-4 pt-6 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <RotateCcw className="size-5 text-accent-primary" />
            <h1 className="text-2xl font-bold tracking-tight text-text-primary">
              Spaced Repetition
            </h1>
          </div>
          <p className="mt-1 text-sm text-text-secondary">
            Reinforce knowledge with SM-2 optimized review intervals
          </p>
        </div>
        <Button
          className="gap-2"
          disabled={dueToday === 0}
          style={{ backgroundColor: dueToday > 0 ? "var(--color-accent-primary)" : undefined, color: dueToday > 0 ? "#fff" : undefined }}
          onClick={onStart}
        >
          <Brain className="size-4" />
          Start Review ({dueToday})
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card size="sm" className="border-border/50">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <Clock className="size-4 text-accent-warning" />
              <CardTitle className="text-sm font-medium text-text-secondary">Due Today</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-text-primary">{dueToday}</p>
          </CardContent>
        </Card>
        <Card size="sm" className="border-border/50">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <Brain className="size-4 text-accent-danger" />
              <CardTitle className="text-sm font-medium text-text-secondary">Weak</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-text-primary">{weakCount}</p>
          </CardContent>
        </Card>
        <Card size="sm" className="border-border/50">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <Layers className="size-4 text-accent-secondary" />
              <CardTitle className="text-sm font-medium text-text-secondary">Total</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-text-primary">{totalCards}</p>
          </CardContent>
        </Card>
      </div>

      {/* Card Queue */}
      <Card>
        <CardHeader>
          <CardTitle>Review Queue</CardTitle>
          <CardDescription>Sorted by due date and strength</CardDescription>
        </CardHeader>
        <CardContent>
          {sorted.length === 0 ? (
            <div className="flex flex-col items-center py-12 text-center">
              <Sparkles className="mb-3 size-8 text-text-muted" />
              <p className="text-sm font-medium text-text-primary">No review cards yet</p>
              <p className="text-xs text-text-muted mt-1">Cards will appear after you complete chapter exams</p>
            </div>
          ) : (
            <div className="space-y-2">
              {sorted.map((item, i) => {
                const config = strengthConfig[item.strength];
                const isDue = item.nextReview <= Date.now();
                const nextDate = new Date(item.nextReview);
                const nextLabel = isDue ? "Now" : nextDate.toLocaleDateString("en-US", { month: "short", day: "numeric" });

                return (
                  <div
                    key={item.id}
                    className={cn(
                      "group flex items-center justify-between rounded-lg border px-4 py-3 transition-colors hover:bg-bg-hover",
                      isDue ? "border-border" : "border-border/50",
                      isDue ? "bg-bg-tertiary/30" : "bg-transparent"
                    )}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={cn("flex size-8 items-center justify-center rounded-lg", config.bg)}>
                        <Brain className={cn("size-4", config.color)} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-text-primary truncate">{item.topic}</p>
                        <p className="text-xs text-text-muted">Reviewed {timeAgo(item.lastReviewed)}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0 ml-3">
                      <div className="text-right">
                        <Badge variant="outline" className={cn("border-0", config.bg, config.color)}>
                          {config.label}
                        </Badge>
                        <p className="mt-0.5 text-[10px] text-text-muted">Next: {nextLabel}</p>
                      </div>
                      <ChevronRight className="size-4 text-text-muted opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

// ─── Session View ────────────────────────────────────────────────
function SessionView({
  card, currentIdx, total, showAnswer,
  onReveal, onRate,
}: {
  card: CardData; currentIdx: number; total: number;
  showAnswer: boolean; onReveal: () => void; onRate: (quality: number) => void;
}) {
  const q = card.question;

  return (
    <div className="mx-auto max-w-3xl space-y-6 p-4 pt-6 sm:p-6 lg:p-8">
      {/* Progress & Topic */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Brain className="size-4 text-accent-primary" />
            <span className="font-medium text-text-primary">{card.topic}</span>
          </div>
          <span className="text-text-muted">{currentIdx + 1} of {total}</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-bg-tertiary">
          <div
            className="h-full rounded-full bg-accent-primary transition-all duration-300"
            style={{ width: `${((currentIdx) / total) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <Card className="border-border/50">
        <CardHeader>
          <Badge variant="outline" className="w-fit text-xs">
            Question {currentIdx + 1}
          </Badge>
          <CardTitle className="mt-3 text-lg leading-relaxed font-medium">
            {q.question}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Show question type specific content */}
          {q.type === "multiple-choice" && (
            <div className="space-y-2">
              {q.options.map((opt) => (
                <div
                  key={opt.id}
                  className={cn(
                    "rounded-lg border px-4 py-3 text-sm transition-all",
                    showAnswer && opt.id === q.correctAnswer
                      ? "border-accent-secondary bg-accent-secondary/10"
                      : "border-border bg-bg-tertiary/30"
                  )}
                >
                  <span className={cn(
                    "text-text-secondary",
                    showAnswer && opt.id === q.correctAnswer && "text-accent-secondary font-medium"
                  )}>
                    {opt.text}
                  </span>
                </div>
              ))}
            </div>
          )}

          {q.type === "true-false" && (
            <div className="flex gap-3">
              <div className={cn(
                "flex-1 rounded-lg border px-6 py-4 text-center text-sm",
                showAnswer && q.correctAnswer === true
                  ? "border-accent-secondary bg-accent-secondary/10"
                  : "border-border bg-bg-tertiary/30"
              )}>
                True
              </div>
              <div className={cn(
                "flex-1 rounded-lg border px-6 py-4 text-center text-sm",
                showAnswer && q.correctAnswer === false
                  ? "border-accent-secondary bg-accent-secondary/10"
                  : "border-border bg-bg-tertiary/30"
              )}>
                False
              </div>
            </div>
          )}

          {q.type === "fill-blank" && (
            <div className="rounded-lg border border-border bg-bg-tertiary/30 px-4 py-3 text-sm text-text-secondary">
              Answer: {showAnswer ? (
                <span className="text-accent-secondary font-medium">{q.correctAnswer}</span>
              ) : (
                <span className="italic">Reveal to see answer</span>
              )}
            </div>
          )}

          {/* Reveal / Rate buttons */}
          {!showAnswer ? (
            <Button className="w-full gap-2" onClick={onReveal}>
              <Sparkles className="size-4" />
              Show Answer
            </Button>
          ) : (
            <div className="space-y-3">
              <div className="rounded-xl border border-accent-primary/20 bg-accent-primary/5 p-4">
                <p className="text-xs font-medium text-accent-primary mb-1">Explanation</p>
                <p className="text-sm text-text-secondary leading-relaxed">{q.explanation}</p>
              </div>

              <p className="text-center text-sm text-text-muted">How well did you know this?</p>
              <div className="flex gap-3">
                <button
                  onClick={() => onRate(0)}
                  className="flex flex-1 flex-col items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-4 transition-all hover:border-red-500/40 hover:bg-red-500/10"
                >
                  <ThumbsDown className="size-5 text-red-500" />
                  <span className="text-xs font-medium text-red-500">Hard</span>
                </button>
                <button
                  onClick={() => onRate(1)}
                  className="flex flex-1 flex-col items-center gap-2 rounded-xl border border-accent-warning/20 bg-accent-warning/5 px-4 py-4 transition-all hover:border-accent-warning/40 hover:bg-accent-warning/10"
                >
                  <Meh className="size-5 text-accent-warning" />
                  <span className="text-xs font-medium text-accent-warning">Good</span>
                </button>
                <button
                  onClick={() => onRate(2)}
                  className="flex flex-1 flex-col items-center gap-2 rounded-xl border border-accent-secondary/20 bg-accent-secondary/5 px-4 py-4 transition-all hover:border-accent-secondary/40 hover:bg-accent-secondary/10"
                >
                  <ThumbsUp className="size-5 text-accent-secondary" />
                  <span className="text-xs font-medium text-accent-secondary">Easy</span>
                </button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

// ─── Done View ───────────────────────────────────────────────────
function DoneView({
  correct, total, cards, dueCards, onBackToList, onNewSession,
}: {
  correct: number; total: number;
  cards: CardData[]; dueCards: CardData[];
  onBackToList: () => void; onNewSession: () => void;
}) {
  const now = Date.now();
  const remaining = cards.filter((c) => c.nextReview <= now).length;
  const percent = total > 0 ? Math.round((correct / total) * 100) : 0;

  return (
    <div className="mx-auto max-w-3xl space-y-6 p-4 pt-6 sm:p-6 lg:p-8">
      <Card className="border-accent-secondary/20">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto mb-4 flex size-20 items-center justify-center rounded-full bg-accent-secondary/10">
            <Sparkles className="size-10 text-accent-secondary" />
          </div>
          <CardTitle className="text-2xl">Session Complete!</CardTitle>
          <CardDescription className="text-base mt-1">
            You reviewed {total} card{total !== 1 ? "s" : ""}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="rounded-lg bg-accent-secondary/5 p-4">
              <p className="text-2xl font-bold text-accent-secondary">{correct}</p>
              <p className="text-xs text-text-muted">Recalled</p>
            </div>
            <div className="rounded-lg bg-bg-tertiary/50 p-4">
              <p className="text-2xl font-bold text-text-primary">{total - correct}</p>
              <p className="text-xs text-text-muted">Missed</p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative flex size-24 items-center justify-center">
              <svg className="size-24 -rotate-90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="15.5" fill="none" stroke="var(--color-border)" strokeWidth="3" />
                <circle
                  cx="18" cy="18" r="15.5" fill="none"
                  stroke="var(--color-accent-secondary)"
                  strokeWidth="3"
                  strokeDasharray={`${percent * 0.979} 97.9`}
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute text-lg font-bold text-accent-secondary">{percent}%</span>
            </div>
          </div>

          {remaining > 0 && (
            <p className="text-center text-sm text-text-muted">
              {remaining} card{remaining !== 1 ? "s" : ""} still need{remaining === 1 ? "s" : ""} review today
            </p>
          )}
        </CardContent>
      </Card>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button variant="outline" className="flex-1 gap-2" onClick={onBackToList}>
          <ArrowLeft className="size-4" />
          Back to Queue
        </Button>
        {remaining > 0 && (
          <Button
            className="flex-1 gap-2"
            style={{ backgroundColor: "var(--color-accent-primary)", color: "#fff" }}
            onClick={onNewSession}
          >
            <RefreshCw className="size-4" />
            Continue Review ({remaining})
          </Button>
        )}
      </div>
    </div>
  );
}

// ─── Helpers ─────────────────────────────────────────────────────
function timeAgo(ts: number): string {
  const diff = Date.now() - ts;
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  return `${Math.floor(days / 30)}mo ago`;
}
