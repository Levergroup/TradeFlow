/**
 * JSON-LD schema builders. Injected via the <JsonLd> component as
 * <script type="application/ld+json">. Validate at search.google.com/test/rich-results.
 */
import { site, pricingTiers } from './site';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.url,
    logo: `${site.url}/logo.png`,
    email: site.email,
    description: site.description,
    parentOrganization: {
      '@type': 'Organization',
      name: site.parentCompany,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: site.supportEmail,
      contactType: 'customer support',
      availableLanguage: ['English'],
    },
    sameAs: [site.social.twitter, site.social.linkedin],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: site.url,
    description: site.description,
    publisher: { '@type': 'Organization', name: site.name },
  };
}

export function softwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: site.name,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    description: site.description,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '39',
      highPrice: '149',
      offerCount: pricingTiers.length,
    },
  };
}

export function productOfferSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: site.name,
    description: site.description,
    brand: { '@type': 'Brand', name: site.name },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '39',
      highPrice: '149',
      offerCount: pricingTiers.length,
      offers: pricingTiers.map((t) => ({
        '@type': 'Offer',
        name: t.name,
        price: t.price.replace('$', ''),
        priceCurrency: 'USD',
        url: t.href,
      })),
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: new URL(item.path, site.url).toString(),
    })),
  };
}
