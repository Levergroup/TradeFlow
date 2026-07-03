'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { site } from '@/lib/site';
import { primaryNav } from '@/lib/nav';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className={`nav-root sticky top-0 z-40 ${scrolled ? 'scrolled' : ''}`}>
      <nav
        className="container-tf flex h-16 items-center justify-between"
        aria-label="Primary"
      >
        <Link href="/" className="font-display text-xl font-bold tracking-tight">
          Trade<span className="text-accent">Flow</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {primaryNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`nav-link text-sm font-medium text-muted transition hover:text-text ${
                  isActive(item.href) ? 'active' : ''
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`${site.appUrl}/login`}
            className="text-sm font-medium text-muted transition hover:text-text"
          >
            Log in
          </a>
          <a
            href={`${site.appUrl}/signup`}
            className="btn-primary rounded-full !px-5 !py-2"
          >
            Start Free
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-border p-2 md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-bg md:hidden">
          <ul className="container-tf flex flex-col gap-1 py-4">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-2 py-2 text-sm font-medium text-muted hover:bg-bg-alt hover:text-text"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <a href={`${site.appUrl}/signup`} className="btn-primary w-full rounded-full">
                Start Free
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
