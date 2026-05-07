import { SITE } from '@/lib/areas';

type Stat = {
  value: string;
  label: string;
};

const STATS: Stat[] = [
  { value: 'Local', label: 'San Diego flooring installer' },
  { value: `${SITE.ownerExperienceYears}+`, label: 'Years of journeyman flooring experience' },
  { value: 'CSLB', label: `Licensed, bonded, insured (Lic #${SITE.license})` },
  { value: `${SITE.rating.value.toFixed(1)}★`, label: `Average rating from ${SITE.rating.count} reviews` },
];

export default function StatStrip() {
  return (
    <section className="stat-strip" aria-label="Zelo Flooring at a glance">
      <div className="container">
        <div className="stat-strip-grid">
          {STATS.map((s) => (
            <div key={s.label} className="stat-strip-item">
              <div className="stat-strip-value">{s.value}</div>
              <div className="stat-strip-rule" aria-hidden="true" />
              <div className="stat-strip-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
