'use client';

import { useState } from 'react';

type Props = {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  photos?: string[];
  initialCount?: number;
};

const DEFAULT_PHOTOS = Array.from({ length: 44 }, (_, i) =>
  `/img/projects/portfolio/zelo-project-${String(i + 1).padStart(2, '0')}.webp`,
);

export default function ProjectGallery({
  eyebrow = 'Recent Work',
  heading = 'Recent Zelo Flooring Projects',
  subheading = 'Real installs across San Diego County. Carpet, LVP, hardwood, and tile, all completed by the Zelo Flooring team.',
  photos = DEFAULT_PHOTOS,
  initialCount = 6,
}: Props) {
  const [showAll, setShowAll] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const visible = showAll ? photos : photos.slice(0, initialCount);
  const hasMore = photos.length > initialCount;

  return (
    <section className="section section-cream project-gallery-section">
      <div className="container">
        <div className="section-header center">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{heading}</h2>
          {subheading && <p>{subheading}</p>}
        </div>

        <ul className="project-gallery-grid">
          {visible.map((src, i) => (
            <li key={src} className="project-gallery-item">
              <button
                type="button"
                className="project-gallery-thumb"
                onClick={() => setLightbox(i)}
                aria-label={`View project photo ${i + 1}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={`Zelo Flooring project ${i + 1}`} width={800} height={800} loading="lazy" decoding="async" />
              </button>
            </li>
          ))}
        </ul>

        {hasMore && !showAll && (
          <div className="project-gallery-more">
            <button type="button" className="btn btn-outline-orange" onClick={() => setShowAll(true)}>
              View All {photos.length} Projects
            </button>
          </div>
        )}

        {lightbox !== null && (
          <div
            className="project-gallery-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Project photo viewer"
            onClick={(e) => { if (e.target === e.currentTarget) setLightbox(null); }}
          >
            <button
              type="button"
              className="project-gallery-lightbox-close"
              aria-label="Close photo"
              onClick={() => setLightbox(null)}
            >
              ×
            </button>
            <button
              type="button"
              className="project-gallery-lightbox-nav project-gallery-lightbox-prev"
              aria-label="Previous photo"
              onClick={() => setLightbox((i) => (i === null ? 0 : (i - 1 + visible.length) % visible.length))}
            >
              ‹
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={visible[lightbox]}
              alt={`Zelo Flooring project ${lightbox + 1}, full size`}
              className="project-gallery-lightbox-img"
            />
            <button
              type="button"
              className="project-gallery-lightbox-nav project-gallery-lightbox-next"
              aria-label="Next photo"
              onClick={() => setLightbox((i) => (i === null ? 0 : (i + 1) % visible.length))}
            >
              ›
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
