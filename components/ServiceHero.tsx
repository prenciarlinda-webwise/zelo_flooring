import Link from 'next/link';
import { PhoneIcon, ArrowIcon } from './Icons';
import { SITE } from '@/lib/areas';

type Crumb = { label: string; href?: string };

type Props = {
  serviceShortName: string;   // e.g. "Carpet"
  serviceLongName: string;    // e.g. "Carpet Installation"
  chip: string;               // e.g. "San Diego, CA"
  tagline: string;            // service-specific one-liner
  bullets: string[];          // 4 short trust bullets
  image: string;              // hero image url
  crumbs: Crumb[];            // breadcrumb path
};

export default function ServiceHero({
  serviceShortName,
  serviceLongName,
  chip,
  tagline,
  bullets,
  image,
  crumbs,
}: Props) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${SITE.url}${c.href}` } : {}),
    })),
  };

  return (
    <section className="service-hero">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="service-hero-image" style={{ backgroundImage: `url('${image}')` }} aria-hidden="true" />
      <div className="service-hero-overlay" aria-hidden="true" />
      <div className="container service-hero-inner">
        <nav className="service-hero-crumbs" aria-label="Breadcrumb">
          {crumbs.map((c, i) => (
            <span key={i}>
              {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
              {i < crumbs.length - 1 && <span className="crumb-sep" aria-hidden="true"> / </span>}
            </span>
          ))}
        </nav>

        <div className="service-hero-eyebrow">{serviceShortName.toUpperCase()}</div>
        <h1 className="service-hero-title">
          <span className="service-hero-title-main">{serviceLongName}</span>
          <span className="service-hero-chip">{chip}</span>
        </h1>
        <div className="service-hero-rule" aria-hidden="true" />
        <p className="service-hero-tagline">{tagline}</p>

        <div className="service-hero-ctas">
          <a href={`tel:${SITE.phoneRaw}`} className="btn btn-primary btn-large">
            <PhoneIcon size={18} /> Call {SITE.phone}
          </a>
          <Link href="/free-estimate" className="btn btn-outline-white btn-large">
            Book My Estimate <ArrowIcon size={18} />
          </Link>
        </div>

        <ul className="service-hero-bullets">
          {bullets.map((b) => (
            <li key={b}>
              <span className="hero-tick-mod" aria-hidden="true">+</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
