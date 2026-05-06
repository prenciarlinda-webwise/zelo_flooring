import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ContactCTA from '@/components/ContactCTA';
import ServiceCardsGrid from '@/components/ServiceCardsGrid';
import { SITE } from '@/lib/areas';

export const metadata: Metadata = {
  title: 'Free Flooring Estimate in San Diego',
  description: `Get a free, no-obligation flooring estimate in San Diego. We bring samples to your home, take measurements, and give you a detailed written quote. Call ${SITE.phone}.`,
  alternates: { canonical: `${SITE.url}/free-estimate` },
};

export default function FreeEstimatePage() {
  return (
    <>
      <PageHero
        title="Get Your Free In-Home Estimate"
        subtitle="No pressure, no obligation. We bring samples and a real quote to your door."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Free Estimate' }]}
      />

      <section className="section">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">How It Works</span>
            <h2>Three Simple Steps to Your New Floors</h2>
            <p>We make getting a flooring quote painless. Here&apos;s exactly what to expect.</p>
          </div>

          <div className="services-grid">
            {[
              { n: '1', t: 'Schedule Your Visit', d: 'Call us or fill out the form. We respond within 1 business day to set up a time that works for you.' },
              { n: '2', t: 'In-Home Consultation', d: 'We come to your home with physical samples, take measurements, and answer all your questions - typically 30-45 minutes.' },
              { n: '3', t: 'Detailed Written Quote', d: 'You get a clear, line-itemized quote with no hidden fees. Take your time deciding - there&apos;s zero pressure.' },
            ].map((s) => (
              <div key={s.n} className="service-card">
                <div className="service-card-body">
                  <div className="service-card-icon" style={{ fontSize: '1.4rem', fontWeight: 800 }}>{s.n}</div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">What We Install</span>
            <h2>Pick Your Flooring Type</h2>
          </div>
          <ServiceCardsGrid />
        </div>
      </section>

      <ContactCTA heading="Request Your Free Estimate Now" />
    </>
  );
}
