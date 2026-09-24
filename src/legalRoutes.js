import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsAndConditions from './pages/TermsAndConditions.jsx';
import RefundCancellation from './pages/RefundCancellation.jsx';
import CookiePolicy from './pages/CookiePolicy.jsx';
import Disclaimer from './pages/Disclaimer.jsx';

export const LEGAL_PAGES = [
  { path: '/privacy-policy', label: 'Privacy Policy', Component: PrivacyPolicy },
  { path: '/terms-and-conditions', label: 'Terms & Conditions', Component: TermsAndConditions },
  { path: '/refund-cancellation', label: 'Refund & Cancellation Policy', Component: RefundCancellation },
  { path: '/cookie-policy', label: 'Cookie Policy', Component: CookiePolicy },
  { path: '/disclaimer', label: 'Disclaimer', Component: Disclaimer },
];

export function getLegalRoute(hash) {
  if (typeof hash !== 'string' || !hash.startsWith('#/')) return null;
  const path = hash.slice(1);
  return LEGAL_PAGES.some((page) => page.path === path) ? path : null;
}

export function getLegalPage(path) {
  return LEGAL_PAGES.find((page) => page.path === path) || null;
}