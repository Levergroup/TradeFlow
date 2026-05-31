'use client';

import { useState } from 'react';

type FAQItem = { question: string; answer: string };

export function FAQ({
  items,
  title = 'Frequently Asked Questions',
  subtitle,
}: {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section">
      <div className="container-tf">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl">{title}</h2>
          {subtitle && <p className="mt-4 text-muted">{subtitle}</p>}
        </div>

        <div className="mx-auto mt-10 max-w-3xl divide-y divide-border overflow-hidden rounded-2xl border border-border">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.question}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 bg-bg-alt/40 px-5 py-4 text-left transition hover:bg-bg-alt"
                  >
                    <span className="font-medium text-text">{item.question}</span>
                    <span className="text-accent" aria-hidden="true">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                </h3>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm leading-relaxed text-muted">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
