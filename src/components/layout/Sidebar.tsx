"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Brain,
  LayoutDashboard,
  FileCode,
  Palette,
  Code2,
  Binary,
  RotateCcw,
  Award,
  UserCircle,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SidebarNavItem } from "./SidebarNavItem";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { loadProgress, getLevel } from "@/lib/progress";

const navItems = [
  { href: "/", icon: LayoutDashboard, label: "Dashboard" },
];

const courseItems = [
  { href: "/courses/html", icon: FileCode, label: "HTML Course" },
  { href: "/courses/css", icon: Palette, label: "CSS Course" },
  { href: "/courses/javascript", icon: Code2, label: "JavaScript Course" },
  { href: "/courses/python", icon: Code2, label: "Python Course" },
  { href: "/courses/cs", icon: Binary, label: "CS / DSA" },
];

const utilityItems = [
  { href: "/review", icon: RotateCcw, label: "Review" },
  { href: "/achievements", icon: Award, label: "Achievements" },
  { href: "/profile", icon: UserCircle, label: "Profile" },
];

const courseAccents: Record<string, string> = {
  html: "#f97316",
  css: "#38bdf8",
  javascript: "#eab308",
  python: "#22c55e",
  cs: "#a78bfa",
};

function getCourseColor(href: string): string | undefined {
  for (const [key, color] of Object.entries(courseAccents)) {
    if (href.includes(key)) return color;
  }
  return undefined;
}

export function Sidebar() {
  const pathname = usePathname();
  const progress = typeof window !== 'undefined' ? loadProgress() : null;
  const level = progress ? getLevel(progress.xp) : 1;
  const streak = progress?.currentStreak || 0;

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <aside className="fixed left-0 top-0 z-30 hidden h-screen w-[var(--sidebar-width)] flex-col border-r border-border bg-bg-secondary md:flex">
      {/* Brand — subtle gradient background */}
      <div className="flex h-14 shrink-0 items-center gap-2.5 border-b border-border bg-gradient-to-r from-accent-primary-light via-bg-secondary to-bg-secondary px-4">
        <div className="flex size-8 items-center justify-center rounded-lg bg-accent-primary">
          <Brain className="size-4 text-white" />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-semibold text-text-primary">
            CS Learn Pro
          </span>
          <span className="text-[10px] font-medium text-text-muted">
            Master the fundamentals
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-3">
        <div className="mb-1">
          {navItems.map((item) => (
            <SidebarNavItem
              key={item.href}
              href={item.href}
              icon={item.icon}
              label={item.label}
              isActive={isActive(item.href)}
            />
          ))}
        </div>

        <div className="mb-1 mt-2">
          <div className="px-3 pb-1 text-[10px] font-semibold uppercase tracking-widest text-text-muted">
            Courses
          </div>
          {courseItems.map((item) => (
            <SidebarNavItem
              key={item.href}
              href={item.href}
              icon={item.icon}
              label={item.label}
              isActive={isActive(item.href)}
              dotColor={getCourseColor(item.href)}
            />
          ))}
        </div>

        <div className="mb-1 mt-2">
          <div className="px-3 pb-1 text-[10px] font-semibold uppercase tracking-widest text-text-muted">
            Tools
          </div>
          {utilityItems.map((item) => (
            <SidebarNavItem
              key={item.href}
              href={item.href}
              icon={item.icon}
              label={item.label}
              isActive={isActive(item.href)}
            />
          ))}
        </div>
      </nav>

      <div className="shrink-0 border-t border-border p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 rounded-md bg-accent-primary-light px-2 py-1 transition-all duration-200 hover:bg-accent-primary-light/80">
              <Zap className="size-3 text-accent-warning" />
              <span className="text-xs font-semibold text-accent-warning">
                {streak}
              </span>
              <span className="text-[10px] text-text-muted">day streak</span>
            </div>
            <span className="text-[10px] text-text-muted">Lv.{level}</span>
          </div>
          <ThemeSwitcher />
        </div>
      </div>
    </aside>
  );
}
