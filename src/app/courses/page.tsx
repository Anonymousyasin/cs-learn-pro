"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Code2, Palette, Brain, Terminal, Shield,
  Clock, BookOpen, Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { courseRegistry } from "@/lib/courses";
import { loadProgress } from "@/lib/progress";
import { cn } from "@/lib/utils";

const difficultyLabel = ["", "Beginner", "Intermediate", "Advanced", "Expert", "Master"];

const courseThemes: Record<string, {
  icon: React.ReactNode;
  gradient: string;
  badgeStyle: string;
  accentColor: string;
  glowColor: string;
}> = {
  html: {
    icon: <Code2 className="size-6" />,
    gradient: "from-orange-500/20 to-orange-600/5 border-orange-500/30",
    badgeStyle: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    accentColor: "#f97316",
    glowColor: "rgba(249,115,22,0.35)",
  },
  css: {
    icon: <Palette className="size-6" />,
    gradient: "from-sky-400/20 to-sky-500/5 border-sky-400/30",
    badgeStyle: "bg-sky-400/10 text-sky-400 border-sky-400/20",
    accentColor: "#38bdf8",
    glowColor: "rgba(56,189,248,0.35)",
  },
  javascript: {
    icon: <Brain className="size-6" />,
    gradient: "from-yellow-400/20 to-yellow-500/5 border-yellow-400/30",
    badgeStyle: "bg-yellow-400/10 text-yellow-400 border-yellow-400/20",
    accentColor: "#eab308",
    glowColor: "rgba(234,179,8,0.35)",
  },
  python: {
    icon: <Terminal className="size-6" />,
    gradient: "from-emerald-400/20 to-emerald-500/5 border-emerald-400/30",
    badgeStyle: "bg-emerald-400/10 text-emerald-400 border-emerald-400/20",
    accentColor: "#22c55e",
    glowColor: "rgba(34,197,94,0.35)",
  },
  cs: {
    icon: <Shield className="size-6" />,
    gradient: "from-purple-400/20 to-purple-500/5 border-purple-400/30",
    badgeStyle: "bg-purple-400/10 text-purple-400 border-purple-400/20",
    accentColor: "#a78bfa",
    glowColor: "rgba(167,139,250,0.35)",
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 260, damping: 24 },
  },
} as const;

const headerVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 200, damping: 20 },
  },
} as const;

function ProgressBar({
  pct,
  accentColor,
  animate,
}: {
  pct: number;
  accentColor: string;
  animate: boolean;
}) {
  return (
    <div className="mt-3">
      <div className="mb-1.5 flex items-center justify-between text-xs">
        <span className="text-text-muted">Progress</span>
        <motion.span
          className="font-semibold tabular-nums"
          style={{ color: accentColor }}
          initial={false}
          animate={animate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {pct}%
        </motion.span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-bg-tertiary ring-1 ring-inset ring-white/5">
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          animate={animate ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
          style={{
            background: `linear-gradient(90deg, ${accentColor}, ${accentColor}aa)`,
            boxShadow: `0 0 8px ${accentColor}66`,
          }}
        />
      </div>
    </div>
  );
}

export default function CoursesPage() {
  const [progress, setProgress] = useState(loadProgress());
  const [mounted, setMounted] = useState(false);
  const totalCourses = courseRegistry.courses.length;

  useEffect(() => {
    setProgress(loadProgress());
    setMounted(true);
  }, []);

  return (
    <div className="mx-auto max-w-5xl space-y-8 p-4 pt-6 sm:p-6 lg:p-8">
      {/* ─── Page Header ─── */}
      <motion.div
        className="space-y-2"
        variants={headerVariants}
        initial="hidden"
        animate={mounted ? "visible" : "hidden"}
      >
        <div className="flex items-baseline gap-3">
          <h1 className="font-display text-3xl font-bold tracking-tight">All Courses</h1>
          <motion.span
            className="text-sm font-medium text-text-muted"
            initial={{ opacity: 0, x: -8 }}
            animate={mounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {totalCourses} courses
          </motion.span>
        </div>
        <p className="text-text-secondary">Choose a course and start learning</p>
      </motion.div>

      {/* ─── Course Grid ─── */}
      <motion.div
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate={mounted ? "visible" : "hidden"}
      >
        {courseRegistry.courses.map((course, i) => {
          const done = course.chapters.filter((ch) =>
            progress.completedChapters.includes(ch.id)
          ).length;
          const pct = Math.round((done / course.chapters.length) * 100);
          const theme = courseThemes[course.id] ?? courseThemes.cs;

          return (
            <motion.div key={course.id} variants={cardVariants} className="group">
              <Link
                href={`/courses/${course.id}`}
                className={cn(
                  "relative block overflow-hidden rounded-xl border p-5",
                  "transition-all duration-300",
                  "active:scale-[0.98] sm:active:scale-[1.01]",
                  theme.gradient,
                )}
                style={{ backdropFilter: "blur(8px)" }}
              >
                {/* ─── Hover glow ring ─── */}
                <div
                  className={cn(
                    "pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300",
                    "group-hover:opacity-100",
                  )}
                  style={{
                    boxShadow: `inset 0 0 20px ${theme.glowColor}`,
                  }}
                />

                <div className="relative z-10">
                  {/* ─── Icon + Difficulty ─── */}
                  <div className="mb-3 flex items-start justify-between">
                    <motion.div
                      className={cn(
                        "flex size-12 items-center justify-center rounded-xl",
                        theme.badgeStyle,
                      )}
                      whileHover={{ y: -4, scale: 1.1 }}
                      transition={{ type: "spring" as const, stiffness: 300, damping: 15 }}
                    >
                      {theme.icon}
                    </motion.div>
                    <Badge
                      variant="outline"
                      className={cn(
                        "gap-1 border-0 text-xs font-medium",
                        theme.badgeStyle,
                      )}
                    >
                      {difficultyLabel[course.difficulty]}
                    </Badge>
                  </div>

                  {/* ─── Title & Description ─── */}
                  <h3 className="font-display text-lg font-bold">{course.title}</h3>
                  <p className="mt-1 line-clamp-2 text-xs text-text-secondary leading-relaxed">
                    {course.fullTitle}
                  </p>

                  {/* ─── Stats Row ─── */}
                  <div className="mt-4 flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-1.5 text-text-muted">
                      <BookOpen className="size-3.5 shrink-0" />
                      <span>
                        <span className="font-medium text-text-secondary">{course.chapters.length}</span>{" "}
                        <span className="hidden sm:inline">chapters</span>
                      </span>
                    </span>
                    <span className="flex items-center gap-1.5 text-text-muted">
                      <Clock className="size-3.5 shrink-0" />
                      <span>
                        <span className="font-medium text-text-secondary">~{course.estimatedHours}h</span>
                      </span>
                    </span>
                    <span className="flex items-center gap-1.5 text-text-muted">
                      <Zap className="size-3.5 shrink-0" />
                      <span>
                        <span className="font-medium text-text-secondary">{course.totalXP}</span>{" "}
                        <span className="hidden sm:inline">XP</span>
                      </span>
                    </span>
                  </div>

                  {/* ─── Progress ─── */}
                  {done > 0 && (
                    <ProgressBar
                      pct={pct}
                      accentColor={theme.accentColor}
                      animate={mounted}
                    />
                  )}
                  {done === 0 && (
                    <div className="mt-3 h-0.5 w-full rounded-full bg-bg-tertiary opacity-40" />
                  )}
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
