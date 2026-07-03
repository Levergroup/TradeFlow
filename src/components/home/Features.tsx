import { BrowserMockup, PhoneSmsMockup } from '@/components/mockups';
import { FadeUp } from '@/components/motion/FadeUp';

function AccentIcon({ path, tone = 'amber' }: { path: string; tone?: 'amber' | 'teal' }) {
  const color = tone === 'teal' ? '#0D9488' : '#F59E0B';
  const ring = tone === 'teal' ? 'border-teal/30 bg-teal/10' : 'border-accent/30 bg-accent/10';
  return (
    <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${ring}`}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d={path} />
      </svg>
    </div>
  );
}

const smallCards = [
  {
    tone: 'teal' as const,
    icon: 'M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z',
    title: 'Run the whole week from one calendar',
    outcome: 'Drag-and-drop scheduling that keeps every job and every tech in sync.',
  },
  {
    tone: 'amber' as const,
    icon: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M9 15l2 2 4-4',
    title: 'Quote on-site in 90 seconds',
    outcome: 'Line-item quotes with e-signature that close before you leave.',
  },
  {
    tone: 'teal' as const,
    icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8zM23 21v-2a4 4 0 00-3-3.87',
    title: 'Dispatch your crew from the field',
    outcome: 'Techs see the job, notes, and photos on any phone — no downloads.',
  },
];

export function Features() {
  return (
    <section className="section bg-warm">
      <div className="container-tf">
        <div className="mx-auto max-w-2xl text-center">
          <FadeUp>
            <h2 className="text-3xl sm:text-4xl">Everything you need. Nothing you don&apos;t.</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mt-4 text-muted">
              One platform that replaces your website builder, calendar, quoting tool,
              invoicing, and payment processor.
            </p>
          </FadeUp>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:auto-rows-fr lg:grid-cols-12">
          {/* Large — website builder */}
          <FadeUp className="lg:col-span-8 lg:row-span-2" delay={0}>
            <article
              className="card card-hover flex h-full flex-col"
              style={{
                background:
                  'linear-gradient(135deg, rgba(30,58,95,0.28), rgba(13,148,136,0.15))',
              }}
            >
              <AccentIcon path="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <h3 className="mt-4 text-xl text-text">Turn any visitor into a booked job</h3>
              <p className="mt-2 max-w-xl text-sm text-muted">
                A trade-specific website with built-in booking and local SEO — so the
                people searching for your service find you and book on the spot.
              </p>
              <div className="mt-auto pt-6">
                <BrowserMockup />
              </div>
            </article>
          </FadeUp>

          {/* Tall — get paid by text */}
          <FadeUp className="lg:col-span-4 lg:row-span-2" delay={0.1}>
            <article
              className="card card-hover flex h-full flex-col"
              style={{
                background:
                  'linear-gradient(160deg, rgba(245,158,11,0.14), rgba(30,58,95,0.18))',
              }}
            >
              <AccentIcon path="M22 10H2M6 15h4M2 6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2z" />
              <h3 className="mt-4 text-xl text-text">Get paid by text before you drive away</h3>
              <p className="mt-2 text-sm text-muted">
                Mark a job complete and the invoice sends itself. Your customer taps to
                pay — money deposited the next business day.
              </p>
              <div className="mt-auto pt-6">
                <PhoneSmsMockup />
              </div>
            </article>
          </FadeUp>

          {/* Bottom row — 3 standard cards */}
          {smallCards.map((c, i) => (
            <FadeUp key={c.title} className="lg:col-span-4" delay={0.2 + i * 0.1}>
              <article className="card card-hover flex h-full flex-col">
                <AccentIcon path={c.icon} tone={c.tone} />
                <h3 className="mt-4 text-lg text-text">{c.title}</h3>
                <p className="mt-2 text-sm text-muted">{c.outcome}</p>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
