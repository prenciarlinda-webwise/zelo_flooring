import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import LeadFormHero from '@/components/LeadFormHero';
import ServiceBreakdown from '@/components/ServiceBreakdown';
import IndustryStats from '@/components/IndustryStats';
import ServiceReviews from '@/components/ServiceReviews';
import CouponsBlock from '@/components/CouponsBlock';
import FaqList from '@/components/FaqList';
import FinalCTA from '@/components/FinalCTA';
import LocationPage from '@/components/LocationPage';
import { CheckIcon, PinIcon } from '@/components/Icons';
import { SERVICES, getService } from '@/lib/services';
import { LOCATIONS, getLocation, MAIN_LOCATION } from '@/lib/locations';
import { getServiceLocalData } from '@/lib/service-local-data';
import { SITE } from '@/lib/areas';

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return [
    ...SERVICES.map((s) => ({ slug: s.slug })),
    ...LOCATIONS.map((l) => ({ slug: l.slug })),
  ];
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;

  const service = getService(slug);
  if (service) {
    return {
      title: service.metaTitle,
      description: service.metaDescription,
      alternates: { canonical: `${SITE.url}/${service.slug}` },
      openGraph: {
        title: service.metaTitle,
        description: service.metaDescription,
        url: `${SITE.url}/${service.slug}`,
        type: 'website',
      },
    };
  }

  const location = getLocation(slug);
  if (location) {
    return {
      title: location.metaTitle,
      description: location.metaDescription,
      alternates: { canonical: `${SITE.url}/${location.slug}` },
      openGraph: {
        title: location.metaTitle,
        description: location.metaDescription,
        url: `${SITE.url}/${location.slug}`,
        type: 'website',
      },
    };
  }

  return {};
}

export default async function DynamicPage({ params }: Params) {
  const { slug } = await params;

  // Location combo page (e.g. /flooring-san-diego, /flooring-del-mar)
  const location = getLocation(slug);
  if (location) {
    return renderLocationPage(location);
  }

  // Service combo page (e.g. /hardwood-flooring-san-diego)
  const service = getService(slug);
  if (service) {
    return renderServicePage(service);
  }

  notFound();
}

function renderLocationPage(location: ReturnType<typeof getLocation>) {
  if (!location) return null;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${SITE.url}/service-areas` },
      { '@type': 'ListItem', position: 3, name: `${location.city}, ${location.state}`, item: `${SITE.url}/${location.slug}` },
    ],
  };

  // Service schema with provider @id ref to the LocalBusiness on the home page
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE.url}/${location.slug}/#service`,
    name: `Flooring installation in ${location.city}, ${location.state}`,
    description: location.heroValueProp,
    url: `${SITE.url}/${location.slug}`,
    image: `${SITE.url}${location.heroImage}`,
    provider: { '@id': `${SITE.url}/#business` },
    areaServed: {
      '@type': 'City',
      name: location.city,
      containedInPlace: { '@type': 'AdministrativeArea', name: location.county },
    },
    serviceType: 'Flooring Installation',
    category: 'Flooring Installation',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE.rating.value,
      reviewCount: SITE.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
  };

  // FAQPage schema mirrors visible FAQ
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: location.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  // Speakable for AEO answer blocks
  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE.url}/${location.slug}/#webpage`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.aeo-answer-text', '.aeo-keyfacts', '.faq-list .faq-q', '.faq-list .faq-body'],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <LocationPage location={location} />
    </>
  );
}

