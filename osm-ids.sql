-- OSM IDs voor KaaiSpots
-- Gevonden via Overpass API + handmatige verificatie
-- Voer uit in Supabase SQL Editor

-- ✅ Zeker gevonden (naam + coördinaten kloppen)
UPDATE spots SET osm_id = 'node/12256761348' WHERE id = 'castelao';    -- Alimentation castelao
UPDATE spots SET osm_id = 'way/23777897'     WHERE id = 'abattoir';    -- Abattoir
UPDATE spots SET osm_id = 'node/933102661'   WHERE id = 'ramen';       -- Takumi Tonkotsu Ramen
UPDATE spots SET osm_id = 'node/4119669190'  WHERE id = 'kaffabar';    -- kaffabar
UPDATE spots SET osm_id = 'node/7976089830'  WHERE id = 'izycoffee';   -- Izy Coffee
UPDATE spots SET osm_id = 'node/2522741195'  WHERE id = 'mokcoffee';   -- MOK
UPDATE spots SET osm_id = 'node/6109780718'  WHERE id = 'bouche';      -- Bouche
UPDATE spots SET osm_id = 'node/863002072'   WHERE id = 'fritland';    -- Fritland
UPDATE spots SET osm_id = 'node/3505027549'  WHERE id = 'biamara';     -- Bia Mara
UPDATE spots SET osm_id = 'node/4348631525'  WHERE id = 'casco';       -- Casco
UPDATE spots SET osm_id = 'node/1631382677'  WHERE id = 'ausoleil';    -- Au Soleil
UPDATE spots SET osm_id = 'node/4480414658'  WHERE id = 'mortsubite';  -- À la Mort Subite
UPDATE spots SET osm_id = 'node/6578559058'  WHERE id = 'biblio';      -- Nederlandstalige bibliotheek

-- ❌ Niet gevonden in OSM — osm_id blijft NULL, site valt terug op DB-uren
-- kafka      (Café Kafka)
-- parkvorst  (Park van Vorst)
-- gecko      (Gecko Brunch & Cocktail Bar)
-- taes       (Tae's sandwich)
