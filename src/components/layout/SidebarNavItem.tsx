"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface SidebarNavItemProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isActive: boolean;
  dotColor?: string;
}

export function SidebarNavItem({
  href,
  icon: Icon,
  label,
  isActive,
  dotColor,
}: SidebarNavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
        isActive
          ? "bg-accent text-accent-foreground shadow-[inset_0_0_16px_rgba(56,189,248,0.06)]"
          : "text-text-secondary hover:bg-bg-hover hover:text-text-primary"
      )}
    >
      {/* Left border accent bar — 2px solid bar for active state */}
      <span
        className={cn(
          "absolute left-0 top-1.5 h-5 w-[2px] rounded-r-full transition-all duration-200",
          isActive ? "bg-accent-primary opacity-100" : "opacity-0"
        )}
      />

      {/* Colored dot for course items */}
      {dotColor && (
        <span
          className="size-1.5 shrink-0 rounded-full"
          style={{ backgroundColor: dotColor }}
        />
      )}

      <Icon
        className={cn(
          "size-4 shrink-0 transition-colors duration-200",
          isActive
            ? "text-accent-primary"
            : "text-text-muted group-hover:text-text-primary"
        )}
      />
      <span>{label}</span>
    </Link>
  );
}