function renderServicePage(service: ReturnType<typeof getService>) {
  if (!service) return null;

  const local = getServiceLocalData(service.slug);

  // H1 should carry the "{service} installation {city}" keyword. Most service
  // names end in "Flooring"; "Carpet Installation" already contains the word.
  const serviceH1 = /install/i.test(service.name)
    ? `${service.name} in ${SITE.city}, ${SITE.region}`
    : `${service.name} Installation in ${SITE.city}, ${SITE.region}`;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
      { '@type': 'ListItem', position: 3, name: `${service.name} in ${SITE.city}, ${SITE.region}`, item: `${SITE.url}/${service.slug}` },
    ],
  };

  // Service schema with provider @id ref to the LocalBusiness on the home page
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE.url}/${service.slug}/#service`,
    name: `${service.name} in ${SITE.city}, ${SITE.region}`,
    description: service.heroValueProp,
    url: `${SITE.url}/${service.slug}`,
    image: `${SITE.url}${service.image}`,
    provider: { '@id': `${SITE.url}/#business` },
    areaServed: {
      '@type': 'City',
      name: SITE.city,
      containedInPlace: { '@type': 'AdministrativeArea', name: MAIN_LOCATION.county },
    },
    serviceType: service.shortName + ' Flooring Installation',
    category: `${service.shortName} Flooring`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE.rating.value,
      reviewCount: SITE.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE.url}/${service.slug}/#webpage`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.aeo-answer-text', '.aeo-keyfacts', '.faq-list .faq-q', '.faq-list .faq-body'],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <LeadFormHero
        h1={serviceH1}
        valueProp={service.heroValueProp}
        trustBullets={service.trustBullets}
        image={service.image}
        imageAlt={`${service.name} installed across San Diego homes by Zelo Flooring`}
        defaultProjectType={service.shortName}
      />

      {local && (
        <section className="section section-cream">
          <div className="container">
            <div className="aeo-block">
              <p className="aeo-answer-text">{local.aeoCostAnswer}</p>

              <ul className="aeo-keyfacts">
                <li><strong>Service area:</strong> {SITE.city}, {SITE.region} ({MAIN_LOCATION.county})</li>
                <li><strong>Licensed:</strong> CSLB {SITE.licenseDetails.classification} #{SITE.license}</li>
                <li><strong>Free in-home estimate:</strong> Yes, samples brought to you</li>
                <li><strong>Owner experience:</strong> {SITE.ownerExperienceYears}+ years of journeyman flooring</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* CITY CONTEXT + IMAGE */}
      {local && (
        <section className="section">
          <div className="container">
            <div className="alt-row">
              <div className="alt-text">
                <span className="eyebrow">{service.shortName} in San Diego</span>
                <h2>{local.headers.cityContextH2}</h2>
                {local.cityContext.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <p>
                  For an overview of our full San Diego flooring service, see our <Link href="/flooring-san-diego">flooring in San Diego</Link> page. Verify our license at any time on the{' '}
                  <a href="https://www.cslb.ca.gov/onlineservices/CheckLicenseII/CheckLicense.aspx" target="_blank" rel="noopener noreferrer">California Contractors State License Board</a>.
                </p>
              </div>
              <div
                className="alt-image"
                style={{ backgroundImage: `url('${service.secondaryImage}')` }}
                aria-hidden="true"
              />
            </div>

            <div className="local-nuances" style={{ marginTop: 32 }}>
              <h3>{local.headers.considerationsH3}</h3>
              <ul>
                {local.localNuances.map((n) => (
                  <li key={n}>
                    <CheckIcon size={16} />
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      <ServiceBreakdown
        eyebrow={`${service.shortName} Services`}
        heading={local?.headers.subServicesH2 || `${service.shortName} Services We Offer`}
        subheading={`Each ${service.shortName.toLowerCase()} install we do, broken down. Tap any service to request a quote.`}
        items={service.subServices}
        blogLink={service.blogSlug ? { href: `/blog/${service.blogSlug}`, label: `${service.shortName} pricing and buying guide` } : undefined}
      />

      {local && (
        <section className="section section-cream">
          <div className="container">
            <div className="aeo-block">
              <h2>{local.aeoSecondaryQuestion.q}</h2>
              <p className="aeo-answer-text">{local.aeoSecondaryQuestion.a}</p>
            </div>
          </div>
        </section>
      )}

      <CouponsBlock
        eyebrow="Current Offers"
        heading="Zelo Flooring Specials"
        subheading="Tap any offer to claim it. We will follow up within 1 business day."
      />

      <section className="section">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">FAQ</span>
            <h2>{local?.headers.faqH2 || `San Diego ${service.shortName} FAQs Answered`}</h2>
            <p>Common questions San Diego homeowners ask about {service.shortName.toLowerCase()} installation.</p>
          </div>
          <FaqList items={service.faqs} includeSchema={false} />
        </div>
      </section>

      {/* TRUST + EMBEDDED MAP */}
      <section className="section section-cream">
        <div className="container">
          <div className="trust-local-block">
            <div className="trust-local-text">
              <h3>{local?.headers.trustH3}</h3>
              {local && local.localTrustParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p>
                Phone: <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a>
              </p>
              <p className="trust-local-address">
                {SITE.address}
              </p>
            </div>
            <div className="trust-local-map">
              <iframe
                title={`Zelo Flooring office location, ${SITE.city}, ${SITE.region}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.address)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <IndustryStats
        eyebrow="By the Numbers"
        heading="Industry Standards We Follow"
        stats={service.stats}
      />

      <ServiceReviews
        eyebrow="Customer Reviews"
        heading={local?.headers.reviewsH2 || `Reviews From San Diego ${service.shortName} Customers`}
        reviews={service.reviews}
      />

      {/* OTHER FLOORING SERVICES (cross-link image cards) */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Other Flooring Services</span>
            <h2>Other Flooring We Install In San Diego</h2>
            <p>Eight flooring categories, all installed by the same Zelo team. Tap any service for details, brands, and project guidance.</p>
          </div>
          <div className="service-img-cards-grid">
            {SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
              <Link key={s.slug} href={`/${s.slug}`} className="service-img-card">
                <div className="service-img-card-bg" style={{ backgroundImage: `url('${s.image}')` }} aria-hidden="true" />
                <div className="service-img-card-overlay" aria-hidden="true" />
                <div className="service-img-card-body">
                  <span className="service-img-card-tag">San Diego</span>
                  <h3>{s.name}</h3>
                  <p>{s.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEIGHBORHOODS (moved to bottom) */}
      <section className="section">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Service Area</span>
            <h2>Neighborhoods We Serve In San Diego</h2>
            <p>Free in-home estimates across the City of San Diego and surrounding county.</p>
          </div>

          <div className="neighborhood-grid">
            {MAIN_LOCATION.neighborhoods.map((n) => (
              <div key={n} className="neighborhood-card">
                <PinIcon size={14} />
                <span>{n}</span>
              </div>
            ))}
          </div>

          <div className="landmarks">
            <p>
              <strong>ZIP codes served (City of San Diego):</strong> {MAIN_LOCATION.zips.join(', ')}.
            </p>
            <p>
              <strong>Nearby San Diego County cities we also serve:</strong>{' '}
              {LOCATIONS.filter((l) => l.type === 'secondary').map((l, i) => (
                <span key={l.slug}>
                  {i > 0 ? ', ' : ''}
                  <Link href={`/${l.slug}`}>{l.city}</Link>
                </span>
              ))}
              .
            </p>
            <p>
              <a href={MAIN_LOCATION.wikipediaUrl} target="_blank" rel="noopener noreferrer">
                Wikipedia San Diego
              </a>
            </p>
          </div>
        </div>
      </section>

      <FinalCTA
        defaultProjectType={service.shortName}
        heading={local?.headers.finalCtaH3 || `Get A Free ${service.shortName} Installation Quote`}
        headingAs="h3"
      />
    </>
  );
}
