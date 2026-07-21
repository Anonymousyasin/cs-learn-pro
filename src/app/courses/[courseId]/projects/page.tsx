import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft, Code2, Clock, Zap, Star,
  FileCode, Palette, Terminal, Shield,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { courseRegistry } from "@/lib/courses";

const difficultyLabel = ["", "Beginner", "Easy", "Intermediate", "Hard", "Advanced"];
const difficultyColor = ["", "text-green-500", "text-emerald-500", "text-yellow-500", "text-orange-500", "text-red-500"];

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

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;
  const course = courseRegistry.getCourse(courseId);
  if (!course) notFound();

  const Icon = getCourseIcon(course.icon);
  const { projects } = course;

  return (
    <div className="mx-auto max-w-4xl space-y-6 p-4 pt-6 sm:p-6 lg:p-8">
      {/* Back & Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href={`/courses/${courseId}`}>
            <ArrowLeft className="size-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-bold">Projects</h1>
          <p className="text-sm text-muted-foreground">
            {course.title} &middot; {projects.length} hands-on projects
          </p>
        </div>
      </div>

      {projects.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center gap-3 py-12">
            <Code2 className="size-12 text-muted-foreground/40" />
            <p className="text-lg font-medium">No projects yet</p>
            <p className="text-sm text-muted-foreground">
              Projects are coming soon for this course.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/courses/${courseId}/projects/${project.id}`}
              className="group block"
            >
              <Card className="h-full transition-all hover:border-primary/50 hover:shadow-md">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-base group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge
                      variant="outline"
                      className={`shrink-0 ${difficultyColor[project.difficulty]}`}
                    >
                      <Star className="mr-1 size-3" />
                      {difficultyLabel[project.difficulty]}
                    </Badge>
                  </div>
                  <CardDescription className="line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="size-3" />
                      ~{project.estimatedMinutes} min
                    </span>
                    <span className="flex items-center gap-1">
                      <Zap className="size-3" />
                      {project.xpReward} XP
                    </span>
                    <span className="flex items-center gap-1">
                      <Code2 className="size-3" />
                      {project.learningObjectives.length} objectives
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
