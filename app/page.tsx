import LeadFormHero from '@/components/LeadFormHero';
import ProjectGallery from '@/components/ProjectGallery';
import ServiceAnchorGrid from '@/components/ServiceAnchorGrid';
import WhyChooseUs from '@/components/WhyChooseUs';
import AlternatingSection from '@/components/AlternatingSection';
import IndustryStats from '@/components/IndustryStats';
import TrustindexWidget from '@/components/TrustindexWidget';
import CouponsBlock from '@/components/CouponsBlock';
import FaqList from '@/components/FaqList';
import ServiceAreaLinks from '@/components/ServiceAreaLinks';
import FinalCTA from '@/components/FinalCTA';
import Link from 'next/link';
import { ArrowIcon } from '@/components/Icons';
import { SERVICES } from '@/lib/services';
import { PUBLISHED_BLOG_POSTS } from '@/lib/blog-posts';
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
        h1="San Diego Flooring Installation Company"
        valueProp="Zelo Flooring installs carpet, vinyl plank, hardwood, laminate, tile, cork, rubber, and VCT across San Diego County. With 13+ years of journeyman experience, we handle slab moisture testing, manufacturer-spec acclimation, and clean transitions so floors last. Free in-home estimates, and most homeowners get a written quote within one business day."
        trustLogos={[
          {
            kind: 'bbb',
            alt: `BBB Accredited Business with ${SITE.bbb.rating} rating`,
            href: SITE.bbb.profileUrl,
            bbbRating: SITE.bbb.rating,
            label: 'BBB Accredited',
            subLabel: `${SITE.bbb.rating} Rating`,
          },
          {
            src: '/img/thumbtack-logo.png',
            alt: 'Verified Zelo Flooring profile on Thumbtack',
            href: SITE.thumbtackUrl,
            label: 'Thumbtack Verified',
            subLabel: 'Read customer reviews',
          },
          {
            src: '/img/yelp-logo.png',
            alt: 'Verified Zelo Flooring profile on Yelp',
            href: SITE.yelpUrl,
            label: 'Yelp Verified',
            subLabel: 'Read customer reviews',
          },
          {
            kind: 'rating',
            alt: `${SITE.rating.value} stars from ${SITE.rating.count} Thumbtack reviews`,
            href: SITE.thumbtackUrl,
            ratingValue: SITE.rating.value,
            label: `${SITE.rating.value.toFixed(1)} (${SITE.rating.count} reviews)`,
            subLabel: 'on Thumbtack',
          },
          {
            src: '/img/top-pro-thumbtack.png',
            alt: 'Thumbtack Top Pro - quality floors, honest service',
            href: SITE.thumbtackUrl,
            label: 'Thumbtack Top Pro',
            subLabel: 'Quality floors, honest service',
          },
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
        title="Trusted San Diego Flooring Installation Company"
        paragraphs={[
          'Zelo Flooring is a flooring installation company based in San Diego. We have installed residential and commercial floors for over a decade. We show up on time, communicate clearly, and do the job right.',
          'We install carpet, luxury vinyl plank, hardwood, laminate, and tile. We also do cork, rubber, home gym flooring, VCT, baseboards, and self-leveling prep. Free in-home estimates across San Diego County.',
          'We provide the same professional installation quality as the large flooring chains, but with lower overhead, direct communication, and competitive pricing. Most customers save 15% to 30% compared to national flooring companies.',
        ]}
        bullets={[
          '13+ years of journeyman flooring experience',
          `CSLB ${SITE.licenseDetails.classification} Licensed #${SITE.licenseDetails.number}, bonded, and insured`,
          `BBB Accredited Business, ${SITE.bbb.rating} rating since 2022`,
          'Thumbtack Top Pro 2023, 2024, and 2025',
          `Hired ${SITE.hiredCount}+ times through Thumbtack`,
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

      <ProjectGallery />

      <section className="section">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Customer Reviews</span>
            <h2>Reviews From San Diego Flooring Customers</h2>
            <p>Verified 5-star reviews from real Zelo Flooring customers across San Diego County.</p>
          </div>
          <TrustindexWidget src="https://cdn.trustindex.io/loader.js?fdff85172cec70279086e93e81a" />
        </div>
      </section>

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

      <section className="section section-cream">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Flooring Guides</span>
            <h2>Flooring Tips and Buying Guides</h2>
            <p>Cost breakdowns and material comparisons from our San Diego install crew.</p>
          </div>
          <div className="related-grid">
            {PUBLISHED_BLOG_POSTS.slice(0, 6).map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="related-card">
                <div>
                  <strong>{p.title}</strong>
                  <span>{p.excerpt}</span>
                </div>
                <ArrowIcon size={14} />
              </Link>
            ))}
          </div>
          <div className="breakdown-cta" style={{ marginTop: 28, textAlign: 'center' }}>
            <Link href="/blog" className="btn btn-outline-orange">View all flooring guides</Link>
          </div>
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
