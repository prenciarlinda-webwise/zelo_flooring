const REVIEWS = [
  {
    name: 'Maria S.',
    location: 'La Jolla, CA',
    text: "Zelo replaced all the flooring in our home with luxury vinyl plank. They were on time every day, the install looks flawless, and they cleaned up better than they found us. Highly recommend.",
  },
  {
    name: 'David R.',
    location: 'Chula Vista, CA',
    text: "Got three quotes - Zelo wasn't the cheapest but the most thorough. They explained exactly what they'd do, brought samples, and the hardwood floors look incredible. Worth every dollar.",
  },
  {
    name: 'Jennifer K.',
    location: 'Carlsbad, CA',
    text: "Carpeted three bedrooms and the stairs. Crew was professional, install was quick, and the quality is way better than what we had before. Five stars all day.",
  },
];

export default function Testimonials() {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="section-header center">
          <span className="eyebrow">What Homeowners Say</span>
          <h2>5-Star Reviews From Real San Diego Customers</h2>
          <p>We&apos;ve earned hundreds of positive reviews on Google, Yelp and Facebook from happy homeowners across San Diego County.</p>
        </div>

        <div className="testimonials-grid">
          {REVIEWS.map((r) => (
            <div key={r.name} className="testimonial">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">&ldquo;{r.text}&rdquo;</p>
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
          <a href="https://www.google.com/maps" className="btn btn-primary">Read All Reviews</a>
          <a href="/contact" className="btn btn-outline-orange">Write a Review</a>
        </div>
      </div>
    </section>
  );
}
