import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { LegalPage } from '@/components/LegalPage';
import { site } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Terms of Service',
  description:
    'The terms and conditions governing your use of TradeFlow, including acceptable use, intellectual property, subscriptions, and limitation of liability.',
  path: '/terms-of-service',
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="May 31, 2026">
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of
        {' '}{site.name} and the {site.url} website. By creating an account or using the
        service, you agree to these Terms. If you do not agree, do not use TradeFlow.
      </p>

      <h2>Eligibility &amp; Accounts</h2>
      <p>
        You must be at least 18 years old and able to form a binding contract. You are
        responsible for keeping your account credentials secure and for all activity
        under your account.
      </p>

      <h2>Subscriptions &amp; Billing</h2>
      <ul>
        <li>Paid plans are billed in advance on a monthly basis unless stated otherwise.</li>
        <li>Free trials convert to paid subscriptions only if you choose to continue.</li>
        <li>You may cancel at any time; access continues through the end of the paid period.</li>
        <li>Fees are described on our <a href="/pricing">pricing page</a> and may change with notice.</li>
      </ul>
      <p>
        Refund terms are described in our <a href="/refund-policy">Refund Policy</a>.
      </p>

      <h2>Acceptable Use</h2>
      <p>
        You agree to use TradeFlow lawfully and not to misuse the service. Prohibited
        activities are described in our{' '}
        <a href="/acceptable-use">Acceptable Use Policy</a>, which is incorporated into
        these Terms.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        TradeFlow, including its software, design, and content, is owned by us and our
        licensors and protected by intellectual property laws. We grant you a limited,
        non-exclusive, non-transferable license to use the service. You retain ownership
        of the content and data you submit (&ldquo;Your Content&rdquo;) and grant us the
        rights needed to operate the service on your behalf.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        TradeFlow integrates with third-party services such as payment processors and AI
        providers. Your use of those services is subject to their terms, and we are not
        responsible for their performance. See our{' '}
        <a href="/disclaimer">Disclaimer</a> for details.
      </p>

      <h2>Disclaimer of Warranties</h2>
      <p>
        The service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
        warranties of any kind, whether express or implied, including merchantability,
        fitness for a particular purpose, and non-infringement. We do not warrant that the
        service will be uninterrupted, error-free, or secure.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, {site.name} and {site.parentCompany}
        {' '}will not be liable for any indirect, incidental, special, consequential, or
        punitive damages, or any loss of profits, revenue, or data. Our total liability
        for any claim will not exceed the amount you paid us in the twelve months before
        the claim arose.
      </p>

      <h2>Termination</h2>
      <p>
        We may suspend or terminate your access if you violate these Terms. You may stop
        using the service at any time. Provisions that by their nature should survive
        termination will survive.
      </p>

      <h2>Governing Law</h2>
      <p>
        These Terms are governed by the laws of the United States and the state in which
        {' '}{site.parentCompany} is established, without regard to conflict-of-law rules.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. Continued use after changes take
        effect constitutes acceptance of the revised Terms.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms? Email{' '}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
