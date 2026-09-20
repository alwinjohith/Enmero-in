import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import { SITE } from '@/data/site';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: SITE.keywords,
  metadataBase: new URL(SITE.url),
  themeColor: '#06070b',
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.png',
    apple: '/favicon/favicon.png',
  },
  openGraph: {
    siteName: SITE.name,
    type: 'website',
    url: SITE.url,
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
    images: [{ url: `${SITE.url}/img/og-image.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
    images: [`${SITE.url}/img/og-image.png`],
  },
};

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  alternateName: ['Enmero Intelligence', 'Enmero Technologies'],
  url: SITE.url,
  logo: `${SITE.url}/img/enmero-white.png`,
  description:
    'technology and engineering company developing artificial intelligence systems and software platforms',
  foundingDate: '2025',
  founders: [{ '@type': 'Person', name: SITE.founder }],
  address: { '@type': 'PostalAddress', addressCountry: 'India' },
  sameAs: ['https://www.wikidata.org/wiki/Q138632480', SITE.linkedin],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetBrainsMono.variable}`}
    >
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}