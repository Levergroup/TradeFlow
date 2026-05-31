import type { Metadata } from 'next';
import { site } from './site';

const PRIMARY_KEYWORD = 'field service management software for small business';

type PageMetaInput = {
  title: string;
  description: string;
  path: string; // e.g. '/pricing' or '/' for home
  type?: 'website' | 'article';
  noindex?: boolean;
};

/**
 * Build consistent per-page metadata. Every canonical, OG, and Twitter URL is
 * derived from the canonical www `site.url` so they never drift (a key cause of
 * the "mixed canonical URLs" bug noted in the SOP). The OG/Twitter image is
 * supplied site-wide by the app/opengraph-image file convention, so it is not
 * set here.
 */
export function pageMetadata({
  title,
  description,
  path,
  type = 'website',
  noindex = false,
}: PageMetaInput): Metadata {
  const url = new URL(path, site.url).toString();
  const fullTitle = path === '/' ? title : `${title} | ${site.name}`;

  return {
    title: fullTitle,
    description,
    keywords: [PRIMARY_KEYWORD],
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      site: site.social.twitterHandle,
    },
  };
}

export { PRIMARY_KEYWORD };
