import { useEffect, useState } from 'react';
import {
  FALLBACK_MARKET_ID,
  marketById,
  marketForCountry,
} from '../data/pricing.js';

// Reads the visitor's country from the Vercel Function in /api/country.js, then
// hands the ISO 3166-1 alpha-2 code to the existing lookup in data/pricing.js.
// The published currency, rates, and the India fallback all stay in that file.
// Nothing about the visitor is stored: the code is used once to pick a market,
// then discarded. State starts on the existing fallback, so the first paint is
// never empty and there is no loading flash when detection resolves later.
export default function useRegionPricing() {
  const [marketId, setMarketId] = useState(FALLBACK_MARKET_ID);
  const [source, setSource] = useState('fallback');

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        const response = await fetch('/api/country', { headers: { Accept: 'application/json' } });
        if (!response.ok) return;

        const { country } = await response.json();
        if (!active) return;

        const detected = marketForCountry(country);
        if (!detected) return;

        setMarketId(detected);
        setSource('detected');
      } catch (_error) {
        // Local Vite has no /api/country function. The India fallback stays put.
      }
    };

    load();

    return () => {
      active = false;
    };
  }, []);

  return { market: marketById(marketId), marketId, source };
}
