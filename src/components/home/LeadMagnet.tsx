import { site } from '@/lib/site';
import { LeadForm } from '@/components/LeadForm';

const bullets = [
  'The 7 line items solo contractors forget to bill — and what they cost you',
  'A 2-minute self-audit to find $500–$2,000 in monthly leaks',
  'The exact follow-up that recovers jobs you thought were dead',
];

export function LeadMagnet() {
  return (
    <section className="section bg-bg-alt/30">
      <div className="container-tf">
        <div className="mx-auto grid max-w-4xl items-center gap-10 rounded-2xl border border-border bg-bg-alt p-8 md:grid-cols-2 md:p-10">
          <div>
            <span className="eyebrow">Free Download</span>
            <h2 className="mt-4 text-2xl sm:text-3xl">{site.leadMagnet.name}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {site.leadMagnet.hook}
            </p>
            <ul className="mt-5 space-y-2.5">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-text">
                  <span className="mt-0.5 text-accent">✓</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-bg p-6">
            <p className="mb-4 text-center text-sm font-medium text-text">
              Get the free checklist — instant access
            </p>
            <LeadForm ctaLabel={site.leadMagnet.cta} source="homepage-lead-magnet" />
          </div>
        </div>
      </div>
    </section>
  );
}
