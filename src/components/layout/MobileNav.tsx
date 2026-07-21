"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "motion/react";
import {
  LayoutDashboard,
  BookOpen,
  RotateCcw,
  Award,
  UserCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/courses", icon: BookOpen, label: "Courses" },
  { href: "/review", icon: RotateCcw, label: "Review" },
  { href: "/achievements", icon: Award, label: "Achievements" },
  { href: "/profile", icon: UserCircle, label: "Profile" },
];

export function MobileNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 bg-bg-secondary md:hidden">
      {/* Subtle top border gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent" />

      <div className="flex items-center justify-around px-2 pb-safe-or-2 pt-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative flex flex-col items-center gap-0.5 rounded-lg px-4 py-2 min-w-0 transition-colors duration-150",
                active
                  ? "text-accent-primary"
                  : "text-text-muted hover:text-text-secondary"
              )}
            >
              {/* Active indicator dot — animates between tabs via layoutId */}
              {active && (
                <motion.div
                  layoutId="active-indicator"
                  className="absolute -top-1 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-accent-primary"
                  transition={{ type: "spring" as const, stiffness: 400, damping: 30 }}
                />
              )}

              {/* Animated icon — gentle scale bounce when active */}
              <motion.div
                layout
                animate={
                  active
                    ? { scale: [1, 1.15, 0.95, 1.1] }
                    : { scale: 1 }
                }
                transition={
                  active
                    ? { type: "spring" as const, stiffness: 500, damping: 12 }
                    : { type: "spring" as const, stiffness: 300, damping: 20 }
                }
              >
                <Icon className="size-5" />
              </motion.div>

              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
