'use client';

import { useState, useEffect, useCallback } from 'react';
import type { ServiceReview } from '@/lib/services';
import { SITE } from '@/lib/areas';
import { ArrowIcon } from './Icons';

type Props = {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  reviews: ServiceReview[];
};

export default function ServiceReviews({ eyebrow, heading, subheading, reviews }: Props) {
  const [index, setIndex] = useState(0);
  const total = reviews.length;

  const goPrev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);
  const goNext = useCallback(() => setIndex((i) => (i + 1) % total), [total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goPrev, goNext]);

  if (total === 0) return null;
  const r = reviews[index];
  const meta = r.serviceType || r.location;

  return (
    <section className="section">
      <div className="container">
        <div className="section-header center">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2>{heading}</h2>
          {subheading && <p>{subheading}</p>}
        </div>

        <div className="reviews-slider" role="region" aria-roledescription="carousel" aria-label="Customer reviews">
          <button
            type="button"
            className="reviews-slider-btn reviews-slider-prev"
            onClick={goPrev}
            aria-label="Previous review"
          >
            <span style={{ transform: 'rotate(180deg)', display: 'inline-flex' }}>
              <ArrowIcon size={18} />
            </span>
          </button>

          <div className="reviews-slider-track" aria-live="polite">
            <article className="testimonial reviews-slider-card" key={r.name + index}>
              <div className="testimonial-stars-row">
                <div className="stars">★★★★★</div>
                {r.source && (
                  <span className="testimonial-source">Verified on {r.source}</span>
                )}
              </div>

              <p className="testimonial-text">&ldquo;{r.quote}&rdquo;</p>

              <div className="testimonial-author">
                <div className="testimonial-avatar">{r.name.charAt(0)}</div>
                <div className="testimonial-name">
                  <strong>{r.name}</strong>
                  {meta && <span>{meta}</span>}
                  {r.date && <span className="testimonial-date">{r.date}</span>}
                </div>
              </div>
            </article>
          </div>

          <button
            type="button"
            className="reviews-slider-btn reviews-slider-next"
            onClick={goNext}
            aria-label="Next review"
          >
            <ArrowIcon size={18} />
          </button>
        </div>

        <div className="reviews-slider-dots" role="tablist" aria-label="Select a review">
          {reviews.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show review ${i + 1} of ${total}`}
              className={`reviews-slider-dot${i === index ? ' is-active' : ''}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

        <div className="testimonials-cta">
          <a
            href={SITE.thumbtackUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Read All Reviews on Thumbtack
          </a>
          <a href="/contact" className="btn btn-outline-orange">Share Your Experience</a>
        </div>
      </div>
    </section>
  );
}
