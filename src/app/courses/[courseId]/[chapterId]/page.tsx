import { notFound } from "next/navigation";
import { courseRegistry } from "@/lib/courses";
import ChapterClient from "@/components/chapter/ChapterClient";

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

  return (
    <ChapterClient
      courseId={courseId}
      courseTitle={course.title}
      chapter={chapter}
      chapterIndex={chapterIndex}
      totalChapters={course.chapters.length}
      prevChapter={prevChapter ? { id: prevChapter.id, title: prevChapter.title } : null}
      nextChapter={nextChapter ? { id: nextChapter.id, title: nextChapter.title } : null}
    />
  );
}
