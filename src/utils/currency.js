// Currency display for the introductory offer.
//
// Symbols, separators, and symbol placement all come from Intl, so there is no
// hand-maintained symbol table to drift out of date. The only thing this file
// decides is how much precision to show.

const formatters = new Map();

function formatterFor(currency) {
  if (!formatters.has(currency)) {
    // Whole units only. The base offer is a monthly subscription, and showing
    // converted cents reads as false precision on a price this size. This also
    // keeps the base amount exact, so India always renders 399 and not 399.00.
    formatters.set(
      currency,
      new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
        maximumFractionDigits: 0,
      })
    );
  }

  return formatters.get(currency);
}

/**
 * Formats a converted amount in the visitor's currency. Returns null rather than
 * throwing when the currency code is unusable, so callers can fall back instead
 * of rendering a broken price.
 */
export function formatCurrency(amount, currency) {
  if (!Number.isFinite(amount) || !currency) return null;

  try {
    return formatterFor(currency).format(amount);
  } catch (_error) {
    // Intl throws a RangeError on a currency code it does not recognise.
    return null;
  }
}
