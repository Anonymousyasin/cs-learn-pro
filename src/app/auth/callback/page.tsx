"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseClient } from "@/lib/supabase";

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const supabase = getSupabaseClient();
    if (!supabase) {
      router.push("/");
      return;
    }

    supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") {
        router.push("/");
      }
    });

    // Timeout fallback
    const timer = setTimeout(() => router.push("/"), 5000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-md items-center justify-center p-4">
      <div className="text-center">
        <div className="mb-4 size-8 animate-spin rounded-full border-2 border-accent-primary/30 border-t-accent-primary mx-auto" />
        <p className="text-text-secondary">Completing sign-in…</p>
      </div>
    </div>
  );
}
