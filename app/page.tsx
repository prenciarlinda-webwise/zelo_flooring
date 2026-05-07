import LeadFormHero from '@/components/LeadFormHero';
import ProjectGallery from '@/components/ProjectGallery';
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

const TT_PROFILE = 'https://www.thumbtack.com/ca/san-diego/hardwood-floor-installation/zelo-flooring/service/414577564885925896';

const HOME_REVIEWS = [
  {
    name: 'Faramarz R.',
    location: '',
    serviceType: 'Carpet Repair or Partial Replacement',
    quote:
      'Zelo Flooring is one of the better flooring companies I worked with. Endri was very courteous and professional. We met at my rental, he assessed the scope of work, provided me with a very fair and competitive estimate, and his team took care of replacing the carpet in less than one day. Quality of workmanship was great. I will definitely use their service again and highly recommend them!',
    source: 'Thumbtack' as const,
    sourceUrl: TT_PROFILE,
    date: '3 days ago',
    datePublished: '2026-05-03',
  },
  {
    name: 'Leah A.',
    location: '',
    serviceType: 'Floor Repair',
    quote:
      'Endri and team were great to work with. I was nervous about finding an installer who could fix my squeaking subfloors. The noise had bothered me for 4 years and it was finally time to replace carpet for LVP. Zelo Flooring was able to do just that and install the LVP flooring in our main bedroom. It looks so good, and I finally have quiet floors. He was very responsive and amazing when it came to helping get us on the schedule, even a bit last minute.',
    source: 'Thumbtack' as const,
    sourceUrl: TT_PROFILE,
    date: 'Jul 20, 2024',
    datePublished: '2024-07-20',
  },
  {
    name: 'Tatyana M.',
    location: '',
    serviceType: 'Floor Installation or Replacement',
    quote:
      'If you want to get the job done perfectly, people who show up on time, do a great job, are tidy, and give you a reasonable quote, go ahead with these guys. We were very happy with the service and the experience overall. The owner is very pleasant to deal with, also very timely and quick. They want to work, not like others who waste your time. Zelo Flooring 5 stars!',
    source: 'Thumbtack' as const,
    sourceUrl: TT_PROFILE,
    date: 'Sep 24, 2024',
    datePublished: '2024-09-24',
  },
  {
    name: 'Hao L.',
    location: '',
    serviceType: 'Carpet Repair or Partial Replacement',
    quote: 'Did a great job for carpet re-stretching. Price is very reasonable.',
    source: 'Thumbtack' as const,
    sourceUrl: TT_PROFILE,
    date: '2 weeks ago',
    datePublished: '2026-04-22',
  },
  {
    name: 'Dave Z.',
    location: '',
    serviceType: 'Carpet Installation',
    quote:
      'Endri and Zelo Flooring exceeded my expectations. Endri expertly installed carpet in my attic room, completing the job promptly. Zelo Flooring’s professionalism, honesty, and tailored service were exceptional. The project wrapped up ahead of schedule, and my floors look stunning. Endri’s reliability and ease of collaboration make Zelo Flooring my top recommendation for anyone needing quality flooring services.',
    source: 'Thumbtack' as const,
    sourceUrl: TT_PROFILE,
    date: 'Apr 13, 2024',
    datePublished: '2024-04-13',
  },
];

export default function HomePage() {
  const anchorItems = SERVICES.map((s) => ({
    id: s.slug,
    name: s.shortName,
    iconKey: s.iconKey,
    description: s.tagline,
    href: `/${s.slug}`,
  }));

  const reviewSchema = HOME_REVIEWS.map((r, i) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    '@id': `${SITE.url}/#review-${i + 1}`,
    itemReviewed: { '@id': `${SITE.url}/#business` },
    author: { '@type': 'Person', name: r.name },
    reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5, worstRating: 1 },
    reviewBody: r.quote,
    ...(r.datePublished ? { datePublished: r.datePublished } : {}),
    ...(r.source ? { publisher: { '@type': 'Organization', name: r.source } } : {}),
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
      {reviewSchema.map((s) => (
        <script
          key={s['@id']}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
      <LeadFormHero
        h1="Flooring in San Diego, CA"
        valueProp="Zelo Flooring is a family-operated, C-15 licensed flooring installation company in San Diego with over a decade of journeyman experience. Carpet, LVP, hardwood, laminate, tile, cork, rubber, VCT, and more. Free in-home estimates."
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
            alt: 'Thumbtack Top Pro 2023, 2024, 2025',
            href: SITE.thumbtackUrl,
            label: 'Top Pro 3 Years',
            subLabel: '2023 · 2024 · 2025',
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
        title="Family-Operated San Diego Flooring Installation Company"
        paragraphs={[
          'Zelo Flooring is a family-operated flooring installation company based in San Diego. We have over a decade of journeyman experience installing residential and commercial flooring. We pride ourselves on craftsmanship, communication, and diligence.',
          'We install Luxury Vinyl Plank, carpet for residential and commercial spaces, laminate, solid and engineered hardwood, cork tiles, glue-down vinyl plank, VCT, rubber, home gym flooring, tile, backsplash, vinyl wall base, wood baseboard, and self-leveling. Free in-home estimates across San Diego County.',
        ]}
        bullets={[
          'Family-operated, 13+ years of journeyman flooring experience',
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

      <ServiceReviews
        eyebrow="Customer Reviews"
        heading="Reviews From San Diego Flooring Customers"
        subheading="Verified 5-star reviews from Zelo Flooring customers on Thumbtack. Click any review to read more on our profile."
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
