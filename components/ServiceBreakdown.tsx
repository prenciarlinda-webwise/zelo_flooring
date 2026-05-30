import Link from 'next/link';
import { ArrowIcon } from './Icons';
import type { SubService } from '@/lib/services';

/** A breakdown item; when `href` is set the card title links to that page. */
type BreakdownItem = SubService & { href?: string };

type Props = {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  items: BreakdownItem[];
  /** if provided, each card gets a "Read More" link to this base path with anchor */
  blogLink?: { href: string; label: string };
};

export default function ServiceBreakdown({ eyebrow, heading, subheading, items, blogLink }: Props) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header center">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2>{heading}</h2>
          {subheading && <p>{subheading}</p>}
        </div>

        <div className="breakdown-grid">
          {items.map((item) => (
            <article id={item.id} key={item.id} className="breakdown-card">
              <h3 className="breakdown-title">
                {item.href ? <Link href={item.href}>{item.name}</Link> : item.name}
              </h3>
              <p className="breakdown-blurb">{item.blurb}</p>
              {item.href ? (
                <Link href={item.href} className="breakdown-link">
                  View {item.name} <ArrowIcon size={14} />
                </Link>
              ) : (
                <Link href={`#quote-form`} className="breakdown-link">
                  Get a quote <ArrowIcon size={14} />
                </Link>
              )}
            </article>
          ))}
        </div>

        {blogLink && (
          <div className="breakdown-cta">
            <Link href={blogLink.href} className="btn btn-outline-orange">{blogLink.label}</Link>
          </div>
        )}
      </div>
    </section>
  );
}
