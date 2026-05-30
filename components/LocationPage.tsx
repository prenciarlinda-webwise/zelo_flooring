import Link from 'next/link';
import LeadFormHero from './LeadFormHero';
import ServiceBreakdown from './ServiceBreakdown';
import ServiceReviews from './ServiceReviews';
import IndustryStats from './IndustryStats';
import CouponsBlock from './CouponsBlock';
import FaqList from './FaqList';
import FinalCTA from './FinalCTA';
import { ArrowIcon, PinIcon, CheckIcon } from './Icons';
import { SITE } from '@/lib/areas';
import type { Location } from '@/lib/locations';
import { LOCATIONS, getLocation } from '@/lib/locations';
import { SERVICES } from '@/lib/services';

type Props = { location: Location };

export default function LocationPage({ location }: Props) {
  const isMain = location.type === 'main';

  // Service breakdown items pull from the SERVICES array, links to the existing /[service-slug] pages
  const serviceBreakdownItems = SERVICES.map((s) => ({
    id: s.slug,
    name: `${s.name} in ${location.city}`,
    blurb: s.description,
    href: `/${s.slug}`,
  }));

  // Stats: a mix of universal industry stats and location-specific facts
  const stats = [
    {
      label: `Distinct neighborhoods we install in across ${location.city}`,
      value: `${location.neighborhoods.length}+`,
      sourceLabel: 'Wikipedia city profile',
      sourceUrl: location.wikipediaUrl,
    },
    {
      label: 'CA contractor licenses verified by the CSLB',
      value: '290,000+',
      sourceLabel: 'CSLB',
      sourceUrl: 'https://www.cslb.ca.gov',
    },
  ];

  return (
    <>
      <LeadFormHero
        h1={`Flooring in ${location.city}, ${location.state}`}
        valueProp={location.heroValueProp}
        trustBullets={[
          `${SITE.licenseDetails.classification} Licensed (CSLB #${SITE.license})`,
          isMain
            ? `Family-operated, ${SITE.ownerExperienceYears}+ years of journeyman experience`
            : `Serving ${location.city} from our San Diego office`,
          `${SITE.rating.value.toFixed(1)}★ on Thumbtack (${SITE.rating.count} reviews)`,
        ]}
        image={location.heroImage}
        imageAlt={location.heroImageAlt}
        defaultProjectType="Not sure yet"
      />

      {/* AEO QUICK-ANSWER */}
      <section className="section section-cream">
        <div className="container">
          <div className="aeo-block">
            <p className="aeo-answer-text">{location.aeoCostAnswer}</p>

            <ul className="aeo-keyfacts">
              <li><strong>Service area:</strong> {location.city} ({location.zips.join(', ')})</li>
              <li><strong>Licensed:</strong> CSLB #{SITE.license}</li>
              <li><strong>Free in-home estimate:</strong> Yes, samples brought to you</li>
              {!isMain && location.driveTimeFromHQ && (
                <li><strong>Drive time from HQ:</strong> {location.driveTimeFromHQ}</li>
              )}
              <li><strong>County:</strong> {location.county}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CITY INTRO + LOCAL NUANCES */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">{location.city} flooring</span>
            <h2>{location.city} flooring services</h2>
          </div>
          <div className="city-intro">
            {location.cityIntro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="local-nuances">
            <h3>Local conditions in {location.city}</h3>
            <ul>
              {location.localNuances.map((n) => (
                <li key={n}>
                  <CheckIcon size={16} />
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US (LOCAL) */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Why Zelo</span>
            <h2>Why customers choose Zelo Flooring in {location.city}</h2>
            <p>Same install standards across San Diego County, adjusted for {location.city} conditions.</p>
          </div>

          <div className="why-local-grid">
            {location.whyChooseUsLocal.map((w) => (
              <div key={w.title} className="why-local-item">
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES WE OFFER (linking to existing service-location combo pages) */}
      <ServiceBreakdown
        eyebrow={`Flooring services in ${location.city}`}
        heading={`Flooring services in ${location.city}, ${location.state}`}
        subheading="Eight flooring services, each with its own page covering brands and project details."
        items={serviceBreakdownItems}
      />

      {/* AEO SECONDARY QUESTION */}
      <section className="section section-cream">
        <div className="container">
          <div className="aeo-block">
            <p className="eyebrow">Top question</p>
            <h2>{location.aeoSecondaryQuestion.q}</h2>
            <p className="aeo-answer-text">{location.aeoSecondaryQuestion.a}</p>
          </div>
        </div>
      </section>

      {/* NEIGHBORHOODS SERVED */}
      <section className="section">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Service Area</span>
            <h2>{location.city} neighborhoods we serve</h2>
            <p>Free in-home estimates across every {location.city} neighborhood.</p>
          </div>

          <div className="neighborhood-grid">
            {location.neighborhoods.map((n) => (
              <div key={n} className="neighborhood-card">
                <PinIcon size={14} />
                <span>{n}</span>
              </div>
            ))}
          </div>

          <div className="landmarks">
            <p>
              <strong>Local landmarks:</strong>{' '}
              {location.landmarks.join(', ')}.
            </p>
            <p>
              <strong>ZIP codes served:</strong> {location.zips.join(', ')}.
            </p>
            <p>
              <a href={location.wikipediaUrl} target="_blank" rel="noopener noreferrer">
                Wikipedia {location.city}
              </a>
            </p>
          </div>
        </div>
      </section>

      <IndustryStats
        eyebrow="By the Numbers"
        heading={`Industry stats for ${location.city} flooring`}
        stats={stats}
      />

      <ServiceReviews
        eyebrow="What customers say"
        heading={`5-star reviews from ${location.city} customers`}
        reviews={location.reviews}
      />

      <CouponsBlock
        eyebrow="Current Offers"
        heading="Zelo Flooring Specials"
        subheading="Tap any offer to claim it. We follow up within 1 business day."
      />

      <section className="section">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">FAQ</span>
            <h2>{location.city} flooring FAQs</h2>
            <p>The most common questions we hear from {location.city} residents.</p>
          </div>
          <FaqList items={location.faqs} includeSchema={false} />
        </div>
      </section>

      {/* RELATED LOCATIONS */}
      {location.relatedLocations.length > 0 && (
        <section className="section section-cream">
          <div className="container">
            <div className="section-header center">
              <span className="eyebrow">Nearby Areas</span>
              <h2>Nearby service areas in San Diego County</h2>
            </div>

            <div className="related-locations-grid">
              {location.relatedLocations.map((slug) => {
                const related = getLocation(slug);
                if (!related) return null;
                return (
                  <Link key={slug} href={`/${slug}`} className="related-location-card">
                    <span className="related-location-city">{related.city}</span>
                    <span className="related-location-meta">
                      {related.neighborhoods.length} neighborhoods · {related.zips.length} ZIP{related.zips.length > 1 ? 's' : ''}
                    </span>
                    <ArrowIcon size={14} />
                  </Link>
                );
              })}
              {/* Always include the locations hub */}
              <Link href="/service-areas" className="related-location-card">
                <span className="related-location-city">All Service Areas</span>
                <span className="related-location-meta">{LOCATIONS.length}+ communities</span>
                <ArrowIcon size={14} />
              </Link>
            </div>
          </div>
        </section>
      )}

      <FinalCTA
        heading={`Get a free flooring estimate in ${location.city}, ${location.state}`}
        subheading={`Tell us about your ${location.city} project. We bring samples, take measurements, and put together a clear written quote at no cost.`}
      />
    </>
  );
}
