import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { JsonLd } from '@/components/JsonLd';
import { ContactForm } from '@/components/ContactForm';
import { site } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Contact Us',
  description:
    'Get in touch with the TradeFlow team. Questions about field service management software for small business, billing, or getting started? We reply within one business day.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ])}
      />

      <section className="section">
        <div className="container-tf">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <span className="eyebrow">Contact</span>
              <h1 className="mt-6 text-4xl sm:text-5xl">We&apos;re here to help.</h1>
              <p className="mt-4 text-lg text-muted">
                Whether you have a question about features, pricing, or just want a
                hand getting set up, real humans read every message. We typically
                reply within one business day.
              </p>

              <dl className="mt-8 space-y-5 text-sm">
                <div>
                  <dt className="font-semibold text-text">General &amp; sales</dt>
                  <dd className="text-muted">
                    <a href={`mailto:${site.email}`} className="hover:text-accent">
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-text">Customer support</dt>
                  <dd className="text-muted">
                    <a href={`mailto:${site.supportEmail}`} className="hover:text-accent">
                      {site.supportEmail}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-text">Already a customer?</dt>
                  <dd className="text-muted">
                    Get instant help inside the app at{' '}
                    <a href={site.appUrl} className="hover:text-accent">
                      {site.appUrl.replace('https://', '')}
                    </a>
                    .
                  </dd>
                </div>
              </dl>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
