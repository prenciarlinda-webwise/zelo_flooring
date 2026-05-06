import Link from 'next/link';
import { SITE } from '@/lib/areas';

type Crumb = { label: string; href?: string };

export default function PageHero({
  title,
  subtitle,
  crumbs,
  includeBreadcrumbSchema = true,
}: {
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
  includeBreadcrumbSchema?: boolean;
}) {
  const breadcrumbSchema =
    includeBreadcrumbSchema && crumbs && crumbs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: crumbs.map((c, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: c.label,
            ...(c.href ? { item: `${SITE.url}${c.href}` } : {}),
          })),
        }
      : null;

  return (
    <section className="page-hero">
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      <div className="container">
        {crumbs && crumbs.length > 0 && (
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            {crumbs.map((c, i) => (
              <span key={i}>
                {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
                {i < crumbs.length - 1 && <span>/</span>}
              </span>
            ))}
          </nav>
        )}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
