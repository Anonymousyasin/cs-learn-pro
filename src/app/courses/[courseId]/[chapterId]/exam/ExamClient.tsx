"use client";

import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import {
  BookOpen, CheckCircle2, XCircle, ArrowLeft,
  RotateCcw, Trophy, ChevronRight, AlertTriangle,
  HelpCircle, Zap,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useProgress } from "@/lib/progress";
import { toast } from "sonner";
import type { Chapter, ExamQuestion, MultipleChoiceQuestion, TrueFalseQuestion, FillBlankQuestion, CodeOrderQuestion, MatchPairsQuestion } from "@/lib/courses/types";

const PASS_THRESHOLD = 0.95;
const QUESTIONS_PER_EXAM = 15;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type ExamPhase = "intro" | "taking" | "results";

export function ExamClient({ chapter, courseColor }: { chapter: Chapter; courseColor: string }) {
  const { passExam: savePassExam } = useProgress();
  const [phase, setPhase] = useState<ExamPhase>("intro");
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [answers, setAnswers] = useState<Record<string, unknown>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState<Record<string, boolean>>({});
  const [attempt, setAttempt] = useState(1);

  const startExam = useCallback(() => {
    const pool = chapter.examPool.length > 0 ? chapter.examPool : fallbackQuestions;
    const selected = shuffle(pool).slice(0, Math.min(QUESTIONS_PER_EXAM, pool.length));
    setQuestions(selected);
    setAnswers({});
    setSubmitted(false);
    setScore(0);
    setResults({});
    setPhase("taking");
  }, [chapter.examPool]);

  const setAnswer = useCallback((qId: string, value: unknown) => {
    setAnswers((prev) => ({ ...prev, [qId]: value }));
  }, []);

  const submitExam = useCallback(() => {
    let correct = 0;
    const res: Record<string, boolean> = {};
    for (const q of questions) {
      const userAns = answers[q.id];
      const isCorrect = checkAnswer(q, userAns);
      res[q.id] = isCorrect;
      if (isCorrect) correct++;
    }
    setResults(res);
    const finalScore = correct / questions.length;
    setScore(finalScore);
    setSubmitted(true);
    if (finalScore >= 0.95) {
      savePassExam(chapter.id, finalScore, chapter.xpReward);
      toast.success(`+${chapter.xpReward} XP earned!`, {
        description: `Passed ${chapter.title} exam with ${Math.round(finalScore * 100)}%`,
      });
    } else {
      toast.error(`Score: ${Math.round(finalScore * 100)}%`, {
        description: "95% required to pass. Try again!",
      });
    }
  }, [questions, answers, chapter.id, chapter.xpReward, savePassExam, chapter.title]);

  const retry = useCallback(() => {
    setAttempt((a) => a + 1);
    startExam();
  }, [startExam]);

  const passed = score >= PASS_THRESHOLD;
  const totalQuestions = questions.length;
  const correctCount = Object.values(results).filter(Boolean).length;

  if (phase === "intro") {
    return (
      <IntroScreen
        chapterTitle={chapter.title}
        xpReward={chapter.xpReward}
        questionCount={Math.min(QUESTIONS_PER_EXAM, chapter.examPool.length || QUESTIONS_PER_EXAM)}
        onStart={startExam}
        courseColor={courseColor}
      />
    );
  }

  if (phase === "taking") {
    return (
      <TakingScreen
        questions={questions}
        answers={answers}
        setAnswer={setAnswer}
        onSubmit={submitExam}
        courseColor={courseColor}
      />
    );
  }

  return (
      <ResultsScreen
          passed={passed}
          score={score}
          correctCount={correctCount}
          totalQuestions={totalQuestions}
          questions={questions}
          answers={answers}
          results={results}
          courseId={chapter.courseId}
          chapterId={chapter.id}
          xpReward={chapter.xpReward}
          attempt={attempt}
          onRetry={retry}
          courseColor={courseColor}
        />
  );
}

