import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';
import { LeadForm } from '@/components/LeadForm';
import { FadeUp } from '@/components/motion/FadeUp';
import { FeatureAccordion } from '@/components/FeatureAccordion';

export const metadata: Metadata = {
  title: {
    absolute: 'Free Professional Trade Website | TradeFlow — Live in 20 Minutes',
  },
  description:
    'Get a free conversion-optimized, Google-ranked trade website. Worth $1,500–$3,000 from an agency. Free with TradeFlow. No credit card. Live in 20 minutes.',
  alternates: {
    canonical: `${site.url}/free-tools/free-trade-website`,
  },
  openGraph: {
    title: 'Free Professional Trade Website | TradeFlow — Live in 20 Minutes',
    description:
      'A free conversion-optimized, Google-ranked trade website. Worth $1,500–$3,000 from an agency. No credit card. Live in 20 minutes.',
    url: `${site.url}/free-tools/free-trade-website`,
    type: 'website',
  },
};

/* ── Hero shot — trade website in a browser frame ───────────────────────── */
function TradeSiteMockup() {
  return (
    <svg viewBox="0 0 480 300" className="w-full" role="img" aria-label="Example TradeFlow trade website">
      <rect x="0.5" y="0.5" width="479" height="299" rx="14" fill="#0F172A" stroke="#2D3F55" />
      {/* browser chrome */}
      <rect x="0.5" y="0.5" width="479" height="40" rx="14" fill="#1E2D3D" />
      <rect x="0.5" y="26" width="479" height="14" fill="#1E2D3D" />
      <circle cx="24" cy="20" r="5" fill="#F59E0B" />
      <circle cx="42" cy="20" r="5" fill="#2D3F55" />
      <circle cx="60" cy="20" r="5" fill="#2D3F55" />
      <rect x="86" y="12" width="360" height="16" rx="8" fill="#0F172A" stroke="#2D3F55" />
      <text x="100" y="24" fill="#94A3B8" fontSize="10" fontFamily="sans-serif">
        dallassparkelectric.tradeflow.io
      </text>
      {/* site header */}
      <circle cx="34" cy="66" r="10" fill="#F59E0B" />
      <text x="52" y="70" fill="#F8FAFC" fontSize="12" fontWeight="700" fontFamily="sans-serif">
        Dallas Spark Electric
      </text>
      <rect x="360" y="56" width="96" height="22" rx="11" fill="#F59E0B" />
      <text x="378" y="71" fill="#0F172A" fontSize="10" fontWeight="700" fontFamily="sans-serif">
        Book Online
      </text>
      {/* hero band */}
      <rect x="20" y="96" width="300" height="20" rx="4" fill="#F8FAFC" opacity="0.92" />
      <rect x="20" y="124" width="230" height="12" rx="4" fill="#94A3B8" />
      <text x="24" y="112" fill="#0F172A" fontSize="11" fontWeight="700" fontFamily="sans-serif">
        Licensed Electrician — Dallas, TX
      </text>
      {/* stars */}
      <text x="20" y="162" fill="#F59E0B" fontSize="16" fontFamily="sans-serif">★★★★★</text>
      <text x="110" y="161" fill="#94A3B8" fontSize="11" fontFamily="sans-serif">4.9 · 213 reviews</text>
      {/* CTA + image */}
      <rect x="20" y="178" width="130" height="34" rx="8" fill="#F59E0B" />
      <text x="42" y="200" fill="#0F172A" fontSize="12" fontWeight="700" fontFamily="sans-serif">
        Get a Free Quote
      </text>
      <rect x="300" y="96" width="160" height="116" rx="10" fill="#1E3A5F" />
      <path d="M330 175 l24 -34 12 18 16 -24 28 40 Z" fill="#0D9488" opacity="0.6" />
      {/* trust row */}
      <rect x="20" y="232" width="440" height="48" rx="10" fill="#1E2D3D" stroke="#2D3F55" />
      <text x="40" y="252" fill="#F8FAFC" fontSize="10" fontWeight="700" fontFamily="sans-serif">Same-Day Service</text>
      <text x="40" y="268" fill="#94A3B8" fontSize="9" fontFamily="sans-serif">Licensed &amp; Insured</text>
      <text x="200" y="252" fill="#F8FAFC" fontSize="10" fontWeight="700" fontFamily="sans-serif">Upfront Pricing</text>
      <text x="200" y="268" fill="#94A3B8" fontSize="9" fontFamily="sans-serif">No hidden fees</text>
      <text x="340" y="252" fill="#F8FAFC" fontSize="10" fontWeight="700" fontFamily="sans-serif">24/7 Emergency</text>
      <text x="340" y="268" fill="#94A3B8" fontSize="9" fontFamily="sans-serif">Call anytime</text>
    </svg>
  );
}

