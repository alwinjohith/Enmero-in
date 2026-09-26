export const MARKETS = [
  { id: 'india', name: 'India', currency: 'INR', website: '₹299', consultancy: '₹150', combined: '₹449', watchTowerManagement: '₹399' },
  { id: 'bangladesh', name: 'Bangladesh', currency: 'BDT', website: '৳499', consultancy: '৳250', combined: '৳749' },
  { id: 'pakistan', name: 'Pakistan', currency: 'PKR', website: 'PKR 999', consultancy: 'PKR 500', combined: 'PKR 1,499' },
  { id: 'sri-lanka', name: 'Sri Lanka', currency: 'LKR', website: 'LKR 1,499', consultancy: 'LKR 750', combined: 'LKR 2,249' },
  { id: 'nepal', name: 'Nepal', currency: 'NPR', website: 'NPR 499', consultancy: 'NPR 250', combined: 'NPR 749' },
  { id: 'indonesia', name: 'Indonesia', currency: 'IDR', website: 'IDR 49,000', consultancy: 'IDR 25,000', combined: 'IDR 74,000' },
  { id: 'vietnam', name: 'Vietnam', currency: 'VND', website: '₫99,000', consultancy: '₫50,000', combined: '₫149,000' },
  { id: 'philippines', name: 'Philippines', currency: 'PHP', website: '₱299', consultancy: '₱150', combined: '₱449' },
  { id: 'malaysia', name: 'Malaysia', currency: 'MYR', website: 'RM19', consultancy: 'RM10', combined: 'RM29' },
  { id: 'thailand', name: 'Thailand', currency: 'THB', website: '฿199', consultancy: '฿100', combined: '฿299' },
  { id: 'uae', name: 'UAE', currency: 'AED', website: 'AED 19', consultancy: 'AED 10', combined: 'AED 29' },
  { id: 'saudi-arabia', name: 'Saudi Arabia', currency: 'SAR', website: 'SAR 19', consultancy: 'SAR 10', combined: 'SAR 29' },
  { id: 'singapore', name: 'Singapore', currency: 'SGD', website: 'S$19', consultancy: 'S$10', combined: 'S$29' },
  { id: 'south-africa', name: 'South Africa', currency: 'ZAR', website: 'R99', consultancy: 'R50', combined: 'R149' },
  { id: 'mexico', name: 'Mexico', currency: 'MXN', website: 'MX$99', consultancy: 'MX$50', combined: 'MX$149' },
  { id: 'brazil', name: 'Brazil', currency: 'BRL', website: 'R$49', consultancy: 'R$25', combined: 'R$74' },
  { id: 'usa', name: 'USA', currency: 'USD', website: '$9', consultancy: '$5', combined: '$14' },
  { id: 'canada', name: 'Canada', currency: 'CAD', website: 'C$12', consultancy: 'C$6', combined: 'C$18' },
  { id: 'uk', name: 'UK', currency: 'GBP', website: '£9', consultancy: '£5', combined: '£14' },
  { id: 'australia', name: 'Australia', currency: 'AUD', website: 'A$15', consultancy: 'A$8', combined: 'A$23' },
  { id: 'new-zealand', name: 'New Zealand', currency: 'NZD', website: 'NZ$16', consultancy: 'NZ$8', combined: 'NZ$24' },
  { id: 'eurozone', name: 'Eurozone', currency: 'EUR', website: '€10', consultancy: '€5', combined: '€15' },
  { id: 'switzerland', name: 'Switzerland', currency: 'CHF', website: 'CHF 10', consultancy: 'CHF 5', combined: 'CHF 15' },
  { id: 'japan', name: 'Japan', currency: 'JPY', website: '¥1,500', consultancy: '¥750', combined: '¥2,250' },
  { id: 'south-korea', name: 'South Korea', currency: 'KRW', website: '₩15,000', consultancy: '₩7,500', combined: '₩22,500' },
];

// Used when the visitor's country cannot be determined, or is not published above.
export const FALLBACK_MARKET_ID = 'india';

export const fallbackMarket = MARKETS.find((m) => m.id === FALLBACK_MARKET_ID);

// ISO 3166-1 alpha-2 codes for countries that have their own published rates.
const COUNTRY_TO_MARKET = {
  BD: 'bangladesh',
  AU: 'australia',
  BR: 'brazil',
  CA: 'canada',
  CH: 'switzerland',
  ID: 'indonesia',
  IN: 'india',
  JP: 'japan',
  KR: 'south-korea',
  LK: 'sri-lanka',
  MY: 'malaysia',
  MX: 'mexico',
  NP: 'nepal',
  NZ: 'new-zealand',
  PH: 'philippines',
  PK: 'pakistan',
  SA: 'saudi-arabia',
  SG: 'singapore',
  ZA: 'south-africa',
  TH: 'thailand',
  AE: 'uae',
  US: 'usa',
  GB: 'uk',
  VN: 'vietnam',
};

// Countries that publish prices in euro. Kept to euro-area members so visitors
// are never shown euro rates for a currency they cannot pay in.
const EURO_AREA_COUNTRIES = [
  'AT', 'BE', 'CY', 'DE', 'EE', 'ES', 'FI', 'FR', 'GR', 'HR',
  'IE', 'IT', 'LT', 'LU', 'LV', 'MT', 'NL', 'PT', 'SI', 'SK',
];

export function marketForCountry(countryCode) {
  if (typeof countryCode !== 'string' || countryCode.length !== 2) return null;
  const code = countryCode.toUpperCase();
  if (COUNTRY_TO_MARKET[code]) return COUNTRY_TO_MARKET[code];
  if (EURO_AREA_COUNTRIES.includes(code)) return 'eurozone';
  return null;
}

export function marketById(id) {
  return MARKETS.find((m) => m.id === id) || fallbackMarket;
}

export const WATCH_TOWER_MANAGEMENT = {
  durationLabel: '15 Months of Management',
  billingNote: 'Billed per month across a 15-month engagement',
};

export function watchTowerPriceFor(marketId) {
  const market = MARKETS.find((m) => m.id === marketId);
  return market ? market.watchTowerManagement : undefined;
}

// The introductory offer is a single amount denominated in INR, matching the
// published India rate for the 15-month management engagement. Every other
// market is derived from this by converting at the live rate, so there is only
// ever one authoritative number.
export const BASE_OFFER = {
  amount: 399,
  currency: 'INR',
};

// Used only when the visitor's own currency cannot be resolved. The amount is
// the base offer converted at the market rate, rounded to a whole unit, so the
// fallback still reflects the real price rather than a separate invented figure.
export const FALLBACK_CURRENCY = 'USD';
export const USD_FALLBACK_AMOUNT = 4;
