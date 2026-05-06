import LeadFormHero from '@/components/LeadFormHero';
import ServiceAnchorGrid from '@/components/ServiceAnchorGrid';
import WhyChooseUs from '@/components/WhyChooseUs';
import AlternatingSection from '@/components/AlternatingSection';
import IndustryStats from '@/components/IndustryStats';
import ServiceReviews from '@/components/ServiceReviews';
import CouponsBlock from '@/components/CouponsBlock';
import FaqList from '@/components/FaqList';
import ServiceAreaLinks from '@/components/ServiceAreaLinks';
import FinalCTA from '@/components/FinalCTA';
import { SERVICES } from '@/lib/services';
import { SITE } from '@/lib/areas';

const HOME_FAQS = [
  {
    q: 'How much does flooring installation cost in San Diego?',
    a: 'Flooring installation in San Diego typically runs $3 to $15 per square foot for labor and materials. Carpet runs $3 to $7, luxury vinyl plank $5 to $10, and hardwood $8 to $15. The best way to get an accurate number is a free in-home estimate.',
  },
  {
    q: 'Do you offer free in-home flooring estimates?',
    a: 'Yes. Every Zelo Flooring estimate is free with no obligation. We bring physical samples to your home, take exact measurements, and provide a clear written quote on the spot.',
  },
  {
    q: 'Are you a licensed flooring contractor in San Diego?',
    a: 'Yes. Zelo Flooring is a fully licensed San Diego flooring contractor (CSLB Lic #1083572), bonded, and insured. We carry general liability and workers compensation insurance.',
  },
  {
    q: 'How long does flooring installation take?',
    a: 'Most residential flooring installs take 1 to 3 days depending on size. A single bedroom of carpet can be done in a few hours. A whole-home hardwood install typically takes 2 to 4 days. We give a clear timeline before any work begins.',
  },
  {
    q: 'What areas of San Diego do you serve?',
    a: 'We provide flooring in San Diego County including San Diego, Coronado, Del Mar, Oceanside, La Jolla, Carlsbad, Poway, Vista, Encinitas, Rancho Santa Fe, San Marcos, and surrounding communities.',
  },
  {
    q: 'What types of flooring do you install?',
    a: 'We install carpet, luxury vinyl plank (LVP), hardwood, laminate, tile, cork, rubber, and vinyl composition tile (VCT) for both residential and commercial properties.',
  },
];

const HOME_STATS = [
  { label: 'CA contractor licenses verified by the CSLB', value: '290,000+', sourceLabel: 'CSLB', sourceUrl: 'https://www.cslb.ca.gov' },
  { label: 'NWFA-recommended hardwood acclimation period', value: '5-7 days', sourceLabel: 'NWFA', sourceUrl: 'https://nwfa.org' },
];

const HOME_REVIEWS = [
  { name: 'Maria S.', location: 'La Jolla, CA', quote: 'Zelo replaced all the flooring in our home with luxury vinyl plank. They were on time every day, the install looks flawless, and they cleaned up better than they found us.' },
  { name: 'David R.', location: 'Chula Vista, CA', quote: 'Got three quotes, Zelo wasn\'t the cheapest but the most thorough. They explained exactly what they\'d do, brought samples, and the hardwood floors look incredible.' },
  { name: 'Jennifer K.', location: 'Carlsbad, CA', quote: 'Carpeted three bedrooms and the stairs. Crew was professional, install was quick, and the quality is way better than what we had before. Five stars all day.' },
];

export default function HomePage() {
  const anchorItems = SERVICES.map((s) => ({
    id: s.slug,
    name: s.shortName,
    iconKey: s.iconKey,
    description: s.tagline,
    href: `/${s.slug}`,
  }));

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE.url}/#webpage`,
    url: SITE.url,
    name: `Flooring San Diego - ${SITE.name}`,
    isPartOf: { '@id': `${SITE.url}/#website` },
    about: { '@id': `${SITE.url}/#business` },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.faq-list .faq-q', '.faq-list .faq-body', '.aeo-answer'],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <LeadFormHero
        h1="Flooring in San Diego, CA"
        valueProp="Zelo Flooring installs carpet, vinyl, hardwood, laminate, and tile across San Diego County. Free in-home estimates, honest pricing, certified installers, manufacturer-spec installs."
        trustBullets={[
          'Licensed CSLB #1083572',
          'Locally owned since 2021',
          '5★ Google reviews',
        ]}
        image="/img/projects/lvp-whole-home/after-living-room-lvp.webp"
        imageAlt="Zelo Flooring luxury vinyl plank installed across a San Diego living room"
      />

      <ServiceAnchorGrid
        eyebrow="Flooring We Install"
        heading="Flooring Services We Offer In San Diego"
        subheading="Eight flooring services for residential and commercial San Diego. Tap a service for full details."
        items={anchorItems}
        asAnchors={false}
      />

      <WhyChooseUs />

      <AlternatingSection
        eyebrow="About Zelo Flooring"
        title="Family-Owned San Diego Flooring Contractor Since 2021"
        paragraphs={[
          'Zelo Flooring is a family-owned San Diego flooring contractor serving homeowners and businesses across San Diego County since 2021. We install carpet, vinyl plank, hardwood, laminate, tile, cork, rubber, and VCT, with the same standards on every job: documented slab moisture testing before product is ordered, NWFA-aligned acclimation on hardwood, TCNA-spec substrate prep on tile, and clean transitions at every threshold.',
          'We do not have a fancy showroom. Instead, we bring physical samples to your home so you see grain and color in your real lighting before committing. Honest material recommendations get matched to your house, your humidity, and your traffic. Free in-home estimates across San Diego County, from coastal homes in La Jolla and Coronado to inland Poway and Escondido.',
        ]}
        bullets={[
          'Family-owned, locally operated since 2021',
          'CSLB Licensed (#1083572), bonded, and insured',
          'Manufacturer-spec installs across 8 flooring categories',
          'Free in-home consultations across San Diego County',
          'NWFA-aligned hardwood and TCNA-spec tile substrate prep',
        ]}
        image="/img/projects/lvp-whole-home/after-open-floor-lvp.webp"
        reverse
        background="cream"
        cta={{ label: 'About Our Team', href: '/about-us' }}
      />

      <IndustryStats
        eyebrow="By the Numbers"
        heading="Industry Stats We Follow"
        subheading="Zelo follows the standards the major flooring trade bodies publish for residential installs."
        stats={HOME_STATS}
      />

      <ServiceReviews
        eyebrow="Customer Reviews"
        heading="Reviews From San Diego Flooring Customers"
        subheading="Recent 5-star reviews from across San Diego County."
        reviews={HOME_REVIEWS}
      />

      <CouponsBlock
        eyebrow="Current Offers"
        heading="Zelo Flooring Specials"
        subheading="Tap any offer to claim it. We will follow up within 1 business day."
      />

      <section className="section">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">FAQ</span>
            <h2>Zelo Flooring Answers Your Flooring Questions</h2>
            <p>The most common questions we hear from homeowners across San Diego County.</p>
          </div>
          <FaqList items={HOME_FAQS} />
        </div>
      </section>

      <ServiceAreaLinks
        eyebrow="Service Areas"
        heading="San Diego County Service Areas"
        subheading="Coast to inland communities Zelo Flooring installs across."
      />

      <FinalCTA />
    </>
  );
}
