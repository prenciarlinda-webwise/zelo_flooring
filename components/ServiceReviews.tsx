import type { ServiceReview } from '@/lib/services';

type Props = {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  reviews: ServiceReview[];
};

export default function ServiceReviews({ eyebrow, heading, subheading, reviews }: Props) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header center">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2>{heading}</h2>
          {subheading && <p>{subheading}</p>}
        </div>

        <div className="testimonials-grid">
          {reviews.map((r) => (
            <div key={r.name + r.location} className="testimonial">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">&ldquo;{r.quote}&rdquo;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{r.name.charAt(0)}</div>
                <div className="testimonial-name">
                  <strong>{r.name}</strong>
                  <span>{r.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-cta">
          <a href="https://www.google.com/search?q=zelo+flooring+san+diego" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read All Google Reviews</a>
          <a href="/contact" className="btn btn-outline-orange">Share Your Experience</a>
        </div>
      </div>
    </section>
  );
}
