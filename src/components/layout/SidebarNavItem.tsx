"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface SidebarNavItemProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isActive: boolean;
}

export function SidebarNavItem({
  href,
  icon: Icon,
  label,
  isActive,
}: SidebarNavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-150",
        isActive
          ? "bg-accent text-accent-foreground"
          : "text-text-secondary hover:bg-bg-hover hover:text-text-primary"
      )}
    >
      <Icon
        className={cn(
          "size-4 shrink-0",
          isActive ? "text-accent-primary" : "text-text-muted"
        )}
      />
      <span>{label}</span>
    </Link>
  );
}
