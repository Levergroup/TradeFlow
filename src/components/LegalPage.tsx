import { site } from '@/lib/site';

/** Shared shell for legal/compliance pages — consistent title + updated date. */
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <section className="section">
      <div className="container-tf">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl">{title}</h1>
          <p className="mt-3 text-sm text-muted">Last updated: {updated}</p>
          <p className="mt-1 text-sm text-muted">
            {site.name} is a product of {site.parentCompany} ({site.parentGroup}).
          </p>
          <div className="prose-legal mt-10">{children}</div>
        </div>
      </div>
    </section>
  );
}
