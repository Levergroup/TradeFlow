'use client';

import { useState } from 'react';

/**
 * Contact form. Posts to the /api/lead proxy with a contact source so messages
 * flow into the same CRM pipeline. Shows an inline success state rather than
 * redirecting (the user expects confirmation on a contact page).
 */
export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    const data = new FormData(e.currentTarget);
    if (data.get('company')) {
      setStatus('success');
      return;
    }
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
          source: 'contact-page',
        }),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="card text-center">
        <p className="text-2xl" aria-hidden="true">✓</p>
        <h2 className="mt-2 font-display text-xl text-text">Message sent</h2>
        <p className="mt-2 text-sm text-muted">
          Thanks for reaching out — we&apos;ll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-4">
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div>
        <label htmlFor="c-name" className="mb-1.5 block text-sm font-medium text-text">
          Name
        </label>
        <input
          id="c-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-text placeholder:text-muted focus:border-accent focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="c-email" className="mb-1.5 block text-sm font-medium text-text">
          Email
        </label>
        <input
          id="c-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-text placeholder:text-muted focus:border-accent focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="c-message" className="mb-1.5 block text-sm font-medium text-text">
          How can we help?
        </label>
        <textarea
          id="c-message"
          name="message"
          rows={5}
          required
          className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-text placeholder:text-muted focus:border-accent focus:outline-none"
        />
      </div>

      <button type="submit" disabled={status === 'loading'} className="btn-primary w-full disabled:opacity-60">
        {status === 'loading' ? 'Sending…' : 'Send Message'}
      </button>

      {status === 'error' && (
        <p className="text-sm text-accent">
          Something went wrong. Please email us directly instead.
        </p>
      )}
    </form>
  );
}
