import { makeMetadata } from '@/lib/metadata';
import Legal from '@/components/Legal';

export const metadata = makeMetadata({
  title: 'Privacy Policy',
  description:
    "Read Enmero's privacy policy to understand how we handle your data, what we collect, and how we protect your information across our services and platforms.",
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <Legal
      label="Legal"
      title="Privacy Policy"
      intro="Your privacy is important to us. This policy outlines how Enmero handles your data."
      sections={[
        {
          heading: 'Information We Collect',
          paragraphs: [
            'We collect information that you provide directly to us when you use our services, including when you sign up for our waitlist or contact us for support.',
          ],
        },
        {
          heading: 'How We Use Information',
          paragraphs: [
            'We use the information we collect to provide, maintain, and improve our services, and to communicate with you about updates and new features.',
          ],
        },
        {
          heading: 'Data Protection',
          paragraphs: [
            'We implement a variety of security measures to maintain the safety of your personal information. Your data is protected through encryption and secure server architectures.',
          ],
        },
        {
          heading: 'Your Choices',
          paragraphs: [
            'You may request access to, correction of, or deletion of your personal information at any time by contacting our support team.',
          ],
        },
      ]}
      ctaTitle="Questions about your data?"
      ctaLead="Contact our privacy team for more information."
      ctaHref="/contact"
      ctaLabel="Contact Support"
    />
  );
}