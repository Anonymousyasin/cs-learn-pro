import { CourseRegistry, Course } from "./types";
import { htmlCourse } from "./html";
import { cssCourse } from "./css";
import { javascriptCourse } from "./javascript";
import { pythonCourse } from "./python";
import { csCourse } from "./cs";

const allCourses: Course[] = [
  htmlCourse,
  cssCourse,
  javascriptCourse,
  pythonCourse,
  csCourse,
];

export const courseRegistry: CourseRegistry = {
  courses: allCourses,
  getCourse(id: string): Course | undefined {
    return allCourses.find((c) => c.id === id);
  },
  getChapter(courseId: string, chapterId: string) {
    const course = this.getCourse(courseId);
    return course?.chapters.find((ch) => ch.id === chapterId);
  },
  getProject(courseId: string, projectId: string) {
    const course = this.getCourse(courseId);
    return course?.projects.find((p) => p.id === projectId);
  },
};
