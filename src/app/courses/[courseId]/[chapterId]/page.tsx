import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft, BookOpen, ChevronRight, CheckCircle2,
  Sparkles, Zap, ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { courseRegistry } from "@/lib/courses";
import SectionRenderer from "@/components/chapter/SectionRenderer";

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ courseId: string; chapterId: string }>;
}) {
  const { courseId, chapterId } = await params;
  const course = courseRegistry.getCourse(courseId);
  if (!course) notFound();
  const chapter = courseRegistry.getChapter(courseId, chapterId);
  if (!chapter) notFound();

  const chapterIndex = course.chapters.findIndex((c) => c.id === chapterId);
  const prevChapter = chapterIndex > 0 ? course.chapters[chapterIndex - 1] : null;
  const nextChapter = chapterIndex < course.chapters.length - 1 ? course.chapters[chapterIndex + 1] : null;

  const textSections = chapter.sections.filter((s) => s.type === "text");
  const codeSections = chapter.sections.filter((s) => s.type === "code");

  return (
    <div className="mx-auto max-w-4xl p-4 pt-6 sm:p-6 lg:p-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-text-muted">
        <Link href={`/courses/${courseId}`} className="transition-colors hover:text-text-primary">
          {course.title}
        </Link>
        <ChevronRight className="size-3.5" />
        <span className="truncate text-text-primary">{chapter.title}</span>
      </nav>

      <div className="space-y-8">
        {/* Chapter Header */}
        <div className="space-y-3">
          <Badge variant="default" className="bg-accent-primary-light text-accent-primary w-fit">
            Chapter {chapter.order} of {course.chapters.length}
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight text-text-primary">
            {chapter.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-text-secondary">
            <span className="flex items-center gap-1.5">
              <Zap className="size-3.5" />
              {chapter.xpReward} XP
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="size-3.5" />
              {chapter.estimatedMinutes} min
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="size-3.5" />
              {chapter.sections.length} sections
            </span>
          </div>
        </div>

        {/* Chapter Content */}
        <div className="space-y-5">
          {chapter.sections.map((section, i) => (
            <SectionRenderer key={i} section={section} index={i} />
          ))}
        </div>

        {/* Key Points Summary */}
        {chapter.keyPoints.length > 0 && (
          <div className="rounded-xl border border-accent-secondary/20 bg-accent-secondary/5 p-5">
            <div className="mb-3 flex items-center gap-2">
              <Sparkles className="size-4 text-accent-secondary" />
              <span className="text-sm font-semibold text-accent-secondary">Chapter Summary</span>
            </div>
            <ul className="space-y-2">
              {chapter.keyPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                  <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-accent-secondary" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        )}

        <Separator className="my-2" />

        {/* Exam CTA */}
        <div className="flex items-center justify-between rounded-xl border border-border bg-gradient-to-r from-bg-tertiary to-bg-card p-5">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-accent-warning/10">
              <BookOpen className="size-5 text-accent-warning" />
            </div>
            <div>
              <p className="text-sm font-medium text-text-primary">Ready to test your knowledge?</p>
              <p className="text-xs text-text-muted">Pass with 95% to unlock the next chapter</p>
            </div>
          </div>
          <Link href={`/courses/${courseId}/${chapterId}/exam`}>
            <Button className="gap-2 bg-accent-primary text-white hover:bg-accent-primary-hover">
              Take Exam
              <ArrowLeft className="size-4 rotate-180" />
            </Button>
          </Link>
        </div>

        {/* Prev / Next Navigation */}
        <div className="flex items-center justify-between gap-4">
          {prevChapter ? (
            <Link href={`/courses/${courseId}/${prevChapter.id}`} className="group flex-1">
              <div className="rounded-xl border border-border p-4 transition-colors hover:border-border-light hover:bg-bg-hover">
                <p className="text-xs text-text-muted">Previous</p>
                <p className="mt-0.5 flex items-center gap-1 text-sm font-medium text-text-primary group-hover:text-accent-primary transition-colors">
                  <ArrowLeft className="size-3.5" />
                  {prevChapter.title}
                </p>
              </div>
            </Link>
          ) : <div className="flex-1" />}
          {nextChapter ? (
            <Link href={`/courses/${courseId}/${nextChapter.id}`} className="group flex-1 text-right">
              <div className="rounded-xl border border-border p-4 transition-colors hover:border-border-light hover:bg-bg-hover">
                <p className="text-xs text-text-muted">Next</p>
                <p className="mt-0.5 flex items-center justify-end gap-1 text-sm font-medium text-text-primary group-hover:text-accent-primary transition-colors">
                  {nextChapter.title}
                  <ArrowRight className="size-3.5" />
                </p>
              </div>
            </Link>
          ) : <div className="flex-1" />}
        </div>
      </div>
    </div>
  );
}
