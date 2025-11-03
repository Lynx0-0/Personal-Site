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
      profiles: {
        Row: {
          id: string
          full_name: string | null
          company_name: string | null
          vat_number: string | null
          phone: string | null
          avatar_url: string | null
          role: string
          created_at: string
        }
        Insert: {
          id: string
          full_name?: string | null
          company_name?: string | null
          vat_number?: string | null
          phone?: string | null
          avatar_url?: string | null
          role?: string
          created_at?: string
        }
        Update: {
          id?: string
          full_name?: string | null
          company_name?: string | null
          vat_number?: string | null
          phone?: string | null
          avatar_url?: string | null
          role?: string
          created_at?: string
        }
      }
      clients: {
        Row: {
          id: string
          user_id: string | null
          business_type: string | null
          tags: string[] | null
          notes: string | null
          status: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          business_type?: string | null
          tags?: string[] | null
          notes?: string | null
          status?: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          business_type?: string | null
          tags?: string[] | null
          notes?: string | null
          status?: string
          created_at?: string
        }
      }
      projects: {
        Row: {
          id: string
          client_id: string
          name: string
          description: string | null
          type: 'website' | 'gestionale' | 'app' | '3d_print'
          status: string
          budget: number | null
          deadline: string | null
          progress: number
          files: Json | null
          created_at: string
        }
        Insert: {
          id?: string
          client_id: string
          name: string
          description?: string | null
          type: 'website' | 'gestionale' | 'app' | '3d_print'
          status?: string
          budget?: number | null
          deadline?: string | null
          progress?: number
          files?: Json | null
          created_at?: string
        }
        Update: {
          id?: string
          client_id?: string
          name?: string
          description?: string | null
          type?: 'website' | 'gestionale' | 'app' | '3d_print'
          status?: string
          budget?: number | null
          deadline?: string | null
          progress?: number
          files?: Json | null
          created_at?: string
        }
      }
      products: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          price: number
          category: string | null
          type: 'service' | 'digital' | '3d_model' | 'physical'
          images: Json | null
          model_3d_url: string | null
          stl_file_url: string | null
          print_settings: Json | null
          active: boolean
          stock: number | null
          metadata: Json | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description?: string | null
          price: number
          category?: string | null
          type: 'service' | 'digital' | '3d_model' | 'physical'
          images?: Json | null
          model_3d_url?: string | null
          stl_file_url?: string | null
          print_settings?: Json | null
          active?: boolean
          stock?: number | null
          metadata?: Json | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string | null
          price?: number
          category?: string | null
          type?: 'service' | 'digital' | '3d_model' | 'physical'
          images?: Json | null
          model_3d_url?: string | null
          stl_file_url?: string | null
          print_settings?: Json | null
          active?: boolean
          stock?: number | null
          metadata?: Json | null
          created_at?: string
        }
      }
      orders: {
        Row: {
          id: string
          client_id: string
          stripe_payment_intent: string | null
          items: Json
          total: number
          status: string
          shipping_address: Json | null
          print_status: string | null
          tracking_number: string | null
          created_at: string
        }
        Insert: {
          id?: string
          client_id: string
          stripe_payment_intent?: string | null
          items: Json
          total: number
          status?: string
          shipping_address?: Json | null
          print_status?: string | null
          tracking_number?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          client_id?: string
          stripe_payment_intent?: string | null
          items?: Json
          total?: number
          status?: string
          shipping_address?: Json | null
          print_status?: string | null
          tracking_number?: string | null
          created_at?: string
        }
      }
      invoices: {
        Row: {
          id: string
          client_id: string
          project_id: string | null
          invoice_number: string
          amount: number
          tax_rate: number
          status: string
          due_date: string | null
          paid_at: string | null
          stripe_invoice_id: string | null
          pdf_url: string | null
          created_at: string
        }
        Insert: {
          id?: string
          client_id: string
          project_id?: string | null
          invoice_number: string
          amount: number
          tax_rate?: number
          status?: string
          due_date?: string | null
          paid_at?: string | null
          stripe_invoice_id?: string | null
          pdf_url?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          client_id?: string
          project_id?: string | null
          invoice_number?: string
          amount?: number
          tax_rate?: number
          status?: string
          due_date?: string | null
          paid_at?: string | null
          stripe_invoice_id?: string | null
          pdf_url?: string | null
          created_at?: string
        }
      }
      settings: {
        Row: {
          id: string
          key: string
          shop_enabled: boolean
          metadata: Json | null
          updated_at: string
        }
        Insert: {
          id?: string
          key: string
          shop_enabled?: boolean
          metadata?: Json | null
          updated_at?: string
        }
        Update: {
          id?: string
          key?: string
          shop_enabled?: boolean
          metadata?: Json | null
          updated_at?: string
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
