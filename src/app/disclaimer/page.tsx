import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { LegalPage } from '@/components/LegalPage';
import { site } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Disclaimer',
  description:
    'Important disclaimers for TradeFlow, including results, testimonials, AI-generated content, third-party services, affiliate, and advertising disclosures.',
  path: '/disclaimer',
});

export default function DisclaimerPage() {
  return (
    <LegalPage title="Disclaimer" updated="May 31, 2026">
      <p>
        The information provided by {site.name} on {site.url} is for general informational
        purposes only. The following disclaimers govern your use of our site and service.
      </p>

      <h2>Results Disclaimer</h2>
      <p>
        Results shown are illustrative examples. Individual results will vary based on
        usage frequency, business type, plan selected, and other factors. {site.name} does
        not guarantee specific outcomes, time savings, or business results. Any figures
        mentioned are estimates based on typical usage patterns and should not be
        interpreted as guarantees of the same results for every user.
      </p>

      <h2>Testimonials Disclaimer</h2>
      <p>
        Testimonials appearing on this site reflect the experiences of individual users
        and are illustrative examples. They are not claims that all users will achieve the
        same or similar results. Some testimonials may be representative composites or
        clearly labeled placeholders pending real customer reviews.
      </p>

      <h2>AI-Generated Content Disclaimer</h2>
      <p>
        TradeFlow uses artificial intelligence to generate certain content outputs and
        voice interactions. AI-generated content may contain errors, inaccuracies, or
        require editing before use. Users are responsible for reviewing, editing, and
        fact-checking all AI-generated outputs before use. {site.name} is not responsible
        for any errors in AI-generated content or consequences arising from its use.
      </p>

      <h2>Third-Party Services Disclaimer</h2>
      <p>
        TradeFlow integrates with third-party services, including Stripe (payments),
        OpenAI and Anthropic (AI), and Vapi (voice). We do not control these services and
        are not responsible for their availability, accuracy, or performance. Your use of
        them is subject to their respective terms and policies.
      </p>

      <h2>Affiliate Disclaimer</h2>
      <p>
        Some links on this site may be affiliate links, meaning we may earn a commission
        if you make a purchase through them, at no additional cost to you. We only
        recommend products and services we believe provide value.
      </p>

      <h2>Advertising Disclaimer</h2>
      <p>
        We advertise on platforms including Google and Meta. Advertising claims are
        subject to the results and testimonials disclaimers above. Where required, paid
        placements and sponsored content are disclosed in accordance with applicable
        advertising regulations.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these disclaimers? Email{' '}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
