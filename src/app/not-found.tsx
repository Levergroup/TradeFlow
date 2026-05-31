import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-tf">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-display text-6xl font-bold text-accent">404</p>
          <h1 className="mt-4 text-3xl">This page took the day off.</h1>
          <p className="mt-4 text-muted">
            The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s
            get you back to work.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/" className="btn-primary">
              Back to Home
            </Link>
            <Link href="/pricing" className="btn-secondary">
              See Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
