"use client";

import { Lock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface LockGateProps {
  courseId: string;
  chapterTitle: string;
  requiredChapterId: string;
  requiredChapterTitle: string;
}

export default function LockGate({
  courseId,
  chapterTitle,
  requiredChapterId,
  requiredChapterTitle,
}: LockGateProps) {
  return (
    <div className="mx-auto max-w-md py-20 text-center">
      <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-accent-warning/10">
        <Lock className="size-8 text-accent-warning" />
      </div>
      <h2 className="mb-2 text-xl font-bold text-text-primary">
        Chapter Locked
      </h2>
      <p className="mb-2 text-sm text-text-secondary">
        Complete <strong className="text-text-primary">{requiredChapterTitle}</strong> first
        to unlock <strong className="text-text-primary">{chapterTitle}</strong>.
      </p>
      <p className="mb-6 text-xs text-text-muted">
        You need to pass the exam with 95% or higher to proceed.
      </p>
      <Link href={`/courses/${courseId}/${requiredChapterId}`}>
        <Button className="gap-2 bg-accent-primary text-white hover:bg-accent-primary-hover">
          Go to {requiredChapterTitle}
        </Button>
      </Link>
    </div>
  );
}
