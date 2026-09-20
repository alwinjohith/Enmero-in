import { makeMetadata } from '@/lib/metadata';
import Legal from '@/components/Legal';

export const metadata = makeMetadata({
  title: 'Terms of Service',
  description:
    'Review the terms of service that govern your use of Enmero products and services, including Leaf Singularity and associated research platforms.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <Legal
      label="Legal"
      title="Terms of Service"
      intro="By using Enmero services, you agree to the following terms and conditions."
      sections={[
        {
          heading: 'Acceptance of Terms',
          paragraphs: [
            'By accessing or using our services, you agree to be bound by these Terms of Service. If you do not agree to all of the terms, do not use our services.',
          ],
        },
        {
          heading: 'Modifications to Terms',
          paragraphs: [
            'We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new terms on this site.',
          ],
        },
        {
          heading: 'User Responsibilities',
          paragraphs: [
            'You are responsible for your use of our services and for any content you provide. You must comply with all applicable laws and regulations.',
          ],
        },
        {
          heading: 'Intellectual Property',
          paragraphs: [
            'Our services and all related content, features, and functionality are owned by Enmero Research and are protected by international copyright and intellectual property laws.',
          ],
        },
      ]}
      ctaTitle="Have questions about our terms?"
      ctaLead="Feel free to reach out to our team for clarification."
      ctaHref="/contact"
      ctaLabel="Contact Support"
    />
  );
}