import { useEffect, useMemo, useState } from 'react';
import useRegionPricing from './useRegionPricing.js';
import {
  BASE_OFFER,
  FALLBACK_CURRENCY,
  USD_FALLBACK_AMOUNT,
} from '../data/pricing.js';
import { formatCurrency } from '../utils/currency.js';

const BASE_PRICE = formatCurrency(BASE_OFFER.amount, BASE_OFFER.currency);

function usableRate(rates, currency) {
  if (!rates || !currency) return null;
  const rate = rates[currency];
  return Number.isFinite(rate) && rate > 0 ? rate : null;
}

/**
 * Resolves the introductory offer into the visitor's own currency.
 *
 * Market detection is not repeated here. The country code and market come from
 * the existing useRegionPricing hook, and the base amount comes from the
 * existing pricing data. This hook only adds the conversion: it asks the Vercel
 * function for INR-based rates once, then converts.
 *
 * Every failure path lands on USD rather than on an empty string, so the banner
 * always has a price to render.
 */
export default function useOfferPrice() {
  const { market } = useRegionPricing();
  const [rateState, setRateState] = useState({ status: 'loading', rates: null });

  useEffect(() => {
    let active = true;
    const controller = new AbortController();

    const settle = (status, rates = null) => {
      if (active) setRateState({ status, rates });
    };

    const load = async () => {
      try {
        const response = await fetch('/api/currency', {
          signal: controller.signal,
          headers: { Accept: 'application/json' },
        });

        if (!response.ok) {
          settle('error');
          return;
        }

        const payload = await response.json();

        if (payload && payload.base === BASE_OFFER.currency && payload.rates && typeof payload.rates === 'object') {
          settle('ready', payload.rates);
        } else {
          settle('error');
        }
      } catch (_error) {
        // Offline, blocked, or the function is unavailable outside Vercel. The
        // USD fallback below covers this, so there is nothing to recover.
        settle('error');
      }
    };

    // Started on mount rather than after the market resolves, so the two network
    // calls overlap and the converted price lands as soon as possible.
    load();

    return () => {
      active = false;
      controller.abort();
    };
  }, []);

  return useMemo(() => {
    const visitorCurrency = market ? market.currency : null;

    // India is the base currency, so it needs no rate at all.
    if (visitorCurrency === BASE_OFFER.currency) return BASE_PRICE;

    // Hold the base price until the rate request settles. Dropping to USD while
    // the rate is still in flight would flash the wrong currency at the visitor
    // before correcting it a moment later.
    if (rateState.status === 'loading') return BASE_PRICE;

    if (rateState.status === 'ready') {
      const visitorRate = usableRate(rateState.rates, visitorCurrency);

      if (visitorRate) {
        const converted = formatCurrency(BASE_OFFER.amount * visitorRate, visitorCurrency);
        if (converted) return converted;
      }

      const usdRate = usableRate(rateState.rates, FALLBACK_CURRENCY);

      if (usdRate) {
        const converted = formatCurrency(BASE_OFFER.amount * usdRate, FALLBACK_CURRENCY);
        if (converted) return converted;
      }
    }

    return (
      formatCurrency(USD_FALLBACK_AMOUNT, FALLBACK_CURRENCY) ||
      `${FALLBACK_CURRENCY} ${USD_FALLBACK_AMOUNT}`
    );
  }, [market, rateState]);
}
