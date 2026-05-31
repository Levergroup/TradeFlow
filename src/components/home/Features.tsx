const features = [
  {
    title: 'Turn any website visitor into a booked job',
    body: 'A trade-specific website with built-in booking and SEO — so the people searching for your service actually find you and book on the spot.',
    badge: 'Crew Favorite',
  },
  {
    title: 'Quote on-site and win the job before you leave',
    body: 'Build line-item quotes on your phone, get an e-signature, and convert it to a scheduled job in a couple of taps.',
  },
  {
    title: 'Run the whole crew from one calendar',
    body: 'Drag-and-drop scheduling, route optimization, and a field mobile app keep every job and every tech in sync.',
  },
  {
    title: 'Get paid the moment the job is done',
    body: 'Auto-generated invoices plus card and text payments mean you stop chasing checks and get cash in days, not weeks.',
  },
  {
    title: 'Your reputation grows on autopilot',
    body: 'Automatic Google review requests fire after every completed job, so the five-star reviews keep coming without you asking.',
  },
  {
    title: 'Know your real profit on every job',
    body: 'Tie expenses and receipts to each job and export clean books to QuickBooks — so you finally see what actually pays.',
  },
];

export function Features() {
  return (
    <section className="section">
      <div className="container-tf">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl">Everything you need. Nothing you don&apos;t.</h2>
          <p className="mt-4 text-muted">
            One platform that replaces your website builder, calendar, quoting tool,
            invoicing, and payment processor.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="card relative">
              {feature.badge && (
                <span className="absolute right-4 top-4 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                  {feature.badge}
                </span>
              )}
              <h3 className="pr-20 text-lg text-text">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{feature.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
