import { ShieldIcon, BadgeIcon, ToolIcon, StarIcon, HomeIcon, CheckIcon } from './Icons';

const REASONS = [
  {
    icon: HomeIcon,
    title: 'Local San Diego Experts',
    desc: 'Family-owned, local, and dialed in to how Southern California homes behave.',
  },
  {
    icon: ShieldIcon,
    title: 'C-15 Licensed, Bonded & Insured',
    desc: 'CSLB C-15 Lic #1083572, valid through Dec 2027. Fully insured for residential and commercial work.',
  },
  {
    icon: ToolIcon,
    title: '13+ Years of Journeyman Experience',
    desc: 'Owner Endri Zelollari has installed flooring since 2013, with extensive expertise across LVP, hardwood, tile, carpet, and more.',
  },
  {
    icon: BadgeIcon,
    title: 'BBB Accredited A+, Top Pro 3 Years',
    desc: 'BBB Accredited Business with an A+ rating since 2022, and Thumbtack Top Pro for 2023, 2024, and 2025.',
  },
  {
    icon: StarIcon,
    title: '5.0 Stars from 34 Reviews',
    desc: 'Verified five-star reviews on Thumbtack from real San Diego homeowners and businesses.',
  },
  {
    icon: CheckIcon,
    title: 'Honest, Detailed Quotes',
    desc: 'No surprise fees. Transparent line-item pricing before any work begins.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section why-section">
      <div className="container">
        <div className="why-grid">
          <div>
            <span className="eyebrow">Why Choose Zelo</span>
            <h2>Why Customers Choose Zelo Flooring</h2>
            <p>
              Choosing the right flooring contractor is more important than choosing the floor itself. A bad install will ruin even the best product. We focus on doing it right the first time, with properly prepped subfloors, manufacturer-spec installation, and clean job sites.
            </p>
            <p>
              Whether you&apos;re renovating one room or your whole home, we&apos;ll bring samples to your door, give you straight answers, and stand behind our work.
            </p>
          </div>
          <div className="why-list">
            {REASONS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="why-item">
                <div className="why-item-icon"><Icon size={20} /></div>
                <div>
                  <strong className="why-item-title">{title}</strong>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
