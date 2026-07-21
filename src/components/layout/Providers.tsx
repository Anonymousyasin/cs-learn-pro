"use client";

import { ThemeProvider } from "next-themes";
import { SupabaseProvider } from "@/lib/supabase-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      themes={["dark", "light", "sepia"]}
    >
      <SupabaseProvider>{children}</SupabaseProvider>
    </ThemeProvider>
  );
}
