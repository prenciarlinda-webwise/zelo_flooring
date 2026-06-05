import { SITE } from '@/lib/areas';

export default function TrustRibbon() {
  return (
    <div className="trust-ribbon" aria-label="Zelo Flooring credentials and accreditations">
      <div className="container trust-ribbon-inner">
        <a
          href={SITE.bbb.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="trust-ribbon-item trust-ribbon-bbb"
          aria-label={`BBB Accredited Business with ${SITE.bbb.rating} rating`}
        >
          <span className="trust-ribbon-bbb-mark">
            <span className="trust-ribbon-bbb-letters">BBB</span>
            <span className="trust-ribbon-bbb-rating">{SITE.bbb.rating}</span>
          </span>
          <span className="trust-ribbon-text">
            <strong>BBB Accredited</strong>
            <span>{SITE.bbb.rating} Rating</span>
          </span>
        </a>

        <span className="trust-ribbon-divider" aria-hidden="true" />

        <a
          href={SITE.thumbtackUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="trust-ribbon-item"
          aria-label="Verified Zelo Flooring profile on Thumbtack"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/thumbtack-logo.png" alt="" className="trust-ribbon-logo-img" />
          <span className="trust-ribbon-text">
            <strong>Thumbtack Verified</strong>
            <span>Read customer reviews</span>
          </span>
        </a>

        <span className="trust-ribbon-divider" aria-hidden="true" />

        <a
          href={SITE.yelpUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="trust-ribbon-item"
          aria-label="Verified Zelo Flooring profile on Yelp"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/yelp-logo.png" alt="" className="trust-ribbon-logo-img" />
          <span className="trust-ribbon-text">
            <strong>Yelp Verified</strong>
            <span>Read customer reviews</span>
          </span>
        </a>

        <span className="trust-ribbon-divider" aria-hidden="true" />

        <a
          href={SITE.thumbtackUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="trust-ribbon-item"
          aria-label={`${SITE.rating.value} stars from ${SITE.rating.count} Thumbtack reviews`}
        >
          <span className="trust-ribbon-stars" aria-hidden="true">★★★★★</span>
          <span className="trust-ribbon-text">
            <strong>{SITE.rating.value.toFixed(1)} ({SITE.rating.count} reviews)</strong>
            <span>on Thumbtack</span>
          </span>
        </a>

        <span className="trust-ribbon-divider" aria-hidden="true" />

        <a
          href={SITE.thumbtackUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="trust-ribbon-item"
          aria-label="Thumbtack Top Pro - quality floors, honest service"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/top-pro-thumbtack.png" alt="" className="trust-ribbon-logo-img trust-ribbon-toppro-img" />
          <span className="trust-ribbon-text">
            <strong>Thumbtack Top Pro</strong>
            <span>Quality floors, honest service</span>
          </span>
        </a>
      </div>
    </div>
  );
}
