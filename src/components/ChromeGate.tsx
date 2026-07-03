'use client';

import { usePathname } from 'next/navigation';

/**
 * Renders the global Header/Footer around page content, EXCEPT on squeeze
 * routes (free-tools) which are near-squeeze pages with no main navigation
 * (SOP 5.4). Those pages supply their own minimal footer. Header/Footer are
 * passed as elements so they can remain server components.
 */
export function ChromeGate({
  header,
  footer,
  children,
}: {
  header: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const bare = pathname.startsWith('/free-tools');

  return (
    <>
      {!bare && header}
      <main id="main">{children}</main>
      {!bare && footer}
    </>
  );
}
