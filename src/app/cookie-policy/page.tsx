import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { LegalPage } from '@/components/LegalPage';
import { site } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Cookie Policy',
  description:
    'How TradeFlow uses cookies and similar technologies, what each cookie does, how long it lasts, and how to manage your preferences.',
  path: '/cookie-policy',
});

const cookies = [
  { name: 'tradeflow_consent', purpose: 'Stores your cookie consent choice', duration: '365 days', type: 'Necessary' },
  { name: 'session', purpose: 'Maintains your session and security state', duration: 'Session', type: 'Necessary' },
  { name: '_ga', purpose: 'Google Analytics — distinguishes unique users', duration: '2 years', type: 'Analytics' },
  { name: '_ga_XXXX', purpose: 'Google Analytics 4 — persists session state', duration: '2 years', type: 'Analytics' },
  { name: '_fbp', purpose: 'Meta Pixel — measures ad performance', duration: '90 days', type: 'Advertising' },
];

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Cookie Policy" updated="May 31, 2026">
      <p>
        This Cookie Policy explains how {site.name} uses cookies and similar technologies
        on {site.url}. It should be read alongside our{' '}
        <a href="/privacy-policy">Privacy Policy</a>.
      </p>

      <h2>What Are Cookies?</h2>
      <p>
        Cookies are small text files stored on your device when you visit a website. They
        help the site function, remember your preferences, and understand how the site is
        used.
      </p>

      <h2>How We Use Cookies</h2>
      <p>
        We group cookies into three categories: <strong>Necessary</strong> (required for
        the site to work), <strong>Analytics</strong> (help us understand usage), and{' '}
        <strong>Advertising</strong> (measure and improve our ads). Analytics and
        Advertising cookies only load after you select &ldquo;Accept All&rdquo; in our
        consent banner.
      </p>

      <h2>Cookies We Use</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Purpose</th>
            <th>Duration</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {cookies.map((c) => (
            <tr key={c.name}>
              <td>{c.name}</td>
              <td>{c.purpose}</td>
              <td>{c.duration}</td>
              <td>{c.type}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Managing Your Preferences</h2>
      <p>
        When you first visit, our consent banner lets you accept or decline non-essential
        cookies. Choosing &ldquo;Decline&rdquo; prevents Analytics and Advertising cookies
        from firing. You can also control cookies through your browser settings, though
        disabling necessary cookies may affect site functionality.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Cookie Policy as our practices evolve. Changes are posted here
        with a revised &ldquo;Last updated&rdquo; date.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about cookies? Email{' '}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