function IntroScreen({
  chapterTitle, xpReward, questionCount, onStart, courseColor,
}: {
  chapterTitle: string; xpReward: number; questionCount: number; onStart: () => void; courseColor: string;
}) {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div
            className="flex size-12 items-center justify-center rounded-xl"
            style={{ backgroundColor: `${courseColor}15` }}
          >
            <BookOpen className="size-6" style={{ color: courseColor }} />
          </div>
          <div>
            <Badge variant="default" className="mb-1" style={{ backgroundColor: `${courseColor}15`, color: courseColor }}>
              Chapter Exam
            </Badge>
            <CardTitle className="text-xl">{chapterTitle} Exam</CardTitle>
            <CardDescription>Demonstrate your mastery of this chapter</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="rounded-xl border border-border bg-bg-tertiary/50 p-4">
          <h3 className="mb-3 text-sm font-semibold text-text-primary">Exam Rules</h3>
          <div className="space-y-2 text-sm text-text-secondary">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-3.5 text-accent-secondary" />
              <span><strong>{questionCount}</strong> questions drawn at random</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertTriangle className="size-3.5 text-accent-warning" />
              <span><strong>95%</strong> required to pass</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="size-3.5 text-accent-info" />
              <span>Unlimited retakes</span>
            </div>
            <div className="flex items-center gap-2">
              <HelpCircle className="size-3.5 text-accent-primary" />
              <span>No time limit</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-accent-secondary/20 bg-accent-secondary/5 p-4">
          <div className="flex items-center gap-2">
            <Trophy className="size-4 text-accent-secondary" />
            <span className="text-sm font-medium text-text-primary">Reward: {xpReward} XP on pass</span>
          </div>
        </div>

        <Button
          className="w-full gap-2"
          style={{ backgroundColor: courseColor, color: "#fff" }}
          onClick={onStart}
        >
          Start Exam
          <ChevronRight className="size-4" />
        </Button>
      </CardContent>
    </Card>
  );
}

