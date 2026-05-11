exports.handler = async () => {
  const { SUPABASE_URL, SUPABASE_ANON_KEY } = process.env;

  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/spots?select=*&order=walk.asc`,
    {
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
    }
  );

  if (!res.ok) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Database error' }) };
  }

  const rows = await res.json();

  const spots = rows.map(({ lat, lng, short_desc, long_desc, ...s }) => ({
    ...s,
    coords: [lat, lng],
    desc: short_desc,
    long: long_desc,
  }));

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=300',
    },
    body: JSON.stringify(spots),
  };
};
