"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Brain, Zap, Trophy, BookOpen, ArrowRight,
  Flame, Award, Code2, Palette, Terminal, Shield,
  Target, TrendingUp, Clock, CheckCircle2,
  Sparkles, Star,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { loadProgress, getLevel, getLevelProgress, getXPToNextLevel } from "@/lib/progress";
import { courseRegistry } from "@/lib/courses";
import type { Course } from "@/lib/courses/types";
import { cn } from "@/lib/utils";

const courseIcons: Record<string, typeof Code2> = {
  html: Code2,
  css: Palette,
  javascript: Brain,
  python: Terminal,
  cs: Shield,
};

const courseColors: Record<string, string> = {
  html: "from-orange-500/20 to-orange-600/5 border-orange-500/30",
  css: "from-sky-400/20 to-sky-500/5 border-sky-400/30",
  javascript: "from-yellow-400/20 to-yellow-500/5 border-yellow-400/30",
  python: "from-emerald-400/20 to-emerald-500/5 border-emerald-400/30",
  cs: "from-purple-400/20 to-purple-500/5 border-purple-400/30",
};

const courseGlows: Record<string, string> = {
  html: "shadow-orange-500/10",
  css: "shadow-sky-400/10",
  javascript: "shadow-yellow-400/10",
  python: "shadow-emerald-400/10",
  cs: "shadow-purple-400/10",
};

const courseBadgeColors: Record<string, string> = {
  html: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  css: "bg-sky-400/10 text-sky-400 border-sky-400/20",
  javascript: "bg-yellow-400/10 text-yellow-400 border-yellow-400/20",
  python: "bg-emerald-400/10 text-emerald-400 border-emerald-400/20",
  cs: "bg-purple-400/10 text-purple-400 border-purple-400/20",
};