function TakingScreen({
  questions, answers, setAnswer, onSubmit, courseColor,
}: {
  questions: ExamQuestion[];
  answers: Record<string, unknown>;
  setAnswer: (qId: string, val: unknown) => void;
  onSubmit: () => void;
  courseColor: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const answered = questions.filter((q) => answers[q.id] !== undefined).length;
  const allAnswered = answered === questions.length;
  const currentQ = questions[currentIndex];

  const goNext = useCallback(() => {
    if (currentIndex < questions.length - 1) setCurrentIndex((i) => i + 1);
  }, [currentIndex, questions.length]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  }, [currentIndex]);

  return (
    <div className="space-y-6">
      {/* Header: progress bar + question counter */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-text-primary">Chapter Exam</span>
          <span className="text-text-muted">{answered} of {questions.length} answered</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-bg-tertiary">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: courseColor }}
            initial={{ width: 0 }}
            animate={{ width: `${(answered / questions.length) * 100}%` }}
            transition={{ duration: 0.4, ease: "easeOut" as const }}
          />
        </div>
        <div className="flex items-center justify-between text-xs text-text-muted">
          <span>Question {currentIndex + 1} of {questions.length}</span>
          <span className="capitalize">Difficulty: <DifficultyBadge difficulty={currentQ.difficulty} /></span>
        </div>
      </div>

      {/* Current question with motion transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQ.id}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.25, ease: "easeOut" as const }}
        >
          <QuestionCard
            question={currentQ}
            index={currentIndex}
            answer={answers[currentQ.id]}
            setAnswer={(val) => setAnswer(currentQ.id, val)}
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation + Submit */}
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          className="flex-1"
          disabled={currentIndex === 0}
          onClick={goPrev}
        >
          Previous
        </Button>

        {currentIndex < questions.length - 1 ? (
          <Button
            className="flex-1"
            style={{ backgroundColor: courseColor, color: "#fff" }}
            onClick={goNext}
          >
            Next
          </Button>
        ) : (
          <Button
            className="flex-1 gap-2"
            size="lg"
            disabled={!allAnswered}
            style={{ backgroundColor: allAnswered ? courseColor : undefined, color: allAnswered ? "#fff" : undefined }}
            onClick={onSubmit}
          >
            {allAnswered ? "Submit Exam" : `Answer ${questions.length - answered} more question${questions.length - answered === 1 ? "" : "s"}`}
          </Button>
        )}
      </div>
    </div>
  );
}

function QuestionCard({
  question, index, answer, setAnswer,
}: {
  question: ExamQuestion; index: number; answer: unknown; setAnswer: (val: unknown) => void;
}) {
  return (
    <Card key={question.id} className="border-border/50">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <Badge variant="outline" className="text-xs">
            Question {index + 1}
          </Badge>
          <DifficultyBadge difficulty={question.difficulty} />
        </div>
        <CardTitle className="mt-2 text-base font-medium leading-relaxed">
          {question.question}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {question.type === "multiple-choice" && (
          <MultipleChoice q={question} answer={answer as string | undefined} setAnswer={setAnswer} />
        )}
        {question.type === "true-false" && (
          <TrueFalse q={question} answer={answer as boolean | undefined} setAnswer={setAnswer} />
        )}
        {question.type === "fill-blank" && (
          <FillBlank q={question} answer={answer as string | undefined} setAnswer={setAnswer} />
        )}
        {question.type === "code-order" && (
          <CodeOrder q={question} answer={answer as number[] | undefined} setAnswer={setAnswer} />
        )}
        {question.type === "match-pairs" && (
          <MatchPairs q={question} answer={answer as Record<string, string> | undefined} setAnswer={setAnswer} />
        )}
      </CardContent>
    </Card>
  );
}

function DifficultyBadge({ difficulty }: { difficulty: string }) {
  const colors: Record<string, string> = {
    easy: "bg-accent-secondary/10 text-accent-secondary border-accent-secondary/20",
    medium: "bg-accent-warning/10 text-accent-warning border-accent-warning/20",
    hard: "bg-red-500/10 text-red-500 border-red-500/20",
  };
  return (
    <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-medium ${colors[difficulty] || colors.easy}`}>
      {difficulty}
    </span>
  );
}

function MultipleChoice({ q, answer, setAnswer }: { q: MultipleChoiceQuestion; answer: string | undefined; setAnswer: (v: string) => void }) {
  return (
    <div className="space-y-2">
      {q.options.map((opt) => (
        <button
          key={opt.id}
          onClick={() => setAnswer(opt.id)}
          className={cn(
            "flex w-full items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-all",
            answer === opt.id
              ? "border-accent-primary bg-accent-primary/5 text-text-primary font-medium"
              : "border-border bg-transparent text-text-secondary hover:border-border-light hover:bg-bg-hover"
          )}
        >
          <div
            className={cn(
              "flex size-5 shrink-0 items-center justify-center rounded-full border-2 transition-all",
              answer === opt.id ? "border-accent-primary bg-accent-primary" : "border-border"
            )}
          >
            {answer === opt.id && <div className="size-2 rounded-full bg-white" />}
          </div>
          {opt.text}
        </button>
      ))}
    </div>
  );
}

function TrueFalse({ q, answer, setAnswer }: { q: TrueFalseQuestion; answer: boolean | undefined; setAnswer: (v: boolean) => void }) {
  return (
    <div className="flex gap-3">
      {[true, false].map((val) => (
        <button
          key={String(val)}
          onClick={() => setAnswer(val)}
          className={cn(
            "flex-1 rounded-lg border px-6 py-4 text-center text-sm font-medium transition-all",
            answer === val
              ? val
                ? "border-accent-secondary bg-accent-secondary/10 text-accent-secondary"
                : "border-red-500 bg-red-500/10 text-red-500"
              : "border-border bg-transparent text-text-secondary hover:border-border-light hover:bg-bg-hover"
          )}
        >
          {val ? "True" : "False"}
        </button>
      ))}
    </div>
  );
}

function FillBlank({ q, answer, setAnswer }: { q: FillBlankQuestion; answer: string | undefined; setAnswer: (v: string) => void }) {
  return (
    <Input
      placeholder="Type your answer..."
      value={answer || ""}
      onChange={(e) => setAnswer(e.target.value)}
      className="w-full"
    />
  );
}

function CodeOrder({ q, answer, setAnswer }: { q: CodeOrderQuestion; answer: number[] | undefined; setAnswer: (v: number[]) => void }) {
  const order = answer || [];
  const remaining = q.codeLines
    .map((_, i) => i)
    .filter((i) => !order.includes(i));

  const selectLine = (idx: number) => {
    setAnswer([...order, idx]);
  };
  const removeLine = (pos: number) => {
    setAnswer(order.filter((_, i) => i !== pos));
  };

  return (
    <div className="space-y-3">
      <p className="text-xs text-text-muted">Click the lines in the correct order.</p>
      {order.length > 0 && (
        <div className="space-y-1">
          {order.map((idx, pos) => (
            <button
              key={idx}
              onClick={() => removeLine(pos)}
              className="flex w-full items-center gap-3 rounded-lg border border-accent-secondary/30 bg-accent-secondary/5 px-4 py-2.5 text-left text-sm font-mono transition-all hover:border-red-500/30 hover:bg-red-500/5"
            >
              <span className="flex size-5 shrink-0 items-center justify-center rounded bg-accent-secondary text-xs font-bold text-white">
                {pos + 1}
              </span>
              <code className="text-text-primary">{q.codeLines[idx]}</code>
            </button>
          ))}
        </div>
      )}
      {remaining.length > 0 && (
        <div className="space-y-1">
          {remaining.map((idx) => (
            <button
              key={idx}
              onClick={() => selectLine(idx)}
              className="flex w-full items-center gap-3 rounded-lg border border-border bg-bg-tertiary/30 px-4 py-2.5 text-left text-sm font-mono transition-all hover:border-border-light hover:bg-bg-hover"
            >
              <span className="flex size-5 shrink-0 items-center justify-center rounded border border-border text-xs text-text-muted">
                {order.length + 1}
              </span>
              <code className="text-text-secondary">{q.codeLines[idx]}</code>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function MatchPairs({ q, answer, setAnswer }: { q: MatchPairsQuestion; answer: Record<string, string> | undefined; setAnswer: (v: Record<string, string>) => void }) {
  const matches = answer || {};

  return (
    <div className="space-y-3">
      <p className="text-xs text-text-muted">Select the matching description for each concept.</p>
      {q.leftItems.map((item, i) => (
        <div key={i} className="flex items-center gap-3">
          <span className="min-w-0 flex-1 rounded-lg border border-border bg-bg-tertiary/50 px-3 py-2.5 text-sm font-medium text-text-primary">
            {item}
          </span>
          <ChevronRight className="size-4 shrink-0 text-text-muted" />
          <select
            value={matches[item] || ""}
            onChange={(e) => setAnswer({ ...matches, [item]: e.target.value })}
            className="min-w-0 flex-1 rounded-lg border border-border bg-bg-tertiary/50 px-3 py-2.5 text-sm text-text-secondary focus:border-accent-primary focus:outline-none"
          >
            <option value="" disabled>Select...</option>
            {q.rightItems.map((ritem, j) => (
              <option key={j} value={ritem}>{ritem}</option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}

function AnimatedScore({ targetPercent, passed, courseColor }: { targetPercent: number; passed: boolean; courseColor: string }) {
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const step = 16;
    const totalSteps = duration / step;
    const increment = targetPercent / totalSteps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= targetPercent) {
        setDisplayed(targetPercent);
        clearInterval(timer);
      } else {
        setDisplayed(Math.round(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [targetPercent]);

  return (
    <div className="relative flex size-28 items-center justify-center">
      <svg className="size-28 -rotate-90" viewBox="0 0 36 36">
        <circle cx="18" cy="18" r="15.5" fill="none" stroke="var(--color-border)" strokeWidth="3" />
        <motion.circle
          cx="18" cy="18" r="15.5" fill="none"
          stroke={passed ? "var(--color-accent-secondary)" : "#ef4444"}
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ strokeDasharray: "0 97.9" }}
          animate={{ strokeDasharray: `${targetPercent * 0.979} 97.9` }}
          transition={{ duration: 1.2, ease: "easeOut" as const }}
        />
      </svg>
      <motion.span
        className={cn("absolute text-2xl font-bold", passed ? "text-accent-secondary" : "text-red-500")}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" as const }}
      >
        {displayed}%
      </motion.span>
    </div>
  );
}

function ResultsScreen({
  passed, score, correctCount, totalQuestions, courseId,
  questions, answers, results, chapterId, xpReward,
  attempt, onRetry, courseColor,
}: {
  passed: boolean; score: number; correctCount: number; totalQuestions: number;
  questions: ExamQuestion[]; answers: Record<string, unknown>; results: Record<string, boolean>;
  courseId: string; chapterId: string; xpReward: number; attempt: number; onRetry: () => void; courseColor: string;
}) {
  const percent = Math.round(score * 100);
  const wrongAnswers = questions.filter((q) => !results[q.id]);

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" as const }}
    >
      {/* Result card */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" as const }}
      >
        <Card className={cn("border-2", passed ? "border-accent-secondary/30" : "border-red-500/30")}>
          <CardHeader className="text-center pb-4">
            <motion.div
              className="mx-auto mb-4 flex size-20 items-center justify-center rounded-full"
              style={{ backgroundColor: passed ? "#22c55e15" : "#ef444415" }}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring" as const, stiffness: 180, damping: 14, delay: 0.15 }}
            >
              {passed
                ? <Trophy className="size-10 text-accent-secondary" />
                : <XCircle className="size-10 text-red-500" />
              }
            </motion.div>
            <CardTitle className="text-2xl">{passed ? "Congratulations!" : "Not Quite"}</CardTitle>
            <CardDescription className="text-base mt-1">
              {passed
                ? "You passed the chapter exam!"
                : "You need 95% to pass. Review the material and try again."
              }
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Animated score circle */}
            <div className="flex justify-center">
              <AnimatedScore targetPercent={percent} passed={passed} courseColor={courseColor} />
            </div>

            <div className="grid grid-cols-2 gap-3 text-center text-sm">
              <motion.div
                className="rounded-lg bg-bg-tertiary/50 p-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <motion.p
                  className="text-2xl font-bold text-accent-secondary"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" as const, stiffness: 200 }}
                >
                  {correctCount}
                </motion.p>
                <p className="text-xs text-text-muted">Correct</p>
              </motion.div>
              <motion.div
                className="rounded-lg bg-bg-tertiary/50 p-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.3 }}
              >
                <motion.p
                  className="text-2xl font-bold text-red-500"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9, type: "spring" as const, stiffness: 200 }}
                >
                  {totalQuestions - correctCount}
                </motion.p>
                <p className="text-xs text-text-muted">Incorrect</p>
              </motion.div>
            </div>

            {passed && (
              <motion.div
                className="rounded-xl border border-accent-secondary/20 bg-accent-secondary/5 p-4 text-center"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.3 }}
              >
                <p className="flex items-center justify-center gap-2 text-sm font-medium text-accent-secondary">
                  <Trophy className="size-4" />
                  +{xpReward} XP Earned
                </p>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* Question Review */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.35 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Review Answers</CardTitle>
            <CardDescription>See which questions you got right and wrong</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {questions.map((q, i) => {
              const correct = results[q.id];
              return (
                <motion.div
                  key={q.id}
                  initial={{ opacity: 0, x: correct ? 0 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.3, ease: "easeOut" as const }}
                  className={cn("rounded-xl border p-4", correct ? "border-accent-secondary/20 bg-accent-secondary/[0.03]" : "border-red-500/20 bg-red-500/[0.03]")}
                >
                  <div className="flex items-start gap-3">
                    {correct
                      ? <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent-secondary" />
                      : <XCircle className="mt-0.5 size-4 shrink-0 text-red-500" />
                    }
                    <div className="min-w-0 flex-1 space-y-2">
                      <p className="text-sm font-medium text-text-primary">{i + 1}. {q.question}</p>
                      <ReviewAnswer q={q} userAnswer={answers[q.id]} />
                      <p className="text-xs leading-relaxed text-text-muted">{q.explanation}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </CardContent>
        </Card>
      </motion.div>

      {/* Actions */}
      <motion.div
        className="flex flex-col gap-3 sm:flex-row"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 + questions.length * 0.06, duration: 0.3 }}
      >
        <Button variant="outline" className="flex-1 gap-2" onClick={onRetry}>
          <RotateCcw className="size-4" />
          Retry Exam (Attempt {attempt + 1})
        </Button>
        <Link href={`/courses/${courseId}/${chapterId}`} className="flex-1">
          <Button className="w-full gap-2" style={{ backgroundColor: courseColor, color: "#fff" }}>
            <ArrowLeft className="size-4" />
            Back to Chapter
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}

function ReviewAnswer({ q, userAnswer }: { q: ExamQuestion; userAnswer: unknown }) {
  if (q.type === "multiple-choice") {
    const selected = q.options.find((o) => o.id === userAnswer);
    const correct = q.options.find((o) => o.id === q.correctAnswer);
    return (
      <div className="space-y-1 text-xs">
        <p>Your answer: <span className={userAnswer === q.correctAnswer ? "text-accent-secondary" : "text-red-500"}>{selected?.text || "(none)"}</span></p>
        {userAnswer !== q.correctAnswer && (
          <p>Correct: <span className="text-accent-secondary">{correct?.text}</span></p>
        )}
      </div>
    );
  }
  if (q.type === "true-false") {
    return (
      <div className="space-y-1 text-xs">
        <p>Your answer: <span className={userAnswer === q.correctAnswer ? "text-accent-secondary" : "text-red-500"}>{String(userAnswer)}</span></p>
        {userAnswer !== q.correctAnswer && (
          <p>Correct: <span className="text-accent-secondary">{String(q.correctAnswer)}</span></p>
        )}
      </div>
    );
  }
  if (q.type === "fill-blank") {
    const isCorrect = typeof userAnswer === "string" && (
      userAnswer.toLowerCase().trim() === q.correctAnswer.toLowerCase() ||
      q.acceptableAnswers?.some((a) => a.toLowerCase() === userAnswer.toLowerCase().trim())
    );
    return (
      <div className="space-y-1 text-xs">
        <p>Your answer: <span className={isCorrect ? "text-accent-secondary" : "text-red-500"}>{(userAnswer as string) || "(blank)"}</span></p>
        {!isCorrect && <p>Correct: <span className="text-accent-secondary">{q.correctAnswer}</span></p>}
      </div>
    );
  }
  if (q.type === "code-order") {
    const isCorrect = Array.isArray(userAnswer) && userAnswer.length === q.correctOrder.length && userAnswer.every((v, i) => v === q.correctOrder[i]);
    return (
      <div className="space-y-1 text-xs">
        <p className={isCorrect ? "text-accent-secondary" : "text-red-500"}>
          {isCorrect ? "Correct order!" : "Incorrect order — see explanation below"}
        </p>
      </div>
    );
  }
  if (q.type === "match-pairs") {
    const matches = userAnswer as Record<string, string> | undefined;
    const pairs = q.correctMatches.map(([lIdx, rIdx]) => ({ left: q.leftItems[lIdx], right: q.rightItems[rIdx] }));
    const allCorrect = pairs.every((p) => matches?.[p.left] === p.right);
    return (
      <div className="space-y-1 text-xs">
        <p className={allCorrect ? "text-accent-secondary" : "text-red-500"}>
          {allCorrect ? "All matched correctly!" : "Some matches are incorrect — see explanation below"}
        </p>
      </div>
    );
  }
  return null;
}

function checkAnswer(q: ExamQuestion, userAnswer: unknown): boolean {
  if (q.type === "multiple-choice") return userAnswer === q.correctAnswer;
  if (q.type === "true-false") return userAnswer === q.correctAnswer;
  if (q.type === "fill-blank") {
    if (typeof userAnswer !== "string") return false;
    const u = userAnswer.toLowerCase().trim();
    if (u === q.correctAnswer.toLowerCase()) return true;
    return q.acceptableAnswers?.some((a) => a.toLowerCase() === u) ?? false;
  }
  if (q.type === "code-order") {
    return Array.isArray(userAnswer) && userAnswer.length === q.correctOrder.length && userAnswer.every((v, i) => v === q.correctOrder[i]);
  }
  if (q.type === "match-pairs") {
    const matches = userAnswer as Record<string, string> | undefined;
    return q.correctMatches.every(([lIdx, rIdx]) => matches?.[q.leftItems[lIdx]] === q.rightItems[rIdx]);
  }
  return false;
}

const fallbackQuestions: ExamQuestion[] = [
  { id: "fallback-1", type: "multiple-choice", difficulty: "easy", question: "What does HTML stand for?", options: [{ id: "a", text: "HyperText Markup Language" }, { id: "b", text: "High Tech Markup Language" }, { id: "c", text: "HyperText Modern Language" }, { id: "d", text: "Home Tool Markup Language" }], correctAnswer: "a", explanation: "HTML stands for HyperText Markup Language — the standard language for creating web pages." },
  { id: "fallback-2", type: "true-false", difficulty: "easy", question: "HTML is a programming language.", correctAnswer: false, explanation: "HTML is a markup language, not a programming language. It describes the structure of content but does not have logic or control flow." },
  { id: "fallback-3", type: "multiple-choice", difficulty: "easy", question: "Which tag is used for the largest heading?", options: [{ id: "a", text: "<h1>" }, { id: "b", text: "<heading>" }, { id: "c", text: "<h6>" }, { id: "d", text: "<head>" }], correctAnswer: "a", explanation: "<h1> is the largest heading tag. HTML provides six levels of headings from <h1> (most important) to <h6> (least important)." },
  { id: "fallback-4", type: "true-false", difficulty: "easy", question: "The <title> element goes inside the <body> tag.", correctAnswer: false, explanation: "The <title> element belongs in the <head> section of an HTML document. It defines the page title shown in the browser tab." },
  { id: "fallback-5", type: "multiple-choice", difficulty: "medium", question: "Which attribute is used to specify alternative text for an image?", options: [{ id: "a", text: "alt" }, { id: "b", text: "src" }, { id: "c", text: "title" }, { id: "d", text: "href" }], correctAnswer: "a", explanation: "The alt attribute provides alternative text for images, which is displayed if the image cannot load and is used by screen readers for accessibility." },
  { id: "fallback-6", type: "fill-blank", difficulty: "medium", question: "The HTML element used to create a hyperlink is the ___ element.", correctAnswer: "a", acceptableAnswers: ["anchor", "<a>", "link"], explanation: "The <a> (anchor) element is used to create hyperlinks in HTML." },
  { id: "fallback-7", type: "multiple-choice", difficulty: "medium", question: "What does CSS stand for?", options: [{ id: "a", text: "Cascading Style Sheets" }, { id: "b", text: "Colorful Style Sheets" }, { id: "c", text: "Computer Style Sheets" }, { id: "d", text: "Creative Style System" }], correctAnswer: "a", explanation: "CSS stands for Cascading Style Sheets, used to style and lay out web pages." },
  { id: "fallback-8", type: "true-false", difficulty: "medium", question: "HTML5 supports video playback without plugins.", correctAnswer: true, explanation: "HTML5 introduced the <video> element, enabling native video playback in browsers without requiring plugins like Flash." },
  { id: "fallback-9", type: "multiple-choice", difficulty: "hard", question: "Which HTML attribute is used to define inline styles?", options: [{ id: "a", text: "style" }, { id: "b", text: "class" }, { id: "c", text: "css" }, { id: "d", text: "styles" }], correctAnswer: "a", explanation: "The style attribute is used to apply inline CSS directly to an HTML element." },
  { id: "fallback-10", type: "true-false", difficulty: "hard", question: "The <meta charset='UTF-8'> element should be placed in the <body> section.", correctAnswer: false, explanation: "The <meta charset='UTF-8'> element belongs in the <head> section, not the <body>. It specifies the character encoding for the document." },
  { id: "fallback-11", type: "code-order", difficulty: "medium", question: "Arrange these steps to create a basic HTML page:", codeLines: ["<!DOCTYPE html>", "<html><head><title>Page</title></head>", "<body><h1>Hello</h1></body>", "</html>"], correctOrder: [0, 1, 2, 3], explanation: "The correct order is: DOCTYPE declaration, open html/head tags with title, body content, then close the html tag." },
  { id: "fallback-12", type: "match-pairs", difficulty: "hard", question: "Match each HTML tag with its purpose:", leftItems: ["<a>", "<img>", "<ul>", "<table>" ], rightItems: ["Hyperlink", "Image", "Unordered list", "Tabular data"], correctMatches: [[0, 0], [1, 1], [2, 2], [3, 3]], explanation: "Each HTML element serves a specific purpose: <a> for links, <img> for images, <ul> for unordered lists, and <table> for tabular data." },
  { id: "fallback-13", type: "multiple-choice", difficulty: "easy", question: "Which tag creates a paragraph in HTML?", options: [{ id: "a", text: "<p>" }, { id: "b", text: "<paragraph>" }, { id: "c", text: "<text>" }, { id: "d", text: "<para>" }], correctAnswer: "a", explanation: "The <p> element defines a paragraph in HTML." },
  { id: "fallback-14", type: "fill-blank", difficulty: "easy", question: "The attribute used to specify the URL of an image in the <img> tag is ___.", correctAnswer: "src", acceptableAnswers: ["source", "image source"], explanation: "The src (source) attribute specifies the URL of the image to display." },
  { id: "fallback-15", type: "multiple-choice", difficulty: "medium", question: "Which HTML5 element is used to draw graphics on the fly via scripting?", options: [{ id: "a", text: "<canvas>" }, { id: "b", text: "<draw>" }, { id: "c", text: "<svg>" }, { id: "d", text: "<graphics>" }], correctAnswer: "a", explanation: "The <canvas> element provides a drawable region in the page, manipulated via JavaScript." },
  { id: "fallback-16", type: "true-false", difficulty: "easy", question: "The <br> tag is used to insert a line break.", correctAnswer: true, explanation: "The <br> (break) element creates a line break in text. It is a void element with no closing tag." },
  { id: "fallback-17", type: "multiple-choice", difficulty: "medium", question: "What is the correct HTML for inserting a line break?", options: [{ id: "a", text: "<br>" }, { id: "b", text: "<break>" }, { id: "c", text: "<lb>" }, { id: "d", text: "<newline>" }], correctAnswer: "a", explanation: "<br> is the correct element for a line break in HTML." },
  { id: "fallback-18", type: "match-pairs", difficulty: "hard", question: "Match each form input type:", leftItems: ["text", "password", "email", "number"], rightItems: ["Single-line text", "Masked input", "Email format", "Numeric values"], correctMatches: [[0, 0], [1, 1], [2, 2], [3, 3]], explanation: "Each input type validates and handles specific kinds of user input." },
  { id: "fallback-19", type: "code-order", difficulty: "hard", question: "Order the HTML document structure:", codeLines: ["<head>", "<body>", "<!DOCTYPE html>", "<html>", "</html>"], correctOrder: [2, 3, 0, 1, 4], explanation: "The HTML document structure starts with DOCTYPE, then the html element containing head and body." },
  { id: "fallback-20", type: "multiple-choice", difficulty: "hard", question: "Which semantic HTML5 element defines navigation links?", options: [{ id: "a", text: "<nav>" }, { id: "b", text: "<navigation>" }, { id: "c", text: "<menu>" }, { id: "d", text: "<links>" }], correctAnswer: "a", explanation: "The <nav> element represents a section of a page that links to other pages or parts within the page." },
];
