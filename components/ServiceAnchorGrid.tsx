import Link from 'next/link';
import { ArrowIcon, ServiceIcon } from './Icons';

export type AnchorItem = { id: string; name: string; iconKey?: string; href?: string; description?: string };

type Props = {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  items: AnchorItem[];
  /** when true, links are anchors on the same page (#id); when false, full hrefs */
  asAnchors?: boolean;
};

export default function ServiceAnchorGrid({ eyebrow, heading, subheading, items, asAnchors = true }: Props) {
  return (
    <section className="section section-cream">
      <div className="container">
        <div className="section-header center">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2>{heading}</h2>
          {subheading && <p>{subheading}</p>}
        </div>

        <div className="anchor-grid">
          {items.map((item) => {
            const href = asAnchors ? `#${item.id}` : (item.href || `#${item.id}`);
            return (
              <Link key={item.id} href={href} className="anchor-card">
                {item.iconKey && (
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
