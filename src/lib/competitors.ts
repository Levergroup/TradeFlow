/**
 * Comparison page data (SOP Section 5.2). Comparison pages are honest by
 * design — if a competitor is genuinely better for a use case, we say so. That
 * credibility converts better than a one-sided pitch.
 *
 * Competitor pricing is approximate and provided for orientation only; it can
 * change at any time. Each page links readers to the provider for current
 * pricing.
 */

export type Mark = 'yes' | 'no' | 'partial';

export type CompareRow = {
  feature: string;
  tf: { mark: Mark; note: string };
  comp: { mark: Mark; note: string };
};

export type Competitor = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  tldr: { tradeflow: string; competitor: string; verdict: string };
  rows: CompareRow[];
  tfBestFor: { title: string; body: string }[];
  compBestFor: { title: string; body: string }[];
  pricing: {
    tf: { entry: string; note: string };
    comp: { entry: string; note: string };
  };
  testimonial: { quote: string; name: string; role: string };
  faqs: { question: string; answer: string }[];
};

// Rows shared across comparisons — only the competitor column differs.
function baseRows(comp: Record<string, { mark: Mark; note: string }>): CompareRow[] {
  const tf: Record<string, { mark: Mark; note: string }> = {
    website: { mark: 'yes', note: 'Built-in, trade-specific, SEO-ready' },
    booking: { mark: 'yes', note: 'Online booking included' },
    quotes: { mark: 'yes', note: 'Line-item quotes with e-signature' },
    dispatch: { mark: 'yes', note: 'Drag-and-drop + route optimization' },
    mobile: { mark: 'yes', note: 'Lightweight mobile PWA, no download' },
    invoicing: { mark: 'yes', note: 'Auto-generated from completed jobs' },
    payments: { mark: 'yes', note: 'Card + text-link payments included' },
    sms: { mark: 'yes', note: 'Included, no per-message add-on' },
    reviews: { mark: 'yes', note: 'Automated review requests included' },
    quickbooks: { mark: 'yes', note: 'QuickBooks export included' },
  };
  return [
    { feature: 'Built-in website builder', tf: tf.website, comp: comp.website },
    { feature: 'Online booking', tf: tf.booking, comp: comp.booking },
    { feature: 'Digital quotes + e-signature', tf: tf.quotes, comp: comp.quotes },
    { feature: 'Scheduling & dispatch', tf: tf.dispatch, comp: comp.dispatch },
    { feature: 'Mobile field app', tf: tf.mobile, comp: comp.mobile },
    { feature: 'Automatic invoicing', tf: tf.invoicing, comp: comp.invoicing },
    { feature: 'Integrated payments', tf: tf.payments, comp: comp.payments },
    { feature: 'SMS / text automation', tf: tf.sms, comp: comp.sms },
    { feature: 'Automated review requests', tf: tf.reviews, comp: comp.reviews },
    { feature: 'QuickBooks export', tf: tf.quickbooks, comp: comp.quickbooks },
  ];
}

