export const MARKETS = [
  { id: 'india', name: 'India', website: '₹299', consultancy: '₹150', combined: '₹449', watchTowerManagement: '₹399' },
  { id: 'bangladesh', name: 'Bangladesh', website: '৳499', consultancy: '৳250', combined: '৳749' },
  { id: 'pakistan', name: 'Pakistan', website: 'PKR 999', consultancy: 'PKR 500', combined: 'PKR 1,499' },
  { id: 'sri-lanka', name: 'Sri Lanka', website: 'LKR 1,499', consultancy: 'LKR 750', combined: 'LKR 2,249' },
  { id: 'nepal', name: 'Nepal', website: 'NPR 499', consultancy: 'NPR 250', combined: 'NPR 749' },
  { id: 'indonesia', name: 'Indonesia', website: 'IDR 49,000', consultancy: 'IDR 25,000', combined: 'IDR 74,000' },
  { id: 'vietnam', name: 'Vietnam', website: '₫99,000', consultancy: '₫50,000', combined: '₫149,000' },
  { id: 'philippines', name: 'Philippines', website: '₱299', consultancy: '₱150', combined: '₱449' },
  { id: 'malaysia', name: 'Malaysia', website: 'RM19', consultancy: 'RM10', combined: 'RM29' },
  { id: 'thailand', name: 'Thailand', website: '฿199', consultancy: '฿100', combined: '฿299' },
  { id: 'uae', name: 'UAE', website: 'AED 19', consultancy: 'AED 10', combined: 'AED 29' },
  { id: 'saudi-arabia', name: 'Saudi Arabia', website: 'SAR 19', consultancy: 'SAR 10', combined: 'SAR 29' },
  { id: 'singapore', name: 'Singapore', website: 'S$19', consultancy: 'S$10', combined: 'S$29' },
  { id: 'south-africa', name: 'South Africa', website: 'R99', consultancy: 'R50', combined: 'R149' },
  { id: 'mexico', name: 'Mexico', website: 'MX$99', consultancy: 'MX$50', combined: 'MX$149' },
  { id: 'brazil', name: 'Brazil', website: 'R$49', consultancy: 'R$25', combined: 'R$74' },
  { id: 'usa', name: 'USA', website: '$9', consultancy: '$5', combined: '$14' },
  { id: 'canada', name: 'Canada', website: 'C$12', consultancy: 'C$6', combined: 'C$18' },
  { id: 'uk', name: 'UK', website: '£9', consultancy: '£5', combined: '£14' },
  { id: 'australia', name: 'Australia', website: 'A$15', consultancy: 'A$8', combined: 'A$23' },
  { id: 'new-zealand', name: 'New Zealand', website: 'NZ$16', consultancy: 'NZ$8', combined: 'NZ$24' },
  { id: 'eurozone', name: 'Eurozone', website: '€10', consultancy: '€5', combined: '€15' },
  { id: 'switzerland', name: 'Switzerland', website: 'CHF 10', consultancy: 'CHF 5', combined: 'CHF 15' },
  { id: 'japan', name: 'Japan', website: '¥1,500', consultancy: '¥750', combined: '¥2,250' },
  { id: 'south-korea', name: 'South Korea', website: '₩15,000', consultancy: '₩7,500', combined: '₩22,500' },
];

const DEFAULT_MARKET = 'usa';

const TZ_TO_MARKET = {
  'Asia/Kolkata': 'india',
  'Asia/Dhaka': 'bangladesh',
  'Asia/Karachi': 'pakistan',
  'Asia/Colombo': 'sri-lanka',
  'Asia/Kathmandu': 'nepal',
  'Asia/Jakarta': 'indonesia',
  'Asia/Pontianak': 'indonesia',
  'Asia/Makassar': 'indonesia',
  'Asia/Jayapura': 'indonesia',
  'Asia/Ho_Chi_Minh': 'vietnam',
  'Asia/Manila': 'philippines',
  'Asia/Kuala_Lumpur': 'malaysia',
  'Asia/Kuching': 'malaysia',
  'Asia/Bangkok': 'thailand',
  'Asia/Dubai': 'uae',
  'Asia/Riyadh': 'saudi-arabia',
  'Asia/Singapore': 'singapore',
  'Africa/Johannesburg': 'south-africa',
  'America/Mexico_City': 'mexico',
  'America/Monterrey': 'mexico',
  'America/Tijuana': 'mexico',
  'America/Hermosillo': 'mexico',
  'America/Mazatlan': 'mexico',
  'America/Cancun': 'mexico',
  'America/Sao_Paulo': 'brazil',
  'America/Manaus': 'brazil',
  'America/Cuiaba': 'brazil',
  'America/Belem': 'brazil',
  'America/Fortaleza': 'brazil',
  'America/Recife': 'brazil',
  'America/Bahia': 'brazil',
  'Europe/London': 'uk',
  'Australia/Sydney': 'australia',
  'Australia/Melbourne': 'australia',
  'Australia/Brisbane': 'australia',
  'Australia/Perth': 'australia',
  'Australia/Adelaide': 'australia',
  'Australia/Darwin': 'australia',
  'Australia/Hobart': 'australia',
  'Australia/Broken_Hill': 'australia',
  'Pacific/Auckland': 'new-zealand',
  'Pacific/Chatham': 'new-zealand',
  'Europe/Zurich': 'switzerland',
  'Asia/Tokyo': 'japan',
  'Asia/Seoul': 'south-korea',
};

