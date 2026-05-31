import Link from 'next/link';

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
};

/**
 * Shared CTA. Uses next/link for internal routes and a plain anchor for
 * external (app / cross-domain) links.
 */
export function CTAButton({
  href,
  children,
  variant = 'primary',
  className = '',
}: Props) {
  const cls = `${variant === 'primary' ? 'btn-primary' : 'btn-secondary'} ${className}`;
  const isExternal = href.startsWith('http');

  if (isExternal) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
