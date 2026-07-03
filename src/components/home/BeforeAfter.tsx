const rows = [
  { before: 'Quotes written on paper or in a notes app', after: 'Professional digital quotes with e-signature in minutes' },
  { before: 'Scheduling jobs over scattered group texts', after: 'One shared calendar your whole crew works from' },
  { before: 'Leads lost between form, calendar, and invoice', after: 'Lead to booked job to paid invoice — one connected flow' },
  { before: 'Chasing customers for payment after the job', after: 'Customers pay by text or card the moment it is done' },
  { before: 'Four subscriptions that never sync', after: 'One platform that replaces all of them' },
  { before: 'A website that just sits there', after: 'A website that books jobs while you work' },
];

export function BeforeAfter() {
  return (
    <section className="section">
      <div className="container-tf">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="fade-up text-3xl sm:text-4xl">
            Same trade. <span className="text-accent">A business that runs itself.</span>
          </h2>
          <p className="mt-4 text-muted">
            TradeFlow connects everything from the first click to the final payment —
            so nothing falls through the cracks.
          </p>
        </div>

        <div className="fade-up mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-border">
          <div className="grid grid-cols-2 bg-bg-alt text-sm font-semibold uppercase tracking-wider">
            <div className="px-5 py-4 text-muted">Without TradeFlow</div>
            <div className="px-5 py-4 text-accent">With TradeFlow</div>
          </div>
          {rows.map((row, i) => (
            <div
              key={row.after}
              className={`grid grid-cols-2 border-t border-border ${i % 2 ? 'bg-bg-alt/20' : ''}`}
            >
              <div className="px-5 py-4 text-sm text-muted">{row.before}</div>
              <div className="px-5 py-4 text-sm text-text">{row.after}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