const agencyCosts = [
  ['Custom website design', '$800–$1,500'],
  ['Local SEO setup', '$300–$500'],
  ['Mobile optimization', '$200–$400'],
  ['Booking form integration', '$150–$300'],
  ['Hosting (per year)', '$120–$240'],
  ['Domain connection', '$50–$100'],
  ['Ongoing maintenance', '$100+/mo'],
];

const tradeflowIncludes = [
  'Professional trade website design',
  'Local SEO — your suburb, your trade',
  'Mobile-first (60% search on phones)',
  'Online booking connected to your calendar',
  'SSL certificate + hosting included',
  'Domain connection included',
  'Automatic updates — we maintain it for you',
  'Connected to your quotes, invoices & payments from day one',
];

const machineCards = [
  {
    large: true,
    icon: '🎯',
    title: 'Ranks on Google for Your Local Area',
    body:
      "Your website is pre-optimized for local search — your trade + your suburb. When someone in your area searches 'electrician near me' or 'plumber Dallas', your site is built to show up. Most agency sites don't include this — yours does from day one.",
  },
  {
    large: true,
    icon: '📱',
    title: 'Books Jobs While You Sleep',
    body:
      'An online booking form connects directly to your TradeFlow calendar. Customers book at 11pm on a Sunday — you wake up to a confirmed job. No phone tag. No missed leads.',
  },
  {
    icon: '⭐',
    title: 'Built to Convert Visitors into Calls',
    body:
      'Every element — headline, layout, trust signals, CTA placement — is designed to make visitors call or book. Not just browse.',
  },
  {
    icon: '🔗',
    title: 'Connected to Your Entire Business',
    body:
      'Lead fills out your form → auto-saved to your CRM → quote sent in 90 seconds → job scheduled → invoice sent → payment collected. One flow, one platform.',
  },
  {
    icon: '🏆',
    title: 'Shows Your Google Reviews Automatically',
    body:
      'Your Google review stars display on your website and update automatically. Social proof on autopilot.',
  },
  {
    icon: '⚡',
    title: 'Live in 20 Minutes',
    body:
      'Choose your trade, add your business name, connect your domain. We do the rest. No tech skills required. Real human support if you need it.',
  },
];

const trades = [
  { icon: '⚡', name: 'Electrician', headline: 'Licensed Electrician in [Your City] — Same Day Service', rating: '4.9 ★★★★★' },
  { icon: '🔧', name: 'Plumber', headline: 'Emergency Plumber Available 24/7 — [Your City]', rating: '4.8 ★★★★★' },
  { icon: '❄️', name: 'HVAC Tech', headline: 'HVAC Repair & Installation — Fast, Affordable, Guaranteed', rating: '5.0 ★★★★★' },
  { icon: '🌿', name: 'Landscaper', headline: 'Professional Landscaping — Free Quotes, [Your City]', rating: '4.9 ★★★★★' },
];

const testimonials = [
  {
    quote:
      'I had a Wix site my nephew built in 2021. Within a week of switching to TradeFlow I got 3 calls from Google I never would have got before.',
    name: '[Name], Electrician, Dallas TX',
  },
  {
    quote:
      'I was embarrassed to give my website to customers. Now I send the link proudly. It looks better than companies with 10 trucks.',
    name: '[Name], Solo Plumber, Phoenix AZ',
  },
  {
    quote:
      'Setup took 18 minutes. I timed it. My first online booking came in that same night.',
    name: '[Name], Handyman, Atlanta GA',
  },
];

