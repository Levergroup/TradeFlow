import Link from 'next/link';
import { site, proofStats } from '@/lib/site';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-mesh" aria-hidden="true" />
      <div className="container-tf relative pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow fade-up">
            For solo tradespeople, small crews &amp; office managers
          </span>

          <h1 className="fade-up mt-6 text-4xl sm:text-5xl lg:text-6xl">
            Get Found. Get Booked. <span className="text-accent">Get Paid.</span>{' '}
            One Platform, Built for Your Trade.
          </h1>

          <p className="fade-up mx-auto mt-6 max-w-2xl text-lg text-muted">
            Everything solo tradespeople and small crews need — website, jobs,
            quotes, and payments — in one platform built for your trade. No
            enterprise price tag. No learning curve. Set up in 20 minutes.
          </p>

          <div className="fade-up mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={`${site.appUrl}/signup`} className="btn-primary w-full sm:w-auto">
              Start Free — No Credit Card
            </a>
            <a href="#how-it-works" className="btn-secondary w-full sm:w-auto">
              See How It Works
            </a>
          </div>

          {/* Free trade website micro-CTA */}
          <p className="fade-up mt-5 text-sm text-muted">
            Or start with your{' '}
            <Link
              href="/free-tools/free-trade-website"
              className="font-medium text-accent underline underline-offset-2 hover:brightness-110"
            >
              free trade website
            </Link>{' '}
            — no credit card, live in 20 minutes.
          </p>

          {/* Social proof bar */}
          <ul className="fade-up mx-auto mt-10 flex max-w-2xl flex-col items-center justify-center gap-3 text-sm text-muted sm:flex-row sm:gap-6">
            {proofStats.map((stat) => (
              <li key={stat} className="flex items-center gap-2">
                <span className="text-accent">✓</span>
                {stat}
              </li>
            ))}
          </ul>
        </div>

        {/* Hero shot — product mockup placeholder. Replace with real screenshot. */}
        <div className="fade-up mx-auto mt-14 max-w-4xl">
          <div className="card !p-2 shadow-2xl">
            <div className="flex aspect-[16/9] items-center justify-center rounded-xl bg-gradient-to-br from-primary/40 to-bg-alt">
              <div className="text-center">
                <p className="font-display text-2xl text-text">From lead to paid in 4 taps</p>
                <p className="mt-2 text-sm text-muted">
                  [Replace with product screenshot — dashboard / mobile app]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
