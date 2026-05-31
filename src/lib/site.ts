/**
 * Central site configuration — single source of truth for all TradeFlow
 * brand variables from File 1 / SOP Section 1. Consumed across metadata,
 * schema, pages, and components so values stay consistent everywhere.
 */

export const site = {
  name: 'TradeFlow',
  legalName: 'TradeFlow',
  parentCompany: 'Verado Ventures',
  parentGroup: 'Blue Tree Group',
  tagline: 'Get found. Get booked. Get paid.',
  domain: 'tradeflow.io',
  // Always the canonical www URL — matches metadataBase, sitemap, canonicals.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.tradeflow.io',
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.tradeflow.io',
  email: 'hello@tradeflow.io',
  supportEmail: 'support@tradeflow.io',
  description:
    'TradeFlow is the all-in-one field service management software for small business — build a website, book jobs, dispatch crews, send quotes, and get paid from one platform built for tradespeople. Setup in 20 minutes.',
  promise:
    'Get found, get booked, and get paid from one platform built exclusively for tradespeople — set up in 20 minutes, even if you have never used business software.',
  analytics: {
    gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? 'GTM-TRADEFLOW',
    ga4Id: process.env.NEXT_PUBLIC_GA4_ID ?? 'G-TRADEFLOW01',
  },
  social: {
    twitter: 'https://twitter.com/tradeflow',
    linkedin: 'https://linkedin.com/company/tradeflow',
    twitterHandle: '@tradeflow',
  },
  leadMagnet: {
    name: 'The Solo Contractor Profit Checklist — 7 Things You are Probably Not Billing For',
    cta: 'Get the Free Checklist',
    hook: 'The exact 7-point checklist that shows solo tradespeople where they are leaking $500–$2,000 per month in unbilled time, forgotten materials, and lost follow-ups.',
  },
  webhookUrl:
    process.env.GHL_WEBHOOK_URL ??
    'https://services.leadconnector.net/hooks/tradeflow-lead-capture',
  indexNowKey: 'tradeflow2026',
} as const;

export const proofStats = [
  'Built for 5M+ solo tradespeople in America',
  'All-in-one: website, scheduling, quotes, payments',
  'From lead to paid in 4 taps',
] as const;

export type PricingTier = {
  name: string;
  price: string;
  period: string;
  cta: string;
  href: string;
  featured?: boolean;
  badge?: string;
  tagline: string;
  story: string;
  features: string[];
};

export const pricingTiers: PricingTier[] = [
  {
    name: 'TradeFlow Solo',
    price: '$39',
    period: '/mo',
    cta: 'Start Free',
    href: `${site.appUrl}/signup?plan=solo`,
    tagline: 'For the owner-operator doing the work and running the business.',
    story:
      'You are the business. Solo gives you a lead-generating website, digital quotes, scheduling, invoicing, and a simple CRM — everything you need to look professional and stop losing jobs to paperwork.',
    features: [
      '1 user',
      'Trade-specific website builder',
      'Digital quotes with e-signature',
      'Job scheduling calendar',
      'Automatic invoicing',
      'Integrated card & text payments',
      'Basic CRM',
    ],
  },
  {
    name: 'TradeFlow Crew',
    price: '$79',
    period: '/mo',
    cta: 'Start Crew',
    href: `${site.appUrl}/signup?plan=crew`,
    featured: true,
    badge: 'Most Popular',
    tagline: 'For 2–5 person crews that need to move as one.',
    story:
      'Less than one hour of your billable rate per month. You get everything in Solo plus a field mobile app, photo capture, route optimization, automated review requests, and QuickBooks export — so the whole crew runs off one system.',
    features: [
      'Up to 5 users',
      'Everything in Solo',
      'Field worker mobile PWA',
      'Photo & receipt capture',
      'Route optimization',
      'Automated Google review requests',
      'QuickBooks export',
    ],
  },
  {
    name: 'TradeFlow Pro',
    price: '$149',
    period: '/mo',
    cta: 'Start Pro',
    href: `${site.appUrl}/signup?plan=pro`,
    tagline: 'For growing operations scaling to multiple crews.',
    story:
      'When one truck becomes many, Pro gives you an AI receptionist, automation sequences, a reputation dashboard, multi-location support, and advanced reporting — the professional systems that let you scale without losing the margin.',
    features: [
      'Up to 10 users',
      'Everything in Crew',
      'AI receptionist',
      'Automation sequences',
      'Reputation dashboard',
      'Multi-location support',
      'Advanced profit reporting',
    ],
  },
];

export const competitors = ['Jobber', 'ServiceTitan', 'Housecall Pro'] as const;
