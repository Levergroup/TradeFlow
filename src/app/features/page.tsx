import type { Metadata } from 'next';
import { Fragment } from 'react';
import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import { webApplicationSchema, breadcrumbSchema } from '@/lib/schema';
import { JsonLd } from '@/components/JsonLd';
import { FeatureAccordion } from '@/components/FeatureAccordion';
import { site, pricingTiers } from '@/lib/site';
import { featureMatrix, featureFaqs, type Cell } from '@/lib/featureMatrix';

export const metadata: Metadata = pageMetadata({
  title:
    'TradeFlow Features — Website, Scheduling, Quoting & Payments for Tradespeople',
  description:
    'See every feature included in TradeFlow Solo, Crew, and Pro. Free trade website, job scheduling, digital quoting, crew dispatch, invoicing, and Stripe payments. From $39/month.',
  path: '/features',
});

/* ── Cell renderer ──────────────────────────────────────────────────────── */
function CellValue({ cell }: { cell: Cell }) {
  if (cell.kind === 'no') {
    return (
      <span className="inline-flex items-center gap-1.5 text-muted">
        <span aria-hidden="true" className="text-lg leading-none">
          ✕
        </span>
        <span className="sr-only">Not included</span>
      </span>
    );
  }
  if (cell.kind === 'text') {
    return <span className="text-sm font-medium text-text">{cell.value}</span>;
  }
  return (
    <span className="inline-flex flex-col items-center gap-0.5">
      <span aria-hidden="true" className="text-lg leading-none text-accent">
        ✓
      </span>
      <span className="sr-only">Included</span>
      {cell.note && <span className="text-xs text-muted">{cell.note}</span>}
    </span>
  );
}

/* Left-aligned variant for the stacked mobile card layout. */
function CellValueInline({ cell }: { cell: Cell }) {
  if (cell.kind === 'no') {
    return <span className="text-muted">✕ Not included</span>;
  }
  if (cell.kind === 'text') {
    return <span className="font-medium text-text">{cell.value}</span>;
  }
  return (
    <span className="text-text">
      <span className="text-accent">✓</span> {cell.note ?? 'Included'}
    </span>
  );
}

const tiers = [
  { key: 'solo', label: 'Solo', price: '$39/mo' },
  { key: 'crew', label: 'Crew', price: '$79/mo' },
  { key: 'pro', label: 'Pro', price: '$149/mo' },
] as const;

