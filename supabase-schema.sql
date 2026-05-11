-- KaaiSpots — Supabase/PostgreSQL schema
-- Voer dit uit in de Supabase SQL Editor: https://supabase.com/dashboard/project/_/sql

CREATE TABLE IF NOT EXISTS spots (
  id           TEXT PRIMARY KEY,
  name         TEXT NOT NULL,
  lat          DOUBLE PRECISION NOT NULL,
  lng          DOUBLE PRECISION NOT NULL,
  walk         INTEGER NOT NULL,
  bike         INTEGER,
  transit      INTEGER,
  address      TEXT,
  phone        TEXT,
  website      TEXT,
  price        INTEGER NOT NULL DEFAULT 0,
  color        TEXT NOT NULL,
  favorite     BOOLEAN DEFAULT FALSE,
  cats         TEXT[] NOT NULL DEFAULT '{}',
  short_desc   TEXT,
  long_desc    TEXT,
  tips         TEXT,
  student_perk TEXT,
  why          TEXT[],
  payments     TEXT[] DEFAULT '{}',
  hours        JSONB,
  menu         JSONB,
  facilities   JSONB,
  osm_id       TEXT    -- OpenStreetMap element ID, bv. "node/123456" of "way/123456"
);

-- Publieke read-only toegang via Row Level Security
ALTER TABLE spots ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read access" ON spots FOR SELECT USING (true);

-- Voer daarna supabase-seed.sql uit om de locaties toe te voegen.
-- supabase-seed.sql staat NIET in git — vraag een teamlid om het bestand.

-- Migratie voor bestaande databases (als de tabel al bestaat):
-- ALTER TABLE spots ADD COLUMN IF NOT EXISTS osm_id TEXT;
