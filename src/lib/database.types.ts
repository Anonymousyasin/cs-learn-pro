export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      completed_chapters: {
        Row: {
          chapter_id: string
          completed_at: string
          id: string
          user_id: string
          xp_earned: number
        }
        Insert: {
          chapter_id: string
          completed_at?: string
          id?: string
          user_id: string
          xp_earned?: number
        }
        Update: {
          chapter_id?: string
          completed_at?: string
          id?: string
          user_id?: string
          xp_earned?: number
        }
      }
      exam_results: {
        Row: {
          chapter_id: string
          completed_at: string
          id: string
          passed: boolean
          score: number
          user_id: string
          xp_earned: number
        }
        Insert: {
          chapter_id: string
          completed_at?: string
          id?: string
          passed?: boolean
          score?: number
          user_id: string
          xp_earned?: number
        }
        Update: {
          chapter_id?: string
          completed_at?: string
          id?: string
          passed?: boolean
          score?: number
          user_id?: string
          xp_earned?: number
        }
      }
      profiles: {
        Row: {
          created_at: string
          current_streak: number
          id: string
          last_active: string
          longest_streak: number
          streak_start: string
          total_exams_passed: number
          total_lessons_completed: number
          updated_at: string
          xp: number
        }
        Insert: {
          created_at?: string
          current_streak?: number
          id: string
          last_active?: string
          longest_streak?: number
          streak_start?: string
          total_exams_passed?: number
          total_lessons_completed?: number
          updated_at?: string
          xp?: number
        }
        Update: {
          created_at?: string
          current_streak?: number
          id?: string
          last_active?: string
          longest_streak?: number
          streak_start?: string
          total_exams_passed?: number
          total_lessons_completed?: number
          updated_at?: string
          xp?: number
        }
      }
      review_cards: {
        Row: {
          answer: string
          chapter_id: string
          created_at: string
          ease_factor: number
          id: string
          interval: number
          next_review: string
          question: string
          strength: string
          updated_at: string
          user_id: string
        }
        Insert: {
          answer: string
          chapter_id: string
          created_at?: string
          ease_factor?: number
          id?: string
          interval?: number
          next_review?: string
          question: string
          strength?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          answer?: string
          chapter_id?: string
          created_at?: string
          ease_factor?: number
          id?: string
          interval?: number
          next_review?: string
          question?: string
          strength?: string
          updated_at?: string
          user_id?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

export type Tables<T extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][T]['Row']
export type TablesInsert<T extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][T]['Insert']
export type TablesUpdate<T extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][T]['Update']
