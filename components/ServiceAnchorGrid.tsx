import Link from 'next/link';
import { ArrowIcon, ServiceIcon } from './Icons';

export type AnchorItem = { id: string; name: string; iconKey?: string; image?: string; href?: string; description?: string };

type Props = {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  items: AnchorItem[];
  /** when true, links are anchors on the same page (#id); when false, full hrefs */
  asAnchors?: boolean;
  /** ids of the items shown as large featured tiles (the layout is built for two) */
  featuredIds?: string[];
};

export default function ServiceAnchorGrid({ eyebrow, heading, subheading, items, asAnchors = true, featuredIds = [] }: Props) {
  // The grid relies on auto-placement, so DOM order decides the layout: the first featured
  // tile opens the grid, the regular tiles flow around it, and any further featured tile
  // closes the grid (see the band diagram above .anchor-grid in globals.css).
  const featured = featuredIds
    .map((id) => items.find((i) => i.id === id))
    .filter((i): i is AnchorItem => !!i);
  const regular = items.filter((i) => !featuredIds.includes(i.id));
  const ordered = [...featured.slice(0, 1), ...regular, ...featured.slice(1)];
  return (
    <section className="section section-cream">
      <div className="container">
        <div className="section-header center">
          <h2>{heading}</h2>
          {subheading && <p>{subheading}</p>}
        </div>

        <div className="anchor-grid">
          {ordered.map((item) => {
            const href = asAnchors ? `#${item.id}` : (item.href || `#${item.id}`);
            return (
              <Link key={item.id} href={href} className={`anchor-card${featuredIds.includes(item.id) ? ' anchor-card-featured' : ''}`}>
                {item.image ? (
                  <span className="anchor-card-thumb">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.image} alt="" loading="lazy" decoding="async" />
                  </span>
                ) : item.iconKey && (
                  <span className="anchor-card-icon" aria-hidden="true">
                    <ServiceIcon name={item.iconKey} size={28} />
                  </span>
                )}
                <span className="anchor-card-body">
                  <span className="anchor-card-title">{item.name}</span>
                  {item.description && <span className="anchor-card-desc">{item.description}</span>}
                </span>
                <ArrowIcon size={14} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
