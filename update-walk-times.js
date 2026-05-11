// Berekent wandeltijden voor alle spots via OpenRouteService (gratis, vereist API key).
// Voer uit met: node update-walk-times.js
// Output: update-walk-times.sql  +  bijgewerkt spots.json
//
// Zet ORS_API_KEY in je .env bestand voor je dit script uitvoert.

const fs = require('fs');
const path = require('path');

// Laad .env zonder externe packages
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  fs.readFileSync(envPath, 'utf8').split('\n').forEach(line => {
    const m = line.match(/^\s*([^#=\s]+)\s*=\s*(.*)\s*$/);
    if (m) process.env[m[1]] = m[2];
  });
}

const ORS_API_KEY = process.env.ORS_API_KEY;
if (!ORS_API_KEY) {
  console.error('Fout: ORS_API_KEY ontbreekt in .env');
  process.exit(1);
}

const CAMPUS_LNG = 4.322822277113688;
const CAMPUS_LAT = 50.84232308508647;

async function getWalkMinutes(lat, lng) {
  const url = `https://api.openrouteservice.org/v2/directions/foot-walking?api_key=${ORS_API_KEY}&start=${CAMPUS_LNG},${CAMPUS_LAT}&end=${lng},${lat}`;
  const res = await fetch(url, { headers: { Accept: 'application/geo+json' } });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`HTTP ${res.status}: ${body.slice(0, 120)}`);
  }
  const json = await res.json();
  const seconds = json.features?.[0]?.properties?.segments?.[0]?.duration;
  if (!seconds) throw new Error('Geen routedata in response');
  return Math.round(seconds / 60);
}

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function main() {
  const spotsPath = path.join(__dirname, 'spots.json');
  const spots = JSON.parse(fs.readFileSync(spotsPath, 'utf8'));

  const sqlLines = [];
  const updated = [];

  console.log(`Campus: ${CAMPUS_LAT}, ${CAMPUS_LNG}`);
  console.log(`Bezig met ${spots.length} spots via OpenRouteService...\n`);

  for (const spot of spots) {
    const [lat, lng] = spot.coords;
    process.stdout.write(`  ${spot.name.padEnd(35)} `);
    try {
      const walk = await getWalkMinutes(lat, lng);
      const diff = walk - spot.walk;
      const diffStr = diff === 0 ? '(ongewijzigd)' : `(was ${spot.walk} → ${diff > 0 ? '+' : ''}${diff})`;
      console.log(`${walk} min  ${diffStr}`);
      sqlLines.push(`UPDATE spots SET walk = ${walk} WHERE id = '${spot.id}';`);
      updated.push({ ...spot, walk });
    } catch (err) {
      console.log(`FOUT — ${err.message} (originele waarde ${spot.walk} min behouden)`);
      sqlLines.push(`-- FOUT voor ${spot.id}: ${err.message}`);
      updated.push(spot);
    }
    await sleep(500); // max 40 req/min op gratis tier
  }

  const sqlPath = path.join(__dirname, 'update-walk-times.sql');
  fs.writeFileSync(sqlPath, '-- Gegenereerd door update-walk-times.js\n-- Voer uit in Supabase SQL Editor\n\n' + sqlLines.join('\n') + '\n');
  fs.writeFileSync(spotsPath, JSON.stringify(updated, null, 2) + '\n');

  console.log(`\nKlaar!`);
  console.log(`  SQL → update-walk-times.sql  (kopieer naar Supabase SQL Editor)`);
  console.log(`  spots.json → bijgewerkt`);
}

main().catch(err => { console.error(err); process.exit(1); });
