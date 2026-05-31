import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { avatars, getAvatar } from '@/lib/avatars';
import { pageMetadata } from '@/lib/seo';
import { faqSchema, breadcrumbSchema } from '@/lib/schema';
import { JsonLd } from '@/components/JsonLd';
import { PricingCards } from '@/components/PricingCards';
import { FAQ } from '@/components/FAQ';
import { site } from '@/lib/site';

type Params = { params: { avatar: string } };

// SSG only — generate every avatar page at build time.
export function generateStaticParams() {
  return avatars.map((a) => ({ avatar: a.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: Params): Metadata {
  const avatar = getAvatar(params.avatar);
  if (!avatar) return {};
  return pageMetadata({
    title: avatar.metaTitle,
    description: avatar.metaDescription,
    path: `/for/${avatar.slug}`,
  });
}

export default function AvatarPage({ params }: Params) {
  const avatar = getAvatar(params.avatar);
  if (!avatar) notFound();

  return (
    <>
      <JsonLd
        data={[
          faqSchema(avatar.faqs),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: avatar.role, path: `/for/${avatar.slug}` },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="hero-glow absolute inset-0" aria-hidden="true" />
        <div className="container-tf relative pt-20 pb-16 sm:pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">{avatar.badge}</span>
            <h1 className="mt-6 text-4xl sm:text-5xl">{avatar.heroHeadline}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">{avatar.heroSub}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={`${site.appUrl}/signup`} className="btn-primary w-full sm:w-auto">
                Start Free — No Credit Card
              </a>
              <a href="#how-it-works" className="btn-secondary w-full sm:w-auto">
                See How It Works
              </a>
            </div>
            <p className="mt-8 text-sm text-muted">
              <span className="text-accent">✓</span> {avatar.proofStat}
            </p>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="section bg-bg-alt/30">
        <div className="container-tf">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl sm:text-4xl">Sound like your week?</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {avatar.problems.map((p) => (
              <div key={p.title} className="card">
                <h3 className="text-xl text-text">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="section">
        <div className="container-tf">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl sm:text-4xl">From Lead to Paid in 3 Steps</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {avatar.steps.map((step, i) => (
              <div key={step.title} className="card">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent font-display text-xl font-bold text-bg">
                  {i + 1}
                </div>
                <h3 className="mt-5 text-xl text-text">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-bg-alt/30">
        <div className="container-tf">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl sm:text-4xl">Built for the way you work</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {avatar.benefits.map((b) => (
              <div key={b.title} className="card">
                <h3 className="text-lg text-text">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section">
        <div className="container-tf">
          <figure className="mx-auto max-w-3xl text-center">
            <div className="text-accent" aria-hidden="true">★★★★★</div>
            <blockquote className="mt-4 font-display text-2xl leading-snug text-text sm:text-3xl">
              &ldquo;{avatar.testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 text-sm">
              <span className="font-semibold text-text">{avatar.testimonial.name}</span>
              <span className="block text-muted">{avatar.testimonial.role}</span>
            </figcaption>
          </figure>
          <p className="mt-8 text-center text-xs text-muted">
            Results shown are illustrative examples. Individual results vary.{' '}
            <a href="/disclaimer" className="underline underline-offset-2 hover:text-accent">
              See full disclaimer
            </a>
            .
          </p>
        </div>
      </section>

      {/* Pricing framing */}
      <section className="section bg-bg-alt/30">
        <div className="container-tf">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl sm:text-4xl">Simple Pricing for Hard Workers</h2>
            <p className="mt-4 text-muted">{avatar.pricingFraming}</p>
          </div>
          <div className="mt-12">
            <PricingCards />
          </div>
          <p className="mt-8 text-center text-sm text-muted">
            14-day free trial · No credit card required · Cancel anytime
          </p>
        </div>
      </section>

      <FAQ items={avatar.faqs} subtitle={`The questions ${avatar.persona} asked before starting.`} />

      {/* Final CTA */}
      <section className="section">
        <div className="container-tf">
          <div className="hero-glow relative overflow-hidden rounded-3xl border border-border bg-bg-alt p-10 text-center sm:p-16">
            <h2 className="mx-auto max-w-2xl text-3xl sm:text-4xl">{avatar.finalCta.headline}</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">{avatar.finalCta.sub}</p>
            <div className="mt-8">
              <a href={`${site.appUrl}/signup`} className="btn-primary">
                Start Free — It&apos;s Free to Try
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
