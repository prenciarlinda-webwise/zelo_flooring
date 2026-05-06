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
  description: `Learn about ${SITE.name}, a San Diego family flooring business. Licensed, bonded, and insured. CSLB Lic #${SITE.license}.`,
  alternates: { canonical: `${SITE.url}/about-us` },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Zelo Flooring"
        subtitle="A family business, locally operated, and committed to quality flooring installation in San Diego County."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />

      <AlternatingSection
        eyebrow="Our Story"
        title="A Family Business Built on Doing Things Right"
        paragraphs={[
          "Zelo Flooring was founded in San Diego with a simple goal: install flooring the way it should be installed, properly, the first time. After years of seeing other companies cut corners, we decided to build something different.",
          "Today, we're a fully licensed, bonded and insured family flooring business serving homeowners and businesses across San Diego County. We've installed thousands of square feet of carpet, vinyl, hardwood, laminate and tile, and we're still in business because our customers refer their friends and family.",
        ]}
        bullets={[
          'Family business, locally operated',
          'Years of installation experience',
          'CSLB Licensed (#1083572), Bonded & Insured',
          'Manufacturer-certified installers',
        ]}
        image="/img/projects/lvp-whole-home/after-entryway-lvp.webp"
        cta={{ label: 'Get a Free Estimate', href: '/free-estimate' }}
      />

      <AlternatingSection
        eyebrow="Meet the Owner"
        title={`${SITE.owner.name}, Owner of Zelo Flooring`}
        paragraphs={[
          `${SITE.owner.name} relocated from Europe to the United States in ${SITE.owner.inUSSince} and has worked in installation services ever since. Honesty, reliability, trustworthiness, and punctuality are the standards he holds every job to.`,
          `Our installers bring more than ${SITE.owner.teamYearsExperience} years of cumulative experience. We may not offer the lowest price you get quoted, but we are one of the few who consistently honor our commitments and treat your home with the care it warrants. Fully licensed (CSLB #${SITE.license}), insured, and bonded for your peace of mind.`,
        ]}
        bullets={[
          `Owner-operated since ${SITE.owner.inUSSince}`,
          `${SITE.owner.teamYearsExperience}+ years cumulative installer experience`,
          'On-time, on-spec, on-quote',
          'Licensed CSLB, bonded, and insured',
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
