const COUNTRY_HEADER = 'x-vercel-ip-country';

// Vercel attaches the requester's two-letter ISO 3166-1 country code to every
// deployment request. This is the visitor's own country, not the region the
// deployment runs in. The header is absent when running `vercel dev` or locally,
// so `country` is null there and the frontend keeps its existing India fallback.
export default function handler(req, res) {
  const header = req.headers[COUNTRY_HEADER];
  const country = typeof header === 'string' && /^[A-Za-z]{2}$/.test(header)
    ? header.toUpperCase()
    : null;

  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
  res.setHeader('Vary', 'X-Vercel-IP-Country');
  res.status(200).json({ country });
}