const faqs = [
  {
    question: 'Is this actually free or is there a catch?',
    answer:
      "Genuinely free — no credit card, no hidden fees. Here's the honest answer most companies won't give you: TradeFlow makes money when you use the full platform — scheduling, quoting, payments. The website is free because once you see your business organized in one place, most people stay. We'd rather earn your business by showing you what's possible than by locking you in. Cancel anytime, keep your content.",
  },
  {
    question: 'I already have a website. Why would I switch?',
    answer:
      'Fair question. If your current site books jobs automatically, shows up on Google for your trade and suburb, and connects directly to your quotes and invoices — keep it. But most trade websites we see are digital business cards that don\'t rank and don\'t convert. A TradeFlow website does both, and it\'s connected to your entire workflow. You can keep your existing site and use TradeFlow for operations, or switch your website over — your call.',
  },
  {
    question: 'Will it actually show up on Google?',
    answer:
      'More than a standard Wix or Squarespace site, yes. TradeFlow websites are built with local SEO from day one — your trade, your suburb, structured data, fast load times, and mobile optimization. These are the signals Google uses to rank local businesses. We can\'t guarantee position one for every search, but you\'ll be significantly better positioned than a DIY template site.',
  },
  {
    question: 'What happens after I fill in the form?',
    answer:
      'You get an email immediately with your website setup link. You choose your trade, add your business name, upload a logo (optional), and we build the rest. Real human support is available if you get stuck. Most people are live in 20 minutes.',
  },
  {
    question: 'What if I want to cancel?',
    answer:
      "You keep your content. We give you 30 days notice before anything changes. No lock-in contracts. We'd rather you stay because it works — not because you're trapped.",
  },
  {
    question: "I'm not good with technology. Can I still do this?",
    answer:
      'TradeFlow was built for plumbers, not programmers. If you can use Facebook, you can set up your TradeFlow website. And if you get stuck, our team will walk you through it — real humans, real trade experience, not chatbots.',
  },
];

const steps = [
  { n: '1', title: 'Enter your details above', time: 'Takes 30 seconds' },
  { n: '2', title: 'Choose your trade and add your business name', time: 'Takes 5 minutes' },
  { n: '3', title: 'Your website goes live', time: 'We handle the rest. You get the link.' },
];

/* ── Opt-in form card (reused in hero + main opt-in section) ─────────────── */
function OptInCard({ id }: { id?: string }) {
  return (
    <div id={id} className="card pricing-featured mx-auto w-full max-w-md !p-7 text-left">
      <h3 className="text-center font-display text-xl text-text">Claim Your Free Trade Website</h3>
      <p className="mt-2 text-center text-sm text-muted">
        Enter your details and we&apos;ll get your website started. Takes 20 minutes. No
        credit card.
      </p>
      <div className="mt-6">
        <LeadForm
          ctaLabel="Get My Free Website Now →"
          source="free-trade-website"
          namePlaceholder="Your first name"
          emailPlaceholder="your@businessemail.com"
          footnote="No spam. Real emails only about your website setup. Unsubscribe anytime."
        />
      </div>
      <p className="mt-4 text-center text-xs text-muted">
        🔒 No credit card required · ✓ No commitment · 📞 Real human support included
      </p>
    </div>
  );
}

