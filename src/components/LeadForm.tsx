'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type Props = {
  ctaLabel: string;
  source: string; // identifies which page/magnet captured the lead
  /** Optional: collect name. Per 8-point framework, keep fields minimal. */
  collectName?: boolean;
  namePlaceholder?: string;
  emailPlaceholder?: string;
  /** Optional override for the fine-print line under the button. */
  footnote?: string;
};

/**
 * Minimal lead-capture form (name + email only). Posts to the internal
 * /api/lead proxy which forwards to the GHL webhook server-side, then
 * redirects to /thank-you. Keeping the webhook server-side avoids exposing
 * it and lets us add validation/spam controls later.
 */
export function LeadForm({
  ctaLabel,
  source,
  collectName = true,
  namePlaceholder = 'First name',
  emailPlaceholder = 'you@yourbusiness.com',
  footnote = 'No spam. Unsubscribe anytime.',
}: Props) {
  const router = useRouter();
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    const form = e.currentTarget;
    const data = new FormData(form);
    // Honeypot — bots fill hidden fields.
    if (data.get('company')) {
      router.push('/thank-you');
      return;
    }
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name') ?? '',
          email: data.get('email'),
          source,
        }),
      });
      if (!res.ok) throw new Error('Request failed');
      router.push('/thank-you');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      {/* Honeypot field — hidden from humans. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {collectName && (
        <div>
          <label htmlFor="lf-name" className="sr-only">
            First name
          </label>
          <input
            id="lf-name"
            name="name"
            type="text"
            autoComplete="given-name"
            placeholder={namePlaceholder}
            className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-text placeholder:text-muted focus:border-accent focus:outline-none"
          />
        </div>
      )}

      <div>
        <label htmlFor="lf-email" className="sr-only">
          Email address
        </label>
        <input
          id="lf-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={emailPlaceholder}
          className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-text placeholder:text-muted focus:border-accent focus:outline-none"
        />
      </div>

      <button type="submit" disabled={status === 'loading'} className="btn-primary w-full disabled:opacity-60">
        {status === 'loading' ? 'Sending…' : ctaLabel}
      </button>

      {status === 'error' && (
        <p className="text-sm text-accent">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <p className="text-center text-xs text-muted">{footnote}</p>
    </form>
  );
}