export default function FeaturesPage() {
  // Running counter for zebra striping across all body rows (skips category rows).
  let rowIndex = 0;

  return (
    <>
      <JsonLd
        data={[
          webApplicationSchema(),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Features', path: '/features' },
          ]),
        ]}
      />

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="hero-mesh" aria-hidden="true" />
        <div className="container-tf relative pt-20 pb-16 text-center sm:pt-24">
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow fade-up">Built exclusively for tradespeople</span>
            <h1 className="fade-up mt-6 text-4xl sm:text-5xl lg:text-6xl">
              Everything You Need to Run Your Trade Business. Nothing You Don&apos;t.
            </h1>
            <p className="fade-up mx-auto mt-6 max-w-2xl text-lg text-muted">
              One login. One price. Your free website, jobs, quotes, payments, and
              crew — all connected from day one.
            </p>
            <div className="fade-up mt-8">
              <a href={`${site.appUrl}/signup`} className="btn-primary">
                Start Free — 14 Days, No Credit Card
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container-tf">
        <hr className="section-divider" />
      </div>

      {/* ── Section 1 — comparison table ──────────────────────────────── */}
      <section className="section">
        <div className="container-tf">
          <h2 className="text-center text-3xl sm:text-4xl">What&apos;s Included in Every Plan</h2>

          <div className="card mx-auto mt-10 max-w-5xl overflow-hidden !p-0">
            {/* Desktop table */}
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-bg-alt">
                    <th className="sticky top-0 z-10 bg-bg-alt px-5 py-4 text-sm font-semibold uppercase tracking-wider text-muted">
                      Feature
                    </th>
                    <th className="sticky top-0 z-10 bg-bg-alt px-4 py-4 text-center text-sm font-semibold text-text">
                      <span className="block">Solo</span>
                      <span className="block text-xs font-normal text-muted">$39/mo</span>
                    </th>
                    <th className="sticky top-0 z-10 border-l border-accent/40 bg-bg-alt px-4 py-4 text-center text-sm font-semibold text-text">
                      <span className="mb-1 inline-flex rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-semibold uppercase text-bg">
                        Most Popular
                      </span>
                      <span className="block">Crew</span>
                      <span className="block text-xs font-normal text-muted">$79/mo</span>
                    </th>
                    <th className="sticky top-0 z-10 bg-bg-alt px-4 py-4 text-center text-sm font-semibold text-text">
                      <span className="block">Pro</span>
                      <span className="block text-xs font-normal text-muted">$149/mo</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {featureMatrix.map((cat) => (
                    <Fragment key={cat.name}>
                      <tr>
                        <td
                          colSpan={4}
                          className="bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-accent"
                        >
                          {cat.name}
                        </td>
                      </tr>
                      {cat.rows.map((row) => {
                        const striped = rowIndex++ % 2 === 1;
                        return (
                          <tr
                            key={row.feature}
                            className={striped ? 'bg-[rgba(30,58,95,0.15)]' : ''}
                          >
                            <td className="px-5 py-4 align-top">
                              <p className="text-sm font-semibold text-text">{row.feature}</p>
                              {row.description && (
                                <p className="mt-1 max-w-md text-xs leading-relaxed text-muted">
                                  {row.description}
                                </p>
                              )}
                            </td>
                            <td className="px-4 py-4 text-center align-middle">
                              <CellValue cell={row.solo} />
                            </td>
                            <td className="border-l border-accent/40 px-4 py-4 text-center align-middle">
                              <CellValue cell={row.crew} />
                            </td>
                            <td className="px-4 py-4 text-center align-middle">
                              <CellValue cell={row.pro} />
                            </td>
                          </tr>
                        );
                      })}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile card view */}
            <div className="divide-y divide-border md:hidden">
              {featureMatrix.map((cat) => (
                <div key={cat.name}>
                  <div className="bg-primary px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-accent">
                    {cat.name}
                  </div>
                  {cat.rows.map((row) => (
                    <div key={row.feature} className="px-4 py-4">
                      <p className="text-sm font-semibold text-text">{row.feature}</p>
                      {row.description && (
                        <p className="mt-1 text-xs leading-relaxed text-muted">
                          {row.description}
                        </p>
                      )}
                      <dl className="mt-3 space-y-1.5 text-sm">
                        {(['solo', 'crew', 'pro'] as const).map((key) => (
                          <div
                            key={key}
                            className={`flex items-center justify-between gap-4 rounded-lg px-3 py-1.5 ${
                              key === 'crew' ? 'border-l-2 border-accent bg-[rgba(245,158,11,0.06)]' : ''
                            }`}
                          >
                            <dt className="text-muted">
                              {tiers.find((t) => t.key === key)!.label}
                            </dt>
                            <dd className="text-right">
                              <CellValueInline cell={row[key]} />
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2 — free website callout ──────────────────────────── */}
      <section className="section">
        <div className="container-tf">
          <div
            className="mx-auto grid max-w-5xl items-center gap-8 rounded-2xl p-8 sm:p-10 lg:grid-cols-5"
            style={{
              background: 'linear-gradient(135deg, #1E3A5F, #0F172A)',
              border: '1px solid rgba(245,158,11,0.3)',
            }}
          >
            <div className="lg:col-span-3">
              <h3 className="text-2xl sm:text-3xl">
                Every Plan Includes a Free Professional Trade Website
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Not a template you have to figure out. A real, SEO-optimized,
                mobile-first website built for your trade — plumbing, electrical, HVAC,
                landscaping, handyman, and more. It ranks on Google, captures leads
                24/7, and connects directly to your quotes, calendar, and payments.
                Worth $2,000+ if you hired an agency. Included free in every TradeFlow
                plan.
              </p>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {[
                  'Ranks locally for your trade and suburb',
                  'Online booking connects to your calendar',
                  'Mobile-first — looks perfect on any device',
                  'SSL, hosting, and domain connection included',
                  'Live in 20 minutes',
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-text">
                    <span className="mt-0.5 text-accent">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <div className="card text-center">
                <p className="font-display text-lg text-text">Start with your free website</p>
                <Link
                  href="/free-tools/free-trade-website"
                  className="btn-primary mt-4 w-full"
                >
                  Get My Free Trade Website
                </Link>
                <p className="mt-4 text-xs text-muted">
                  Or start the full 14-day free trial and get everything
                </p>
                <a href={`${site.appUrl}/signup`} className="btn-secondary mt-3 w-full">
                  Start Full Free Trial
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3 — pricing CTA strip ─────────────────────────────── */}
      <section className="section">
        <div className="container-tf">
          <h2 className="text-center text-3xl sm:text-4xl">
            All of This. One Login. From $39/Month.
          </h2>

          <div className="mx-auto mt-10 grid max-w-4xl gap-6 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`card flex flex-col text-center ${
                  tier.featured ? 'pricing-featured' : ''
                }`}
              >
                {tier.badge && (
                  <span className="mx-auto mb-3 inline-flex rounded-full bg-accent px-3 py-1 text-xs font-semibold text-bg">
                    {tier.badge}
                  </span>
                )}
                <h3 className="font-display text-lg text-text">{tier.name}</h3>
                <div className="mt-2 flex items-baseline justify-center gap-1">
                  <span className="font-display text-3xl font-bold text-text">{tier.price}</span>
                  <span className="text-muted">{tier.period}</span>
                </div>
                <p className="mt-3 text-sm text-muted">{tier.tagline}</p>
                <a
                  href={tier.href}
                  className={`mt-5 w-full ${tier.featured ? 'btn-primary' : 'btn-secondary'}`}
                >
                  {tier.cta}
                </a>
                <p className="mt-3 text-xs text-muted">14-day free trial</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm">
            <Link href="/pricing" className="text-accent underline underline-offset-2">
              See full pricing details →
            </Link>
          </p>
        </div>
      </section>

      {/* ── Section 4 — FAQ ───────────────────────────────────────────── */}
      <section className="section">
        <div className="container-tf">
          <h2 className="text-center text-3xl sm:text-4xl">Questions About Features</h2>
          <FeatureAccordion items={featureFaqs} />
        </div>
      </section>
    </>
  );
}
