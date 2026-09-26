const FEED_URL = 'https://open.er-api.com/v6/latest';
const BASE_CURRENCY = 'INR';
const REQUEST_TIMEOUT_MS = 4000;

// The public feed refreshes once a day. Holding the response at the edge for six
// hours keeps this function off the upstream API for almost every page view,
// while the stale window still serves a slightly old rate rather than an error.
const CACHE_CONTROL = 'public, s-maxage=21600, stale-while-revalidate=86400';

const ISO_4217 = /^[A-Z]{3}$/;

function send(res, status, body) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', status === 200 ? CACHE_CONTROL : 'no-store');
  res.status(status).json(body);
}

/**
 * Serves exchange rates for the published offer price. The base currency is
 * pinned to INR so the response stays identical for every visitor, which keeps a
 * single cache entry instead of one per currency pair. Rates are proxied here
 * rather than called from the browser so no provider credential is ever shipped
 * to the client.
 */
export default async function handler(req, res) {
  if (req.method && req.method !== 'GET') {
    return send(res, 405, { error: 'Method not allowed' });
  }

  const params = new URLSearchParams(req.query || '');
  const from = (params.get('from') || BASE_CURRENCY).toUpperCase();

  if (from !== BASE_CURRENCY) {
    return send(res, 400, { error: `Only ${BASE_CURRENCY} is supported as the base currency` });
  }

  const requested = (params.get('to') || '')
    .split(',')
    .map((code) => code.trim().toUpperCase())
    .filter((code) => ISO_4217.test(code));

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    const response = await fetch(`${FEED_URL}/${BASE_CURRENCY}`, {
      signal: controller.signal,
      headers: { Accept: 'application/json' },
    });

    clearTimeout(timer);

    if (!response.ok) {
      return send(res, 502, { error: 'Exchange rate provider unavailable' });
    }

    const payload = await response.json();

    if (!payload || payload.result !== 'success' || !payload.rates) {
      return send(res, 502, { error: 'Exchange rate provider returned an unexpected response' });
    }

    const wanted = requested.length ? requested : Object.keys(payload.rates);
    const rates = {};

    for (const code of wanted) {
      const rate = payload.rates[code];
      if (Number.isFinite(rate) && rate > 0) rates[code] = rate;
    }

    const resolved = requested.length
      ? requested.filter((code) => code in rates)
      : Object.keys(rates);

    if (requested.length && resolved.length === 0) {
      return send(res, 404, { error: 'No rate available for the requested currency' });
    }

    rates[BASE_CURRENCY] = 1;

    return send(res, 200, { base: BASE_CURRENCY, rates });
  } catch (error) {
    const timedOut = error && error.name === 'AbortError';
    return send(res, timedOut ? 504 : 502, {
      error: timedOut ? 'Exchange rate request timed out' : 'Exchange rate request failed',
    });
  }
}
