"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "motion/react";
import { getSupabaseClient } from "@/lib/supabase";
import { useUser } from "@/lib/supabase-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

type AuthMode = "link" | "signin" | "signup";

export default function AuthPage() {
  const router = useRouter();
  const { user, loading } = useUser();
  const supabase = getSupabaseClient();

  // Wait for auth state to resolve
  if (loading) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-md items-center justify-center p-4">
        <div className="text-center">
          <div className="mx-auto mb-4 size-8 animate-spin rounded-full border-2 border-accent-primary/30 border-t-accent-primary" />
          <p className="text-text-secondary">Loading…</p>
        </div>
      </div>
    );
  }

  // Supabase not configured — show helpful message
  if (!supabase) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-md items-center p-4">
        <Card className="w-full">
          <CardHeader className="text-center">
            <CardTitle>Supabase Not Configured</CardTitle>
            <CardDescription>
              Add <code className="rounded bg-bg-secondary px-1.5 py-0.5 text-sm">NEXT_PUBLIC_SUPABASE_URL</code> and{" "}
              <code className="rounded bg-bg-secondary px-1.5 py-0.5 text-sm">NEXT_PUBLIC_SUPABASE_ANON_KEY</code>{" "}
              to your Vercel environment variables.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-4 text-sm text-text-secondary">
              Your progress is still saved locally in your browser.
            </p>
            <Button variant="outline" onClick={() => router.push("/")}>
              Back to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const isAnonymous = user?.is_anonymous ?? true;
  const [mode, setMode] = useState<AuthMode>(isAnonymous ? "link" : "signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // ─── Already signed in with a real account ─────────────────
  if (!loading && user && !isAnonymous) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-md items-center p-4">
        <Card className="w-full">
          <CardHeader className="text-center">
            <CardTitle>Signed In</CardTitle>
            <CardDescription>{user.email}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-center text-sm text-text-secondary">
              Your progress is automatically saved to the cloud.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1" onClick={() => router.push("/profile")}>
                Profile
              </Button>
              <Button variant="outline" className="flex-1" onClick={async () => {
                await supabase.auth.signOut();
                router.push("/");
              }}>
                Sign Out
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // ─── Handle form submit ────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      if (mode === "link") {
        // Anonymous user creating a real account — links identity automatically
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        toast.success("Account created! Your progress is now saved.");
        router.push("/");
      } else if (mode === "signup") {
        // Already signed out user creating an account
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        toast.success("Account created! Check your email to confirm.");
        router.push("/");
      } else {
        // Sign in
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Signed in!");
        router.push("/");
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong";
      toast.error(message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogle = async () => {
    try {
      if (isAnonymous && user) {
        // Link Google identity to existing anonymous account
        const { error } = await supabase.auth.linkIdentity({ provider: "google" });
        if (error) throw error;
      } else {
        // Normal Google sign in
        const { error } = await supabase.auth.signInWithOAuth({
          provider: "google",
          options: { redirectTo: `${window.location.origin}/auth/callback` },
        });
        if (error) throw error;
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Google sign-in failed";
      toast.error(message);
    }
  };

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-md items-center p-4">
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Card>
          <CardHeader className="text-center">
            <CardTitle>
              {mode === "link"
                ? "Save Your Progress"
                : mode === "signup"
                  ? "Create Account"
                  : "Sign In"}
            </CardTitle>
            <CardDescription>
              {mode === "link"
                ? "Create a free account so your progress syncs across devices"
                : mode === "signup"
                  ? "Start learning with cloud-saved progress"
                  : "Welcome back"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Google OAuth */}
            <Button
              variant="outline"
              className="w-full gap-2"
              onClick={handleGoogle}
              disabled={submitting}
            >
              <svg className="size-4" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              {isAnonymous ? "Link Google Account" : "Continue with Google"}
            </Button>

            <Separator className="my-2" />

            {/* Email/Password Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-text-primary">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-text-primary">Password</label>
                <Input
                  id="password"
                  type="password"
                  placeholder="At least 6 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  autoComplete={mode === "signin" ? "current-password" : "new-password"}
                />
              </div>
              <Button type="submit" className="w-full" disabled={submitting}>
                {submitting
                  ? "Please wait…"
                  : mode === "link"
                    ? "Create Account & Save Progress"
                    : mode === "signup"
                      ? "Create Account"
                      : "Sign In"}
              </Button>
            </form>

            {/* Toggle mode */}
            <div className="text-center text-sm text-text-secondary">
              {mode === "signin" ? (
                <>
                  No account?{" "}
                  <button
                    className="font-medium text-accent-primary hover:underline"
                    onClick={() => setMode("signup")}
                  >
                    Sign up
                  </button>
                </>
              ) : mode === "signup" ? (
                <>
                  Already have an account?{" "}
                  <button
                    className="font-medium text-accent-primary hover:underline"
                    onClick={() => setMode("signin")}
                  >
                    Sign in
                  </button>
                </>
              ) : (
                <button
                  className="font-medium text-accent-primary hover:underline"
                  onClick={() => setMode("signin")}
                >
                  Already have an account? Sign in
                </button>
              )}
            </div>

            <p className="text-center text-xs text-text-muted">
              {mode === "link"
                ? "Your existing progress (XP, streaks, achievements) will be saved to this account."
                : "By continuing, you agree to our terms."}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
