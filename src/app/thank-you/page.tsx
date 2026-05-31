import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Thank You',
  description: 'Thanks for signing up. Your download and next steps are on the way.',
  path: '/thank-you',
  noindex: true,
});

const shareText = encodeURIComponent(
  'TradeFlow helps tradespeople get found, get booked, and get paid from one platform.',
);
const shareUrl = encodeURIComponent(site.url);

export default function ThankYouPage() {
  return (
    <section className="section">
      <div className="container-tf">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-2xl text-bg">
            ✓
          </div>
          <h1 className="mt-6 text-4xl">You&apos;re in. Check your inbox.</h1>
          <p className="mt-4 text-lg text-muted">
            Your free checklist is on its way to your email right now. While you
            wait, here is the fastest way to put it to work.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={`${site.appUrl}/signup`} className="btn-primary">
              Start Your Free Trial
            </a>
            <a href="/blog" className="btn-secondary">
              Read the Blog
            </a>
          </div>

          {/* Sharing enabled — point 15 of the landing-page checklist. */}
          <div className="mt-10 border-t border-border pt-8">
            <p className="text-sm text-muted">Know a tradesperson who needs this? Share it.</p>
            <div className="mt-4 flex justify-center gap-3">
              <a
                className="btn-secondary !py-2"
                href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Share on Twitter
              </a>
              <a
                className="btn-secondary !py-2"
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Share on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
