import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { legalNav } from '@/lib/nav';
import { avatars } from '@/lib/avatars';
import { competitors } from '@/lib/competitors';

/**
 * Sitemap. All URLs use the canonical www `site.url`. Only pages that actually
 * exist and should be indexed are listed (the SOP warns never to submit URLs
 * that 404 or aren't built yet). Add new routes here as they ship.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const url = (path: string) => new URL(path, site.url).toString();

  const core: MetadataRoute.Sitemap = [
    { url: url('/'), lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: url('/features'), lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: url('/pricing'), lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: url('/contact'), lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  // Avatar landing pages and comparison pages — high-intent SEO routes.
  const avatarPages: MetadataRoute.Sitemap = avatars.map((a) => ({
    url: url(`/for/${a.slug}`),
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const vsPages: MetadataRoute.Sitemap = competitors.map((c) => ({
    url: url(`/vs/${c.slug}`),
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const legal: MetadataRoute.Sitemap = legalNav.map((item) => ({
    url: url(item.href),
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.3,
  }));

  const llm: MetadataRoute.Sitemap = [
    { url: url('/llms.txt'), lastModified: now, changeFrequency: 'weekly', priority: 0.5 },
    { url: url('/llms-full.txt'), lastModified: now, changeFrequency: 'daily', priority: 0.5 },
  ];

  return [...core, ...avatarPages, ...vsPages, ...legal, ...llm];
}
