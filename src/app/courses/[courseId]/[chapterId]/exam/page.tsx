import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { courseRegistry } from "@/lib/courses";
import { ExamClient } from "./ExamClient";

export default async function ExamPage({
  params,
}: {
  params: Promise<{ courseId: string; chapterId: string }>;
}) {
  const { courseId, chapterId } = await params;
  const course = courseRegistry.getCourse(courseId);
  if (!course) notFound();
  const chapter = courseRegistry.getChapter(courseId, chapterId);
  if (!chapter) notFound();

  return (
    <div className="mx-auto max-w-3xl p-4 pt-6 sm:p-6 lg:p-8">
      <nav className="mb-6 flex items-center gap-2 text-sm text-text-muted">
        <Link href={`/courses/${courseId}`} className="transition-colors hover:text-text-primary">
          {course.title}
        </Link>
        <ChevronRight className="size-3.5" />
        <Link href={`/courses/${courseId}/${chapterId}`} className="transition-colors hover:text-text-primary">
          {chapter.title}
        </Link>
        <ChevronRight className="size-3.5" />
        <span className="text-text-primary">Exam</span>
      </nav>

      <ExamClient chapter={chapter} courseColor={course.color} />
    </div>
  );
}
