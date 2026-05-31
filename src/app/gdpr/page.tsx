import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { LegalPage } from '@/components/LegalPage';
import { site } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'GDPR Rights',
  description:
    'Your data protection rights under the EU and UK GDPR, the lawful bases we rely on, and how to exercise your rights with TradeFlow.',
  path: '/gdpr',
});

export default function GdprPage() {
  return (
    <LegalPage title="GDPR &amp; Your Data Rights" updated="May 31, 2026">
      <p>
        If you are located in the European Economic Area (EEA) or the United Kingdom, the
        General Data Protection Regulation (GDPR) gives you rights over your personal data.
        This page explains those rights and how to exercise them.
      </p>

      <h2>Data Controller</h2>
      <p>
        {site.parentCompany} ({site.parentGroup}), the operator of {site.name}, is the
        data controller responsible for your personal data. You can reach us at{' '}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>Lawful Bases for Processing</h2>
      <ul>
        <li><strong>Contract:</strong> to provide the service you sign up for.</li>
        <li><strong>Consent:</strong> for analytics, advertising cookies, and marketing email.</li>
        <li><strong>Legitimate interests:</strong> to secure, maintain, and improve the service.</li>
        <li><strong>Legal obligation:</strong> to comply with applicable laws.</li>
      </ul>

      <h2>Your Rights</h2>
      <ul>
        <li><strong>Access:</strong> request a copy of the personal data we hold about you.</li>
        <li><strong>Rectification:</strong> ask us to correct inaccurate or incomplete data.</li>
        <li><strong>Erasure:</strong> request deletion of your personal data (&ldquo;right to be forgotten&rdquo;).</li>
        <li><strong>Restriction:</strong> ask us to limit how we process your data.</li>
        <li><strong>Portability:</strong> receive your data in a structured, machine-readable format.</li>
        <li><strong>Objection:</strong> object to processing based on legitimate interests or direct marketing.</li>
        <li><strong>Withdraw consent:</strong> withdraw consent at any time where processing relies on it.</li>
      </ul>

      <h2>How to Exercise Your Rights</h2>
      <p>
        Email{' '}
        <a href={`mailto:${site.email}`}>{site.email}</a> with your request. We will
        respond within one month, as required by the GDPR. We may ask you to verify your
        identity before fulfilling a request.
      </p>

      <h2>International Transfers</h2>
      <p>
        Your data may be processed outside the EEA/UK. Where it is, we rely on appropriate
        safeguards such as Standard Contractual Clauses to protect it.
      </p>

      <h2>Right to Lodge a Complaint</h2>
      <p>
        If you believe we have not handled your data properly, you have the right to lodge
        a complaint with your local supervisory authority. We would appreciate the chance
        to address your concerns first — please contact us.
      </p>
    </LegalPage>
  );
}
