// Haalt real-time openingsuren op via OpenStreetMap Overpass API.
// Query: /api/place-hours?osm_id=node/12345678  of  ?osm_id=way/12345678

const cache = new Map(); // osm_id → { data, expiresAt }
const CACHE_MS = 30 * 60 * 1000; // 30 minuten

const OSM_DAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const OSM_TO_JS = { Mo: 1, Tu: 2, We: 3, Th: 4, Fr: 5, Sa: 6, Su: 0 };

function toMin(t) {
  const [h, m] = t.trim().split(':').map(Number);
  return h * 60 + m;
}

function daysInSpec(spec) {
  const set = new Set();
  for (const part of spec.split(',')) {
    const p = part.trim();
    if (p.includes('-')) {
      const [a, b] = p.split('-').map(s => s.trim());
      const ai = OSM_DAYS.indexOf(a);
      const bi = OSM_DAYS.indexOf(b);
      if (ai !== -1 && bi !== -1) {
        for (let i = ai; i <= bi; i++) set.add(OSM_TO_JS[OSM_DAYS[i]]);
      }
    } else if (OSM_TO_JS[p] !== undefined) {
      set.add(OSM_TO_JS[p]);
    }
  }
  return set;
}

function parseOpeningHours(ohString) {
  if (!ohString) return null;
  const str = ohString.trim();
  if (str === '24/7') return { isOpen: true, todayHours: '24/7', raw: str };

  const now = new Date();
  const curDay = now.getDay();
  const curMin = now.getHours() * 60 + now.getMinutes();

  for (const rule of str.split(';').map(r => r.trim()).filter(Boolean)) {
    const m = rule.match(/^([A-Za-z][A-Za-z,\-]*)\s+(.*)/);
    if (!m) continue;
    const [, daySpec, timeSpec] = m;

    if (!daysInSpec(daySpec).has(curDay)) continue;

    const ts = timeSpec.trim().toLowerCase();
    if (ts === 'off' || ts === 'closed') return { isOpen: false, todayHours: 'Gesloten', raw: str };

    const formatted = ts
      .replace(/(\d{1,2}:\d{2})-(\d{1,2}:\d{2})/g, '$1 – $2')
      .replace(/,/g, ', ');

    const rangeRe = /(\d{1,2}:\d{2})-(\d{1,2}:\d{2})/g;
    let rm;
    while ((rm = rangeRe.exec(ts)) !== null) {
      if (curMin >= toMin(rm[1]) && curMin < toMin(rm[2])) {
        return { isOpen: true, todayHours: formatted, raw: str };
      }
    }
    return { isOpen: false, todayHours: formatted, raw: str };
  }

  return { isOpen: false, todayHours: null, raw: str };
}

exports.handler = async (event) => {
  const { osm_id } = event.queryStringParameters || {};

  if (!osm_id) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Missing osm_id' }) };
  }

  const cached = cache.get(osm_id);
  if (cached && Date.now() < cached.expiresAt) {
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=1800' },
      body: JSON.stringify(cached.data),
    };
  }

  // osm_id formaat: "node/12345678" of "way/12345678" of "relation/12345678"
  const parts = osm_id.split('/');
  if (parts.length !== 2 || !['node', 'way', 'relation'].includes(parts[0])) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Ongeldig osm_id formaat. Gebruik bv. node/12345678' }) };
  }
  const [type, id] = parts;

  const query = `[out:json][timeout:10]; ${type}(${id}); out tags;`;

  let osmRes;
  try {
    osmRes = await fetch('https://overpass-api.de/api/interpreter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `data=${encodeURIComponent(query)}`,
    });
  } catch {
    return { statusCode: 502, body: JSON.stringify({ error: 'Overpass API niet bereikbaar' }) };
  }

  if (!osmRes.ok) {
    return { statusCode: 502, body: JSON.stringify({ error: 'Overpass API fout' }) };
  }

  const json = await osmRes.json();
  const element = json.elements?.[0];

  if (!element) {
    return { statusCode: 404, body: JSON.stringify({ error: 'OSM element niet gevonden' }) };
  }

  const tags = element.tags || {};
  const result = {
    ...parseOpeningHours(tags.opening_hours),
    name: tags.name,
    website: tags.website || tags['contact:website'],
    phone: tags.phone || tags['contact:phone'],
  };

  cache.set(osm_id, { data: result, expiresAt: Date.now() + CACHE_MS });

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=1800' },
    body: JSON.stringify(result),
  };
};
