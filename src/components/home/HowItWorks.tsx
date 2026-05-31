import { site } from '@/lib/site';

const steps = [
  {
    n: '1',
    title: 'Capture',
    body: 'A lead books straight through your TradeFlow website — or you add them in seconds. Every detail lands in one place, ready to work.',
  },
  {
    n: '2',
    title: 'Execute',
    body: 'Schedule the job, send a digital quote for e-signature, and dispatch your crew from the mobile app. Everyone sees the same plan.',
  },
  {
    n: '3',
    title: 'Collect',
    body: 'Mark the job complete and TradeFlow auto-generates the invoice. Your customer pays by text or card — and your review request goes out automatically.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section bg-bg-alt/30">
      <div className="container-tf">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl">From Lead to Paid in 3 Steps</h2>
          <p className="mt-4 text-muted">
            No new habits to learn. TradeFlow follows the way you already work — it
            just stops the leaks.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.n} className="card relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent font-display text-xl font-bold text-bg">
                {step.n}
              </div>
              <h3 className="mt-5 text-xl text-text">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href={`${site.appUrl}/signup`} className="btn-primary">
            Try It Free — No Credit Card
          </a>
        </div>
      </div>
    </section>
  );
}
