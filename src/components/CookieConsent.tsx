'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const COOKIE_NAME = 'tradeflow_consent';
const ONE_YEAR = 60 * 60 * 24 * 365;

function setConsentCookie(value: 'accepted' | 'declined') {
  document.cookie = `${COOKIE_NAME}=${value}; path=/; max-age=${ONE_YEAR}; SameSite=Lax`;
}

function getConsentCookie(): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

/**
 * Cookie consent banner. On Accept, sets consent=accepted and pushes a
 * consent-update event to the GTM dataLayer (GTM gates GA4 / Meta Pixel on it).
 * On Decline, no tracking fires. Stores choice for 365 days.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getConsentCookie()) setVisible(true);
  }, []);

  function pushConsent(granted: boolean) {
    type DataLayerWindow = Window & { dataLayer?: Record<string, unknown>[] };
    const w = window as DataLayerWindow;
    w.dataLayer = w.dataLayer ?? [];
    w.dataLayer.push({
      event: 'consent_update',
      analytics_consent: granted ? 'granted' : 'denied',
      ad_consent: granted ? 'granted' : 'denied',
    });
  }

  function handle(choice: 'accepted' | 'declined') {
    setConsentCookie(choice);
    pushConsent(choice === 'accepted');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-primary/95 backdrop-blur"
    >
      <div className="container-tf flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-sm text-text">
          We use cookies to analyze traffic and improve your experience. Read our{' '}
          <Link href="/cookie-policy" className="text-accent underline underline-offset-2">
            Cookie Policy
          </Link>{' '}
          and{' '}
          <Link href="/privacy-policy" className="text-accent underline underline-offset-2">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button onClick={() => handle('declined')} className="btn-secondary !py-2">
            Decline
          </button>
          <button onClick={() => handle('accepted')} className="btn-primary !py-2">
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
