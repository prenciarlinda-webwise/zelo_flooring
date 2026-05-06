import type { ServiceStat } from '@/lib/services';

type Props = {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  stats: ServiceStat[];
};

export default function IndustryStats({ eyebrow, heading, subheading, stats }: Props) {
  return (
    <section className="section section-brown industry-stats">
      <div className="container">
        <div className="section-header center">
          {eyebrow && <span className="eyebrow" style={{ color: 'var(--gold)' }}>{eyebrow}</span>}
          <h2 style={{ color: 'white' }}>{heading}</h2>
          {subheading && <p style={{ color: 'rgba(255,255,255,0.78)' }}>{subheading}</p>}
        </div>

        <div className="stats-grid">
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <p className="stat-value">{s.value}</p>
              <p className="stat-label">{s.label}</p>
              <a
                href={s.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="stat-source"
              >
                Source: {s.sourceLabel} ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
