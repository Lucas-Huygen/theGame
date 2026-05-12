-- KaaiSpots — Translations Table Migration
-- Run this in the Supabase SQL Editor: https://supabase.com/dashboard/project/_/sql

-- Create translations table
CREATE TABLE IF NOT EXISTS spot_translations (
  id SERIAL PRIMARY KEY,
  spot_id TEXT NOT NULL REFERENCES spots(id) ON DELETE CASCADE,
  language TEXT NOT NULL CHECK (language IN ('nl', 'en')),
  
  -- Translatable fields
  name TEXT,
  short_desc TEXT,
  long_desc TEXT,
  tips TEXT,
  student_perk TEXT,
  why TEXT[],
  menu JSONB,
  facilities JSONB,
  
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  -- Ensure one translation per language per spot
  UNIQUE(spot_id, language)
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_spot_translations_spot_lang 
  ON spot_translations(spot_id, language);

-- Enable Row Level Security
ALTER TABLE spot_translations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read access" ON spot_translations FOR SELECT USING (true);

-- Create trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_spot_translations_updated_at 
BEFORE UPDATE ON spot_translations
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();
