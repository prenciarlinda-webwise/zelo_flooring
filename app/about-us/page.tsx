import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import AlternatingSection from '@/components/AlternatingSection';
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
          "Zelo Flooring was founded in San Diego with a simple goal: install flooring the way it should be installed - properly, the first time. After years of seeing other companies cut corners, we decided to build something different.",
          "Today, we're a fully licensed, bonded and insured family flooring business serving homeowners and businesses across San Diego County. We've installed thousands of square feet of carpet, vinyl, hardwood, laminate and tile - and we're still in business because our customers refer their friends and family.",
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

      <WhyChooseUs />
      <Testimonials />
      <ContactCTA heading="Ready to Work With a Flooring Company You Can Trust?" />
    </>
  );
}
