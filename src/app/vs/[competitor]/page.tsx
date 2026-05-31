import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { competitors, getCompetitor, type Mark } from '@/lib/competitors';
import { pageMetadata } from '@/lib/seo';
import { productOfferSchema, faqSchema, breadcrumbSchema } from '@/lib/schema';
import { JsonLd } from '@/components/JsonLd';
import { FAQ } from '@/components/FAQ';
import { site } from '@/lib/site';

type Params = { params: { competitor: string } };

export function generateStaticParams() {
  return competitors.map((c) => ({ competitor: c.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: Params): Metadata {
  const comp = getCompetitor(params.competitor);
  if (!comp) return {};
  return pageMetadata({
    title: comp.metaTitle,
    description: comp.metaDescription,
    path: `/vs/${comp.slug}`,
  });
}

function MarkCell({ mark, note }: { mark: Mark; note: string }) {
  const symbol = mark === 'yes' ? '✓' : mark === 'no' ? '✗' : '~';
  const color =
    mark === 'yes' ? 'text-accent' : mark === 'no' ? 'text-muted' : 'text-yellow-400';
  return (
    <td className="px-4 py-3 align-top">
      <span className={`mr-2 font-semibold ${color}`} aria-hidden="true">
        {symbol}
      </span>
      <span className="text-sm text-muted">{note}</span>
    </td>
  );
}

export default function ComparisonPage({ params }: Params) {
  const comp = getCompetitor(params.competitor);
  if (!comp) notFound();

  return (
    <>
      <JsonLd
        data={[
          productOfferSchema(),
          faqSchema(comp.faqs),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: `vs ${comp.name}`, path: `/vs/${comp.slug}` },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="hero-glow absolute inset-0" aria-hidden="true" />
        <div className="container-tf relative pt-20 pb-10 sm:pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Honest Comparison · 2026</span>
            <h1 className="mt-6 text-4xl sm:text-5xl">
              TradeFlow vs {comp.name}: Which Is Right for You?
            </h1>
          </div>

          {/* TL;DR verdict box */}
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border bg-bg-alt p-6 text-left">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              The short version
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                <span className="font-semibold text-text">TradeFlow:</span>{' '}
                {comp.tldr.tradeflow}
              </li>
              <li>
                <span className="font-semibold text-text">{comp.name}:</span>{' '}
                {comp.tldr.competitor}
              </li>
              <li>
                <span className="font-semibold text-text">Verdict:</span>{' '}
                {comp.tldr.verdict}
              </li>
            </ul>
            <div className="mt-6">
              <a href={`${site.appUrl}/signup`} className="btn-primary">
                Try TradeFlow Free — No Credit Card
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section">
        <div className="container-tf">
          <h2 className="text-center text-3xl sm:text-4xl">Feature-by-feature comparison</h2>
          <div className="mx-auto mt-10 max-w-4xl overflow-x-auto rounded-2xl border border-border">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-bg-alt text-left text-sm font-semibold uppercase tracking-wider">
                  <th className="px-4 py-3 text-muted">Feature</th>
                  <th className="px-4 py-3 text-accent">TradeFlow</th>
                  <th className="px-4 py-3 text-text">{comp.name}</th>
                </tr>
              </thead>
              <tbody>
                {comp.rows.map((row, i) => (
                  <tr key={row.feature} className={`border-t border-border ${i % 2 ? 'bg-bg-alt/20' : ''}`}>
                    <td className="px-4 py-3 align-top text-sm font-medium text-text">
                      {row.feature}
                    </td>
                    <MarkCell mark={row.tf.mark} note={row.tf.note} />
                    <MarkCell mark={row.comp.mark} note={row.comp.note} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mx-auto mt-4 max-w-4xl text-center text-xs text-muted">
            ✓ Included &nbsp;·&nbsp; ~ Partial / add-on &nbsp;·&nbsp; ✗ Not available.
            {' '}{comp.name} features and pricing are summarized in good faith and may
            change — see {comp.name} for current details.
          </p>
        </div>
      </section>

      {/* Who each is best for */}
      <section className="section bg-bg-alt/30">
        <div className="container-tf">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="card">
              <h2 className="text-2xl text-text">Who TradeFlow is best for</h2>
              <ul className="mt-5 space-y-4">
                {comp.tfBestFor.map((item) => (
                  <li key={item.title}>
                    <p className="font-semibold text-text">
                      <span className="mr-2 text-accent">✓</span>
                      {item.title}
                    </p>
                    <p className="mt-1 pl-6 text-sm text-muted">{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h2 className="text-2xl text-text">Who {comp.name} is best for</h2>
              <ul className="mt-5 space-y-4">
                {comp.compBestFor.map((item) => (
                  <li key={item.title}>
                    <p className="font-semibold text-text">
                      <span className="mr-2 text-muted">→</span>
                      {item.title}
                    </p>
                    <p className="mt-1 pl-6 text-sm text-muted">{item.body}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-muted">
                Yes — we just told you when a competitor might fit better. If {comp.name}{' '}
                is the right call for your situation, we want you to make it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing comparison */}
      <section className="section">
        <div className="container-tf">
          <h2 className="text-center text-3xl sm:text-4xl">Pricing, side by side</h2>
          <div className="mx-auto mt-10 grid max-w-3xl gap-6 md:grid-cols-2">
            <div className="card border-accent ring-1 ring-accent">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">TradeFlow</p>
              <p className="mt-3 font-display text-4xl font-bold text-text">{comp.pricing.tf.entry}</p>
              <p className="mt-3 text-sm text-muted">{comp.pricing.tf.note}</p>
              <a href="/pricing" className="btn-secondary mt-6 w-full">See full pricing</a>
            </div>
            <div className="card">
              <p className="text-sm font-semibold uppercase tracking-wider text-text">{comp.name}</p>
              <p className="mt-3 font-display text-4xl font-bold text-text">{comp.pricing.comp.entry}</p>
              <p className="mt-3 text-sm text-muted">{comp.pricing.comp.note}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Switcher testimonial */}
      <section className="section bg-bg-alt/30">
        <div className="container-tf">
          <figure className="mx-auto max-w-3xl text-center">
            <div className="text-accent" aria-hidden="true">★★★★★</div>
            <blockquote className="mt-4 font-display text-2xl leading-snug text-text sm:text-3xl">
              &ldquo;{comp.testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 text-sm">
              <span className="font-semibold text-text">{comp.testimonial.name}</span>
              <span className="block text-muted">{comp.testimonial.role}</span>
            </figcaption>
          </figure>
          <p className="mt-8 text-center text-xs text-muted">
            Results shown are illustrative examples. Individual results vary.{' '}
            <a href="/disclaimer" className="underline underline-offset-2 hover:text-accent">
              See full disclaimer
            </a>
            .
          </p>
        </div>
      </section>

      <FAQ
        items={comp.faqs}
        title={`TradeFlow vs ${comp.name} — FAQ`}
        subtitle="Straight answers to help you choose."
      />

      {/* CTA */}
      <section className="section">
        <div className="container-tf">
          <div className="hero-glow relative overflow-hidden rounded-3xl border border-border bg-bg-alt p-10 text-center sm:p-16">
            <h2 className="mx-auto max-w-2xl text-3xl sm:text-4xl">
              See why crews switch to TradeFlow.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Website, scheduling, quotes, and payments in one platform — set up in 20
              minutes.
            </p>
            <div className="mt-8">
              <a href={`${site.appUrl}/signup`} className="btn-primary">
                Try TradeFlow Free — No Credit Card
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