export default function DashboardPage() {
  const [progress, setProgress] = useState(loadProgress());
  const [loaded, setLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const p = loadProgress();
    setProgress(p);
    setLoaded(true);
    setMounted(true);
  }, []);

  if (!loaded) {
    return (
      <div className="mx-auto max-w-6xl p-4 pt-6 sm:p-6 lg:p-8">
        <div className="flex items-center justify-center py-32">
          <div className="relative">
            <div className="size-8 animate-spin rounded-full border-2 border-accent-primary/30 border-t-accent-primary" />
            <div className="absolute inset-0 size-8 animate-pulse rounded-full bg-accent-primary/5 blur-xl" />
          </div>
        </div>
      </div>
    );
  }

  const level = getLevel(progress.xp);
  const levelProgress = getLevelProgress(progress.xp);
  const xpToNext = getXPToNextLevel(progress.xp);

  const completedCourses = courseRegistry.courses.filter((c) =>
    c.chapters.every((ch) => progress.completedChapters.includes(ch.id))
  ).length;

  const totalChapters = courseRegistry.courses.reduce((s, c) => s + c.chapters.length, 0);
  const completedChaptersCount = progress.completedChapters.length;
  const overallProgress = totalChapters > 0 ? Math.round((completedChaptersCount / totalChapters) * 100) : 0;

  const continueChapter = (() => {
    for (const course of courseRegistry.courses) {
      for (let i = 0; i < course.chapters.length; i++) {
        const ch = course.chapters[i];
        if (!progress.completedChapters.includes(ch.id)) {
          if (i === 0 || progress.completedChapters.includes(course.chapters[i - 1].id)) {
            return { chapter: ch, course };
          }
        }
      }
    }
    return null;
  })();

  return (
    <div className={cn("mx-auto max-w-6xl space-y-10 p-4 pt-6 sm:p-6 lg:p-8", mounted && "animate-fade-in")}>
      {/* ─── Hero Section ─── */}
      <div className="relative overflow-hidden rounded-2xl border border-accent-primary/10 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-secondary/5 p-6 sm:p-8">
        {/* Glow orbs */}
        <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-accent-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 size-48 rounded-full bg-accent-secondary/5 blur-3xl" />
        
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-accent-primary/10">
                <Brain className="size-5 text-accent-primary" />
              </div>
              <div>
                <h1 className="font-display text-2xl font-bold tracking-tight">
                  Welcome back, Alex
                </h1>
                <p className="text-sm text-text-secondary">
                  {progress.currentStreak > 1
                    ? `🔥 ${progress.currentStreak}-day streak! Keep it going!`
                    : "Ready for today's lesson?"}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="gap-1.5 bg-accent-primary/10 text-accent-primary">
                <Zap className="size-3.5" />
                Level {level}
              </Badge>
              <Badge variant="secondary" className="gap-1.5 bg-accent-warning/10 text-accent-warning">
                <Flame className="size-3.5" />
                {progress.currentStreak} day streak
              </Badge>
              <Badge variant="secondary" className="gap-1.5 bg-accent-secondary/10 text-accent-secondary">
                <Trophy className="size-3.5" />
                {completedChaptersCount} lessons done
              </Badge>
            </div>
          </div>
          {continueChapter && (
            <Link href={`/courses/${continueChapter.course.id}/${continueChapter.chapter.id}`}>
              <Button className="group relative gap-2 bg-accent-primary text-primary-foreground shadow-lg shadow-accent-primary/20 transition-all hover:bg-accent-primary-hover hover:shadow-accent-primary/30">
                <span>Continue Learning</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                <div className="absolute inset-0 rounded-lg bg-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
              </Button>
            </Link>
          )}
        </div>

        {/* Level Progress */}
        <div className="relative mt-6 rounded-xl border border-border/50 bg-bg-card/50 p-4 backdrop-blur-sm">
          <div className="mb-2 flex items-center justify-between">
            <span className="flex items-center gap-2 text-sm font-medium">
              <TrendingUp className="size-4 text-accent-primary" />
              Level {level} Progress
            </span>
            <span className="text-xs text-text-muted">{xpToNext} XP to next level</span>
          </div>
          <div className="relative h-2.5 overflow-hidden rounded-full bg-bg-tertiary">
            <div
              className="h-full rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary transition-all duration-500"
              style={{ width: `${levelProgress * 100}%` }}
            />
            <div className="absolute inset-0 rounded-full bg-white/5" style={{ width: `${levelProgress * 100}%` }} />
          </div>
        </div>
      </div>

      {/* ─── Stats Grid ─── */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { icon: Zap, label: "Total XP", value: progress.xp.toLocaleString(), color: "text-accent-warning", bg: "bg-accent-warning/10" },
          { icon: Flame, label: "Day Streak", value: progress.currentStreak, color: "text-accent-danger", bg: "bg-accent-danger/10" },
          { icon: BookOpen, label: "Chapters Done", value: completedChaptersCount, color: "text-accent-info", bg: "bg-accent-info/10" },
          { icon: Award, label: "Courses Complete", value: `${completedCourses}/${courseRegistry.courses.length}`, color: "text-accent-secondary", bg: "bg-accent-secondary/10" },
        ].map((stat, i) => (
          <div
            key={stat.label}
            className={cn(
              "glass glass-hover rounded-xl p-4 transition-all duration-300",
              mounted && `animate-slide-up delay-${i + 1}`
            )}
          >
            <div className={cn("mb-2 inline-flex rounded-lg p-2", stat.bg)}>
              <stat.icon className={cn("size-4", stat.color)} />
            </div>
            <p className="text-xs font-medium text-text-muted">{stat.label}</p>
            <p className="mt-0.5 text-xl font-bold tracking-tight">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* ─── Overall Progress Bar ─── */}
      <div className="glass rounded-xl p-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="flex items-center gap-2 text-sm font-medium">
            <Target className="size-4 text-accent-primary" />
            Overall Progress
          </span>
          <span className="text-xs text-text-muted">{completedChaptersCount} / {totalChapters} chapters</span>
        </div>
        <div className="relative h-3 overflow-hidden rounded-full bg-bg-tertiary">
          <div
            className="h-full rounded-full bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-warning transition-all duration-700"
            style={{ width: `${overallProgress}%` }}
          />
        </div>
      </div>

      {/* ─── Course Grid ─── */}
      <div>
        <div className="mb-5 flex items-center justify-between">
          <h2 className="font-display text-xl font-bold">Your Courses</h2>
          <span className="text-xs text-text-muted">{completedCourses} of {courseRegistry.courses.length} completed</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courseRegistry.courses.map((course, i) => {
            const Icon = courseIcons[course.id] || Code2;
            const done = course.chapters.filter((ch) => progress.completedChapters.includes(ch.id)).length;
            const pct = Math.round((done / course.chapters.length) * 100);
            const isContinueCourse = continueChapter?.course.id === course.id;

            return (
              <Link
                key={course.id}
                href={`/courses/${course.id}`}
                className={cn(
                  "group relative overflow-hidden rounded-xl border p-5 transition-all duration-300",
                  courseColors[course.id],
                  courseGlows[course.id],
                  "hover:scale-[1.02] hover:shadow-lg",
                  isContinueCourse && "ring-1 ring-accent-primary/30",
                  mounted && `animate-slide-up delay-${Math.min(i + 1, 6)}`
                )}
                style={{ backdropFilter: "blur(8px)" }}
              >
                {/* Course gradient overlay */}
                <div className={cn(
                  "pointer-events-none absolute -inset-x-20 -inset-y-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                  `bg-[radial-gradient(ellipse_at_top,rgba(var(--course-${course.id}-rgb),0.06),transparent_70%)]`
                )} />

                {/* Card content */}
                <div className="relative">
                  <div className="mb-3 flex items-start justify-between">
                    <div className={cn(
                      "flex size-12 items-center justify-center rounded-xl",
                      courseBadgeColors[course.id]
                    )}>
                      <Icon className="size-6" />
                    </div>
                    <Badge
                      variant="outline"
                      className={cn("gap-1 border-0 text-xs font-medium", courseBadgeColors[course.id])}
                    >
                      {course.difficulty === 1 ? "Beginner" : course.difficulty === 2 ? "Intermediate" : "Advanced"}
                    </Badge>
                  </div>

                  <h3 className="font-display text-lg font-bold">{course.title}</h3>
                  <p className="mt-1 line-clamp-2 text-xs text-text-secondary leading-relaxed">
                    {course.fullTitle}
                  </p>

                  {/* Ring progress */}
                  <div className="mt-4 flex items-center gap-3">
                    <div className="relative size-12 shrink-0">
                      <svg className="size-12 -rotate-90" viewBox="0 0 48 48">
                        <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="3"
                          className="text-bg-tertiary" />
                        <circle cx="24" cy="24" r="20" fill="none" strokeWidth="3"
                          strokeLinecap="round"
                          className="text-accent-primary transition-all duration-700"
                          strokeDasharray={`${2 * Math.PI * 20}`}
                          strokeDashoffset={`${2 * Math.PI * 20 * (1 - pct / 100)}`}
                          style={{ stroke: courseColors[course.id]?.includes("orange") ? "#f97316" : courseColors[course.id]?.includes("sky") ? "#38bdf8" : courseColors[course.id]?.includes("yellow") ? "#eab308" : courseColors[course.id]?.includes("emerald") ? "#22c55e" : "#a78bfa" }}
                        />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">
                        {pct}%
                      </span>
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 text-xs">
                        <CheckCircle2 className="size-3.5 text-accent-secondary" />
                        <span className="font-medium">{done}/{course.chapters.length} chapters</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-text-muted mt-0.5">
                        <Clock className="size-3" />
                        <span>{course.estimatedHours}h total</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* ─── Continue Learning CTA ─── */}
      {continueChapter && (
        <Link
          href={`/courses/${continueChapter.course.id}/${continueChapter.chapter.id}`}
          className="group relative block overflow-hidden rounded-xl border border-accent-primary/20 bg-gradient-to-r from-accent-primary/5 via-transparent to-accent-secondary/5 p-5 transition-all hover:border-accent-primary/40 sm:p-6"
        >
          <div className="flex items-center gap-4 sm:gap-6">
            <div className={cn(
              "flex size-14 shrink-0 items-center justify-center rounded-xl",
              courseBadgeColors[continueChapter.course.id]
            )}>
              {(courseIcons[continueChapter.course.id] || Code2)({ className: "size-7" })}
            </div>
            <div className="min-w-0 flex-1">
              <Badge variant="secondary" className="mb-1.5 bg-accent-primary/10 text-accent-primary text-xs">
                <Sparkles className="size-3" />
                Continue Learning
              </Badge>
              <h3 className="font-display text-lg font-bold truncate">
                {continueChapter.chapter.title}
              </h3>
              <p className="text-sm text-text-secondary truncate">
                {continueChapter.course.fullTitle}
              </p>
            </div>
            <div className="hidden items-center gap-3 sm:flex">
              <div className="text-right">
                <p className="text-xs text-text-muted">Reward</p>
                <p className="flex items-center gap-1 text-sm font-bold text-accent-warning">
                  <Zap className="size-3.5" />
                  +{continueChapter.chapter.xpReward} XP
                </p>
              </div>
              <div className="flex size-10 items-center justify-center rounded-lg bg-accent-primary/10 transition-colors group-hover:bg-accent-primary/20">
                <ArrowRight className="size-5 text-accent-primary transition-transform group-hover:translate-x-0.5" />
              </div>
            </div>
          </div>
        </Link>
      )}

      {/* ─── Quick Actions ─── */}
      <div className="flex flex-wrap gap-3">
        <Link href="/review">
          <Button variant="secondary" className="gap-2">
            <Star className="size-4" />
            Spaced Repetition Review
          </Button>
        </Link>
        <Link href="/achievements">
          <Button variant="secondary" className="gap-2">
            <Trophy className="size-4" />
            Achievements
          </Button>
        </Link>
        <Link href="/profile">
          <Button variant="secondary" className="gap-2">
            <Award className="size-4" />
            My Profile
          </Button>
        </Link>
      </div>
    </div>
  );
}
