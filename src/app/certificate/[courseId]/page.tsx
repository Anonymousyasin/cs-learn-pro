import { notFound } from "next/navigation";
import { courseRegistry } from "@/lib/courses";
import CourseCertificate from "@/components/course/CourseCertificate";

export default async function CertificatePage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;
  const course = courseRegistry.getCourse(courseId);
  if (!course) notFound();

  return <CourseCertificate courseId={courseId} />;
}
