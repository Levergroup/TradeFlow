import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { LegalPage } from '@/components/LegalPage';
import { site } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Refund Policy',
  description:
    'TradeFlow refund terms — free trial details, monthly subscription billing, and how to request a refund.',
  path: '/refund-policy',
});

export default function RefundPolicyPage() {
  return (
    <LegalPage title="Refund Policy" updated="May 31, 2026">
      <p>
        We want you to be confident in {site.name}. This Refund Policy explains how
        billing, trials, and refunds work.
      </p>

      <h2>Free Trial</h2>
      <p>
        Every plan starts with a 14-day free trial and no credit card required. This is
        the best way to evaluate TradeFlow risk-free before you pay anything.
      </p>

      <h2>Monthly Subscriptions</h2>
      <p>
        Subscriptions are billed monthly in advance. You can cancel at any time from your
        account settings; your subscription remains active through the end of the current
        billing period, and you will not be charged again afterward.
      </p>

      <h2>Refund Requests</h2>
      <p>
        If you were charged in error or are unhappy with the service, contact us within 14
        days of the charge and we will review your request in good faith. Approved refunds
        are issued to the original payment method.
      </p>
      <ul>
        <li>Refunds apply to the most recent monthly charge only.</li>
        <li>We do not provide prorated refunds for partial months after cancellation.</li>
        <li>Add-on credit packs, where offered, are non-refundable once used.</li>
      </ul>

      <h2>How to Request a Refund</h2>
      <p>
        Email{' '}
        <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a> with the email
        address on your account and the reason for the request. We aim to respond within
        two business days.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Refund Policy from time to time. Changes are posted here with a
        revised &ldquo;Last updated&rdquo; date.
      </p>
    </LegalPage>
  );
}
