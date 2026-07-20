"use client";

import { useMemo } from "react";
import {
  Award, Lock, Star, Zap, Code2, BookOpen, Brain, Target, Flame,
  CheckCircle2, Trophy, Sparkles, Rocket, Shield, Globe, Layers,
  Hash, Gift, Sword, Palette,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { courseRegistry } from "@/lib/courses";

// ─── Achievement Definitions ────────────────────────────────────
interface AchievementDef {
  id: string;
  title: string;
  description: string;
  icon: typeof Star;
  rarity: "common" | "uncommon" | "rare" | "epic" | "legendary";
  category: "learning" | "streaks" | "exams" | "mastery";
  xpReward: number;
  check: () => { earned: boolean; progress: number; max: number };
}

const totalChapters = courseRegistry.courses.reduce((s, c) => s + c.chapters.length, 0);

const achievementDefs: AchievementDef[] = [
  // ── Learning ──
  {
    id: "first-lesson", title: "First Steps", description: "Complete your first lesson",
    icon: Star, rarity: "common", category: "learning", xpReward: 50,
    check: () => ({ earned: true, progress: 1, max: 1 }),
  },
  {
    id: "five-lessons", title: "Knowledge Seeker", description: "Complete 5 lessons",
    icon: BookOpen, rarity: "uncommon", category: "learning", xpReward: 100,
    check: () => ({ earned: true, progress: 5, max: 5 }),
  },
  {
    id: "ten-chapters", title: "Chapter Master", description: "Complete 10 chapters",
    icon: Layers, rarity: "uncommon", category: "learning", xpReward: 150,
    check: () => ({ earned: true, progress: 10, max: 10 }),
  },
  {
    id: "twenty-five-chapters", title: "Dedicated Learner", description: "Complete 25 chapters",
    icon: BookOpen, rarity: "rare", category: "learning", xpReward: 300,
    check: () => ({ earned: false, progress: 15, max: 25 }),
  },
  {
    id: "all-html", title: "HTML Hero", description: "Complete all HTML chapters",
    icon: Code2, rarity: "rare", category: "learning", xpReward: 500,
    check: () => ({ earned: false, progress: 12, max: 60 }),
  },
  {
    id: "all-css", title: "CSS Artist", description: "Complete all CSS chapters",
    icon: Palette, rarity: "rare", category: "learning", xpReward: 500,
    check: () => ({ earned: false, progress: 5, max: 70 }),
  },
  {
    id: "all-js", title: "JS Wiz", description: "Complete all JavaScript chapters",
    icon: Code2, rarity: "rare", category: "learning", xpReward: 500,
    check: () => ({ earned: false, progress: 3, max: 70 }),
  },
  {
    id: "all-python", title: "Python Pro", description: "Complete all Python chapters",
    icon: Code2, rarity: "epic", category: "learning", xpReward: 750,
    check: () => ({ earned: false, progress: 0, max: 55 }),
  },
  {
    id: "all-courses", title: "Grand Master", description: "Complete all courses",
    icon: Award, rarity: "legendary", category: "learning", xpReward: 2000,
    check: () => ({ earned: false, progress: 0, max: 5 }),
  },

  // ── Streaks ──
  {
    id: "streak-3", title: "Getting Started", description: "3-day learning streak",
    icon: Flame, rarity: "common", category: "streaks", xpReward: 50,
    check: () => ({ earned: true, progress: 3, max: 3 }),
  },
  {
    id: "streak-7", title: "Consistency", description: "7-day learning streak",
    icon: Flame, rarity: "uncommon", category: "streaks", xpReward: 150,
    check: () => ({ earned: true, progress: 7, max: 7 }),
  },
  {
    id: "streak-14", title: "Unstoppable", description: "14-day learning streak",
    icon: Flame, rarity: "rare", category: "streaks", xpReward: 300,
    check: () => ({ earned: false, progress: 14, max: 14 }),
  },
  {
    id: "streak-30", title: "On Fire", description: "30-day learning streak",
    icon: Flame, rarity: "epic", category: "streaks", xpReward: 600,
    check: () => ({ earned: false, progress: 23, max: 30 }),
  },
  {
    id: "streak-100", title: "Inferno", description: "100-day learning streak",
    icon: Flame, rarity: "legendary", category: "streaks", xpReward: 1500,
    check: () => ({ earned: false, progress: 0, max: 100 }),
  },

  // ── Exams ──
  {
    id: "exam-first", title: "Test Taker", description: "Pass your first exam",
    icon: Brain, rarity: "common", category: "exams", xpReward: 50,
    check: () => ({ earned: true, progress: 1, max: 1 }),
  },
  {
    id: "exam-3", title: "Sharp Mind", description: "Pass 3 exams with 95%+",
    icon: Brain, rarity: "uncommon", category: "exams", xpReward: 150,
    check: () => ({ earned: true, progress: 3, max: 3 }),
  },
  {
    id: "exam-10", title: "Exam Crusher", description: "Pass 10 exams with 95%+",
    icon: Brain, rarity: "rare", category: "exams", xpReward: 400,
    check: () => ({ earned: false, progress: 7, max: 10 }),
  },
  {
    id: "exam-25", title: "Perfectionist", description: "Pass 25 exams with 95%+",
    icon: Trophy, rarity: "epic", category: "exams", xpReward: 750,
    check: () => ({ earned: false, progress: 0, max: 25 }),
  },

  // ── Mastery ──
  {
    id: "speed-demon", title: "Speed Demon", description: "Complete a chapter in under 1 hour",
    icon: Zap, rarity: "rare", category: "mastery", xpReward: 250,
    check: () => ({ earned: false, progress: 0, max: 1 }),
  },
  {
    id: "xp-1000", title: "Century", description: "Earn 1,000 total XP",
    icon: Gift, rarity: "uncommon", category: "mastery", xpReward: 100,
    check: () => ({ earned: true, progress: 2450, max: 1000 }),
  },
  {
    id: "xp-5000", title: "Powerhouse", description: "Earn 5,000 total XP",
    icon: Zap, rarity: "epic", category: "mastery", xpReward: 500,
    check: () => ({ earned: false, progress: 2450, max: 5000 }),
  },
  {
    id: "xp-10000", title: "Legend", description: "Earn 10,000 total XP",
    icon: Sword, rarity: "legendary", category: "mastery", xpReward: 1000,
    check: () => ({ earned: false, progress: 2450, max: 10000 }),
  },
  {
    id: "code-warrior", title: "Code Warrior", description: "Write 1,000 lines of code",
    icon: Code2, rarity: "rare", category: "mastery", xpReward: 300,
    check: () => ({ earned: true, progress: 1000, max: 1000 }),
  },
  {
    id: "explorer", title: "Explorer", description: "Visit all 5 courses",
    icon: Globe, rarity: "epic", category: "mastery", xpReward: 500,
    check: () => ({ earned: false, progress: 3, max: 5 }),
  },
];

// ─── Rarity Config ───────────────────────────────────────────────
const rarityConfig = {
  common: { label: "Common", color: "text-text-muted", bg: "bg-bg-tertiary", border: "border-border" },
  uncommon: { label: "Uncommon", color: "text-accent-secondary", bg: "bg-accent-secondary/10", border: "border-accent-secondary/20" },
  rare: { label: "Rare", color: "text-accent-primary", bg: "bg-accent-primary-light", border: "border-accent-primary/20" },
  epic: { label: "Epic", color: "text-accent-warning", bg: "bg-accent-warning/10", border: "border-accent-warning/20" },
  legendary: { label: "Legendary", color: "text-accent-danger", bg: "bg-accent-danger/10", border: "border-accent-danger/20" },
};

const categoryConfig = {
  learning: { label: "Learning", icon: BookOpen },
  streaks: { label: "Streaks", icon: Flame },
  exams: { label: "Exams", icon: Brain },
  mastery: { label: "Mastery", icon: Trophy },
};

// ─── Page Component ──────────────────────────────────────────────
export default function AchievementsPage() {
  const { all, earned, inProgress, locked } = useMemo(() => {
    const all = achievementDefs.map((def) => {
      const result = def.check();
      const status = result.earned ? "earned" as const : result.progress > 0 ? "in-progress" as const : "locked" as const;
      return { ...def, ...result, status };
    });
    return {
      all,
      earned: all.filter((a) => a.status === "earned"),
      inProgress: all.filter((a) => a.status === "in-progress"),
      locked: all.filter((a) => a.status === "locked"),
    };
  }, []);

  const totalXP = earned.reduce((s, a) => s + a.xpReward, 0);
  const totalCount = all.length;

  // Group in-progress by category
  const inProgressByCategory = useMemo(() => {
    const map: Record<string, typeof inProgress> = {};
    for (const a of inProgress) {
      if (!map[a.category]) map[a.category] = [];
      map[a.category].push(a);
    }
    return map;
  }, [inProgress]);

  return (
    <div className="mx-auto max-w-4xl space-y-6 p-4 pt-6 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Award className="size-5 text-accent-primary" />
            <h1 className="text-2xl font-bold tracking-tight text-text-primary">
              Achievements
            </h1>
          </div>
          <p className="mt-1 text-sm text-text-secondary">
            Earn achievements by mastering courses, passing exams, and maintaining streaks
          </p>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-3">
        <Card size="sm" className="border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-medium text-text-secondary">Earned</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-bold text-accent-secondary">{earned.length}<span className="text-sm font-normal text-text-muted">/{totalCount}</span></p>
          </CardContent>
        </Card>
        <Card size="sm" className="border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-medium text-text-secondary">In Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-bold text-accent-warning">{inProgress.length}</p>
          </CardContent>
        </Card>
        <Card size="sm" className="border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-medium text-text-secondary">Locked</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-bold text-text-muted">{locked.length}</p>
          </CardContent>
        </Card>
        <Card size="sm" className="border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-medium text-text-secondary">XP Earned</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-bold text-accent-primary">+{totalXP}</p>
          </CardContent>
        </Card>
      </div>

      {/* Overall Progress Bar */}
      <Card size="sm" className="border-border/50">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Overall Completion</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Progress value={Math.round((earned.length / totalCount) * 100)} />
            <div className="flex justify-between text-xs text-text-muted">
              <span>{Math.round((earned.length / totalCount) * 100)}% complete</span>
              <span>{earned.length} of {totalCount}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Earned Section */}
      {earned.length > 0 && (
        <section>
          <div className="mb-3 flex items-center gap-2">
            <CheckCircle2 className="size-4 text-accent-secondary" />
            <h2 className="text-sm font-semibold text-text-primary">Earned ({earned.length})</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {earned.map((a) => (
              <AchievementCard key={a.id} achievement={a} />
            ))}
          </div>
        </section>
      )}

      {/* In Progress Section — Grouped by Category */}
      {inProgress.length > 0 && (
        <section>
          <div className="mb-3 flex items-center gap-2">
            <Target className="size-4 text-accent-warning" />
            <h2 className="text-sm font-semibold text-text-primary">In Progress ({inProgress.length})</h2>
          </div>
          <div className="space-y-4">
            {(Object.entries(categoryConfig) as [string, typeof categoryConfig.learning][]).map(([key, cat]) => {
              const items = inProgressByCategory[key] || [];
              if (items.length === 0) return null;
              const CatIcon = cat.icon;
              return (
                <div key={key}>
                  <div className="mb-2 flex items-center gap-1.5">
                    <CatIcon className="size-3.5 text-text-muted" />
                    <span className="text-xs font-medium text-text-muted uppercase tracking-wider">{cat.label}</span>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((a) => (
                      <AchievementCard key={a.id} achievement={a} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Locked Section */}
      {locked.length > 0 && (
        <section>
          <div className="mb-3 flex items-center gap-2">
            <Lock className="size-4 text-text-muted" />
            <h2 className="text-sm font-semibold text-text-primary">Locked ({locked.length})</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {locked.map((a) => (
              <AchievementCard key={a.id} achievement={a} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

// ─── Achievement Card ────────────────────────────────────────────
function AchievementCard({ achievement }: {
  achievement: {
    title: string; description: string; icon: typeof Star;
    rarity: keyof typeof rarityConfig; status: "earned" | "in-progress" | "locked";
    progress: number; max: number; xpReward: number;
  };
}) {
  const config = rarityConfig[achievement.rarity];
  const Icon = achievement.icon;
  const isEarned = achievement.status === "earned";
  const isLocked = achievement.status === "locked";
  const progressPct = Math.min(100, Math.round((achievement.progress / achievement.max) * 100));

  return (
    <Card
      className={cn(
        "border-border/50 transition-all duration-200",
        isEarned && "hover:border-accent-secondary/30",
        isLocked && "opacity-60",
      )}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <div
            className={cn(
              "flex size-10 shrink-0 items-center justify-center rounded-xl",
              config.bg
            )}
          >
            {isLocked ? (
              <Lock className={cn("size-5", config.color)} />
            ) : (
              <Icon className={cn("size-5", config.color)} />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <CardTitle className={cn("text-sm truncate", isLocked && "text-text-muted")}>
                {achievement.title}
              </CardTitle>
              <Badge variant="outline" className={cn("border-0 shrink-0 text-[10px]", config.bg, config.color)}>
                {config.label}
              </Badge>
            </div>
            <CardDescription className="mt-0.5">
              {achievement.description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      {!isEarned && (
        <CardContent className="pt-0">
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-text-muted">
                {isLocked ? "Not started" : `${achievement.progress}/${achievement.max}`}
              </span>
              <span className={cn("font-medium", config.color)}>{progressPct}%</span>
            </div>
            <Progress value={progressPct} />
          </div>
        </CardContent>
      )}
      {isEarned && (
        <CardContent className="pt-0">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="gap-1 text-[10px]">
              <CheckCircle2 className="size-3" />
              Earned
            </Badge>
            <span className="flex items-center gap-1 text-[10px] text-accent-secondary font-medium">
              <Sparkles className="size-3" />
              +{achievement.xpReward} XP
            </span>
          </div>
        </CardContent>
      )}
    </Card>
  );
}
