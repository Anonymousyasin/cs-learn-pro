"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Code2, Palette, Brain, Terminal, Shield,
  Clock, BookOpen, Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { courseRegistry } from "@/lib/courses";
import { loadProgress } from "@/lib/progress";
import { cn } from "@/lib/utils";

const difficultyLabel = ["", "Beginner", "Intermediate", "Advanced", "Expert", "Master"];

export default function CoursesPage() {
  const [progress, setProgress] = useState(loadProgress());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setProgress(loadProgress());
    setMounted(true);
  }, []);

  return (
    <div className={cn("mx-auto max-w-5xl space-y-8 p-4 pt-6 sm:p-6 lg:p-8", mounted && "animate-fade-in")}>
      <div className="space-y-2">
        <h1 className="font-display text-3xl font-bold">All Courses</h1>
        <p className="text-text-secondary">Choose a course and start learning</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {courseRegistry.courses.map((course, i) => {
          const done = course.chapters.filter((ch) => progress.completedChapters.includes(ch.id)).length;
          const pct = Math.round((done / course.chapters.length) * 100);

          let iconEl: React.ReactNode;
          let gradient: string;
          let badgeStyle: string;
          let accentColor: string;

          if (course.id === "html") {
            iconEl = <Code2 className="size-6" />;
            gradient = "from-orange-500/20 to-orange-600/5 border-orange-500/30";
            badgeStyle = "bg-orange-500/10 text-orange-400 border-orange-500/20";
            accentColor = "#f97316";
          } else if (course.id === "css") {
            iconEl = <Palette className="size-6" />;
            gradient = "from-sky-400/20 to-sky-500/5 border-sky-400/30";
            badgeStyle = "bg-sky-400/10 text-sky-400 border-sky-400/20";
            accentColor = "#38bdf8";
          } else if (course.id === "javascript") {
            iconEl = <Brain className="size-6" />;
            gradient = "from-yellow-400/20 to-yellow-500/5 border-yellow-400/30";
            badgeStyle = "bg-yellow-400/10 text-yellow-400 border-yellow-400/20";
            accentColor = "#eab308";
          } else if (course.id === "python") {
            iconEl = <Terminal className="size-6" />;
            gradient = "from-emerald-400/20 to-emerald-500/5 border-emerald-400/30";
            badgeStyle = "bg-emerald-400/10 text-emerald-400 border-emerald-400/20";
            accentColor = "#22c55e";
          } else {
            iconEl = <Shield className="size-6" />;
            gradient = "from-purple-400/20 to-purple-500/5 border-purple-400/30";
            badgeStyle = "bg-purple-400/10 text-purple-400 border-purple-400/20";
            accentColor = "#a78bfa";
          }

          return (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className={cn(
                "group relative overflow-hidden rounded-xl border p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg",
                gradient,
                mounted && `animate-slide-up delay-${Math.min(i + 1, 6)}`
              )}
              style={{ backdropFilter: "blur(8px)" }}
            >
              <div className="relative">
                <div className="mb-3 flex items-start justify-between">
                  <div className={cn("flex size-12 items-center justify-center rounded-xl", badgeStyle)}>
                    {iconEl}
                  </div>
                  <Badge variant="outline" className={cn("gap-1 border-0 text-xs font-medium", badgeStyle)}>
                    {difficultyLabel[course.difficulty]}
                  </Badge>
                </div>
                <h3 className="font-display text-lg font-bold">{course.title}</h3>
                <p className="mt-1 line-clamp-2 text-xs text-text-secondary leading-relaxed">{course.fullTitle}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-text-muted">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="size-3.5" />
                    {course.chapters.length} chapters
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="size-3.5" />
                    ~{course.estimatedHours}h
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Zap className="size-3.5" />
                    {course.totalXP} XP
                  </span>
                </div>
                {done > 0 && (
                  <div className="mt-3">
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span className="text-text-muted">Progress</span>
                      <span className="font-medium">{pct}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-bg-tertiary">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${pct}%`, backgroundColor: accentColor }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
