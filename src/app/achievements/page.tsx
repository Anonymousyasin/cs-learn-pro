"use client";

import { useState, useEffect, useMemo } from "react";
import {
  Award, Lock, Star, Zap, Code2, BookOpen, Brain, Target, Flame,
  CheckCircle2, Trophy, Sparkles, Rocket, Shield, Globe, Layers,
  Hash, Gift, Sword, Palette, Terminal, TrendingUp,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { loadProgress, getLevel } from "@/lib/progress";
import { courseRegistry } from "@/lib/courses";
import type { UserProgress } from "@/lib/progress";

// ─── Achievement Definitions ────────────────────────────────────
interface AchievementDef {
  id: string;
  title: string;
  description: string;
  icon: typeof Star;
  rarity: "common" | "uncommon" | "rare" | "epic" | "legendary";
  category: "learning" | "streaks" | "exams" | "mastery";
  xpReward: number;
  check: (progress: UserProgress) => { earned: boolean; progress: number; max: number };
}

const totalChapters = courseRegistry.courses.reduce((s, c) => s + c.chapters.length, 0);

function createAchievements(progress: UserProgress): AchievementDef[] {
  const completed = progress.completedChapters.length;
  const streak = progress.currentStreak;
  const exams = progress.totalExamsPassed;
  const xp = progress.xp;
  const coursesStarted = new Set(progress.completedChapters.map(id => id.split("-")[0])).size;

  // Count high-scoring exams
  const highScoreExams = Object.values(progress.lastExamResults).filter(r => r.score >= 0.95).length;

  // Per-course completed counts
  const courseCompleted: Record<string, number> = {};
  for (const course of courseRegistry.courses) {
    courseCompleted[course.id] = course.chapters.filter(
      ch => progress.completedChapters.includes(ch.id)
    ).length;
  }

  return [
    // ── Learning ──
    {
      id: "first-lesson", title: "First Steps", description: "Complete your first lesson",
      icon: Star, rarity: "common", category: "learning", xpReward: 50,
      check: (p) => ({ earned: p.completedChapters.length >= 1, progress: Math.min(p.completedChapters.length, 1), max: 1 }),
    },
    {
      id: "five-lessons", title: "Knowledge Seeker", description: "Complete 5 lessons",
      icon: BookOpen, rarity: "uncommon", category: "learning", xpReward: 100,
      check: (p) => ({ earned: p.completedChapters.length >= 5, progress: Math.min(p.completedChapters.length, 5), max: 5 }),
    },
    {
      id: "ten-chapters", title: "Chapter Master", description: "Complete 10 chapters",
      icon: Layers, rarity: "uncommon", category: "learning", xpReward: 150,
      check: (p) => ({ earned: p.completedChapters.length >= 10, progress: Math.min(p.completedChapters.length, 10), max: 10 }),
    },
    {
      id: "twenty-five-chapters", title: "Dedicated Learner", description: "Complete 25 chapters",
      icon: BookOpen, rarity: "rare", category: "learning", xpReward: 300,
      check: (p) => ({ earned: p.completedChapters.length >= 25, progress: Math.min(p.completedChapters.length, 25), max: 25 }),
    },
    {
      id: "fifty-chapters", title: "Scholar", description: "Complete 50 chapters",
      icon: Layers, rarity: "rare", category: "learning", xpReward: 500,
      check: (p) => ({ earned: p.completedChapters.length >= 50, progress: Math.min(p.completedChapters.length, 50), max: 50 }),
    },
    {
      id: "all-html", title: "HTML Hero", description: "Complete all HTML chapters",
      icon: Code2, rarity: "rare", category: "learning", xpReward: 500,
      check: () => {
        const htmlCourse = courseRegistry.getCourse("html");
        const total = htmlCourse?.chapters.length || 60;
        const done = courseCompleted["html"] || 0;
        return { earned: done >= total, progress: done, max: total };
      },
    },
    {
      id: "all-css", title: "CSS Artist", description: "Complete all CSS chapters",
      icon: Palette, rarity: "rare", category: "learning", xpReward: 500,
      check: () => {
        const cssCourse = courseRegistry.getCourse("css");
        const total = cssCourse?.chapters.length || 70;
        const done = courseCompleted["css"] || 0;
        return { earned: done >= total, progress: done, max: total };
      },
    },
    {
      id: "all-js", title: "JS Wiz", description: "Complete all JavaScript chapters",
      icon: Brain, rarity: "rare", category: "learning", xpReward: 500,
      check: () => {
        const jsCourse = courseRegistry.getCourse("javascript");
        const total = jsCourse?.chapters.length || 70;
        const done = courseCompleted["javascript"] || 0;
        return { earned: done >= total, progress: done, max: total };
      },
    },
    {
      id: "all-python", title: "Python Pro", description: "Complete all Python chapters",
      icon: Terminal, rarity: "epic", category: "learning", xpReward: 750,
      check: () => {
        const pyCourse = courseRegistry.getCourse("python");
        const total = pyCourse?.chapters.length || 55;
        const done = courseCompleted["python"] || 0;
        return { earned: done >= total, progress: done, max: total };
      },
    },
    {
      id: "all-cs", title: "CS Master", description: "Complete all CS/DSA chapters",
      icon: Shield, rarity: "epic", category: "learning", xpReward: 750,
      check: () => {
        const csCourse = courseRegistry.getCourse("cs");
        const total = csCourse?.chapters.length || 30;
        const done = courseCompleted["cs"] || 0;
        return { earned: done >= total, progress: done, max: total };
      },
    },
    {
      id: "all-courses", title: "Grand Master", description: "Complete all courses",
      icon: Award, rarity: "legendary", category: "learning", xpReward: 2000,
      check: () => {
        const completedAll = courseRegistry.courses.every(c =>
          c.chapters.every(ch => progress.completedChapters.includes(ch.id))
        );
        return { earned: completedAll, progress: completedCoursesCount(), max: courseRegistry.courses.length };
      },
    },

    // ── Streaks ──
    {
      id: "streak-3", title: "Getting Started", description: "3-day learning streak",
      icon: Flame, rarity: "common", category: "streaks", xpReward: 50,
      check: (p) => ({ earned: p.currentStreak >= 3, progress: Math.min(p.currentStreak, 3), max: 3 }),
    },
    {
      id: "streak-7", title: "Consistency", description: "7-day learning streak",
      icon: Flame, rarity: "uncommon", category: "streaks", xpReward: 150,
      check: (p) => ({ earned: p.currentStreak >= 7, progress: Math.min(p.currentStreak, 7), max: 7 }),
    },
    {
      id: "streak-14", title: "Unstoppable", description: "14-day learning streak",
      icon: Flame, rarity: "rare", category: "streaks", xpReward: 300,
      check: (p) => ({ earned: p.currentStreak >= 14, progress: Math.min(p.currentStreak, 14), max: 14 }),
    },
    {
      id: "streak-30", title: "On Fire", description: "30-day learning streak",
      icon: Flame, rarity: "epic", category: "streaks", xpReward: 600,
      check: (p) => ({ earned: p.currentStreak >= 30, progress: Math.min(p.currentStreak, 30), max: 30 }),
    },
    {
      id: "streak-50", title: "Inferno", description: "50-day learning streak",
      icon: Flame, rarity: "legendary", category: "streaks", xpReward: 1000,
      check: (p) => ({ earned: p.currentStreak >= 50, progress: Math.min(p.currentStreak, 50), max: 50 }),
    },
    {
      id: "streak-100", title: "Immortal", description: "100-day learning streak",
      icon: Flame, rarity: "legendary", category: "streaks", xpReward: 2000,
      check: (p) => ({ earned: p.currentStreak >= 100, progress: Math.min(p.currentStreak, 100), max: 100 }),
    },

    // ── Exams ──
    {
      id: "exam-first", title: "Test Taker", description: "Pass your first exam",
      icon: Brain, rarity: "common", category: "exams", xpReward: 50,
      check: (p) => ({ earned: p.totalExamsPassed >= 1, progress: Math.min(p.totalExamsPassed, 1), max: 1 }),
    },
    {
      id: "exam-5", title: "Sharp Mind", description: "Pass 5 exams with 95%+",
      icon: Target, rarity: "uncommon", category: "exams", xpReward: 150,
      check: () => ({ earned: highScoreExams >= 5, progress: Math.min(highScoreExams, 5), max: 5 }),
    },
    {
      id: "exam-10", title: "Exam Crusher", description: "Pass 10 exams with 95%+",
      icon: Brain, rarity: "rare", category: "exams", xpReward: 400,
      check: () => ({ earned: highScoreExams >= 10, progress: Math.min(highScoreExams, 10), max: 10 }),
    },
    {
      id: "exam-25", title: "Perfectionist", description: "Pass 25 exams with 95%+",
      icon: Trophy, rarity: "epic", category: "exams", xpReward: 750,
      check: () => ({ earned: highScoreExams >= 25, progress: Math.min(highScoreExams, 25), max: 25 }),
    },
    {
      id: "exam-50", title: "Unstoppable", description: "Pass 50 exams",
      icon: Shield, rarity: "epic", category: "exams", xpReward: 1000,
      check: (p) => ({ earned: p.totalExamsPassed >= 50, progress: Math.min(p.totalExamsPassed, 50), max: 50 }),
    },

    // ── Mastery ──
    {
      id: "speed-demon", title: "Speed Demon", description: "Complete a chapter in under an hour",
      icon: Zap, rarity: "rare", category: "mastery", xpReward: 250,
      check: () => ({ earned: false, progress: 0, max: 1 }),
    },
    {
      id: "xp-1000", title: "Century", description: "Earn 1,000 total XP",
      icon: Gift, rarity: "uncommon", category: "mastery", xpReward: 100,
      check: (p) => ({ earned: p.xp >= 1000, progress: Math.min(p.xp, 1000), max: 1000 }),
    },
    {
      id: "xp-5000", title: "Powerhouse", description: "Earn 5,000 total XP",
      icon: TrendingUp, rarity: "epic", category: "mastery", xpReward: 500,
      check: (p) => ({ earned: p.xp >= 5000, progress: Math.min(p.xp, 5000), max: 5000 }),
    },
    {
      id: "xp-10000", title: "Legend", description: "Earn 10,000 total XP",
      icon: Sword, rarity: "legendary", category: "mastery", xpReward: 1000,
      check: (p) => ({ earned: p.xp >= 10000, progress: Math.min(p.xp, 10000), max: 10000 }),
    },
    {
      id: "xp-25000", title: "Mythic", description: "Earn 25,000 total XP",
      icon: Award, rarity: "legendary", category: "mastery", xpReward: 2500,
      check: (p) => ({ earned: p.xp >= 25000, progress: Math.min(p.xp, 25000), max: 25000 }),
    },
    {
      id: "code-warrior", title: "Code Warrior", description: "Complete 100 lessons",
      icon: Code2, rarity: "rare", category: "mastery", xpReward: 300,
      check: (p) => ({ earned: p.completedChapters.length >= 100, progress: Math.min(p.completedChapters.length, 100), max: 100 }),
    },
    {
      id: "explorer", title: "Explorer", description: "Start all 5 courses",
      icon: Globe, rarity: "epic", category: "mastery", xpReward: 500,
      check: () => ({ earned: coursesStarted >= 5, progress: Math.min(coursesStarted, 5), max: 5 }),
    },
    {
      id: "over-achiever", title: "Overachiever", description: "Complete all achievements",
      icon: Trophy, rarity: "legendary", category: "mastery", xpReward: 5000,
      check: () => ({ earned: false, progress: 0, max: 1 }),
    },
  ];
}

function completedCoursesCount(): number {
  // This is a helper used in the all-courses achievement
  return 0; // placeholder, actual value is computed inline
}

// ─── Rarity Config ───────────────────────────────────────────────
const rarityConfig = {
  common: { label: "Common", color: "text-text-muted", bg: "bg-bg-tertiary", border: "border-border" },
  uncommon: { label: "Uncommon", color: "text-accent-secondary", bg: "bg-accent-secondary/10", border: "border-accent-secondary/20" },
  rare: { label: "Rare", color: "text-accent-primary", bg: "bg-accent-primary-light", border: "border-accent-primary/20" },
  epic: { label: "Epic", color: "text-accent-warning", bg: "bg-accent-warning/10", border: "border-accent-warning/20" },
  legendary: { label: "Legendary", color: "text-accent-danger", bg: "bg-accent-danger/10", border: "border-accent-danger/20" },
};

const categoryConfig = {
  learning: { label: "Learning", icon: BookOpen },
  streaks: { label: "Streaks", icon: Flame },
  exams: { label: "Exams", icon: Brain },
  mastery: { label: "Mastery", icon: Trophy },
};

// ─── Page Component ──────────────────────────────────────────────
export default function AchievementsPage() {
  const [progress, setProgress] = useState(loadProgress());
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const p = loadProgress();
    setProgress(p);
    setLoaded(true);
    setMounted(true);
  }, []);

  const achievementDefs = useMemo(() => createAchievements(progress), [progress]);

  const achievements = useMemo(() =>
    achievementDefs.map((a) => {
      const result = a.check(progress);
      return { ...a, ...result };
    }),
    [achievementDefs, progress]
  );

  const earnedCount = achievements.filter((a) => a.earned).length;
  const totalXPFromAchievements = achievements.filter(a => a.earned).reduce((s, a) => s + a.xpReward, 0);

  const categories = ["all", ...new Set(achievements.map((a) => a.category))] as string[];
  const filtered = activeTab === "all" ? achievements : achievements.filter((a) => a.category === activeTab);

  if (!loaded) {
    return (
      <div className="mx-auto max-w-4xl p-4 pt-6 sm:p-6 lg:p-8">
        <div className="flex items-center justify-center py-32">
          <div className="relative">
            <div className="size-8 animate-spin rounded-full border-2 border-accent-primary/30 border-t-accent-primary" />
            <div className="absolute inset-0 size-8 animate-pulse rounded-full bg-accent-primary/5 blur-xl" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("mx-auto max-w-4xl space-y-8 p-4 pt-6 sm:p-6 lg:p-8", mounted && "animate-fade-in")}>
      {/* Header */}
      <div className="relative overflow-hidden rounded-2xl border border-accent-warning/10 bg-gradient-to-br from-accent-warning/5 via-transparent to-accent-danger/5 p-6">
        <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-accent-warning/5 blur-3xl" />
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-accent-warning/10">
              <Trophy className="size-7 text-accent-warning" />
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold">Achievements</h1>
              <p className="text-sm text-text-secondary">
                {earnedCount} of {achievements.length} unlocked
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs text-text-muted">Total XP Earned</p>
              <p className="flex items-center gap-1 text-lg font-bold text-accent-warning">
                <Zap className="size-4" />
                {totalXPFromAchievements.toLocaleString()}
              </p>
            </div>
            <div className="relative size-16 shrink-0">
              <svg className="size-16 -rotate-90" viewBox="0 0 64 64">
                <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="4"
                  className="text-bg-tertiary" />
                <circle cx="32" cy="32" r="28" fill="none" strokeWidth="4" strokeLinecap="round"
                  className="text-accent-warning"
                  strokeDasharray={`${2 * Math.PI * 28}`}
                  strokeDashoffset={`${2 * Math.PI * 28 * (1 - earnedCount / achievements.length)}`}
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-sm font-bold">
                {Math.round((earnedCount / achievements.length) * 100)}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => {
          const CatIcon = cat === "all" ? Trophy : categoryConfig[cat as keyof typeof categoryConfig]?.icon || Trophy;
          const catCount = cat === "all"
            ? earnedCount
            : achievements.filter((a) => a.category === cat && a.earned).length;
          const catTotal = cat === "all"
            ? achievements.length
            : achievements.filter((a) => a.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={cn(
                "flex items-center gap-2 rounded-lg border px-3.5 py-2 text-xs font-medium transition-all",
                activeTab === cat
                  ? "border-accent-primary/30 bg-accent-primary/10 text-accent-primary"
                  : "border-border bg-transparent text-text-muted hover:border-border-light hover:text-text-secondary"
              )}
            >
              <CatIcon className="size-3.5" />
              {cat === "all" ? "All" : categoryConfig[cat as keyof typeof categoryConfig]?.label || cat}
              <span className={cn(
                "ml-0.5 rounded-full px-1.5 py-0.5 text-[10px]",
                activeTab === cat ? "bg-accent-primary/20" : "bg-bg-tertiary"
              )}>
                {catCount}/{catTotal}
              </span>
            </button>
          );
        })}
      </div>

      {/* Achievement Cards */}
      <div className="space-y-3">
        {filtered.map((achievement, i) => {
          const isEarned = achievement.earned;
          const isLocked = achievement.progress === 0;
          const progressPct = Math.min(Math.round((achievement.progress / achievement.max) * 100), 100);
          const config = rarityConfig[achievement.rarity];
          const Icon = achievement.icon;
          const CatIcon = categoryConfig[achievement.category]?.icon || Trophy;

          return (
            <Card
              key={achievement.id}
              className={cn(
                "glass glass-hover transition-all duration-300",
                isEarned && "border-accent-warning/20 bg-gradient-to-r from-accent-warning/5 via-transparent to-transparent",
                mounted && `animate-slide-up delay-${Math.min((i % 5) + 1, 6)}`
              )}
            >
              <CardHeader className="p-4 sm:p-5">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={cn(
                    "flex size-12 shrink-0 items-center justify-center rounded-xl transition-all",
                    isEarned ? "bg-accent-warning/10" : isLocked ? "bg-bg-tertiary" : config.bg
                  )}>
                    {isEarned ? (
                      <div className="relative">
                        <Icon className={cn("size-6", config.color)} />
                        <Sparkles className="pointer-events-none absolute -right-2 -top-2 size-3 text-accent-warning" />
                      </div>
                    ) : (
                      <Icon className={cn("size-6", isLocked ? "text-text-muted" : config.color)} />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <CardTitle className={cn("text-sm font-semibold", isEarned ? "text-accent-warning" : isLocked ? "text-text-muted" : "")}>
                          {achievement.title}
                        </CardTitle>
                        <Badge variant="outline" className={cn("border-0 text-[10px] font-medium px-1.5 py-0.5", config.bg, config.color)}>
                          {config.label}
                        </Badge>
                      </div>
                      <Badge variant="secondary" className="gap-1 text-[10px] bg-bg-tertiary text-text-muted">
                        <CatIcon className="size-3" />
                        {categoryConfig[achievement.category]?.label}
                      </Badge>
                    </div>
                    <CardDescription className="mt-0.5 text-xs">
                      {achievement.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              {!isEarned && (
                <CardContent className="px-4 pb-4 pt-0 sm:px-5 sm:pb-5">
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-text-muted">
                        {isLocked ? "Not started" : `${achievement.progress.toLocaleString()}/${achievement.max.toLocaleString()}`}
                      </span>
                      <span className={cn("font-medium", config.color)}>{progressPct}%</span>
                    </div>
                    <div className="relative h-2 overflow-hidden rounded-full bg-bg-tertiary">
                      <div
                        className={cn("h-full rounded-full transition-all duration-500", config.bg)}
                        style={{ width: `${progressPct}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              )}

              {isEarned && (
                <CardContent className="flex items-center justify-between px-4 pb-4 pt-0 sm:px-5 sm:pb-5">
                  <Badge variant="secondary" className="gap-1.5 bg-accent-secondary/10 text-accent-secondary text-[10px]">
                    <CheckCircle2 className="size-3" />
                    Unlocked
                  </Badge>
                  <span className="flex items-center gap-1 text-[10px] text-accent-warning font-medium">
                    <Sparkles className="size-3" />
                    +{achievement.xpReward} XP
                  </span>
                </CardContent>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
