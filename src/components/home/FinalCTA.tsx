import { site } from '@/lib/site';

export function FinalCTA() {
  return (
    <section className="section">
      <div className="container-tf">
        <div className="hero-glow relative overflow-hidden rounded-3xl border border-border bg-bg-alt p-10 text-center sm:p-16">
          <h2 className="mx-auto max-w-2xl text-3xl sm:text-4xl">
            Stop losing jobs to paperwork. Start getting paid faster.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Join the tradespeople who run their whole business — website, schedule,
            quotes, and payments — from one platform.
          </p>
          <div className="mt-8">
            <a href={`${site.appUrl}/signup`} className="btn-primary">
              Start Free — It&apos;s Free to Try
            </a>
          </div>
          <p className="mt-4 text-sm text-muted">
            14-day free trial · No credit card · Set up in 20 minutes
          </p>
        </div>
      </div>
    </section>
  );
}
