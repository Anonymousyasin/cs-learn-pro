"use client";

import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from "react";
import type { User } from "@supabase/supabase-js";
import { getSupabaseClient } from "./supabase";

interface AuthState {
  user: User | null;
  loading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthState>({
  user: null,
  loading: true,
  signOut: async () => {},
});

export function SupabaseProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<{ user: User | null; loading: boolean }>({
    user: null,
    loading: true,
  });
  const supabase = getSupabaseClient();

  useEffect(() => {
    // Try to get existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setState({ user: session.user, loading: false });
      } else {
        // No session — sign in anonymously
        supabase.auth.signInAnonymously().then(({ data, error }) => {
          if (error) {
            console.warn("Anonymous sign-in failed:", error.message);
            setState({ user: null, loading: false });
          } else if (data?.user) {
            setState({ user: data.user, loading: false });
          } else {
            setState({ user: null, loading: false });
          }
        });
      }
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setState({ user: session?.user ?? null, loading: false });
    });

    return () => subscription.unsubscribe();
  }, [supabase]);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
    // signOut clears session → onAuthStateChange fires → state resets
    // Then signInAnonymously will fire on next mount
    window.location.href = "/";
  }, [supabase]);

  return (
    <AuthContext.Provider value={{ ...state, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useUser() {
  return useContext(AuthContext);
}
