/**
 * Navigation structure shared by Header and Footer.
 *
 * NOTE: Only routes that exist today are linked, to avoid dead links / 404s
 * that hurt SEO. Additional SOP routes (/features, /blog, /for/[avatar],
 * /vs/[competitor], /about, etc.) will be added here as those pages ship.
 */

export const primaryNav = [
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
] as const;

export const footerNav = {
  product: {
    title: 'Product',
    links: [
      { label: 'Pricing', href: '/pricing' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  company: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
      { label: 'Refund Policy', href: '/refund-policy' },
    ],
  },
} as const;

// Compliance links — REQUIRED as visible text links on every page for ad
// compliance (Google Ads / Meta Ads reviewers check for these).
export const legalNav = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Refund Policy', href: '/refund-policy' },
  { label: 'Disclaimer', href: '/disclaimer' },
  { label: 'GDPR', href: '/gdpr' },
  { label: 'Acceptable Use', href: '/acceptable-use' },
] as const;
