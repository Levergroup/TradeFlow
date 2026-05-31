import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

/**
 * Robots rules. Allow everything except /api/. NEVER disallow /_next/ — that
 * blocks Google from CSS and JS (a documented SOP mistake).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
      },
    ],
    sitemap: new URL('/sitemap.xml', site.url).toString(),
    host: site.url,
  };
}