const CANADA_TZ = [
  'America/Toronto',
  'America/Vancouver',
  'America/Winnipeg',
  'America/Edmonton',
  'America/Halifax',
  'America/St_Johns',
  'America/Regina',
  'America/Whitehorse',
  'America/Yellowknife',
  'America/Iqaluit',
];

const USA_TZ = [
  'America/New_York',
  'America/Chicago',
  'America/Denver',
  'America/Los_Angeles',
  'America/Phoenix',
  'America/Anchorage',
  'America/Juneau',
  'America/Indiana/Indianapolis',
  'America/Detroit',
  'America/Boise',
  'Pacific/Honolulu',
];

// Any other America/* european-absent zones default to Eurozone.
const EUROZONE_TZ = [
  'Europe/Paris',
  'Europe/Berlin',
  'Europe/Madrid',
  'Europe/Rome',
  'Europe/Vienna',
  'Europe/Brussels',
  'Europe/Amsterdam',
  'Europe/Warsaw',
  'Europe/Prague',
  'Europe/Lisbon',
  'Europe/Athens',
  'Europe/Helsinki',
  'Europe/Copenhagen',
  'Europe/Stockholm',
  'Europe/Dublin',
  'Europe/Luxembourg',
  'Europe/Malta',
  'Europe/Bratislava',
  'Europe/Ljubljana',
  'Europe/Zagreb',
  'Europe/Bucharest',
  'Europe/Sofia',
];

const LANG_TO_MARKET = {
  IN: 'india',
  BD: 'bangladesh',
  PK: 'pakistan',
  LK: 'sri-lanka',
  NP: 'nepal',
  ID: 'indonesia',
  VN: 'vietnam',
  PH: 'philippines',
  MY: 'malaysia',
  TH: 'thailand',
  AE: 'uae',
  SA: 'saudi-arabia',
  SG: 'singapore',
  ZA: 'south-africa',
  MX: 'mexico',
  BR: 'brazil',
  US: 'usa',
  CA: 'canada',
  GB: 'uk',
  AU: 'australia',
  NZ: 'new-zealand',
  CH: 'switzerland',
  JP: 'japan',
  KR: 'south-korea',
};

// Eurozone languages map to the eurozone market.
const EUROZONE_LANGS = [
  'FR', 'DE', 'ES', 'IT', 'NL', 'BE', 'AT', 'FI', 'PT', 'IE',
  'GR', 'EE', 'LT', 'LV', 'SK', 'SI', 'HR', 'LU', 'CY', 'MT',
];

const tzToMarket = (tz) => {
  if (!tz) return null;
  if (TZ_TO_MARKET[tz]) return TZ_TO_MARKET[tz];
  if (CANADA_TZ.includes(tz)) return 'canada';
  if (USA_TZ.includes(tz)) return 'usa';
  if (EUROZONE_TZ.includes(tz)) return 'eurozone';
  if (tz.startsWith('America/')) return 'usa';
  if (tz.startsWith('Europe/')) return 'eurozone';
  return null;
};

const languageToMarket = (langs) => {
  if (!Array.isArray(langs)) return null;
  for (const lang of langs) {
    if (!lang) continue;
    const region = lang.split('-')[1] || lang.split('_')[1];
    if (!region) continue;
    const upper = region.toUpperCase();
    if (LANG_TO_MARKET[upper]) return LANG_TO_MARKET[upper];
    if (EUROZONE_LANGS.includes(upper)) return 'eurozone';
  }
  return null;
};

export const defaultMarket = MARKETS.find((m) => m.id === DEFAULT_MARKET);

export function detectMarket() {
  let marketId = null;

  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    marketId = tzToMarket(tz);
  } catch (_e) {
    marketId = null;
  }

  if (!marketId) {
    marketId = languageToMarket(navigator.languages || [navigator.language]);
  }

  const match = MARKETS.find((m) => m.id === marketId);
  return match || defaultMarket;
}

export const WATCH_TOWER_MANAGEMENT = {
  durationLabel: '15 months of management',
  billingNote: 'Billed per month across a 15-month engagement',
};

export function watchTowerPriceFor(marketId) {
  const market = MARKETS.find((m) => m.id === marketId);
  return market ? market.watchTowerManagement : undefined;
}