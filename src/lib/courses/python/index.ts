import { Course, Chapter, Section, ExamQuestion, MultipleChoiceQuestion, TrueFalseQuestion, FillBlankQuestion, CodeOrderQuestion, MatchPairsQuestion, Project } from "../types";
import { pythonChapters1to10 } from "./chapters-1-10";
import { pythonChapters11to30 } from "./chapters-11-30";
import { pythonChapters31to40 } from "./chapters-31-40";
import { pythonProjectChapters } from "./chapters-projects";

const pythonChapters: Chapter[] = [
  // Chapters 1-10: hand-crafted quality content
  ...pythonChapters1to10,
  // Chapters 11-30: hand-crafted quality content
  ...pythonChapters11to30,
  // Chapters 31-40: advanced Python features
  ...pythonChapters31to40,
  // Project chapters 41-108: guided project-based learning
  ...pythonProjectChapters,
];

// Standalone projects replaced by guided project chapters (ch41-ch108).
// Each project is now a step-by-step learning experience built into
// the main chapter sequence via pythonProjectChapters.
const pythonProjects: Project[] = [];

export const pythonCourse: Course = {
  id: "python",
  title: "Python",
  fullTitle: "Python — Power and Simplicity",
  description: "Python for everyone. Learn syntax, data structures, OOP, file handling, standard library, async, testing, and essential packages — from zero to production-ready.",
  icon: "Terminal",
  color: "#22c55e",
  difficulty: 2,
  chapters: pythonChapters,
  projects: pythonProjects,
  totalXP: 5931,
  estimatedHours: 101,
};
