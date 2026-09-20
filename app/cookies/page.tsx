import { makeMetadata } from '@/lib/metadata';
import Legal from '@/components/Legal';

export const metadata = makeMetadata({
  title: 'Cookie Settings',
  description:
    'Manage your cookie preferences for the Enmero website. Control how we use cookies to improve your experience and protect your privacy.',
  path: '/cookies',
});

export default function CookiesPage() {
  return (
    <Legal
      label="Legal"
      title="Cookie Settings"
      intro="Control how we use cookies and similar technologies."
      sections={[
        {
          heading: 'What Are Cookies?',
          paragraphs: [
            'Cookies are small text files that are stored on your device when you visit a website. They help us provide a better experience and analyze our traffic.',
          ],
        },
        {
          heading: 'Essential Cookies',
          paragraphs: [
            'These cookies are necessary for the website to function properly. They cannot be turned off.',
          ],
        },
        {
          heading: 'Performance & Analytics',
          paragraphs: [
            'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.',
          ],
        },
        {
          heading: 'Managing Cookies',
          paragraphs: [
            'Most browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience.',
          ],
        },
      ]}
      ctaTitle="Manage your privacy"
      ctaLead="For more details, please review our full Privacy Policy."
      ctaHref="/privacy"
      ctaLabel="Privacy Policy"
    />
  );
}