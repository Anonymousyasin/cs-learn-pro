"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "motion/react";
import {
  ArrowLeft, Code2, Clock, Zap,
  FileCode, Palette, Terminal, Shield,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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

// ─── Animation variants (staggered entry) ─────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 260, damping: 24 },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 200, damping: 20 },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 400, damping: 18, delay: 0.12 },
  },
};

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

export default function ProjectsPage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = use(params);
  const course = courseRegistry.getCourse(courseId);
  if (!course) notFound();

  const Icon = getCourseIcon(course.icon);
  const { projects } = course;

  return (
    <div className="mx-auto max-w-5xl space-y-6 p-4 pt-6 sm:p-6 lg:p-8">
      {/* ─── Back & Header (spring fade-in) ─── */}
      <motion.div
        className="flex items-center gap-4"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <Link
          href={`/courses/${courseId}`}
          className="flex size-8 items-center justify-center rounded-lg hover:bg-muted hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-4" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold">Projects</h1>
          <p className="text-sm text-muted-foreground">
            {course.title} &middot; {projects.length} hands-on project{projects.length !== 1 ? "s" : ""}
          </p>
        </div>
      </motion.div>

      {/* ─── Empty state ─── */}
      {projects.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" as const }}
        >
          <Card>
            <CardContent className="flex flex-col items-center gap-3 py-12">
              <Code2 className="size-12 text-muted-foreground/40" />
              <p className="text-lg font-medium">No projects yet</p>
              <p className="text-sm text-muted-foreground">
                Projects are coming soon for this course.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ) : (
        /* ─── Staggered Project Grid ─── */
        <motion.div
          className="grid gap-5 sm:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => {
            const diff = project.difficulty as keyof typeof difficultyColor;
            return (
              <motion.div key={project.id} variants={cardVariants} className="group">
                <Link
                  href={`/courses/${courseId}/projects/${project.id}`}
                  className="block h-full"
                >
                  <Card
                    className={cn(
                      "relative h-full overflow-hidden transition-all duration-300",
                      "hover:shadow-lg hover:-translate-y-0.5 cursor-pointer",
                    )}
                  >
                    {/* ─── Hover glow ring ─── */}
                    <div
                      className={cn(
                        "pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300",
                        "group-hover:opacity-100",
                      )}
                      style={{ boxShadow: `inset 0 0 24px ${course.color}22` }}
                    />

                    {/* ─── Animated top accent bar ─── */}
                    <div
                      className="h-0.5 w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                      style={{ backgroundColor: course.color }}
                    />

                    <CardHeader className="pb-3 relative z-10">
                      <div className="flex items-start justify-between gap-3">
                        {/* Title (changes color on hover) */}
                        <CardTitle
                          className="text-base leading-snug transition-colors duration-200"
                          style={{ color: "inherit" }}
                        >
                          <span
                            className="transition-colors duration-200 group-hover:text-[--hover-color]"
                            style={{ "--hover-color": course.color } as React.CSSProperties}
                          >
                            {project.title}
                          </span>
                        </CardTitle>

                        {/* Difficulty stars badge (animated entry) */}
                        <motion.div
                          variants={badgeVariants}
                          className={cn(
                            "shrink-0 rounded-md border px-2 py-0.5 text-xs font-semibold tracking-wider leading-loose select-none",
                            difficultyColor[diff] ?? "text-muted-foreground",
                          )}
                          style={{
                            borderColor: `${difficultyGlow[diff] ?? "rgba(128,128,128,0.3)"}44`,
                            backgroundColor: `${difficultyGlow[diff] ?? "rgba(128,128,128,0.1)"}11`,
                            textShadow: `0 0 6px ${difficultyGlow[diff] ?? "transparent"}`,
                          }}
                        >
                          {difficultyStars[diff] ?? ""}
                        </motion.div>
                      </div>

                      <CardDescription className="line-clamp-2 mt-1.5">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="relative z-10">
                      <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Clock className="size-3" />
                          <span>~{project.estimatedMinutes} min</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Zap className="size-3" />
                          <span>{project.xpReward} XP</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Code2 className="size-3" />
                          <span>{project.learningObjectives.length} objective{project.learningObjectives.length !== 1 ? "s" : ""}</span>
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </div>
  );
}
