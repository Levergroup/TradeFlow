import Link from 'next/link';
import { BrowserMockup, PhoneSmsMockup } from '@/components/mockups';

function AccentIcon({ path }: { path: string }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/30 bg-accent/10">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d={path} />
      </svg>
    </div>
  );
}

const standardCards = [
  {
    title: 'Run the whole week from one calendar',
    outcome: 'Drag-and-drop scheduling that keeps every job and every tech in sync.',
    icon: 'M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z',
  },
  {
    title: 'Quote on-site in 90 seconds',
    outcome: 'Line-item quotes with e-signature that close before you leave.',
    icon: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M9 15l2 2 4-4',
  },
  {
    title: 'Dispatch your crew from the field',
    outcome: 'Techs see the job, notes, and photos on any phone — no downloads.',
    icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8zM23 21v-2a4 4 0 00-3-3.87',
  },
  {
    title: 'Reviews that build themselves',
    outcome: 'Automatic 5-star review requests fire after every completed job.',
    icon: 'M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z',
  },
];

export function Features() {
  return (
    <section className="section">
      <div className="container-tf">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="fade-up text-3xl sm:text-4xl">Everything you need. Nothing you don&apos;t.</h2>
          <p className="fade-up mt-4 text-muted">
            One platform that replaces your website builder, calendar, quoting tool,
            invoicing, and payment processor.
          </p>
        </div>

        <div className="stagger mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {/* Large card 1 — website builder */}
          <article className="card fade-up flex flex-col lg:col-span-2">
            <AccentIcon path="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            <h3 className="mt-4 text-xl text-text">Turn any visitor into a booked job</h3>
            <p className="mt-2 text-sm text-muted">
              A trade-specific website with built-in booking and local SEO — so the
              people searching for your service find you and book on the spot.
            </p>
            <div className="mt-5">
              <BrowserMockup />
            </div>
          </article>

          {/* Standard card — scheduling */}
          <article className="card fade-up flex flex-col">
            <AccentIcon path={standardCards[0].icon} />
            <h3 className="mt-4 text-lg text-text">{standardCards[0].title}</h3>
            <p className="mt-2 text-sm text-muted">{standardCards[0].outcome}</p>
          </article>

          {/* Standard card — quoting */}
          <article className="card fade-up flex flex-col">
            <AccentIcon path={standardCards[1].icon} />
            <h3 className="mt-4 text-lg text-text">{standardCards[1].title}</h3>
            <p className="mt-2 text-sm text-muted">{standardCards[1].outcome}</p>
          </article>

          {/* Large card 2 — get paid by text */}
          <article className="card fade-up flex flex-col lg:col-span-2">
            <AccentIcon path="M22 10H2M6 15h4M2 6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2z" />
            <h3 className="mt-4 text-xl text-text">Get paid by text before you drive away</h3>
            <p className="mt-2 text-sm text-muted">
              Mark a job complete and the invoice sends itself. Your customer taps to
              pay by card or text — money deposited the next business day.
            </p>
            <div className="mt-5">
              <PhoneSmsMockup />
            </div>
          </article>

          {/* Standard card — crew dispatch */}
          <article className="card fade-up flex flex-col">
            <AccentIcon path={standardCards[2].icon} />
            <h3 className="mt-4 text-lg text-text">{standardCards[2].title}</h3>
            <p className="mt-2 text-sm text-muted">{standardCards[2].outcome}</p>
          </article>

          {/* Standard card — review automation */}
          <article className="card fade-up flex flex-col">
            <AccentIcon path={standardCards[3].icon} />
            <h3 className="mt-4 text-lg text-text">{standardCards[3].title}</h3>
            <p className="mt-2 text-sm text-muted">{standardCards[3].outcome}</p>
          </article>

          {/* CTA tile — fills the bento cleanly */}
          <Link
            href="/features"
            className="card fade-up flex flex-col items-start justify-center transition hover:border-accent/40"
          >
            <span className="text-sm font-semibold text-accent">See all features →</span>
            <span className="mt-2 text-sm text-muted">
              Every tool, in depth — website, scheduling, quoting, payments, and crew.
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
