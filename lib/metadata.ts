import type { Metadata } from 'next';
import { SITE } from '@/data/site';

export interface PageMetaInput {
  title: string;
  description?: string;
  path: string;
  noindex?: boolean;
  ogImage?: string;
  ogType?: 'website' | 'article';
}

export function makeMetadata({
  title,
  description,
  path,
  noindex = false,
  ogImage = '/img/og-image.png',
  ogType = 'website',
}: PageMetaInput): Metadata {
  const pageTitle =
    title === SITE.name ? `${SITE.name} | ${SITE.tagline}` : `${title} | ${SITE.name}`;
  const resolvedDescription = description ?? SITE.description;
  const absoluteOg = ogImage.startsWith('http') ? ogImage : `${SITE.url}${ogImage}`;
  return {
    title: pageTitle,
    description: resolvedDescription,
    keywords: SITE.keywords,
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
    alternates: {
      canonical: `${SITE.url}${path}`,
    },
    openGraph: {
      type: ogType,
      siteName: SITE.name,
      title: pageTitle,
      description: resolvedDescription,
      url: `${SITE.url}${path}`,
      images: [{ url: absoluteOg }],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: resolvedDescription,
      images: [absoluteOg],
    },
  };
}