import { ShieldIcon, BadgeIcon, ToolIcon, StarIcon, HomeIcon, CheckIcon } from './Icons';

const REASONS = [
  {
    icon: HomeIcon,
    title: 'Local San Diego Experts',
    desc: 'Family-owned, local, and dialed in to how Southern California homes behave.',
  },
  {
    icon: ShieldIcon,
    title: 'Licensed, Bonded & Insured',
    desc: 'CSLB Lic #1083572 - fully insured and protected for your peace of mind.',
  },
  {
    icon: ToolIcon,
    title: 'Certified Installers',
    desc: 'Manufacturer-spec installs that keep your product warranty valid.',
  },
  {
    icon: BadgeIcon,
    title: 'Locally Owned Since 2021',
    desc: 'Family-run San Diego flooring installer focused on residential and commercial projects across the county.',
  },
  {
    icon: StarIcon,
    title: '5-Star Customer Reviews',
    desc: 'Real reviews from real San Diego homeowners - Yelp, Google and more.',
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
