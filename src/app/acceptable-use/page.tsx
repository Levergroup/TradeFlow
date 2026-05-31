import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { LegalPage } from '@/components/LegalPage';
import { site } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Acceptable Use Policy',
  description:
    'The rules governing acceptable use of TradeFlow, prohibited activities, and how we enforce this policy.',
  path: '/acceptable-use',
});

export default function AcceptableUsePage() {
  return (
    <LegalPage title="Acceptable Use Policy" updated="May 31, 2026">
      <p>
        This Acceptable Use Policy describes activities that are prohibited when using
        {' '}{site.name}. It is incorporated into our{' '}
        <a href="/terms-of-service">Terms of Service</a>. By using TradeFlow, you agree to
        follow this policy.
      </p>

      <h2>Prohibited Activities</h2>
      <p>You agree not to use TradeFlow to:</p>
      <ul>
        <li>Violate any law, regulation, or third-party right.</li>
        <li>Send spam, unsolicited messages, or content that violates anti-spam laws.</li>
        <li>Transmit malware, viruses, or any harmful code.</li>
        <li>Attempt to gain unauthorized access to our systems, accounts, or networks.</li>
        <li>Reverse engineer, scrape, or copy the service except as permitted by law.</li>
        <li>Upload content that is fraudulent, defamatory, obscene, or infringing.</li>
        <li>Harass, threaten, or harm others, or impersonate any person or entity.</li>
        <li>Interfere with or disrupt the integrity or performance of the service.</li>
        <li>Use the service to compete with us or to build a competing product.</li>
      </ul>

      <h2>Messaging &amp; Communications</h2>
      <p>
        When using TradeFlow to contact your customers (for example, SMS or email), you
        are responsible for obtaining the consents required by law and for complying with
        regulations such as the TCPA and CAN-SPAM. You must honor opt-out requests
        promptly.
      </p>

      <h2>Enforcement</h2>
      <p>
        We may investigate suspected violations and take action including warning,
        suspending, or terminating accounts, and reporting unlawful activity to
        authorities. We may remove content that violates this policy.
      </p>

      <h2>Reporting Violations</h2>
      <p>
        To report a violation, email{' '}
        <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.
      </p>
    </LegalPage>
  );
}
