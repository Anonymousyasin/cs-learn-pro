"use client";

import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "./database.types";

// Supabase anon key is designed to be public — safe to embed.
// Protected by Row Level Security (RLS) on all tables.
const SUPABASE_URL = "https://ucxfnbrheqpbwqlmesok.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjeGZuYnJoZXFwYndxbG1lc29rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ1OTA2NTYsImV4cCI6MjEwMDE2NjY1Nn0._TgNK8rvsAUnBgnkaxyNCQhT98vIuAvXhAfSIynOXrY";

let client: ReturnType<typeof createBrowserClient<Database>> | null = null;

export function getSupabaseClient() {
  if (client) return client;
  client = createBrowserClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);
  return client;
}
