const pains = [
  {
    icon: '📋',
    title: 'Drowning in admin chaos',
    body: 'Writing quotes on paper, scheduling via group text, invoicing from memory. You lose 10–15 hours every week to work that does not pay — time you could spend on the tools or with your family.',
  },
  {
    icon: '🔗',
    title: 'Your website does not connect to your workflow',
    body: 'A lead fills out a form, then you manually enter it into a calendar, rewrite it into a quote, and turn it into an invoice by hand. Jobs slip through the cracks at every handoff.',
  },
  {
    icon: '💸',
    title: 'Paying for tools that do not talk to each other',
    body: 'Website builder, calendar, accounting software, payment processor — four subscriptions that never sync. You spend more on software than some enterprise tools cost, and still do the gluing yourself.',
  },
];

export function PainChain() {
  return (
    <section className="section bg-bg-alt/30">
      <div className="container-tf">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl">If you run a trade, you know this…</h2>
          <p className="mt-4 text-muted">
            You did not get into this business to push paper. But here is where the
            week really goes.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pains.map((pain) => (
            <div key={pain.title} className="card">
              <div className="text-3xl" aria-hidden="true">
                {pain.icon}
              </div>
              <h3 className="mt-4 text-xl text-text">{pain.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{pain.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
