import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CredentialsRibbon from '@/components/CredentialsRibbon';
import PartnerInterestForm from '@/components/PartnerInterestForm';
import FinalCTA from '@/components/FinalCTA';
import { ShieldIcon, HomeIcon, ToolIcon, CheckIcon, ClockIcon, BadgeIcon, TruckIcon, StarIcon } from '@/components/Icons';
import { SITE } from '@/lib/areas';

export const metadata: Metadata = {
  title: 'Professional Network - Become a Trusted Partner',
  description: `Zelo Flooring's professional network of general contractors, remodelers, designers, suppliers, and property professionals across San Diego County. See what we look for in a partner and submit a partner interest form.`,
  alternates: { canonical: `${SITE.url}/professional-network` },
};

const TRAITS = [
  { icon: ShieldIcon, title: 'Trust & Integrity', desc: 'Honest communication, transparent business practices, and respect for customers.' },
  { icon: HomeIcon, title: 'Loyalty', desc: 'A genuine commitment to building a dependable, long-term professional relationship.' },
  { icon: ToolIcon, title: 'Proven Experience', desc: 'Demonstrated knowledge, experience, and a strong understanding of your trade or industry.' },
  { icon: CheckIcon, title: 'Quality Workmanship', desc: 'Consistent standards, attention to detail, and pride in completed work.' },
  { icon: ClockIcon, title: 'Reliability', desc: 'Clear communication, dependable scheduling, and following through on commitments.' },
  { icon: BadgeIcon, title: 'Professionalism', desc: 'Respectful conduct with customers, properties, contractors, vendors, and other trades.' },
  { icon: TruckIcon, title: 'Licensing & Insurance', desc: 'Appropriate licensing, insurance, certifications, or documentation when required.' },
  { icon: StarIcon, title: 'Strong Reputation', desc: 'A history of responsible business practices and positive professional relationships.' },
];

export default function ProfessionalNetworkPage() {
  return (
    <>
      <PageHero
        title="Our Professional Network"
        subtitle="Zelo Flooring values long-term relationships with experienced contractors, property professionals, suppliers, designers, and other trusted businesses across San Diego County."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Professional Network' }]}
      />

      <CredentialsRibbon />

      <section className="section section-cream">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Companies We Work With</span>
            <h2>Trusted Professional Relationships</h2>
            <p>
              We are proud to work alongside established professionals who share our commitment to
              quality service and a positive customer experience.
            </p>
          </div>

          <div className="partner-spotlight-card">
            <span className="partner-spotlight-eyebrow">Professional Network</span>
            <h3 className="partner-spotlight-name">Romeo Construction Inc.</h3>
            <p className="partner-spotlight-trade">General Construction &amp; Remodeling</p>
            <p className="partner-spotlight-desc">
              Romeo Construction Inc. is part of Zelo Flooring&apos;s professional network, representing
              the type of experienced and established business relationship we value within the San
              Diego construction community.
            </p>
            <p className="partner-spotlight-desc">
              Our goal is to work alongside professionals who value clear communication, dependable
              service, quality workmanship, and respect for the customer.
            </p>
            {/* TODO: add Romeo Construction's website URL once provided, then swap this note for a
                real "Visit Romeo Construction" link, rel="nofollow noopener noreferrer" per the
                client's 2026-08-26 instruction (don't pass link equity to partner sites Zelo
                doesn't control). Not fabricating a URL for a real named business. */}
          </div>

          <p className="partner-disclaimer">
            Businesses listed on this page are independently owned and operated. Inclusion in Zelo
            Flooring&apos;s professional network does not create a legal partnership, joint venture,
            franchise, agency relationship, or guarantee of services between the listed businesses.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Work With Zelo Flooring</span>
            <h2>Become a Trusted Partner</h2>
            <p>
              We are selective about the professionals and businesses we build long-term relationships
              with. Our Trusted Partner Network is intended for experienced, trustworthy companies that
              value loyalty, professionalism, quality, and reliability.
            </p>
          </div>

          <div className="service-cards-grid">
            {TRAITS.map((t) => (
              <div key={t.title} className="service-card-static">
                <div className="service-card-body">
                  <div className="service-card-icon">
                    <t.icon size={26} />
                  </div>
                  <h3>{t.title}</h3>
                  <p>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="section-header center">
            <h2>Partner Interest Form</h2>
            <p>
              Tell us about your company. Submission does not automatically create a partnership or
              guarantee acceptance into the Zelo Flooring Professional Network.
            </p>
          </div>
          <PartnerInterestForm />
        </div>
      </section>

      <FinalCTA
        heading="Need a Flooring Professional?"
        subheading="Zelo Flooring provides professional flooring installation and related services for homes, businesses, contractors, and property professionals throughout San Diego County."
      />
    </>
  );
}
