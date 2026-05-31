# TradeFlow — Marketing Site

The production marketing site for **TradeFlow**, the all-in-one field service
management platform for tradespeople. A Verado Ventures (Blue Tree Group) product.

Built per the **Verado Ventures Website Build SOP (File 2)**:
**Next.js 14 (App Router) · TypeScript · Tailwind CSS · deploy to Vercel.**

## Stack

- **Next.js 14** App Router (no Pages Router)
- **TypeScript**, strict mode
- **Tailwind CSS** (no external UI libraries)
- `next/font` for fonts (Bricolage Grotesque + Plus Jakarta Sans — no Google CDN links)
- GTM via `next/script` (`afterInteractive`); GA4 configured **inside GTM only** (no double-firing)

## Getting started

```bash
npm install
cp .env.local.example .env.local   # fill in values; never commit .env.local
npm run dev                        # http://localhost:3000
npm run build                      # production build — must be 0 errors / 0 warnings
```

## Project structure

```
src/
  app/
    layout.tsx              Root layout: fonts, GTM, metadataBase, global schema, chrome
    page.tsx                Homepage — 10-section structure from the SOP
    pricing/                Pricing page (Product + AggregateOffer schema)
    contact/                Contact page + form
    thank-you/              Post-form confirmation (noindex, social sharing)
    privacy-policy/ terms-of-service/ cookie-policy/ refund-policy/
    disclaimer/ gdpr/ acceptable-use/   7 compliance pages (required for ads)
    sitemap.ts              Dynamic sitemap (canonical www URLs only)
    robots.ts               Allow /, disallow /api/ only (never /_next/)
    llms-full.txt/route.ts  Dynamic full LLM docs (GEO / AI search)
    opengraph-image.tsx     Generated default OG/Twitter card
    icon.svg                Favicon
    api/
      lead/route.ts         Server-side lead proxy → GHL webhook
      indexnow/route.ts     IndexNow submission (gated by INDEXNOW_SECRET)
  components/               Header, Footer, CookieConsent, forms, JsonLd, home/* sections
  lib/
    site.ts                 Single source of truth for all SOP variables
    nav.ts  seo.ts  schema.ts  faq.ts
public/
  llms.txt  ai.txt  tradeflow2026.txt   Static GEO / IndexNow files
```

## SEO & GEO

- `metadataBase` + every canonical/OG/Twitter URL derive from the canonical
  `https://www.tradeflow.io` so they never drift.
- JSON-LD: Organization + WebSite (site-wide), SoftwareApplication + FAQPage
  (home), Product + AggregateOffer (pricing), BreadcrumbList.
- `llms.txt`, dynamic `llms-full.txt`, and `ai.txt` for AI search optimization.
- IndexNow key file at `/tradeflow2026.txt`.

## Compliance

All 7 legal pages are built with full content and linked as **visible footer
text links on every page** (required by Google/Meta ad reviewers). A cookie
consent banner gates analytics/advertising: **Accept** pushes a consent event to
the GTM dataLayer; **Decline** fires no tracking. Choice persists 365 days.

> Legal pages are thorough templates — have counsel review before launch.

## Deployment (Vercel)

- Set the production domain to `www.tradeflow.io`; add `tradeflow.io` (non-www)
  as a redirect **in the Vercel Dashboard only**.
- **CRITICAL:** never add `has: [{ type: 'host' }]` redirects in
  `next.config.mjs` — it causes an infinite redirect loop. (See the comment in
  that file.)
- Add all env vars from `.env.local.example` in Vercel (and Doppler).

## Next phase (per SOP, not yet built)

`/features` + `/features/[slug]`, `/for/[avatar]`, `/vs/[competitor]`, `/blog`
(MDX), `/free-tools/[slug]`, `/about`, `/roi-calculator`, `/developers`,
`/affiliate`, `/changelog`. Add each to `src/lib/nav.ts` and `src/app/sitemap.ts`
as it ships.
