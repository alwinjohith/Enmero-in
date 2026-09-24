import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsAndConditions from './pages/TermsAndConditions.jsx';
import RefundCancellation from './pages/RefundCancellation.jsx';
import CookiePolicy from './pages/CookiePolicy.jsx';
import Disclaimer from './pages/Disclaimer.jsx';
import WatchTower from './pages/WatchTower.jsx';
import Contact from './pages/Contact.jsx';

export const LEGAL_PAGES = [
  { path: '/privacy-policy', label: 'Privacy Policy', Component: PrivacyPolicy, legal: true },
  { path: '/terms-and-conditions', label: 'Terms & Conditions', Component: TermsAndConditions, legal: true },
  { path: '/refund-cancellation', label: 'Refund & Cancellation Policy', Component: RefundCancellation, legal: true },
  { path: '/cookie-policy', label: 'Cookie Policy', Component: CookiePolicy, legal: true },
  { path: '/disclaimer', label: 'Disclaimer', Component: Disclaimer, legal: true },
];

export const STATIC_PAGES = [
  { path: '/watch-tower', label: 'Watch Tower', Component: WatchTower },
  { path: '/contact', label: 'Contact', Component: Contact },
  ...LEGAL_PAGES,
];

export function getStaticPage(hash) {
  if (typeof hash !== 'string' || !hash.startsWith('#/')) return null;
  const path = hash.slice(1);
  return STATIC_PAGES.find((page) => page.path === path) || null;
}