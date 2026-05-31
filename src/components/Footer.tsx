import Link from 'next/link';
import { site } from '@/lib/site';
import { footerNav, legalNav } from '@/lib/nav';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-alt/40">
      <div className="container-tf py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link href="/" className="font-display text-xl font-bold">
              Trade<span className="text-accent">Flow</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted">{site.tagline}</p>
            <p className="mt-4 text-sm text-muted">
              Built for tradespeople by{' '}
              <span className="text-text">{site.parentCompany}</span>.
            </p>
          </div>

          {Object.values(footerNav).map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-text">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Compliance links — REQUIRED visible text links on every page. */}
        <div className="mt-12 border-t border-border pt-8">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legalNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-muted transition hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-3 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {site.name}. A {site.parentCompany} company
              {' '}({site.parentGroup}). All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href={site.social.twitter} className="hover:text-accent" rel="noopener noreferrer" target="_blank">
                Twitter
              </a>
              <a href={site.social.linkedin} className="hover:text-accent" rel="noopener noreferrer" target="_blank">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
