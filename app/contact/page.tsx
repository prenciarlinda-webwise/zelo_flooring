import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ContactCTA from '@/components/ContactCTA';
import ServiceAreaGrid from '@/components/ServiceAreaGrid';
import { SITE } from '@/lib/areas';

export const metadata: Metadata = {
  title: 'Contact Us - San Diego Flooring Installation',
  description: `Contact ${SITE.name} for free flooring estimates in San Diego. Call ${SITE.phone} or fill out our online form. Mon-Sun 8am-5pm.`,
  alternates: { canonical: `${SITE.url}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Zelo Flooring"
        subtitle="Get in touch for a free in-home estimate. We respond to every inquiry within 1 business day."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      <ContactCTA heading="Get In Touch - We're Here to Help" />

      <section className="section section-cream">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Where We Work</span>
            <h2>Service Areas Across San Diego County</h2>
            <p>We serve homeowners and commercial clients across the entire San Diego region.</p>
          </div>
          <ServiceAreaGrid />
        </div>
      </section>
    </>
  );
}
