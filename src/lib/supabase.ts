"use client";

import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "./database.types";

let client: ReturnType<typeof createBrowserClient<Database>> | null = null;

export function getSupabaseClient() {
  if (client) return client;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    // During SSR / prerendering, env vars may not be available.
    // Return a no-op client stub — the actual client is created
    // client-side when the SupabaseProvider mounts.
    return null as unknown as ReturnType<typeof createBrowserClient<Database>>;
  }

  client = createBrowserClient<Database>(supabaseUrl, supabaseAnonKey);
  return client;
}
