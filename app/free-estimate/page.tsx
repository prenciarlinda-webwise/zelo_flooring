import type { Metadata } from 'next';
import LeadFormHero from '@/components/LeadFormHero';
import { SITE } from '@/lib/areas';

export const metadata: Metadata = {
  title: 'Free Flooring Estimate in San Diego',
  description: `Get a free, no-obligation flooring estimate in San Diego. We bring samples to your home, take measurements, and give you a detailed written quote. Call ${SITE.phone}.`,
  alternates: { canonical: `${SITE.url}/free-estimate` },
};

export default function FreeEstimatePage() {
  return (
    <LeadFormHero
      h1="Get Your Free In-Home Flooring Estimate"
      valueProp="Tell us about your project and we will bring samples, take measurements, and put together a clear written quote at no cost. Most homeowners hear back within 1 business day."
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
  );
}
