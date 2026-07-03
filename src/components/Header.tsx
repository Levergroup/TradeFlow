'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { site } from '@/lib/site';
import { primaryNav } from '@/lib/nav';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile drawer on route change.
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <motion.header
      className="sticky top-0 z-40"
      initial={false}
      animate={{
        backgroundColor: scrolled ? 'rgba(15,23,42,0.90)' : 'rgba(15,23,42,0)',
        backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
        borderBottomColor: scrolled ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0)',
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      style={{ borderBottomWidth: 1, borderBottomStyle: 'solid' }}
    >
      <nav className="container-tf flex h-16 items-center justify-between" aria-label="Primary">
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
          <motion.a
            href={`${site.appUrl}/signup`}
            className="btn-primary rounded-full !px-5 !py-2"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Free
          </motion.a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-border p-2 md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-border bg-bg md:hidden"
          >
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
              <li>
                <Link
                  href="/free-tools/free-trade-website"
                  className="block rounded-lg px-2 py-2 text-sm font-semibold text-accent hover:bg-bg-alt"
                  onClick={() => setOpen(false)}
                >
                  Free Trade Website
                </Link>
              </li>
              <li className="mt-2">
                <a href={`${site.appUrl}/signup`} className="btn-primary w-full rounded-full">
                  Start Free
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
