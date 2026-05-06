import LeadFormHero from '@/components/LeadFormHero';
import TrustBadges from '@/components/TrustBadges';
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
        valueProp="Zelo Flooring installs carpet, vinyl, hardwood, laminate, and tile across San Diego County. Free in-home estimates, honest pricing, certified installers, manufacturer-spec installs."
        trustBullets={[
          'Licensed CSLB #1083572',
          'Locally owned since 2021',
          '5★ Google reviews',
        ]}
        image="/img/projects/lvp-whole-home/after-living-room-lvp.webp"
        imageAlt="Zelo Flooring luxury vinyl plank installed across a San Diego living room"
      />

      <TrustBadges
        heading="Verified Reviews and Recognized Awards"
        subheading="Real ratings from third-party platforms, not testimonials we wrote ourselves."
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
