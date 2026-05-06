import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FaqList from '@/components/FaqList';
import ContactCTA from '@/components/ContactCTA';
import { SITE } from '@/lib/areas';

export const metadata: Metadata = {
  title: 'Flooring FAQ - Common Questions Answered',
  description: `Common questions about flooring installation in San Diego - costs, timelines, warranties, and more. Answered by ${SITE.name}.`,
  alternates: { canonical: `${SITE.url}/san-diego-flooring-faqs` },
};

const FAQS = [
  {
    q: 'How should I compare flooring estimates?',
    a: 'Look beyond just the price. Check that all labor is itemized (removal, prep, install, baseboards, haul-away). Ask if the installer follows manufacturer-specified installation procedures - if not, your warranty may be void. Also check online reviews for consistency. If one estimate is more than 10% lower than the others, something important is usually missing.',
  },
  {
    q: 'What is included in a flooring estimate?',
    a: 'A complete estimate includes materials, labor, removal of existing flooring (if applicable), subfloor preparation, installation, baseboards or shoe molding, transitions, and final clean-up. We provide line-item pricing so you know exactly what you are paying for.',
  },
  {
    q: 'Do you offer a warranty on installation?',
    a: 'Yes - every install comes with our workmanship warranty. We follow manufacturer installation specifications so your product warranty (typically 10 years to lifetime) also remains valid.',
  },
  {
    q: 'Do I need to move my furniture before installation?',
    a: 'We can help with furniture moving for an additional fee, or you can move it yourself before we arrive. Small items, electronics, and valuables should always be moved by the homeowner. We will discuss this during your estimate.',
  },
  {
    q: 'Can you install flooring over my existing floor?',
    a: 'Sometimes - it depends on the type of existing floor, its condition, and what you are installing on top. Floating floors like LVP and laminate can sometimes go over existing flooring; nail-down hardwood usually cannot. We will evaluate your subfloor during the estimate.',
  },
  {
    q: 'Do you have a showroom I can visit?',
    a: 'Instead of a fixed showroom, we bring the showroom to you. Our in-home consultation lets you see real samples in your actual lighting and space - which is a far better way to choose flooring than under fluorescent showroom lights.',
  },
  {
    q: 'How do I prepare my home for flooring installation?',
    a: 'We will give you a detailed prep checklist before installation day. Generally: clear out furniture and personal items from the work area, secure pets in a separate room, and make sure the install crew has clear access to the work area. We handle the rest.',
  },
];

export default function FAQPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about flooring installation in San Diego."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]}
      />

      <section className="section">
        <div className="container">
          <FaqList items={FAQS} />
        </div>
      </section>

      <ContactCTA heading="Still Have Questions? We're Happy to Help." />
    </>
  );
}
