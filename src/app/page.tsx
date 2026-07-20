"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Brain, Zap, Trophy, BookOpen, ArrowRight,
  RotateCcw, CheckCircle2, Timer, Flame, Award,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { loadProgress, getLevel, getLevelProgress, getXPToNextLevel } from "@/lib/progress";
import { courseRegistry } from "@/lib/courses";
import { cn } from "@/lib/utils";

type ActivityStatus = "completed" | "in-progress";

export default function DashboardPage() {
  const [progress, setProgress] = useState(loadProgress());
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const p = loadProgress();
    setProgress(p);
    setLoaded(true);
  }, []);

  if (!loaded) {
    return (
      <div className="mx-auto max-w-5xl space-y-8 p-4 pt-6 sm:p-6 lg:p-8">
        <div className="flex items-center justify-center py-20">
          <div className="size-6 animate-spin rounded-full border-2 border-accent-primary border-t-transparent" />
        </div>
      </div>
    );
  }

  const level = getLevel(progress.xp);
  const levelProgress = getLevelProgress(progress.xp);
  const xpToNext = getXPToNextLevel(progress.xp);
  const completedCount = courseRegistry.courses.filter((c) =>
    c.chapters.every((ch) => progress.completedChapters.includes(ch.id))
  ).length;

  const continueChapter = findContinueChapter(progress.completedChapters);

  const firstCourse = courseRegistry.courses[0];
  const firstCourseChapters = firstCourse?.chapters || [];
  const continueHref = continueChapter
    ? `/courses/${continueChapter.courseId}/${continueChapter.id}`
    : firstCourseChapters.length > 0
      ? `/courses/${firstCourse.id}/${firstCourseChapters[0].id}`
      : "/courses/html";
  return (
    <div className="mx-auto max-w-5xl space-y-8 p-4 pt-6 sm:p-6 lg:p-8">
      {/* Welcome + Level */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-text-primary">
              Welcome back, Alex
            </h1>
            <Badge variant="default" className="bg-accent-primary-light text-accent-primary gap-1">
              <Zap className="size-3" />
              Level {level}
            </Badge>
          </div>
          <p className="mt-1 text-sm text-text-secondary">
            {progress.currentStreak > 1
              ? `${progress.currentStreak}-day streak! Keep it going!`
              : "Continue where you left off. You're making great progress."}
          </p>
        </div>
        <Link href={continueHref}>
          <Button className="gap-2 bg-accent-primary text-white hover:bg-accent-primary-hover">
            <Brain className="size-4" />
            Start Learning
            <ArrowRight className="size-4" />
          </Button>
        </Link>
      </div>

      {/* Level Progress */}
      <Card size="sm" className="border-border/50">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium">Level {level} Progress</CardTitle>
            <span className="text-xs text-text-muted">{xpToNext} XP to next level</span>
          </div>
        </CardHeader>
        <CardContent>
          <Progress value={levelProgress * 100} />
        </CardContent>
      </Card>

      {/* Continue Learning Card */}
      {continueChapter && (
        <Link href={continueHref}>
          <Card size="sm" className="relative overflow-hidden border-accent-primary/20 bg-gradient-to-br from-bg-card to-bg-secondary cursor-pointer transition-colors hover:border-accent-primary/40">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="default" className="bg-accent-primary-light text-accent-primary">
                  Continue Learning
                </Badge>
                <span className="text-xs text-text-muted">Next chapter</span>
              </div>
              <CardTitle className="mt-2 text-lg">{continueChapter.title}</CardTitle>
              <CardDescription>
                {courseRegistry.getCourse(continueChapter.courseId)?.fullTitle || ""}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-xs text-text-muted">
                <span>{continueChapter.xpReward} XP reward</span>
                <span className="flex items-center gap-1 text-accent-primary">
                  Continue <ArrowRight className="size-3" />
                </span>
              </div>
            </CardContent>
          </Card>
        </Link>
      )}

      {/* Stats Row */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Card size="sm" className="border-border/50">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <Zap className="size-4 text-accent-warning" />
              <CardTitle className="text-sm font-medium text-text-secondary">Total XP</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-text-primary">{progress.xp.toLocaleString()}</p>
          </CardContent>
        </Card>
        <Card size="sm" className="border-border/50">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <Flame className="size-4 text-accent-danger" />
              <CardTitle className="text-sm font-medium text-text-secondary">Day Streak</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-text-primary">{progress.currentStreak}</p>
          </CardContent>
        </Card>
        <Card size="sm" className="border-border/50">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <BookOpen className="size-4 text-accent-info" />
              <CardTitle className="text-sm font-medium text-text-secondary">Chapters Done</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-text-primary">{progress.completedChapters.length}</p>
          </CardContent>
        </Card>
        <Card size="sm" className="border-border/50">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <Award className="size-4 text-accent-secondary" />
              <CardTitle className="text-sm font-medium text-text-secondary">Courses</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-text-primary">{completedCount}/{courseRegistry.courses.length}</p>
          </CardContent>
        </Card>
      </div>

      {/* Course Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Course Progress</CardTitle>
          <CardDescription>Your learning journey across all courses</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {courseRegistry.courses.map((course) => {
            const done = course.chapters.filter((ch) => progress.completedChapters.includes(ch.id)).length;
            const pct = Math.round((done / course.chapters.length) * 100);
            return (
              <Link key={course.id} href={`/courses/${course.id}`} className="block">
                <div className="space-y-1.5 transition-colors hover:opacity-80">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-primary font-medium">{course.title}</span>
                    <span className="text-text-muted">{done}/{course.chapters.length} chapters</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-bg-tertiary">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${pct}%`, backgroundColor: course.color }}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}

function findContinueChapter(completedChapters: string[]) {
  for (const course of courseRegistry.courses) {
    for (let i = 0; i < course.chapters.length; i++) {
      const ch = course.chapters[i];
      if (!completedChapters.includes(ch.id)) {
        // If first chapter, or previous chapter completed
        if (i === 0 || completedChapters.includes(course.chapters[i - 1].id)) {
          return ch;
        }
      }
    }
  }
  return null;
}
