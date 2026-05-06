import Link from 'next/link';
import { SERVICES } from '@/lib/services';
import { ServiceIcon, ArrowIcon } from './Icons';

export default function ServiceCardsGrid() {
  return (
    <div className="services-grid">
      {SERVICES.map((s) => (
        <Link key={s.slug} href={`/${s.slug}`} className="service-card service-card-link-wrap">
          <div className="service-card-body">
            <div className="service-card-icon">
              <ServiceIcon name={s.iconKey} size={26} />
            </div>
            <h3>{s.shortName} Flooring</h3>
            <p>{s.description}</p>
            <span className="service-card-link">
              Learn More <ArrowIcon size={14} />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
