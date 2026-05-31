import { pricingTiers } from '@/lib/site';

export function PricingCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {pricingTiers.map((tier) => (
        <div
          key={tier.name}
          className={`card flex flex-col ${
            tier.featured ? 'border-accent ring-1 ring-accent' : ''
          }`}
        >
          {tier.badge && (
            <span className="mb-4 inline-flex w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold text-bg">
              {tier.badge}
            </span>
          )}
          <h3 className="font-display text-xl text-text">{tier.name}</h3>
          <p className="mt-1 text-sm text-muted">{tier.tagline}</p>

          <div className="mt-5 flex items-baseline gap-1">
            <span className="font-display text-4xl font-bold text-text">{tier.price}</span>
            <span className="text-muted">{tier.period}</span>
          </div>

          <a
            href={tier.href}
            className={`mt-6 w-full ${tier.featured ? 'btn-primary' : 'btn-secondary'}`}
          >
            {tier.cta}
          </a>

          <p className="mt-5 text-sm leading-relaxed text-muted">{tier.story}</p>

          <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
            {tier.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-text">
                <span className="mt-0.5 text-accent">✓</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
