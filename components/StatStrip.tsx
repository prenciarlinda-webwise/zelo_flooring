import { SITE } from '@/lib/areas';

type Stat = {
  value: string;
  label: string;
};

const yearsActive = new Date().getFullYear() - SITE.yearEstablished;

const STATS: Stat[] = [
  { value: 'Local', label: 'San Diego flooring installer' },
  { value: `${yearsActive}+`, label: `Years in business since ${SITE.yearEstablished}` },
  { value: 'CSLB', label: `Licensed, bonded, insured (Lic #${SITE.license})` },
  { value: '5★', label: 'Average customer rating' },
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
