import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { LegalPage } from '@/components/LegalPage';
import { site } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Policy',
  description:
    'How TradeFlow collects, uses, and protects your personal data, including GDPR and CCPA rights, advertising tracking, and your opt-out choices.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="May 31, 2026">
      <p>
        This Privacy Policy explains how {site.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo;
        or &ldquo;our&rdquo;) collects, uses, discloses, and safeguards your information
        when you visit {site.url} or use our services. By using TradeFlow, you agree to
        the practices described here.
      </p>

      <h2>Information We Collect</h2>
      <ul>
        <li>
          <strong>Information you provide:</strong> name, email address, business
          details, payment information, and any content you submit through forms,
          sign-ups, or support requests.
        </li>
        <li>
          <strong>Information collected automatically:</strong> IP address, browser
          type, device information, pages visited, and usage data gathered through
          cookies and similar technologies.
        </li>
        <li>
          <strong>Information from third parties:</strong> data from payment processors,
          analytics providers, and integration partners you choose to connect.
        </li>
      </ul>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>Provide, operate, and improve the TradeFlow service.</li>
        <li>Process payments and manage your subscription.</li>
        <li>Send transactional messages, product updates, and (with consent) marketing.</li>
        <li>Respond to support inquiries and enforce our terms.</li>
        <li>Measure and improve marketing and advertising performance.</li>
      </ul>

      <h2>Advertising and Analytics Tracking</h2>
      <p>
        We use the following services to understand traffic and measure advertising.
        These run only after you accept cookies via our consent banner:
      </p>
      <ul>
        <li>
          <strong>Google Analytics 4 (GA4):</strong> measures site usage. Opt out with
          the{' '}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
            Google Analytics Opt-out Browser Add-on
          </a>
          .
        </li>
        <li>
          <strong>Google Ads:</strong> measures ad conversions and supports remarketing.
          Manage preferences in your{' '}
          <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
            Google Ad Settings
          </a>
          .
        </li>
        <li>
          <strong>Meta Pixel:</strong> measures the performance of Facebook and Instagram
          ads. Manage preferences in your{' '}
          <a href="https://www.facebook.com/settings?tab=ads" target="_blank" rel="noopener noreferrer">
            Meta ad settings
          </a>
          .
        </li>
      </ul>
      <p>
        See our{' '}
        <a href="/cookie-policy">Cookie Policy</a> for the full list of cookies and how
        to control them.
      </p>

      <h2>How We Share Information</h2>
      <p>
        We do not sell your personal information. We share data only with service
        providers who help us operate (such as hosting, payment processing, email, and
        analytics), when required by law, or as part of a business transfer. All
        providers are bound by confidentiality and data-protection obligations.
      </p>

      <h2>Data Retention</h2>
      <p>
        We retain personal data only as long as necessary to provide the service, comply
        with legal obligations, resolve disputes, and enforce agreements. You may request
        deletion at any time (see GDPR and Your Rights below).
      </p>

      <h2>Your Rights</h2>
      <p>
        Depending on where you live, you may have the right to access, correct, delete,
        or restrict the use of your personal data, and to opt out of certain processing.
        See our <a href="/gdpr">GDPR rights page</a> for EU/UK residents and the rights
        available under the California Consumer Privacy Act (CCPA). To exercise any right,
        email{' '}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>Data Security</h2>
      <p>
        We use industry-standard safeguards to protect your data. No method of
        transmission or storage is completely secure, so we cannot guarantee absolute
        security.
      </p>

      <h2>Children&apos;s Privacy</h2>
      <p>
        TradeFlow is not directed to children under 16, and we do not knowingly collect
        their personal information.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Material changes will be
        posted on this page with a revised &ldquo;Last updated&rdquo; date.
      </p>

      <h2>Contact Us</h2>
      <p>
        Questions about this policy? Email{' '}
        <a href={`mailto:${site.email}`}>{site.email}</a> or visit our{' '}
        <a href="/contact">contact page</a>.
      </p>
    </LegalPage>
  );
}
