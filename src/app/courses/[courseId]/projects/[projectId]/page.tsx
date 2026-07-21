"use client";

import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft, Clock, Zap, CheckCircle2,
  Lightbulb, Code2, Target, ListChecks,
  FileCode, Palette, Terminal, Shield, ChevronDown,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { courseRegistry } from "@/lib/courses";

// ─── Difficulty helpers ────────────────────────────────────────
const difficultyStars: Record<number, string> = {
  1: "\u2605",
  2: "\u2605\u2605",
  3: "\u2605\u2605\u2605",
  4: "\u2605\u2605\u2605\u2605",
  5: "\u2605\u2605\u2605\u2605\u2605",
};
const difficultyColor: Record<number, string> = {
  1: "text-green-500",
  2: "text-emerald-500",
  3: "text-yellow-500",
  4: "text-orange-500",
  5: "text-red-500",
};
const difficultyGlow: Record<number, string> = {
  1: "rgba(34,197,94,0.35)",
  2: "rgba(16,185,129,0.35)",
  3: "rgba(234,179,8,0.35)",
  4: "rgba(249,115,22,0.35)",
  5: "rgba(239,68,68,0.35)",
};

// ─── Animation variants ────────────────────────────────────────
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 22,
      delay: i * 0.08,
    },
  }),
};

const headerVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 200, damping: 20 },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 220,
      damping: 22,
      delay: 0.1 + i * 0.05,
    },
  }),
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 18,
      delay: 0.15 + i * 0.06,
    },
  }),
};

// ─── Hint accordion sub-component ──────────────────────────────
function HintItem({ hint, index, courseColor }: { hint: string; index: number; courseColor: string }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="overflow-hidden rounded-lg border"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 + index * 0.08, type: "spring" as const, stiffness: 200, damping: 22 }}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={cn(
          "flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-medium transition-colors",
          "hover:bg-muted/50",
        )}
        style={{
          backgroundColor: open ? `${courseColor}08` : undefined,
        }}
      >
        <span className="flex items-center gap-2">
          <Lightbulb className="size-4 shrink-0 text-yellow-500" />
          <span>
            <span style={{ color: courseColor }}>Hint {index + 1}</span>
          </span>
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
          className="shrink-0 text-muted-foreground"
        >
          <ChevronDown className="size-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="border-t px-4 py-3 text-sm leading-relaxed text-muted-foreground">
              {hint}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Icon resolver ─────────────────────────────────────────────
