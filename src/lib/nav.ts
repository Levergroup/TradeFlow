/**
 * Navigation structure shared by Header and Footer.
 *
 * NOTE: Only routes that exist today are linked, to avoid dead links / 404s
 * that hurt SEO. Additional SOP routes (/features, /blog, /for/[avatar],
 * /vs/[competitor], /about, etc.) will be added here as those pages ship.
 */

export const primaryNav = [
  { label: 'Pricing', href: '/pricing' },
  { label: 'Compare', href: '/vs/jobber' },
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
  forWho: {
    title: 'For Tradespeople',
    links: [
      { label: 'Solo Operators', href: '/for/solo-operator' },
      { label: 'Office Managers', href: '/for/office-manager' },
      { label: 'Crew Chiefs', href: '/for/crew-chief' },
      { label: 'Going Independent', href: '/for/seasoned-tradesperson' },
    ],
  },
  compare: {
    title: 'Compare',
    links: [
      { label: 'TradeFlow vs Jobber', href: '/vs/jobber' },
      { label: 'TradeFlow vs ServiceTitan', href: '/vs/servicetitan' },
      { label: 'TradeFlow vs Housecall Pro', href: '/vs/housecall-pro' },
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
