import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import { webApplicationSchema, breadcrumbSchema } from '@/lib/schema';
import { JsonLd } from '@/components/JsonLd';
import { site } from '@/lib/site';
import {
  BrowserMockup,
  CalendarMockup,
  QuoteMockup,
  PhoneSmsMockup,
  CrewMockup,
  ReviewMockup,
} from '@/components/mockups';

export const metadata: Metadata = pageMetadata({
  title:
    'TradeFlow Features — Website, Scheduling, Quoting & Payments for Tradespeople',
  description:
    'Every tool a solo tradesperson or small crew needs in one platform. Website builder, job scheduling, digital quoting, crew dispatch, invoicing, and Stripe payments. From $39/month.',
  path: '/features',
});

type Feature = {
  key: string;
  headline: string;
  body: string;
  benefits: string[];
  callout: string;
  ctaLabel: string;
  ctaHref: string;
  Visual: () => JSX.Element;
};

const features: Feature[] = [
  {
    key: 'website',
    headline: 'Get Found on Google Before Your Competitor Finishes Their Coffee',
    body:
      'Your TradeFlow website is built specifically for trades — not a blank template you have to figure out. It ranks locally, loads fast, and turns visitors into booked jobs automatically. Most tradespeople are live in 20 minutes.',
    benefits: [
      'Trade-specific templates (electrical, plumbing, HVAC, landscaping, handyman)',
      'Built-in local SEO — your suburb, your trade, page one',
      'Online booking form connected to your calendar',
      'Mobile-first (60% of your customers search on their phone)',
      'SSL, hosting, and domain included',
    ],
    callout:
      'Mike booked 3 new jobs in his first week from Google searches he never would have shown up in before.',
    ctaLabel: 'See Your Website Live in 20 Minutes',
    ctaHref: '/free-tools/free-trade-website',
    Visual: BrowserMockup,
  },
  {
    key: 'scheduling',
    headline: 'Your Whole Week, Every Tech, Every Job — One Screen',
    body:
      "Stop running your schedule from a whiteboard, group text, or your memory. TradeFlow's drag-and-drop calendar shows every job, every tech, and every gap in your week. Change something — your crew gets notified automatically.",
    benefits: [
      'Drag-and-drop calendar (desktop and mobile)',
      'Assign jobs to crew members with one tap',
      'Automatic SMS to crew when a job is added or changed',
      'Customer gets "on my way" text automatically',
      'Color-coded by status: scheduled, in progress, complete',
    ],
    callout:
      'Sarah stopped playing phone tag with her techs the first day. Every change goes out automatically.',
    ctaLabel: 'Try the Scheduler Free',
    ctaHref: `${site.appUrl}/signup`,
    Visual: CalendarMockup,
  },
  {
    key: 'quoting',
    headline: 'Send a Professional Quote Before You Leave the Driveway',
    body:
      "Build a line-item quote on your phone in 90 seconds. The customer gets a link, reviews it, and approves it with an e-signature. No printing. No chasing. No losing the job because you forgot to follow up.",
    benefits: [
      'Line-item quotes built on your phone',
      'Customer e-signature approval (legally binding)',
      "Auto-follow-up if quote isn't opened in 24 hours",
      'Convert approved quote to invoice in one tap',
      'Quote templates for your most common jobs',
    ],
    callout:
      'Devin stopped losing jobs to slow follow-up. His close rate went up 40% in the first month.',
    ctaLabel: 'Send Your First Quote Free',
    ctaHref: `${site.appUrl}/signup`,
    Visual: QuoteMockup,
  },
  {
    key: 'payments',
    headline: 'Get Paid Before You Drive Away. Every Time.',
    body:
      'Job complete — tap invoice — customer pays by text or card on the spot. No more chasing checks. No more 30-day payment cycles. Money in your account the same day.',
    benefits: [
      'Auto-generate invoice when job is marked complete',
      'Customer pays via text-to-pay link or card on site',
      'Stripe-powered — funds deposited next business day',
      'Automated payment reminders for overdue invoices',
      'QuickBooks export for your accountant',
    ],
    callout:
      "Linda gets paid on the spot now. She hasn't chased a check in three months.",
    ctaLabel: 'Get Paid Faster — Try Free',
    ctaHref: `${site.appUrl}/signup`,
    Visual: PhoneSmsMockup,
  },
  {
    key: 'dispatch',
    headline: 'Your Crew Shows Up Knowing Exactly What to Do',
    body:
      'Your field workers open the app and see their jobs for the day — address, job details, client notes, gate codes, scope of work. They tap start, do the job, tap complete, take photos. You see everything in real time.',
    benefits: [
      'Simple PWA — works on any phone, no app store required',
      'Job details, client notes, and photos in the field',
      'GPS check-in when job starts',
      'Photo capture tied to job record',
      'Works offline — syncs when signal returns',
    ],
    callout:
      "Devin's crew stopped calling him for job details. He gets back 2 hours every day.",
    ctaLabel: 'Equip Your Crew — Try Free',
    ctaHref: `${site.appUrl}/signup`,
    Visual: CrewMockup,
  },
  {
    key: 'reviews',
    headline: 'More 5-Star Reviews While You Sleep. No Awkward Asking.',
    body:
      '24 hours after every completed job, your customer gets a personal SMS asking them to leave a Google review. No copying links. No remembering to ask. Your Google profile builds itself.',
    benefits: [
      'Automatic review request 24hrs after job completion',
      'Direct link to your Google Business Profile',
      'Customizable message in your voice',
      'Reputation dashboard — track reviews across platforms',
      'More reviews = higher Google ranking = more inbound leads',
    ],
    callout:
      'Mike went from 12 reviews to 47 in 60 days without asking a single customer.',
    ctaLabel: 'Start Building Reviews — Free',
    ctaHref: `${site.appUrl}/signup`,
    Visual: ReviewMockup,
  },
];

