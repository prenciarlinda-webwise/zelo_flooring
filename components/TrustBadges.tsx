import { SITE } from '@/lib/areas';
import { StarIcon, BadgeIcon } from './Icons';

type Props = {
  variant?: 'section' | 'inline';
  heading?: string;
  subheading?: string;
};

export default function TrustBadges({ variant = 'section', heading, subheading }: Props) {
  const stars = '★'.repeat(Math.round(SITE.rating.value));

  const badges = (
    <div className="trust-badges-grid">
      <a
        href={SITE.thumbtackUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="trust-badge trust-badge-thumbtack"
        aria-label={`Zelo Flooring on Thumbtack: ${SITE.rating.value} stars from ${SITE.rating.count} reviews`}
      >
        <span className="trust-badge-icon trust-badge-icon-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/thumbtack-logo.png" alt="Thumbtack" />
        </span>
        <span className="trust-badge-body">
          <span className="trust-badge-rating">
            <span className="trust-badge-stars" aria-hidden="true">{stars}</span>
            <strong>{SITE.rating.value.toFixed(1)}</strong>
            <span className="trust-badge-count">({SITE.rating.count} reviews)</span>
          </span>
          <span className="trust-badge-label">on Thumbtack</span>
        </span>
      </a>

      <div className="trust-badge trust-badge-toppro">
        <span className="trust-badge-icon"><BadgeIcon size={28} /></span>
        <span className="trust-badge-body">
          <strong>Thumbtack Top Pro</strong>
          <span className="trust-badge-label">2023 · 2024 · 2025</span>
        </span>
      </div>

      <a
        href={SITE.yelpUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="trust-badge trust-badge-yelp"
        aria-label="Zelo Flooring on Yelp"
      >
        <span className="trust-badge-icon trust-badge-icon-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/yelp-logo.png" alt="Yelp" />
        </span>
        <span className="trust-badge-body">
          <strong>Find us on Yelp</strong>
          <span className="trust-badge-label">Read customer reviews</span>
        </span>
      </a>

      <div className="trust-badge trust-badge-license">
        <span className="trust-badge-icon"><StarIcon size={26} /></span>
        <span className="trust-badge-body">
          <strong>Licensed, bonded, insured</strong>
          <span className="trust-badge-label">CSLB #{SITE.license}</span>
        </span>
      </div>
    </div>
  );

  if (variant === 'inline') {
    return <div className="trust-badges-inline">{badges}</div>;
  }

  return (
    <section className="section section-cream trust-badges-section">
      <div className="container">
        <div className="section-header center">
          <span className="eyebrow">Trusted by San Diego Homeowners</span>
          <h2>{heading || 'Verified Reviews and Recognized Awards'}</h2>
          {subheading && <p>{subheading}</p>}
        </div>
        {badges}
      </div>
    </section>
  );
}