export const competitors: Competitor[] = [
  {
    slug: 'jobber',
    name: 'Jobber',
    metaTitle: 'TradeFlow vs Jobber: Which Is Right for You? (2026)',
    metaDescription:
      'An honest TradeFlow vs Jobber comparison for 2026. See how features, pricing, website building, and texting stack up — and which is the better fit for your trade business.',
    tldr: {
      tradeflow:
        'TradeFlow is best if you want a lead-generating website, texting, and payments included in one low monthly price.',
      competitor:
        'Jobber is a solid, mature operations tool for established small teams who already have a website and don\'t mind paying extra for add-ons.',
      verdict:
        'Choose TradeFlow to get found and booked online out of the box; choose Jobber if deep operations workflows matter more than an included website.',
    },
    rows: baseRows({
      website: { mark: 'no', note: 'No website builder — bring your own' },
      booking: { mark: 'yes', note: 'Online booking available' },
      quotes: { mark: 'yes', note: 'Quotes & approvals' },
      dispatch: { mark: 'yes', note: 'Strong scheduling & dispatch' },
      mobile: { mark: 'yes', note: 'Native mobile apps' },
      invoicing: { mark: 'yes', note: 'Invoicing included' },
      payments: { mark: 'yes', note: 'Jobber Payments' },
      sms: { mark: 'partial', note: 'Texting often costs extra' },
      reviews: { mark: 'partial', note: 'Available on higher tiers' },
      quickbooks: { mark: 'yes', note: 'QuickBooks Online sync' },
    }),
    tfBestFor: [
      { title: 'Solo operators who need a website', body: 'You don\'t have a site yet and want one that books jobs — included, not a separate Wix bill.' },
      { title: 'Trades that live on texting', body: 'SMS automation is included, so you\'re not nickel-and-dimed per message to confirm and follow up.' },
      { title: 'Budget-conscious 1–5 person crews', body: 'You want all-in-one at a low, predictable price without climbing tiers for basics.' },
    ],
    compBestFor: [
      { title: 'Established teams with mature workflows', body: 'Jobber is a polished, battle-tested operations platform with deep scheduling and client management.' },
      { title: 'Businesses that already have a website', body: 'If your site and SEO are already handled, Jobber\'s lack of a builder may not matter to you.' },
    ],
    pricing: {
      tf: { entry: 'From $39/mo', note: 'Website, texting, and payments included. Month-to-month.' },
      comp: { entry: 'From ~$39/mo', note: 'Higher tiers scale up; some features (e.g. texting) cost extra. Check Jobber for current pricing.' },
    },
    testimonial: {
      quote:
        'We liked Jobber but were paying separately for a website and texting. Switching to TradeFlow rolled both into one cheaper bill.',
      name: '[Replace with real testimonial]',
      role: 'Switched from Jobber',
    },
    faqs: [
      {
        question: 'Is TradeFlow cheaper than Jobber?',
        answer:
          'TradeFlow starts at $39/month with a website, SMS automation, and payments included. Jobber\'s entry price is similar, but features like texting and reviews can cost extra or require higher tiers, so the all-in cost is often higher. Always check current pricing on each provider\'s site.',
      },
      {
        question: 'Does Jobber include a website?',
        answer:
          'No. Jobber focuses on operations and does not include a website builder, so you bring your own site and SEO. TradeFlow includes a trade-specific, SEO-ready website with online booking in every plan.',
      },
      {
        question: 'Can I switch from Jobber to TradeFlow easily?',
        answer:
          'Yes. You can set up TradeFlow in about 20 minutes and migrate at your own pace. Support helps you import clients and get your website live so the switch doesn\'t cost you jobs.',
      },
    ],
  },
  {
    slug: 'servicetitan',
    name: 'ServiceTitan',
    metaTitle: 'TradeFlow vs ServiceTitan: Which Is Right for You? (2026)',
    metaDescription:
      'An honest TradeFlow vs ServiceTitan comparison for 2026. Enterprise power vs small-business simplicity — see which field service platform fits your crew size and budget.',
    tldr: {
      tradeflow:
        'TradeFlow is best for solo operators and small crews who want all-in-one simplicity at a low, no-contract price.',
      competitor:
        'ServiceTitan is best for large, multi-truck operations that need deep enterprise workflows and can invest in onboarding and cost.',
      verdict:
        'Choose TradeFlow if you\'re a 1–10 person shop that wants to be running today; choose ServiceTitan if you\'re an enterprise that needs heavy customization.',
    },
    rows: baseRows({
      website: { mark: 'partial', note: 'Marketing add-ons, enterprise-oriented' },
      booking: { mark: 'yes', note: 'Online booking' },
      quotes: { mark: 'yes', note: 'Advanced estimating' },
      dispatch: { mark: 'yes', note: 'Powerful enterprise dispatch' },
      mobile: { mark: 'yes', note: 'Full-featured mobile apps' },
      invoicing: { mark: 'yes', note: 'Invoicing & billing' },
      payments: { mark: 'yes', note: 'Integrated payments' },
      sms: { mark: 'yes', note: 'Included, enterprise-grade' },
      reviews: { mark: 'yes', note: 'Reputation tools available' },
      quickbooks: { mark: 'yes', note: 'Accounting integrations' },
    }),
    tfBestFor: [
      { title: 'Solo operators and small crews', body: 'You\'re 1–10 people and want power without enterprise complexity or cost.' },
      { title: 'Owners who want to start today', body: 'No long onboarding or implementation project — set up in about 20 minutes.' },
      { title: 'Anyone avoiding long contracts', body: 'Month-to-month pricing instead of annual enterprise commitments.' },
    ],
    compBestFor: [
      { title: 'Large, multi-truck enterprises', body: 'ServiceTitan is genuinely powerful for big operations with dedicated office staff and complex workflows.' },
      { title: 'Teams that need deep customization', body: 'If you require enterprise reporting, integrations, and configurability — and have the budget — ServiceTitan delivers.' },
    ],
    pricing: {
      tf: { entry: 'From $39/mo', note: 'Transparent, month-to-month. Scales to $149/mo for up to 10 users.' },
      comp: { entry: 'Custom quote', note: 'Typically enterprise-priced with onboarding fees and annual contracts. Contact ServiceTitan for a quote.' },
    },
    testimonial: {
      quote:
        'ServiceTitan was incredible but way too much platform — and money — for our four trucks. TradeFlow gave us what we actually use for a fraction of the cost.',
      name: '[Replace with real testimonial]',
      role: 'Switched from ServiceTitan',
    },
    faqs: [
      {
        question: 'Is TradeFlow a real alternative to ServiceTitan?',
        answer:
          'For solo operators and small-to-growing crews, yes. TradeFlow covers the website, scheduling, dispatch, quoting, invoicing, payments, and automation those businesses actually use — without the enterprise cost and onboarding ServiceTitan requires.',
      },
      {
        question: 'Why is ServiceTitan so much more expensive?',
        answer:
          'ServiceTitan is built for large enterprises, with deep customization, advanced reporting, and dedicated implementation — priced accordingly, usually via custom quotes and annual contracts. TradeFlow is priced for 1–10 person shops at $39–$149/month, month-to-month.',
      },
      {
        question: 'Will I lose features moving from ServiceTitan to TradeFlow?',
        answer:
          'You\'ll trade deep enterprise configurability for simplicity and speed. Most small crews find TradeFlow covers everything they actually use day to day — and they gain an included website and a much lower bill.',
      },
    ],
  },
  {
    slug: 'housecall-pro',
    name: 'Housecall Pro',
    metaTitle: 'TradeFlow vs Housecall Pro: Which Is Right for You? (2026)',
    metaDescription:
      'An honest TradeFlow vs Housecall Pro comparison for 2026. Compare website building, pricing, texting, and features to find the best field service software for your trade.',
    tldr: {
      tradeflow:
        'TradeFlow is best if you want an included lead-generating website and all-in-one features at a low entry price.',
      competitor:
        'Housecall Pro is a popular, user-friendly option with strong consumer-facing booking, especially for home-service pros already comfortable with it.',
      verdict:
        'Choose TradeFlow for an included website and lower entry pricing; choose Housecall Pro if its booking experience and ecosystem already fit how you work.',
    },
    rows: baseRows({
      website: { mark: 'partial', note: 'Basic website add-on available' },
      booking: { mark: 'yes', note: 'Strong online booking' },
      quotes: { mark: 'yes', note: 'Estimates & approvals' },
      dispatch: { mark: 'yes', note: 'Scheduling & dispatch' },
      mobile: { mark: 'yes', note: 'Native mobile apps' },
      invoicing: { mark: 'yes', note: 'Invoicing included' },
      payments: { mark: 'yes', note: 'Integrated payments' },
      sms: { mark: 'partial', note: 'Texting varies by plan' },
      reviews: { mark: 'yes', note: 'Review management available' },
      quickbooks: { mark: 'yes', note: 'QuickBooks integration' },
    }),
    tfBestFor: [
      { title: 'Pros who need a real website', body: 'TradeFlow includes a trade-specific, SEO-ready website built to generate leads, not just a basic page.' },
      { title: 'Lowest entry price seekers', body: 'TradeFlow starts at $39/month with core features included rather than gated behind higher tiers.' },
      { title: 'Texting-heavy trades', body: 'SMS automation is included so customer confirmations and follow-ups don\'t add to the bill.' },
    ],
    compBestFor: [
      { title: 'Pros who love its booking flow', body: 'Housecall Pro has a polished, consumer-friendly booking experience and a large, established user base.' },
      { title: 'Teams already in its ecosystem', body: 'If you\'re comfortable on Housecall Pro and use its add-ons, the switching cost may outweigh the gains.' },
    ],
    pricing: {
      tf: { entry: 'From $39/mo', note: 'Website, texting, and payments included. Month-to-month.' },
      comp: { entry: 'From ~$49/mo', note: 'Higher tiers (e.g. Essentials) cost more; some features are tier-gated. Check Housecall Pro for current pricing.' },
    },
    testimonial: {
      quote:
        'Housecall Pro was easy to use but the website felt like an afterthought. TradeFlow\'s included site actually brings us leads — and it costs less.',
      name: '[Replace with real testimonial]',
      role: 'Switched from Housecall Pro',
    },
    faqs: [
      {
        question: 'Is TradeFlow cheaper than Housecall Pro?',
        answer:
          'TradeFlow starts at $39/month with a lead-generating website, SMS automation, and payments included. Housecall Pro\'s entry plan starts a bit higher and gates some features behind pricier tiers, so compare total cost for the features you need. Check current pricing on each site.',
      },
      {
        question: 'Does Housecall Pro include a website?',
        answer:
          'Housecall Pro offers a basic website add-on, but it\'s lighter than a dedicated builder. TradeFlow includes a trade-specific, SEO-ready website designed to generate and book leads in every plan.',
      },
      {
        question: 'Is it hard to switch from Housecall Pro?',
        answer:
          'No. TradeFlow sets up in about 20 minutes, and support helps you migrate your clients and launch your website so you keep serving customers without interruption.',
      },
    ],
  },
];

export function getCompetitor(slug: string): Competitor | undefined {
  return competitors.find((c) => c.slug === slug);
}
