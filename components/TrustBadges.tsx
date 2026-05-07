import { SITE } from '@/lib/areas';

type Props = {
  variant?: 'section' | 'inline';
  heading?: string;
  subheading?: string;
};

export default function TrustBadges({ variant = 'section', heading, subheading }: Props) {
  const stars = '★'.repeat(Math.round(SITE.rating.value));

  const cards = (
    <div className="trust-badges-grid" role="list">
      <a
        href={SITE.bbb.profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="trust-badge trust-badge-bbb"
        role="listitem"
        aria-label={`BBB Accredited Business with ${SITE.bbb.rating} rating`}
      >
        <span className="trust-badge-logo trust-badge-logo-bbb">
          <span className="trust-badge-bbb-letters">BBB</span>
          <span className="trust-badge-bbb-rating">{SITE.bbb.rating}</span>
        </span>
        <span className="trust-badge-body">
          <strong>BBB Accredited Business</strong>
          <span className="trust-badge-label">{SITE.bbb.rating} Rating, accredited since 2022</span>
        </span>
      </a>

      <a
        href={SITE.thumbtackUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="trust-badge trust-badge-thumbtack"
        role="listitem"
        aria-label={`Zelo Flooring on Thumbtack: ${SITE.rating.value} stars from ${SITE.rating.count} reviews`}
      >
        <span className="trust-badge-logo">
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

      <a
        href={SITE.thumbtackUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="trust-badge trust-badge-toppro"
        role="listitem"
        aria-label="Thumbtack Top Pro 2023, 2024, and 2025"
      >
        <span className="trust-badge-logo trust-badge-logo-toppro">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/thumbtack-logo.png" alt="Thumbtack" />
          <span className="trust-badge-toppro-tag">TOP PRO</span>
        </span>
        <span className="trust-badge-body">
          <strong>Thumbtack Top Pro</strong>
          <span className="trust-badge-label">2023 · 2024 · 2025</span>
        </span>
      </a>

      <a
        href={SITE.yelpUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="trust-badge trust-badge-yelp"
        role="listitem"
        aria-label="Zelo Flooring on Yelp"
      >
        <span className="trust-badge-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/yelp-logo.png" alt="Yelp" />
        </span>
        <span className="trust-badge-body">
          <strong>Find us on Yelp</strong>
          <span className="trust-badge-label">Read customer reviews</span>
        </span>
      </a>

      <span className="trust-badge trust-badge-license" role="listitem">
        <span className="trust-badge-logo trust-badge-logo-license">
          <span className="trust-badge-license-class">{SITE.licenseDetails.classification}</span>
          <span className="trust-badge-license-state">CA</span>
        </span>
        <span className="trust-badge-body">
          <strong>Licensed, bonded, insured</strong>
          <span className="trust-badge-label">CSLB #{SITE.licenseDetails.number}</span>
        </span>
      </span>
    </div>
  );

  if (variant === 'inline') {
    return <div className="trust-badges-inline">{cards}</div>;
  }

  return (
    <section className="section section-cream trust-badges-section">
      <div className="container">
        <div className="section-header center">
          <span className="eyebrow">Trusted by San Diego Homeowners</span>
          <h2>{heading || 'Verified Reviews and Recognized Awards'}</h2>
          {subheading && <p>{subheading}</p>}
        </div>
        {cards}
      </div>
    </section>
  );
}
