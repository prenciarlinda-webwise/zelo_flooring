import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import AlternatingSection from '@/components/AlternatingSection';
import ProjectGallery from '@/components/ProjectGallery';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import ContactCTA from '@/components/ContactCTA';
import { SITE } from '@/lib/areas';

export const metadata: Metadata = {
  title: 'About Us - San Diego Flooring Contractors',
  description: `Learn about ${SITE.name}, a San Diego flooring installation company with over a decade of journeyman experience. C-15 licensed (CSLB #${SITE.license}), bonded, insured, and BBB Accredited A+. Owner: Endri Zelollari.`,
  alternates: { canonical: `${SITE.url}/about-us` },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Zelo Flooring"
        subtitle="Locally based and committed to quality flooring installation in San Diego County."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />

      <AlternatingSection
        eyebrow="Our Story"
        title="A Trusted San Diego Flooring Installation Company"
        paragraphs={[
          `${SITE.name} is a flooring installation company based in ${SITE.city}. We have over a decade of journeyman experience installing residential and commercial flooring. We pride ourselves on craftsmanship, communication, and diligence.`,
          `The Zelo Flooring business was founded in October 2021 as a sole proprietorship and has been BBB Accredited with an ${SITE.bbb.rating} rating since October 2022. We bring extensive experience across LVP, carpet, hardwood, laminate, tile, cork, rubber, VCT, self-leveling, and more.`,
        ]}
        bullets={[
          `Bonded and licensed: CSLB ${SITE.licenseDetails.classification} #${SITE.licenseDetails.number}`,
          'Insured for residential and commercial work',
          `BBB Accredited Business, ${SITE.bbb.rating} rating since 2022`,
          `Thumbtack Top Pro 2023, 2024, and 2025`,
          `${SITE.hiredCount}+ jobs hired through Thumbtack`,
        ]}
        image="/img/projects/lvp-whole-home/after-entryway-lvp.webp"
        cta={{ label: 'Get a Free Estimate', href: '/free-estimate' }}
      />

      <AlternatingSection
        eyebrow="Meet the Owner"
        title={`${SITE.owner.name}, Owner of Zelo Flooring`}
        paragraphs={[
          `${SITE.owner.name} relocated from Europe to the United States in ${SITE.owner.inUSSince} and has worked in installation services ever since, ${SITE.ownerExperienceYears} years of journeyman flooring experience and counting. Honesty, reliability, trustworthiness, and punctuality are the standards he holds every job to.`,
          `Endri personally holds California ${SITE.licenseDetails.classification} ${SITE.licenseDetails.classificationName} License #${SITE.licenseDetails.number}, verified by the ${SITE.licenseDetails.issuerAcronym} on April 7, 2026 and valid through December 1, 2027. He completed a national background check through Thumbtack on October 14, 2021.`,
        ]}
        bullets={[
          `${SITE.licenseDetails.classification} licensed by the ${SITE.licenseDetails.issuerAcronym} (#${SITE.licenseDetails.number})`,
          `${SITE.ownerExperienceYears} years of personal flooring installation experience`,
          `Background checked through Thumbtack`,
          'On-time, on-spec, on-quote',
          'Bonded and insured',
        ]}
        image="/img/mobile-flooring-zelo.webp"
        imageContain
        imageWide
        reverse
        background="cream"
      />

      <AlternatingSection
        eyebrow="Our Approach"
        title="No Showroom - We Bring the Showroom to You"
        paragraphs={[
          "Most flooring companies want you to drive across town, sit in a fluorescent-lit showroom, and try to imagine how a 4-inch tile sample will look in your living room. We think that's backwards.",
          "Instead, we bring physical samples to your home. You see materials in your real lighting, against your real walls and furniture, with all the kids and pets you actually live with. You make a better decision and we get to know your project before quoting.",
        ]}
        image="/img/projects/lvp-whole-home/after-kitchen-lvp.webp"
        reverse
        background="cream"
      />

      <AlternatingSection
        eyebrow="Our Values"
        title="Honest Pricing, Quality Materials, Clean Job Sites"
        paragraphs={[
          "We believe a flooring contractor should be the easiest part of your remodel - not a source of stress. That means clear quotes, communication when things change, showing up on time, and leaving your home cleaner than we found it.",
          "Every install we do has to meet the manufacturer's spec - anything less and your warranty is void. We don't take shortcuts because shortcuts always show up later.",
        ]}
        bullets={[
          'Transparent line-item pricing',
          'No high-pressure sales tactics',
          'On-time arrival, every day',
          'Clean job sites and final walk-throughs',
          '100% workmanship guarantee',
        ]}
        image="/img/projects/lvp-whole-home/after-dining-area-lvp.webp"
      />

      <ProjectGallery
        eyebrow="Recent Projects"
        heading="Floors We've Installed Across San Diego"
        subheading="A snapshot of carpet, LVP, hardwood, and tile installs the Zelo Flooring team has completed for local homeowners and businesses."
        initialCount={8}
      />

      <WhyChooseUs />
      <Testimonials />
      <ContactCTA heading="Ready to Work With a Flooring Company You Can Trust?" />
    </>
  );
}
