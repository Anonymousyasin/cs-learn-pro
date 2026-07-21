"use client";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { ErrorBoundary } from "@/components/ErrorBoundary";

export function MainContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <ErrorBoundary>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: "easeOut" as const }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </ErrorBoundary>
  );
}
