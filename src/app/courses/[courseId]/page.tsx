import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FileCode, Palette, Code2, Terminal, Shield,
  Clock, Star, Zap, Award, BookOpen, ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { courseRegistry } from "@/lib/courses";
import { CourseChapters } from "@/components/course/CourseChapters";

const difficultyLabel = ["", "Beginner", "Intermediate", "Advanced", "Expert", "Master"];

function getCourseIcon(icon: string) {
  switch (icon) {
    case "FileCode": return FileCode;
    case "Palette": return Palette;
    case "Code2": return Code2;
    case "Terminal": return Terminal;
    case "Shield": return Shield;
    default: return FileCode;
  }
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;
  const course = courseRegistry.getCourse(courseId);
  if (!course) notFound();

  const Icon = getCourseIcon(course.icon);
  const total = course.chapters.length;

  return (
    <div className="mx-auto max-w-4xl space-y-6 p-4 pt-6 sm:p-6 lg:p-8">
      {/* Course Header */}
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
                  <Badge variant="default" className="mb-2" style={{ backgroundColor: `${course.color}15`, color: course.color }}>
                    Course
                  </Badge>
                  <CardTitle className="text-2xl">{course.title}</CardTitle>
                  <p className="mt-0.5 text-sm text-text-muted">{course.fullTitle}</p>
                </div>
              </div>
              <CardDescription className="mt-3 max-w-prose">
                {course.description}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <span className="flex items-center gap-1.5 text-text-secondary">
              <BookOpen className="size-3.5" />
              {total} chapters
            </span>
            <span className="flex items-center gap-1.5 text-text-secondary">
              <Clock className="size-3.5" />
              ~{course.estimatedHours}h
            </span>
            <span className="flex items-center gap-1.5 text-text-secondary">
              <Star className="size-3.5" />
              {difficultyLabel[course.difficulty]}
            </span>
            <span className="flex items-center gap-1.5 text-text-secondary">
              <Zap className="size-3.5" />
              {course.totalXP} XP
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Chapters */}
      <Card>
        <CardHeader>
          <CardTitle>Course Content</CardTitle>
          <CardDescription>
            {total} chapters &middot; Pass the exam with 95% to unlock the next chapter
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CourseChapters
            courseId={courseId}
            chapters={course.chapters}
            courseColor={course.color}
          />
        </CardContent>
      </Card>

      {/* Projects */}
      {course.projects.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Hands-On Projects</CardTitle>
            <CardDescription>
              {course.projects.length} projects to reinforce what you&apos;ve learned
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link
              href={`/courses/${courseId}/projects`}
              className="group flex items-center justify-between rounded-lg border p-4 transition-all hover:border-primary/50 hover:bg-muted/30"
              style={{ borderColor: `${course.color}30` }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex size-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${course.color}15` }}
                >
                  <Code2 className="size-5" style={{ color: course.color }} />
                </div>
                <div>
                  <p className="font-medium group-hover:text-primary transition-colors">
                    View All Projects
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {course.projects.length} projects &middot; Build real-world applications
                  </p>
                </div>
              </div>
              <ArrowRight className="size-5 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
