import { site, proofStats } from '@/lib/site';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-glow absolute inset-0" aria-hidden="true" />
      <div className="container-tf relative pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">
            For solo tradespeople, small crews &amp; office managers
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl">
            Drowning in admin chaos?{' '}
            <span className="text-accent">TradeFlow</span> organizes your quotes,
            schedule, and payments in one platform.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            {site.promise} TradeFlow is field service management software for
            small business that gets you found, booked, and paid — without the
            enterprise price tag.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={`${site.appUrl}/signup`} className="btn-primary w-full sm:w-auto">
              Start Free — No Credit Card
            </a>
            <a href="#how-it-works" className="btn-secondary w-full sm:w-auto">
              See How It Works
            </a>
          </div>

          {/* Social proof bar */}
          <ul className="mx-auto mt-10 flex max-w-2xl flex-col items-center justify-center gap-3 text-sm text-muted sm:flex-row sm:gap-6">
            {proofStats.map((stat) => (
              <li key={stat} className="flex items-center gap-2">
                <span className="text-accent">✓</span>
                {stat}
              </li>
            ))}
          </ul>
        </div>

        {/* Hero shot — product mockup placeholder. Replace with real screenshot. */}
        <div className="mx-auto mt-14 max-w-4xl">
          <div className="rounded-2xl border border-border bg-bg-alt p-2 shadow-2xl">
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
