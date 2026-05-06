import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ServiceAreaGrid from '@/components/ServiceAreaGrid';
import ContactCTA from '@/components/ContactCTA';
import AlternatingSection from '@/components/AlternatingSection';
import { SITE, SERVICE_AREAS } from '@/lib/areas';

export const metadata: Metadata = {
  title: 'Flooring Service Areas in San Diego County',
  description: `${SITE.name} provides flooring installation throughout San Diego County including ${SERVICE_AREAS.slice(0, 6).map((a) => a.name).join(', ')} and more. Call ${SITE.phone}.`,
  alternates: { canonical: `${SITE.url}/service-areas` },
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        title="Flooring Service Areas"
        subtitle={`Zelo Flooring proudly serves homeowners and businesses across all of ${SITE.city} County.`}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Service Areas' }]}
      />

      <section className="section">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Where We Work</span>
            <h2>Cities &amp; Communities We Serve</h2>
            <p>We install flooring throughout San Diego County, from the coast to inland communities.</p>
          </div>
          <ServiceAreaGrid />
        </div>
      </section>

      <AlternatingSection
        eyebrow="Local Knowledge"
        title="Why Local Matters for Flooring Installation"
        paragraphs={[
          "San Diego homes are different. We deal with stucco, slab foundations, dry coastal air, and homes built across many different decades - from 1950s ranches in La Mesa to brand-new developments in Carlsbad. Each one has its own quirks.",
          "A local San Diego flooring installer knows what to expect. We've seen the moisture issues, the slab cracks, the subfloor surprises that an out-of-area contractor would miss. That's why our installs hold up.",
        ]}
        bullets={[
          'Familiar with San Diego building styles and codes',
          'Experienced with concrete slab installs',
          'Knowledge of San Diego climate considerations',
          'Local references and project portfolio',
        ]}
        image="/img/projects/lvp-whole-home/after-hallway-kitchen-lvp.webp"
        background="cream"
      />

      <ContactCTA heading="Need Flooring in Your Area? Get a Free Quote." />
    </>
  );
}
