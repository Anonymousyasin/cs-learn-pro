"use client";

import { useState, useEffect } from "react";
import {
  UserCircle, Zap, Flame, Trophy, BookOpen,
  Download, Settings, LogOut, Edit3, CheckCircle2,
  Moon, Sun, Palette, Bell, Shield, Code2,
  ChevronRight, Award, GraduationCap, Clock,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { courseRegistry } from "@/lib/courses";
import { loadProgress, getLevel, useProgress } from "@/lib/progress";
import { useUser } from "@/lib/supabase-provider";

const totalChapters = courseRegistry.courses.reduce((s, c) => s + c.chapters.length, 0);

const recentBadges = [
  { name: "First Steps", icon: GraduationCap, desc: "Complete your first lesson", earned: true },
  { name: "Quick Learner", icon: Zap, desc: "Complete 5 lessons in a day", earned: true },
  { name: "Streak Master", icon: Flame, desc: "7-day streak", earned: true },
  { name: "Knowledge Seeker", icon: BookOpen, desc: "Complete 50 lessons", earned: false },
  { name: "Code Warrior", icon: Code2, desc: "Pass 10 exams", earned: false },
  { name: "Scholar", icon: Award, desc: "Complete all courses", earned: false },
];

export default function ProfilePage() {
  const { user } = useUser();
  const { progress, loaded } = useProgress(user?.id);
  const [settings, setSettings] = useState({
    emailNotifications: true,
    darkMode: true,
    compactView: false,
    showProgress: true,
  });

  useEffect(() => {
    // Settings already initialized
  }, []);

  const level = getLevel(progress.xp);
  const completedChapters = progress.completedChapters.length;

  if (!loaded) {
    return (
      <div className="mx-auto max-w-4xl space-y-6 p-4 pt-6 sm:p-6 lg:p-8">
        <div className="flex items-center justify-center py-20">
          <div className="size-6 animate-spin rounded-full border-2 border-accent-primary border-t-transparent" />
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6 p-4 pt-6 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <UserCircle className="size-5 text-accent-primary" />
            <h1 className="text-2xl font-bold tracking-tight text-text-primary">Profile</h1>
          </div>
          <p className="mt-1 text-sm text-text-secondary">
            Manage your account and view your learning statistics
          </p>
        </div>
      </div>

      {/* Profile Card */}
      <Card className="border-border/50 overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-warning" />
        <CardHeader>
          <div className="flex items-start gap-4 sm:items-center flex-col sm:flex-row">
            <Avatar size="lg">
              <AvatarFallback className="bg-accent-primary-light text-accent-primary text-lg font-semibold">
                AL
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <CardTitle className="text-xl">Alex</CardTitle>
                <Badge variant="default" className="bg-accent-primary-light text-accent-primary">
                  Learner
                </Badge>
                <Badge variant="outline" className="gap-1">
                  <Zap className="size-3" />
                  Level {level}
                </Badge>
              </div>
              <CardDescription className="mt-1">
                Member since July 2025 &middot; {progress.xp.toLocaleString()} total XP
              </CardDescription>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                Learning HTML, CSS, JavaScript, Python, and CS fundamentals.
                {progress.currentStreak > 1 && ` Currently on a ${progress.currentStreak}-day learning streak.`}
              </p>
            </div>
            <Button variant="outline" size="sm" className="gap-2 shrink-0">
              <Edit3 className="size-4" />
              Edit
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: "Total XP", value: progress.xp.toLocaleString(), icon: Zap, color: "text-accent-warning" },
          { label: "Day Streak", value: `${progress.currentStreak} days`, icon: Flame, color: "text-accent-danger" },
          { label: "Courses", value: String(courseRegistry.courses.length), icon: BookOpen, color: "text-accent-secondary" },
          { label: "Chapters Done", value: String(completedChapters), icon: CheckCircle2, color: "text-accent-primary" },
        ].map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} size="sm" className="border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Icon className={cn("size-4", stat.color)} />
                  <CardTitle className="text-sm font-medium text-text-secondary">
                    {stat.label}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold text-text-primary">{stat.value}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Tabs: Progress / Settings / Achievements */}
      <Tabs defaultValue="progress" className="space-y-4">
        <TabsList>
          <TabsTrigger value="progress" className="gap-2">
            <GraduationCap className="size-4" />
            Progress
          </TabsTrigger>
          <TabsTrigger value="achievements" className="gap-2">
            <Trophy className="size-4" />
            Badges
          </TabsTrigger>
          <TabsTrigger value="settings" className="gap-2">
            <Settings className="size-4" />
            Settings
          </TabsTrigger>
        </TabsList>

        {/* Progress Tab */}
        <TabsContent value="progress" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Course Progress</CardTitle>
              <CardDescription>Your journey across all {courseRegistry.courses.length} courses</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              {courseRegistry.courses.map((course) => {
                const done = course.chapters.filter((ch) => progress.completedChapters.includes(ch.id)).length;
                const pct = Math.round((done / course.chapters.length) * 100);
                return (
                  <div key={course.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 min-w-0">
                        <div
                          className="size-3 shrink-0 rounded-full"
                          style={{ backgroundColor: course.color }}
                        />
                        <span className="text-sm font-medium text-text-primary truncate">
                          {course.fullTitle}
                        </span>
                      </div>
                      <span className="text-xs text-text-muted shrink-0 ml-3">
                        {done}/{course.chapters.length} chapters &middot; {pct}%
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-bg-tertiary">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${pct}%`, backgroundColor: course.color }}
                      />
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Learning Activity</CardTitle>
              <CardDescription>This week&apos;s overview</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2">
                {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                  <div key={i} className="flex flex-col items-center gap-1.5">
                    <span className="text-[10px] text-text-muted">{day}</span>
                    <div
                      className={cn(
                        "h-8 w-full rounded-md transition-colors",
                        i < 5 ? "bg-accent-primary/30" : i === 5 ? "bg-accent-primary/60" : "bg-accent-primary/10"
                      )}
                    />
                    <span className="text-[10px] text-text-muted">
                      {[3, 5, 2, 4, 6, 3, 1][i]}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Achievements Tab */}
        <TabsContent value="achievements">
          <Card>
            <CardHeader>
              <CardTitle>Badges & Achievements</CardTitle>
              <CardDescription>Earn badges by reaching milestones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {recentBadges.map((badge, i) => {
                  const Icon = badge.icon;
                  return (
                    <div
                      key={i}
                      className={cn(
                        "flex flex-col items-center gap-2 rounded-xl border p-4 text-center transition-all",
                        badge.earned
                          ? "border-accent-primary/20 bg-accent-primary/5"
                          : "border-border bg-bg-tertiary/30 opacity-50"
                      )}
                    >
                      <div
                        className={cn(
                          "flex size-10 items-center justify-center rounded-lg",
                          badge.earned ? "bg-accent-primary-light" : "bg-bg-tertiary"
                        )}
                      >
                        <Icon
                          className={cn(
                            "size-5",
                            badge.earned ? "text-accent-primary" : "text-text-muted"
                          )}
                        />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-text-primary">{badge.name}</p>
                        <p className="text-[10px] text-text-muted mt-0.5">{badge.desc}</p>
                      </div>
                      {badge.earned && (
                        <Badge variant="secondary" className="text-[10px]">Earned</Badge>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Preferences</CardTitle>
              <CardDescription>Customize your learning experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-accent-primary-light">
                      <Bell className="size-4 text-accent-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">Email Notifications</p>
                      <p className="text-xs text-text-muted">Receive learning reminders and tips</p>
                    </div>
                  </div>
                  <Switch
                    checked={settings.emailNotifications}
                    onCheckedChange={(v) => setSettings((s) => ({ ...s, emailNotifications: v }))}
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-accent-primary-light">
                      <Palette className="size-4 text-accent-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">Dark Mode</p>
                      <p className="text-xs text-text-muted">Use dark theme by default</p>
                    </div>
                  </div>
                  <Switch
                    checked={settings.darkMode}
                    onCheckedChange={(v) => setSettings((s) => ({ ...s, darkMode: v }))}
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-accent-primary-light">
                      <Shield className="size-4 text-accent-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">Compact View</p>
                      <p className="text-xs text-text-muted">Show more content with less spacing</p>
                    </div>
                  </div>
                  <Switch
                    checked={settings.compactView}
                    onCheckedChange={(v) => setSettings((s) => ({ ...s, compactView: v }))}
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-accent-primary-light">
                      <Trophy className="size-4 text-accent-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">Show Progress</p>
                      <p className="text-xs text-text-muted">Display progress bars on dashboard</p>
                    </div>
                  </div>
                  <Switch
                    checked={settings.showProgress}
                    onCheckedChange={(v) => setSettings((s) => ({ ...s, showProgress: v }))}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Account</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start gap-2">
                <Download className="size-4" />
                Export Progress Data
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2 text-accent-danger hover:text-accent-danger">
                <LogOut className="size-4" />
                Sign Out
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
