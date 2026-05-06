import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ContactCTA from '@/components/ContactCTA';
import { SERVICES } from '@/lib/services';
import { ServiceIcon, ArrowIcon } from '@/components/Icons';
import { SITE } from '@/lib/areas';

export const metadata: Metadata = {
  title: 'All Flooring Types We Install - 8 Floor Materials Compared',
  description: `Compare every flooring type we install: carpet, luxury vinyl plank, hardwood, laminate, tile, cork, rubber and VCT. Pick the right floor for your room and budget. Call ${SITE.phone}.`,
  alternates: { canonical: `${SITE.url}/services` },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Flooring Services"
        subtitle="From plush carpet to luxury hardwood - every type of flooring, installed by certified pros."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      <section className="section">
        <div className="container">
          <div className="services-grid">
            {SERVICES.map((s) => (
              <article key={s.slug} className="service-card">
                <div className="service-card-img" style={{ backgroundImage: `url('${s.image}')` }} />
                <div className="service-card-body">
                  <div className="service-card-icon">
                    <ServiceIcon name={s.iconKey} size={24} />
                  </div>
                  <h3>{s.name}</h3>
                  <p>{s.description}</p>
                  <Link href={`/${s.slug}`} className="service-card-link">
                    Learn More <ArrowIcon size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA heading="Not Sure Which Flooring is Right for You?" />
    </>
  );
}
