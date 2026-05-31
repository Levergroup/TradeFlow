import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { productOfferSchema, breadcrumbSchema } from '@/lib/schema';
import { JsonLd } from '@/components/JsonLd';
import { PricingCards } from '@/components/PricingCards';
import { FAQ } from '@/components/FAQ';
import { homeFaqs } from '@/lib/faq';

export const metadata: Metadata = pageMetadata({
  title: 'Pricing — Simple Plans for Tradespeople',
  description:
    'TradeFlow pricing starts at $39/mo. Affordable field service management software for small business — website, scheduling, quotes, invoicing, and payments. Cancel anytime.',
  path: '/pricing',
});

// Pricing-specific FAQs reuse the relevant homepage objections.
const pricingFaqs = homeFaqs.filter((f) =>
  ['$79', 'cancel', 'refund', 'different'].some((k) =>
    f.question.toLowerCase().includes(k),
  ),
);

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={[
          productOfferSchema(),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Pricing', path: '/pricing' },
          ]),
        ]}
      />

      <section className="section">
        <div className="container-tf">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Pricing</span>
            <h1 className="mt-6 text-4xl sm:text-5xl">
              Simple Pricing for Hard Workers
            </h1>
            <p className="mt-4 text-lg text-muted">
              Less than one hour of your billable rate per month. It pays for itself
              with the first quote you don&apos;t lose. Cancel anytime.
            </p>
          </div>

          <div className="mt-14">
            <PricingCards />
          </div>

          <p className="mt-8 text-center text-sm text-muted">
            14-day free trial · No credit card required · Month-to-month · No setup fees
          </p>
        </div>
      </section>

      <FAQ
        items={pricingFaqs}
        title="Pricing Questions"
        subtitle="Straight answers about plans, billing, and value."
      />
    </>
  );
}
