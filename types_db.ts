export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      liked_songs: {
        Row: {
          created_at: string
          song_id: number
          user_id: string
        }
        Insert: {
          created_at?: string
          song_id: number
          user_id: string
        }
        Update: {
          created_at?: string
          song_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "liked_songs_song_id_fkey"
            columns: ["song_id"]
            isOneToOne: false
            referencedRelation: "songs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "liked_songs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      songs: {
        Row: {
          author: string | null
          created_at: string
          id: number
          image_path: string | null
          song_path: string | null
          title: string | null
          user_id: string | null
        }
        Insert: {
          author?: string | null
          created_at?: string
          id?: number
          image_path?: string | null
          song_path?: string | null
          title?: string | null
          user_id?: string | null
        }
        Update: {
          author?: string | null
          created_at?: string
          id?: number
          image_path?: string | null
          song_path?: string | null
          title?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "songs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
