exports.handler = async (event) => {
  const { id } = event.queryStringParameters || {};

  if (!id) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Missing id' }) };
  }

  const { SUPABASE_URL, SUPABASE_ANON_KEY } = process.env;

  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/spots?id=eq.${encodeURIComponent(id)}&select=*`,
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

  const [row] = await res.json();

  if (!row) {
    return { statusCode: 404, body: JSON.stringify({ error: 'Not found' }) };
  }

  const { lat, lng, short_desc, long_desc, ...rest } = row;

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...rest, coords: [lat, lng], desc: short_desc, long: long_desc }),
  };
};
