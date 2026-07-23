"use client";

import { useMemo, useRef } from "react";
import { useProgress } from "@/lib/progress";
import { useUser } from "@/lib/supabase-provider";
import { courseRegistry } from "@/lib/courses";
import { calculateCGPA, isCourseComplete } from "@/lib/cgpa";
import {
  Award,
  Download,
  CheckCircle2,
  XCircle,
  Trophy,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CourseCertificate({ courseId }: { courseId: string }) {
  const { user } = useUser();
  const userId = user?.id ?? null;
  const { progress } = useProgress(userId);

  const course = useMemo(() => courseRegistry.getCourse(courseId), [courseId]);
  const cgpa = useMemo(
    () => (course ? calculateCGPA(progress, course) : null),
    [progress, course]
  );
  const complete = useMemo(
    () => (course ? isCourseComplete(progress, course) : false),
    [progress, course]
  );

  if (!course || !cgpa) {
    return (
      <div className="mx-auto max-w-lg py-20 text-center">
        <p className="text-text-muted">Course not found.</p>
      </div>
    );
  }

  const userName =
    user?.user_metadata?.name || user?.email || "Student";

  const downloadPDF = () => {
    // Dynamic import to avoid SSR issues
    import("jspdf").then(({ default: jsPDF }) => {
      const doc = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      });

      const pageWidth = 297;
      const pageHeight = 210;

      // White background
      doc.setFillColor(255, 255, 255);
      doc.rect(0, 0, pageWidth, pageHeight, "F");

      // Decorative border
      doc.setDrawColor(232, 131, 110);
      doc.setLineWidth(2);
      doc.rect(10, 10, pageWidth - 20, pageHeight - 20);
      doc.setLineWidth(0.5);
      doc.setDrawColor(200, 200, 200);
      doc.rect(13, 13, pageWidth - 26, pageHeight - 26);

      // Title
      doc.setFont("helvetica", "bold");
      doc.setFontSize(36);
      doc.setTextColor(232, 131, 110);
      doc.text("Certificate of Completion", pageWidth / 2, 55, {
        align: "center",
      });

      // Decorative line
      doc.setDrawColor(232, 131, 110);
      doc.setLineWidth(0.5);
      doc.line(80, 62, pageWidth - 80, 62);

      // This certifies that
      doc.setFont("helvetica", "normal");
      doc.setFontSize(14);
      doc.setTextColor(100, 100, 100);
      doc.text("This certifies that", pageWidth / 2, 80, { align: "center" });

      // Name
      doc.setFont("helvetica", "bold");
      doc.setFontSize(28);
      doc.setTextColor(50, 50, 50);
      doc.text(userName, pageWidth / 2, 98, { align: "center" });

      // Has completed
      doc.setFont("helvetica", "normal");
      doc.setFontSize(14);
      doc.setTextColor(100, 100, 100);
      doc.text("has successfully completed the", pageWidth / 2, 115, {
        align: "center",
      });

      // Course name
      doc.setFont("helvetica", "bold");
      doc.setFontSize(22);
      doc.setTextColor(232, 131, 110);
      doc.text(course.fullTitle || course.title, pageWidth / 2, 132, {
        align: "center",
      });

      // Stats
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.setTextColor(80, 80, 80);

      const statsY = 155;
      doc.text(
        `Course Average: ${cgpa.cgpa} / 100`,
        pageWidth / 2,
        statsY,
        { align: "center" }
      );
      doc.text(
        `Chapters Completed: ${cgpa.completedChapters} / ${cgpa.totalChapters}`,
        pageWidth / 2,
        statsY + 8,
        { align: "center" }
      );
      doc.text(
        `Total XP Earned: ${cgpa.totalXP}`,
        pageWidth / 2,
        statsY + 16,
        { align: "center" }
      );

      // Date
      const today = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      doc.setFont("helvetica", "italic");
      doc.setFontSize(10);
      doc.setTextColor(150, 150, 150);
      doc.text(`Issued: ${today}`, pageWidth / 2, 185, { align: "center" });

      doc.save(`${course.id}-certificate.pdf`);
    });
  };

  if (!complete) {
    return (
      <div className="mx-auto max-w-lg py-20 text-center">
        <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-accent-warning/10">
          <XCircle className="size-8 text-accent-warning" />
        </div>
        <h2 className="mb-2 text-xl font-bold text-text-primary">
          Course Not Yet Complete
        </h2>
        <p className="mb-2 text-sm text-text-secondary">
          Complete all chapters and pass all exams to earn your certificate.
        </p>
        <div className="mb-6 text-sm text-text-muted">
          <p>
            Chapters: {cgpa.completedChapters} / {cgpa.totalChapters}
          </p>
          <p>Course Average: {cgpa.cgpa} / 100</p>
        </div>
        <Link href={`/courses/${courseId}`}>
          <Button className="gap-2 bg-accent-primary text-white hover:bg-accent-primary-hover">
            Continue Learning
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl py-12 text-center">
      {/* Certificate Display */}
      <div className="rounded-2xl border-2 border-accent-primary/20 bg-white p-8 shadow-lg">
        {/* Decorative top */}
        <div className="mb-6 flex justify-center gap-2">
          {[1, 2, 3].map((i) => (
            <Star key={i} className="size-5 fill-accent-primary text-accent-primary" />
          ))}
        </div>

        <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-accent-primary/10">
          <Award className="size-8 text-accent-primary" />
        </div>

        <h1 className="mb-1 text-3xl font-bold text-text-primary">
          Certificate of Completion
        </h1>
        <p className="mb-6 text-sm text-text-muted">
          This certifies that
        </p>

        <p className="mb-2 text-2xl font-bold text-text-primary">
          {userName}
        </p>
        <p className="mb-6 text-sm text-text-secondary">
          has successfully completed
        </p>

        <p className="mb-6 text-xl font-bold text-accent-primary">
          {course.fullTitle || course.title}
        </p>

        {/* Stats Grid */}
        <div className="mx-auto mb-6 grid max-w-md grid-cols-3 gap-4">
          <div className="rounded-lg bg-bg-tertiary p-3">
            <p className="text-2xl font-bold text-accent-primary">{cgpa.cgpa}</p>
            <p className="text-xs text-text-muted">Course Average</p>
          </div>
          <div className="rounded-lg bg-bg-tertiary p-3">
            <p className="text-2xl font-bold text-accent-secondary">
              {cgpa.completedChapters}/{cgpa.totalChapters}
            </p>
            <p className="text-xs text-text-muted">Chapters</p>
          </div>
          <div className="rounded-lg bg-bg-tertiary p-3">
            <p className="text-2xl font-bold text-accent-info">{cgpa.totalXP}</p>
            <p className="text-xs text-text-muted">Total XP</p>
          </div>
        </div>

        <p className="mb-2 text-xs text-text-muted">
          Issued:{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className="mb-6 flex items-center justify-center gap-4 text-xs text-text-muted">
          <div className="flex items-center gap-1">
            <CheckCircle2 className="size-3 text-accent-secondary" />
            <span>All chapters completed</span>
          </div>
          <div className="flex items-center gap-1">
            <Trophy className="size-3 text-accent-primary" />
            <span>CGPA: {cgpa.cgpa}/100</span>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <div className="mt-6">
        <Button
          onClick={downloadPDF}
          className="gap-2 bg-accent-primary text-white hover:bg-accent-primary-hover"
        >
          <Download className="size-4" />
          Download PDF Certificate
        </Button>
      </div>
    </div>
  );
}