function getCourseIcon(icon: string) {
  switch (icon) {
    case "FileCode": return FileCode;
    case "Palette":  return Palette;
    case "Code2":    return Code2;
    case "Terminal": return Terminal;
    case "Shield":   return Shield;
    default:         return FileCode;
  }
}

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ courseId: string; projectId: string }>;
}) {
  const { courseId, projectId } = use(params);
  const course = courseRegistry.getCourse(courseId);
  if (!course) notFound();

  const project = courseRegistry.getProject(courseId, projectId);
  if (!project) notFound();

  const Icon = getCourseIcon(course.icon);
  const diff = project.difficulty as keyof typeof difficultyColor;

  return (
    <div className="mx-auto max-w-4xl space-y-6 p-4 pt-6 sm:p-6 lg:p-8">
      {/* ─── Back Button + Title (spring fade-in) ─── */}
      <motion.div
        className="flex items-center gap-4"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <Link
          href={`/courses/${courseId}/projects`}
          className="flex size-8 items-center justify-center rounded-lg hover:bg-muted hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-4" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold">{project.title}</h1>
          <p className="text-sm text-muted-foreground">
            {course.title} project
          </p>
        </div>
      </motion.div>

      {/* ─── Header Card (fade-in) ─── */}
      <motion.div
        custom={0}
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <Card className="border-border/50 overflow-hidden">
          <div className="h-1" style={{ backgroundColor: course.color }} />
          <CardHeader>
            <div className="flex items-start gap-4">
              <div
                className="flex size-14 shrink-0 items-center justify-center rounded-2xl"
                style={{ backgroundColor: `${course.color}15` }}
              >
                <Icon className="size-7" style={{ color: course.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    {/* Difficulty stars badge */}
                    <span
                      className={cn(
                        "inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-xs font-semibold tracking-wider select-none",
                        difficultyColor[diff] ?? "text-muted-foreground",
                      )}
                      style={{
                        borderColor: `${difficultyGlow[diff] ?? "rgba(128,128,128,0.3)"}44`,
                        backgroundColor: `${difficultyGlow[diff] ?? "rgba(128,128,128,0.1)"}11`,
                        textShadow: `0 0 6px ${difficultyGlow[diff] ?? "transparent"}`,
                      }}
                    >
                      {difficultyStars[diff] ?? ""}
                    </span>
                  </div>
                </div>
                <CardDescription className="mt-3 max-w-prose">
                  {project.description}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <Clock className="size-3.5" />
                ~{project.estimatedMinutes} minutes
              </span>
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <Zap className="size-3.5" />
                {project.xpReward} XP
              </span>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* ─── Learning Objectives (staggered list items) ─── */}
      <motion.div
        custom={1}
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Target className="size-5 text-primary" />
              <CardTitle className="text-lg">Learning Objectives</CardTitle>
            </div>
            <CardDescription>
              What you&apos;ll practice and master in this project
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {project.learningObjectives.map((obj, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={listItemVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex items-start gap-2"
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-green-500" />
                  <span>{obj}</span>
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* ─── Requirements (numbered circles with motion) ─── */}
      <motion.div
        custom={2}
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <ListChecks className="size-5" style={{ color: course.color }} />
              <CardTitle className="text-lg">Requirements</CardTitle>
            </div>
            <CardDescription>
              Your project must meet these criteria
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {project.requirements.map((req, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={listItemVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex items-start gap-3"
                >
                  {/* Numbered circle with course accent color */}
                  <span
                    className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{
                      backgroundColor: course.color,
                      boxShadow: `0 0 8px ${course.color}55`,
                    }}
                  >
                    {i + 1}
                  </span>
                  <span className="pt-0.5 leading-relaxed">{req}</span>
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* ─── Hints (animated accordion) ─── */}
      {project.hints.length > 0 && (
        <motion.div
          custom={3}
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Lightbulb className="size-5 text-yellow-500" />
                <CardTitle className="text-lg">Hints</CardTitle>
              </div>
              <CardDescription>
                Stuck? Click a hint to reveal it
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {project.hints.map((hint, i) => (
                  <HintItem
                    key={i}
                    hint={hint}
                    index={i}
                    courseColor={course.color}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* ─── Concepts Reinforced (colored badges) ─── */}
      {project.expectedConcepts.length > 0 && (
        <motion.div
          custom={4}
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Code2 className="size-5" style={{ color: course.color }} />
                <CardTitle className="text-lg">Concepts Reinforced</CardTitle>
              </div>
              <CardDescription>
                Chapters and topics this project builds upon
              </CardDescription>
            </CardHeader>
            <CardContent>
              <motion.div
                className="flex flex-wrap gap-2"
                initial="hidden"
                animate="visible"
              >
                {project.expectedConcepts.map((concept, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={badgeVariants}
                  >
                    <Badge
                      className="border text-xs font-medium"
                      style={{
                        backgroundColor: `${course.color}15`,
                        color: course.color,
                        borderColor: `${course.color}35`,
                      }}
                    >
                      {concept}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* ─── Action Buttons ─── */}
      <motion.div
        className="flex gap-3"
        custom={5}
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Back to Projects button (enhanced with course color on hover) */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring" as const, stiffness: 400, damping: 17 }}
        >
          <Link
            href={`/courses/${courseId}/projects`}
            className={cn(
              "group inline-flex items-center justify-center rounded-lg border border-border bg-background px-3 h-9 gap-1.5 text-sm font-medium",
              "transition-all duration-200 hover:shadow-sm",
            )}
            style={{
              // Subtle glow ring on the border on hover
              transition: "all 0.2s ease",
            }}
          >
            <ArrowLeft
              className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5"
              style={{ color: course.color }}
            />
            <span className="transition-colors duration-200 group-hover:text-[--hover-color]"
              style={{ "--hover-color": course.color } as React.CSSProperties}
            >
              Back to Projects
            </span>
          </Link>
        </motion.div>

        {/* Start Learning button (uses course accent color) */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring" as const, stiffness: 400, damping: 17 }}
        >
          <Link
            href={`/courses/${courseId}/chapters/${project.expectedConcepts[0] || course.chapters[0]?.id}`}
            className="group inline-flex items-center justify-center rounded-lg px-4 h-9 gap-1.5 text-sm font-medium text-white transition-all duration-200 hover:shadow-md"
            style={{
              backgroundColor: course.color,
            }}
          >
            <span>Start Learning</span>
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" as const }}
            >
              <Zap className="size-4" />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