export default function FreeTradeWebsitePage() {
  return (
    <>
      {/* ── Section 0 — urgency strip ─────────────────────────────────── */}
      <div className="bg-accent px-4 py-2 text-center">
        <p className="text-xs font-bold text-bg sm:text-sm">
          ⚡ Limited Time — Professional Trade Websites Normally Cost $1,500–$3,000.
          Yours is Free With TradeFlow.
        </p>
      </div>

      {/* ── Section 1 — header (no nav) ───────────────────────────────── */}
      <header className="bg-slate">
        <div className="container-tf flex flex-col items-center gap-3 py-6 text-center">
          <Link href="/" className="font-display text-2xl font-bold tracking-tight">
            Trade<span className="text-accent">Flow</span>
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-xs text-muted">
            <span>🔒 No Credit Card</span>
            <span>⚡ Live in 20 Minutes</span>
            <span>✓ Free — No Catch</span>
          </div>
        </div>
      </header>

      {/* ── Section 2 — hero ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-slate">
        <div className="hero-glow absolute inset-0" aria-hidden="true" />
        <div className="container-tf relative pb-16 pt-8 sm:pt-12">
          <div className="mx-auto max-w-3xl text-center">
            <FadeUp>
              <span className="eyebrow">
                For Electricians, Plumbers, HVAC, Landscapers &amp; Handymen
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl">
                Get a Free Professional Trade Website That Ranks on Google and Books
                Jobs While You&apos;re on the Tools.
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
                Stop losing customers to competitors with better websites. TradeFlow
                builds you a conversion-optimized, Google-ranked trade website — the
                kind agencies charge $1,500–$3,000 for — completely free. No credit
                card. Live in 20 minutes.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="mt-8">
                <a href="#optin" className="btn-primary w-full sm:w-auto">
                  Get My Free Trade Website Now →
                </a>
                <p className="mt-3 text-xs text-muted">
                  🔒 No credit card · No commitment · Unsubscribe anytime
                </p>
              </div>
            </FadeUp>
          </div>

          {/* Hero shot */}
          <FadeUp delay={0.4}>
            <div className="mx-auto mt-12 max-w-2xl">
              <div className="card !p-3">
                <TradeSiteMockup />
              </div>
              <p className="mt-3 text-center text-sm text-muted">
                Your website looks like this — optimized for Google, built for bookings
              </p>
            </div>
          </FadeUp>

          {/* Social proof stat pills */}
          <FadeUp delay={0.5}>
            <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center justify-center gap-3 sm:flex-row">
              {[
                '5M+ Tradespeople in the US need this',
                '20 min average setup time',
                'Worth $1,500–$3,000 from an agency',
              ].map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-bg-alt/60 px-4 py-2 text-sm text-text"
                >
                  {s}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <div className="container-tf"><hr className="section-divider" /></div>

      {/* ── Section 3 — value story ───────────────────────────────────── */}
      <section className="section bg-warm">
        <div className="container-tf">
          <FadeUp>
            <h2 className="text-center text-3xl sm:text-4xl">
              Why Does a $2,000 Website Cost You Nothing?
            </h2>
          </FadeUp>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            {/* Problem */}
            <FadeUp>
              <div className="card h-full">
                <h3 className="text-lg text-text">What agencies charge for this:</h3>
                <ul className="mt-5 space-y-2.5">
                  {agencyCosts.map(([label, price]) => (
                    <li key={label} className="flex items-center justify-between gap-4 text-sm">
                      <span className="flex items-center gap-2 text-muted">
                        <span className="text-muted">✕</span>
                        {label}
                      </span>
                      <span className="font-medium text-accent">{price}</span>
                    </li>
                  ))}
                </ul>
                <hr className="my-5 border-border" />
                <p className="text-sm font-semibold text-muted">
                  Total agency cost: $1,500–$3,000+ upfront + $100/mo ongoing
                </p>
              </div>
            </FadeUp>

            {/* Solution */}
            <FadeUp delay={0.1}>
              <div className="card pricing-featured h-full">
                <h3 className="text-lg text-text">What you get with TradeFlow — free:</h3>
                <ul className="mt-5 space-y-2.5">
                  {tradeflowIncludes.map((label) => (
                    <li key={label} className="flex items-start gap-2 text-sm text-text">
                      <span className="mt-0.5 text-accent">✓</span>
                      {label}
                    </li>
                  ))}
                </ul>
                <hr className="my-5 border-border" />
                <p className="text-sm font-semibold text-accent">
                  Your cost with TradeFlow: $0 — included in every plan
                </p>
              </div>
            </FadeUp>
          </div>

          <FadeUp>
            <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted">
              The reason is simple: TradeFlow makes money when you run your whole
              business on the platform — scheduling, quoting, and payments. The website
              is our way of showing you what&apos;s possible before you pay a cent.
            </p>
          </FadeUp>
        </div>
      </section>

      <div className="container-tf"><hr className="section-divider" /></div>

      {/* ── Section 4 — what your website does ────────────────────────── */}
      <section className="section bg-alt2">
        <div className="container-tf">
          <FadeUp>
            <h2 className="mx-auto max-w-3xl text-center text-3xl sm:text-4xl">
              This Isn&apos;t a Template. It&apos;s a Lead-Generating Machine Built for
              Your Trade.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
              Generic website builders give you a blank canvas and wish you luck.
              TradeFlow gives you a website that was built to rank locally, convert
              visitors, and book jobs automatically.
            </p>
          </FadeUp>

          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {machineCards.map((c, i) => (
              <FadeUp key={c.title} delay={(i % 2) * 0.1} className={c.large ? 'lg:col-span-1' : ''}>
                <article className="card card-hover h-full">
                  <div className="text-3xl" aria-hidden="true">{c.icon}</div>
                  <h3 className="mt-3 text-lg text-text">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <div className="container-tf"><hr className="section-divider" /></div>

      {/* ── Section 5 — what it looks like ────────────────────────────── */}
      <section className="section bg-slate">
        <div className="container-tf">
          <FadeUp>
            <h2 className="text-center text-3xl sm:text-4xl">
              Built for Your Trade. Not a Generic Template.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
              Every website is trade-specific — built around the language your customers
              use and the trust signals they need to book you.
            </p>
          </FadeUp>

          <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {trades.map((t, i) => (
              <FadeUp key={t.name} delay={i * 0.08}>
                <article className="card card-hover h-full text-center">
                  <div className="text-3xl" aria-hidden="true">{t.icon}</div>
                  <h3 className="mt-3 text-base text-text">{t.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    &ldquo;{t.headline}&rdquo;
                  </p>
                  <p className="mt-3 text-xs text-accent">{t.rating}</p>
                </article>
              </FadeUp>
            ))}
          </div>

          <FadeUp>
            <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted">
              Also built for: Roofers, Painters, Handymen, Concreters, Pool Service, Pest
              Control, and more.
            </p>
          </FadeUp>
        </div>
      </section>

      <div className="container-tf"><hr className="section-divider" /></div>

      {/* ── Section 6 — social proof ──────────────────────────────────── */}
      <section className="section bg-warm">
        <div className="container-tf">
          <FadeUp>
            <h2 className="text-center text-3xl sm:text-4xl">
              What Tradespeople Say After Getting Their Free Website
            </h2>
          </FadeUp>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <FadeUp key={t.name} delay={i * 0.1}>
                <figure className="card h-full">
                  <div className="text-accent" aria-hidden="true">★★★★★</div>
                  <blockquote className="mt-4 text-sm leading-relaxed text-text">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 text-sm">
                    <span className="font-semibold text-text">— {t.name}</span>
                    <span className="mt-1 block text-xs text-muted">[Replace with real testimonial]</span>
                  </figcaption>
                </figure>
              </FadeUp>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-muted">
            Results shown are illustrative. Individual results vary based on trade,
            location, and usage.
          </p>
        </div>
      </section>

      <div className="container-tf"><hr className="section-divider" /></div>

      {/* ── Section 7 — main opt-in form ──────────────────────────────── */}
      <section className="section bg-alt2">
        <div className="container-tf">
          <div className="mx-auto max-w-md text-center">
            <FadeUp>
              <svg
                width="28" height="40" viewBox="0 0 28 40" fill="none"
                stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="mx-auto mb-6" aria-hidden="true"
              >
                <path d="M14 2v30M6 24l8 8 8-8" />
              </svg>
            </FadeUp>
            <FadeUp delay={0.1}>
              <OptInCard id="optin" />
            </FadeUp>
          </div>
        </div>
      </section>

      <div className="container-tf"><hr className="section-divider" /></div>

      {/* ── Section 8 — objection busters ─────────────────────────────── */}
      <section className="section bg-slate">
        <div className="container-tf">
          <FadeUp>
            <h2 className="text-center text-3xl sm:text-4xl">Questions We Hear Every Day</h2>
          </FadeUp>
          <FeatureAccordion items={faqs} />
        </div>
      </section>

      <div className="container-tf"><hr className="section-divider" /></div>

      {/* ── Section 9 — what happens next ─────────────────────────────── */}
      <section className="section bg-warm">
        <div className="container-tf">
          <FadeUp>
            <h2 className="text-center text-3xl sm:text-4xl">
              From Sign Up to Live Website in 20 Minutes
            </h2>
          </FadeUp>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <FadeUp key={s.n} delay={i * 0.12}>
                <div className="card h-full text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent font-display text-xl font-bold text-bg">
                    {s.n}
                  </div>
                  <h3 className="mt-4 text-base text-text">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted">{s.time}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp>
            <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted">
              Add scheduling, quoting, and payments anytime you&apos;re ready. Or just
              use the website — no pressure, no obligation.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Section 10 — final CTA ────────────────────────────────────── */}
      <section
        className="py-16"
        style={{ background: 'linear-gradient(135deg, #F59E0B, #D97706)' }}
      >
        <div className="container-tf text-center text-bg">
          <h2 className="mx-auto max-w-2xl text-3xl text-bg sm:text-4xl">
            Your Competitors Are Already Online. Your Customers Are Already Searching.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-bg/80">
            Every day without a proper website is a job that goes to someone else. It
            takes 20 minutes to fix that — and it costs nothing.
          </p>
          <div className="mt-8">
            <a
              href="#optin"
              className="inline-flex w-full items-center justify-center rounded-xl bg-bg px-6 py-3 font-semibold text-text transition hover:brightness-125 sm:w-auto"
            >
              Get My Free Trade Website Now →
            </a>
            <p className="mt-3 text-sm text-bg/80">
              No credit card · No commitment · Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* ── Footer (minimal) ──────────────────────────────────────────── */}
      <footer className="bg-slate">
        <div className="container-tf flex flex-col items-center gap-2 py-8 text-center text-xs text-muted">
          <p>© 2026 TradeFlow. A Verado Ventures company.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-accent">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="underline underline-offset-2 hover:text-accent">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
