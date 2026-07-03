import { proofStats } from '@/lib/site';

const testimonials = [
  {
    quote:
      'I turned 3 hours of nightly paperwork into 15 minutes. The quote goes out before I leave the driveway and I get paid the same day.',
    name: '[Replace with real testimonial]',
    role: 'Solo Electrician',
  },
  {
    quote:
      'We stopped losing leads in the shuffle. Every booking from our site lands on the calendar and the whole crew sees it on their phones.',
    name: '[Replace with real testimonial]',
    role: 'Office Manager, 4-person HVAC crew',
  },
  {
    quote:
      'Cancelled three subscriptions the month we switched. One login does what Wix, QuickBooks, and our old scheduler used to — for less.',
    name: '[Replace with real testimonial]',
    role: 'Plumbing crew chief',
  },
];

export function SocialProof() {
  return (
    <section className="section bg-bg-alt/30">
      <div className="container-tf">
        {/* Stats row */}
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
          {proofStats.map((stat) => (
            <div key={stat} className="text-center">
              <p className="text-sm font-medium text-text">{stat}</p>
            </div>
          ))}
        </div>

        <div className="stagger mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.role} className="card fade-up">
              <div className="text-accent" aria-hidden="true">
                ★★★★★
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-text">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="font-semibold text-text">{t.name}</span>
                <span className="block text-muted">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted">
          Results shown are illustrative examples. Individual results vary.{' '}
          <a href="/disclaimer" className="underline underline-offset-2 hover:text-accent">
            See full disclaimer
          </a>
          .
        </p>
      </div>
    </section>
  );
}
