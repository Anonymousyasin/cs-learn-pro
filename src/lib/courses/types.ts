// ─── Section Types ──────────────────────────────────────────────
export interface TextSection {
  type: "text";
  content: string;           // Supports **bold** and `inline code` — parsed at render
}

export interface CodeSection {
  type: "code";
  content: string;           // Multi-line code
  language: string;          // "html" | "css" | "javascript" | "python" | "c" | "bash"
  caption?: string;          // Optional description above the code
}

export interface CalloutSection {
  type: "callout";
  style: "info" | "tip" | "warning" | "important";
  content: string;
}

export interface ListSection {
  type: "list";
  items: string[];
  ordered?: boolean;         // true = <ol>, false = <ul>
}

export interface ImageSection {
  type: "image";
  alt: string;
  svg: string;               // Inline SVG markup
  caption?: string;
}

export interface FormulaSection {
  type: "formula";
  content: string;           // e.g., "O(n log n)"
  description?: string;      // Plain English explanation
}

export interface InteractiveSection {
  type: "interactive";
  component: string;         // Component name to render
  config: Record<string, unknown>;
}

export interface ComparisonSection {
  type: "comparison";
  title: string;                            // "var vs let vs const"
  headers: string[];                        // ["Feature", "var", "let", "const"]
  rows: string[][];                         // Each row matches headers length
}

export interface ExerciseSection {
  type: "exercise";
  title: string;
  description: string;
  instructions: string[];
  expectedOutput?: string;
  hint?: string;
}

export interface KeyPointsSection {
  type: "key-points";
  points: string[];
}

export type Section =
  | TextSection | CodeSection | CalloutSection | ListSection
  | ImageSection | FormulaSection | InteractiveSection
  | ComparisonSection | ExerciseSection | KeyPointsSection;

// ─── Exam Question Types ────────────────────────────────────────
export type ExamDifficulty = "easy" | "medium" | "hard";

export interface MultipleChoiceQuestion {
  id: string;
  type: "multiple-choice";
  difficulty: ExamDifficulty;
  question: string;
  options: Array<{ id: string; text: string }>;
  correctAnswer: string;         // option id
  explanation: string;
}

export interface TrueFalseQuestion {
  id: string;
  type: "true-false";
  difficulty: ExamDifficulty;
  question: string;
  correctAnswer: boolean;
  explanation: string;
}

export interface FillBlankQuestion {
  id: string;
  type: "fill-blank";
  difficulty: ExamDifficulty;
  question: string;              // Use ___ for blank
  correctAnswer: string;         // Case-insensitive match
  acceptableAnswers?: string[];  // Alternative correct answers
  explanation: string;
}

export interface CodeOrderQuestion {
  id: string;
  type: "code-order";
  difficulty: ExamDifficulty;
  question: string;
  codeLines: string[];           // Shuffled lines
  correctOrder: number[];        // Indices in correct sequence
  explanation: string;
}

export interface MatchPairsQuestion {
  id: string;
  type: "match-pairs";
  difficulty: ExamDifficulty;
  question: string;
  leftItems: string[];
  rightItems: string[];
  correctMatches: Array<[number, number]>;  // leftIndex, rightIndex pairs
  explanation: string;
}

export type ExamQuestion =
  | MultipleChoiceQuestion
  | TrueFalseQuestion
  | FillBlankQuestion
  | CodeOrderQuestion
  | MatchPairsQuestion;

// ─── Chapter ────────────────────────────────────────────────────
export interface Chapter {
  id: string;                     // "html-headings"
  courseId: string;               // "html"
  title: string;
  order: number;
  sections: Section[];
  examPool: ExamQuestion[];       // 25-35 questions — 15-20 drawn at random
  xpReward: number;               // XP for passing the exam
  estimatedMinutes: number;
  prerequisites: string[];        // chapter IDs
  keyPoints: string[];
}

// ─── Course ─────────────────────────────────────────────────────
export interface Course {
  id: string;                     // "html"
  title: string;                  // "HTML"
  fullTitle: string;              // "HTML — The Language of the Web"
  description: string;
  icon: string;                   // lucide-react icon name
  color: string;                  // hex color for accents
  difficulty: 1 | 2 | 3 | 4 | 5;
  chapters: Chapter[];
  totalXP: number;                // Sum of all chapter XP rewards
  estimatedHours: number;
}

// ─── Course Registry ────────────────────────────────────────────
export interface CourseRegistry {
  courses: Course[];
  getCourse(id: string): Course | undefined;
  getChapter(courseId: string, chapterId: string): Chapter | undefined;
}
