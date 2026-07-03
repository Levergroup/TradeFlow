import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import { LeadForm } from '@/components/LeadForm';

export const metadata: Metadata = pageMetadata({
  title: 'Free Trade Website Builder',
  description:
    'Get a free professional website for your trade business. Google-optimized, mobile-ready, live in 20 minutes. No credit card required.',
  path: '/free-tools/free-trade-website',
});

const benefits = [
  'Professional design built for trades (not a generic template)',
  'Shows up on Google for your local area',
  'Customers can book directly from your site',
  'Connected to your quotes and invoices from day one',
  'Takes 20 minutes. We walk you through every step.',
];

export default function FreeTradeWebsitePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="hero-mesh" aria-hidden="true" />

      {/* Minimal top wordmark — no main navigation (squeeze page). */}
      <div className="container-tf relative flex justify-center py-6">
        <Link href="/" className="font-display text-xl font-bold tracking-tight">
          Trade<span className="text-accent">Flow</span>
        </Link>
      </div>

      <div className="container-tf relative pb-20 pt-6">
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <span className="eyebrow">Free · No credit card</span>
            <h1 className="mt-6 text-4xl sm:text-5xl">
              Your Free Professional Trade Website. Live in 20 Minutes.
            </h1>
            <p className="mt-5 text-lg text-muted">
              Stop sending customers to a website that looks like 2008. TradeFlow
              builds you a professional, Google-optimized website built for your
              trade — free, no credit card, yours in 20 minutes.
            </p>

            <ul className="mt-8 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-text">
                  <span className="mt-0.5 text-accent">✓</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Form — glassmorphism container */}
          <div className="card mx-auto w-full max-w-md !p-8">
            <p className="text-center font-display text-xl text-text">
              Claim your free website
            </p>
            <p className="mt-2 text-center text-sm text-muted">
              Enter your details and we&apos;ll get you started.
            </p>

            <div className="mt-6">
              <LeadForm ctaLabel="Get My Free Website" source="free-trade-website" />
            </div>

            <p className="mt-5 text-center text-xs text-muted">
              No credit card. No commitment. Upgrade to add scheduling, quoting, and
              payments anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Minimal footer — Privacy Policy link only. */}
      <footer className="relative border-t border-border">
        <div className="container-tf flex flex-col items-center gap-2 py-8 text-center text-xs text-muted">
          <p>© {new Date().getFullYear()} TradeFlow. A Verado Ventures company.</p>
          <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-accent">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}
