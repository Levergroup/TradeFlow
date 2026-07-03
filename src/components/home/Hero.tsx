import Link from 'next/link';
import { site } from '@/lib/site';
import { HeroBackground } from '@/components/motion/HeroBackground';
import { Ticker } from '@/components/motion/Ticker';
import { FadeUp } from '@/components/motion/FadeUp';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate">
      <HeroBackground />
      <div className="container-tf relative pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp delay={0.1}>
            <span className="eyebrow">
              For solo tradespeople, small crews &amp; office managers
            </span>
          </FadeUp>

          <FadeUp delay={0.2}>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl">
              Get Found. Get Booked. <span className="text-accent">Get Paid.</span>{' '}
              One Platform, Built for Your Trade.
            </h1>
          </FadeUp>

          <FadeUp delay={0.4}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
              Everything solo tradespeople and small crews need — website, jobs,
              quotes, and payments — in one platform built for your trade. No
              enterprise price tag. No learning curve. Set up in 20 minutes.
            </p>
          </FadeUp>

          <FadeUp delay={0.6}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={`${site.appUrl}/signup`} className="btn-primary w-full sm:w-auto">
                Start Free — No Credit Card
              </a>
              <a href="#how-it-works" className="btn-secondary w-full sm:w-auto">
                See How It Works
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={1.0}>
            <p className="mt-5 text-sm text-muted">
              Or start with your{' '}
              <Link
                href="/free-tools/free-trade-website"
                className="font-medium text-accent underline underline-offset-2 hover:brightness-110"
              >
                free trade website
              </Link>{' '}
              — no credit card, live in 20 minutes.
            </p>
          </FadeUp>
        </div>

        {/* Social proof ticker */}
        <FadeUp delay={0.8}>
          <div className="mt-10">
            <Ticker />
          </div>
        </FadeUp>

        {/* Hero shot — product mockup placeholder. Replace with real screenshot. */}
        <FadeUp delay={0.9}>
          <div className="mx-auto mt-12 max-w-4xl">
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
        </FadeUp>
      </div>
    </section>
  );
}