function FeatureModule({ feature, index }: { feature: Feature; index: number }) {
  const reversed = index % 2 === 1;
  const { Visual } = feature;
  return (
    <section className="section">
      <div className="container-tf">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Visual */}
          <div className={`fade-up ${reversed ? 'lg:order-2' : ''}`}>
            <div className="card !p-5">
              <Visual />
            </div>
          </div>

          {/* Copy */}
          <div className={`fade-up ${reversed ? 'lg:order-1' : ''}`}>
            <h2 className="text-3xl sm:text-4xl">{feature.headline}</h2>
            <p className="mt-4 text-muted">{feature.body}</p>

            <ul className="mt-6 space-y-3">
              {feature.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-text">
                  <span className="mt-0.5 text-accent">✓</span>
                  {b}
                </li>
              ))}
            </ul>

            <figure className="mt-6 border-l-2 border-accent pl-4">
              <blockquote className="text-sm italic text-text">
                &ldquo;{feature.callout}&rdquo;
              </blockquote>
              <figcaption className="mt-1 text-xs text-muted">
                [Placeholder — replace with real testimonial]
              </figcaption>
            </figure>

            <div className="mt-6">
              <a href={feature.ctaHref} className="btn-primary">
                {feature.ctaLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function FeaturesPage() {
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

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="hero-mesh" aria-hidden="true" />
        <div className="container-tf relative pt-20 pb-16 sm:pt-24 text-center">
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow fade-up">Features</span>
            <h1 className="fade-up mt-6 text-4xl sm:text-5xl lg:text-6xl">
              Everything You Need to Run Your Trade Business. Nothing You Don&apos;t.
            </h1>
            <p className="fade-up mx-auto mt-6 max-w-2xl text-lg text-muted">
              One login. One price. Website, jobs, quotes, payments, and crew — all
              connected.
            </p>
            <div className="fade-up mt-8">
              <a href={`${site.appUrl}/signup`} className="btn-primary">
                Start Free — 14 Days, No Credit Card
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature modules (alternating) */}
      {features.map((feature, i) => (
        <div key={feature.key}>
          <div className="container-tf">
            <hr className="section-divider" />
          </div>
          <FeatureModule feature={feature} index={i} />
        </div>
      ))}

      {/* Free website hook band — amber gradient */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              'linear-gradient(120deg, rgba(245,158,11,0.18), rgba(30,58,95,0.25))',
          }}
        />
        <div className="container-tf relative py-16 text-center">
          <h2 className="fade-up text-3xl sm:text-4xl">Start With Your Free Trade Website</h2>
          <p className="fade-up mx-auto mt-4 max-w-2xl text-muted">
            Not ready to commit? Start with your free professional trade website — no
            credit card, live in 20 minutes. Add scheduling, quoting, and payments when
            you&apos;re ready.
          </p>
          <div className="fade-up mt-8">
            <Link href="/free-tools/free-trade-website" className="btn-primary">
              Get My Free Website
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="container-tf">
          <div className="hero-glow relative overflow-hidden rounded-3xl border border-border bg-bg-alt p-10 text-center sm:p-16">
            <h2 className="mx-auto max-w-2xl text-3xl sm:text-4xl">
              All of This. One Login. From $39/Month.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              No contracts. Cancel anytime. 14-day free trial. Setup in 20 minutes even
              if you&apos;ve never used business software.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={`${site.appUrl}/signup`} className="btn-primary">
                Start Free Trial
              </a>
              <Link href="/pricing" className="btn-secondary">
                See Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
