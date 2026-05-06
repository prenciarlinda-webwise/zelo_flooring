import Link from 'next/link';
import { SERVICES } from '@/lib/services';
import { ServiceIcon } from './Icons';

export default function ServiceIconGrid({ limit }: { limit?: number }) {
  const items = limit ? SERVICES.slice(0, limit) : SERVICES;
  return (
    <div className="service-icon-grid">
      {items.map((s) => (
        <Link key={s.slug} href={`/${s.slug}`} className="service-icon-card">
          <ServiceIcon name={s.iconKey} size={36} />
          <span>{s.shortName}</span>
        </Link>
      ))}
    </div>
  );
}
