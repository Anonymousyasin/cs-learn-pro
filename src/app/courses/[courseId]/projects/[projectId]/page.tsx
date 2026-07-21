import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft, Clock, Zap, Star, CheckCircle2,
  Lightbulb, Code2, Target, ListChecks,
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

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ courseId: string; projectId: string }>;
}) {
  const { courseId, projectId } = await params;
  const course = courseRegistry.getCourse(courseId);
  if (!course) notFound();

  const project = courseRegistry.getProject(courseId, projectId);
  if (!project) notFound();

  const Icon = getCourseIcon(course.icon);

  return (
    <div className="mx-auto max-w-4xl space-y-6 p-4 pt-6 sm:p-6 lg:p-8">
      {/* Back */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href={`/courses/${courseId}/projects`}>
            <ArrowLeft className="size-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-bold">{project.title}</h1>
          <p className="text-sm text-muted-foreground">
            {course.title} project
          </p>
        </div>
      </div>

      {/* Header Card */}
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
                  <Badge
                    variant="outline"
                    className={difficultyColor[project.difficulty]}
                  >
                    <Star className="mr-1 size-3" />
                    {difficultyLabel[project.difficulty]}
                  </Badge>
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

      {/* Learning Objectives */}
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
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-green-500" />
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Requirements */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <ListChecks className="size-5 text-primary" />
            <CardTitle className="text-lg">Requirements</CardTitle>
          </div>
          <CardDescription>
            Your project must meet these criteria
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {project.requirements.map((req, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                  {i + 1}
                </span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Hints */}
      {project.hints.length > 0 && (
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Lightbulb className="size-5 text-yellow-500" />
              <CardTitle className="text-lg">Hints</CardTitle>
            </div>
            <CardDescription>
              Stuck? Here are some pointers to help
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {project.hints.map((hint, i) => (
                <li key={i} className="rounded-lg border bg-muted/30 p-3 text-sm">
                  <span className="font-medium text-primary">Hint {i + 1}:</span> {hint}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Concepts Reinforced */}
      {project.expectedConcepts.length > 0 && (
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Code2 className="size-5 text-primary" />
              <CardTitle className="text-lg">Concepts Reinforced</CardTitle>
            </div>
            <CardDescription>
              Chapters and topics this project builds upon
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {project.expectedConcepts.map((concept, i) => (
                <Badge key={i} variant="secondary">
                  {concept}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Actions */}
      <div className="flex gap-3">
        <Button variant="outline" asChild>
          <Link href={`/courses/${courseId}/projects`}>
            <ArrowLeft className="mr-2 size-4" />
            Back to Projects
          </Link>
        </Button>
        <Button asChild>
          <Link href={`/courses/${courseId}/chapters/${project.expectedConcepts[0] || course.chapters[0]?.id}`}>
            Start Learning
            <Zap className="ml-2 size-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
