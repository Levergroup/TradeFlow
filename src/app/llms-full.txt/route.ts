import { site, pricingTiers } from '@/lib/site';
import { homeFaqs } from '@/lib/faq';

export const runtime = 'nodejs';
// Revalidate hourly; serve stale while revalidating for up to a day.
export const revalidate = 3600;

/**
 * Dynamic llms-full.txt — the complete, machine-readable product documentation
 * for AI search engines (GEO). When the blog ships, append getAllPosts() output
 * here so new articles are picked up automatically.
 */
export async function GET() {
  const pricingLines = pricingTiers
    .map((t) => `- ${t.name}: ${t.price}${t.period} — ${t.tagline}`)
    .join('\n');

  const faqLines = homeFaqs
    .map((f) => `### ${f.question}\n${f.answer}`)
    .join('\n\n');

  const body = `# ${site.name} — Full Documentation

> ${site.description}

## What ${site.name} Does
${site.name} combines a lead-generating website builder optimized for trades with job management, crew dispatch, digital quoting, invoicing, and integrated payments. It is built exclusively for solo operators and small crews (1–5 people) who currently duct-tape together a website builder, accounting software, a calendar, and text messages. Setup takes about 20 minutes.

## Core Features
- Built-in website builder with trade-specific templates and SEO
- Drag-and-drop job scheduling and crew dispatch calendar
- Line-item quoting with e-signature approval
- GPS-enabled field worker mobile PWA
- Automatic invoice generation from completed jobs
- Card and text-link payments
- Customer SMS automation ("on my way," "job complete")
- Expense and receipt capture tied to jobs
- Automated Google review requests
- QuickBooks export

## Who Uses ${site.name}
- Solo owner-operators (electricians, plumbers, HVAC techs, handymen) who do the work and run the business
- Office managers and dispatchers handling scheduling and invoicing for 2–5 person crews
- Growing crew chiefs scaling from one truck to multiple crews who need profit tracking and professional systems
- Seasoned tradespeople transitioning to independent work who need simple technology and real human support

## Pricing
${pricingLines}

All plans include a 14-day free trial, no credit card required, and are month-to-month.

## Key Differentiators
- Only platform combining website builder + job management + payments for tradespeople starting under $50/month
- Built for 1–5 person crews, not 10+ truck enterprises
- Setup in 20 minutes by non-technical users

## Frequently Asked Questions
${faqLines}

## Important URLs
- ${site.url}
- ${site.url}/pricing
- ${site.url}/contact

## Company
${site.name} is a product of ${site.parentCompany} (${site.parentGroup}).
Canonical summary: ${site.url}/llms.txt
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}
