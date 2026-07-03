'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Global scroll-reveal observer. Watches every `.fade-up` / `.fade-scale`
 * element and adds `.visible` when it enters the viewport. Staggering is handled
 * in CSS via `.stagger > *` transition delays. Renders nothing.
 *
 * Kept as a small client island so pages themselves stay server components.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('.fade-up, .fade-scale'),
    );
    if (targets.length === 0) return;

    // If IntersectionObserver is unavailable, just show everything.
    if (typeof IntersectionObserver === 'undefined') {
      targets.forEach((el) => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // Re-run on route change so newly rendered pages get observed.
  }, [pathname]);

  return null;
}
