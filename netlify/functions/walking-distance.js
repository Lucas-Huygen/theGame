// Berekent wandeltijd van Campus Kaai naar een opgegeven locatie via OSRM (gratis, geen API key).
// Query: /api/walking-distance?lat=50.840&lng=4.325
// Gebruik dit bij het toevoegen van een nieuwe spot om de walk-waarde automatisch in te vullen.

const CAMPUS_LNG = 4.322822277113688;
const CAMPUS_LAT = 50.84232308508647;

exports.handler = async (event) => {
  const { lat, lng } = event.queryStringParameters || {};

  if (!lat || !lng) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Geef lat en lng mee als query parameters' }) };
  }

  const parsedLat = parseFloat(lat);
  const parsedLng = parseFloat(lng);

  if (isNaN(parsedLat) || isNaN(parsedLng)) {
    return { statusCode: 400, body: JSON.stringify({ error: 'lat en lng moeten getallen zijn' }) };
  }

  // OSRM verwacht coördinaten in lng,lat volgorde
  const url = `https://router.project-osrm.org/route/v1/foot/${CAMPUS_LNG},${CAMPUS_LAT};${parsedLng},${parsedLat}?overview=false`;

  let res;
  try {
    res = await fetch(url, {
      headers: { 'User-Agent': 'KaaiSpots/1.0 (studentproject)' },
    });
  } catch {
    return { statusCode: 502, body: JSON.stringify({ error: 'OSRM niet bereikbaar' }) };
  }

  if (!res.ok) {
    return { statusCode: 502, body: JSON.stringify({ error: 'OSRM fout' }) };
  }

  const json = await res.json();

  if (json.code !== 'Ok' || !json.routes?.[0]) {
    return { statusCode: 404, body: JSON.stringify({ error: 'Geen route gevonden' }) };
  }

  const route = json.routes[0];
  const walkMinutes = Math.round(route.duration / 60);
  const distanceMeters = Math.round(route.distance);

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=86400' },
    body: JSON.stringify({ walk: walkMinutes, distance: distanceMeters }),
  };
};
