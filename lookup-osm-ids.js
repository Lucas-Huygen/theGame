// Zoekt OSM IDs op voor alle spots via Overpass API (gratis, geen API key).
// Voer uit met: node lookup-osm-ids.js
// Output: osm-ids.sql  (kopieer naar Supabase SQL Editor)

const fs = require('fs');
const path = require('path');

// Gebruik een mirror om rate-limits te spreiden
const ENDPOINTS = [
  'https://overpass-api.de/api/interpreter',
  'https://lz4.overpass-api.de/api/interpreter',
  'https://z.overpass-api.de/api/interpreter',
];
let endpointIdx = 0;

async function overpassQuery(query, attempt = 0) {
  const url = `${ENDPOINTS[endpointIdx % ENDPOINTS.length]}?data=${encodeURIComponent(query)}`;
  endpointIdx++;
  const res = await fetch(url, { headers: { Accept: '*/*', 'User-Agent': 'KaaiSpots/1.0' } });
  if ((res.status === 429 || res.status === 504) && attempt < 3) {
    await sleep(4000 * (attempt + 1));
    return overpassQuery(query, attempt + 1);
  }
  if (!res.ok) throw new Error(`Overpass HTTP ${res.status}`);
  return res.json();
}

async function findOsmId(name, lat, lng) {
  // Stap 1: exact naam-match binnen 500m
  const exact = `[out:json][timeout:15];(node["name"="${name}"](around:500,${lat},${lng});way["name"="${name}"](around:500,${lat},${lng}););out center tags;`;
  const r1 = await overpassQuery(exact);
  if (r1.elements?.length) return pickBest(r1.elements, lat, lng);

  // Stap 2: case-insensitief exact match (voor accenten e.d.)
  const nameEsc = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const ci = `[out:json][timeout:15];(node["name"~"^${nameEsc}$",i](around:500,${lat},${lng});way["name"~"^${nameEsc}$",i](around:500,${lat},${lng}););out center tags;`;
  const r2 = await overpassQuery(ci);
  if (r2.elements?.length) return pickBest(r2.elements, lat, lng);

  // Stap 3: meest onderscheidend woord (skip generieke termen)
  const SKIP = new Set(['café','coffee','bar','de','het','een','the','and','en','van','le','la','les','au','aux','à']);
  const keyword = name.split(/[\s\-&',.]+/)
    .filter(w => w.length > 3 && !SKIP.has(w.toLowerCase()))
    .sort((a, b) => b.length - a.length)[0];

  if (!keyword) return null;
  const kwEsc = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const fuzzy = `[out:json][timeout:15];(node["name"~"${kwEsc}",i](around:300,${lat},${lng});way["name"~"${kwEsc}",i](around:300,${lat},${lng}););out center tags;`;
  const r3 = await overpassQuery(fuzzy);
  if (r3.elements?.length) return pickBest(r3.elements, lat, lng);

  return null;
}

function pickBest(elements, lat, lng) {
  const withDist = elements.map(el => {
    const elLat = el.lat ?? el.center?.lat;
    const elLng = el.lon ?? el.center?.lon;
    const dist = Math.round(Math.hypot((elLat - lat) * 111000, (elLng - lng) * 71000));
    return { ...el, dist };
  });
  withDist.sort((a, b) => a.dist - b.dist);
  const best = withDist[0];
  return { osm_id: `${best.type}/${best.id}`, osmName: best.tags?.name || '?', dist: best.dist };
}

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function main() {
  const spots = JSON.parse(fs.readFileSync(path.join(__dirname, 'spots.json'), 'utf8'));
  const sqlLines = [];

  console.log(`OSM IDs opzoeken voor ${spots.length} spots...\n`);

  for (const spot of spots) {
    const [lat, lng] = spot.coords;
    process.stdout.write(`  ${spot.name.padEnd(35)} `);
    try {
      const result = await findOsmId(spot.name, lat, lng);
      if (!result) {
        console.log(`niet gevonden in OSM`);
        sqlLines.push(`-- NIET GEVONDEN: ${spot.id} (${spot.name})`);
      } else {
        const flag = result.osmName.toLowerCase() !== spot.name.toLowerCase() ? ' ⚠' : '';
        console.log(`${result.osm_id.padEnd(25)}  "${result.osmName}"  (${result.dist}m)${flag}`);
        sqlLines.push(`UPDATE spots SET osm_id = '${result.osm_id}' WHERE id = '${spot.id}'; -- ${result.osmName}`);
      }
    } catch (err) {
      console.log(`FOUT — ${err.message}`);
      sqlLines.push(`-- FOUT voor ${spot.id}: ${err.message}`);
    }
    await sleep(2500);
  }

  const sqlPath = path.join(__dirname, 'osm-ids.sql');
  fs.writeFileSync(sqlPath,
    '-- Gegenereerd door lookup-osm-ids.js\n' +
    '-- ⚠ = OSM-naam verschilt van onze naam, controleer voor uitvoeren\n' +
    '-- Voer uit in Supabase SQL Editor\n\n' +
    sqlLines.join('\n') + '\n'
  );

  console.log(`\nKlaar! → osm-ids.sql`);
}

main().catch(err => { console.error(err); process.exit(1); });
