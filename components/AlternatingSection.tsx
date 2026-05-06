import Link from 'next/link';
import { ArrowIcon } from './Icons';

type Props = {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  image: string;
  reverse?: boolean;
  cta?: { label: string; href: string };
  background?: 'white' | 'cream' | 'brown';
  imageContain?: boolean;
  imageWide?: boolean;
};

export default function AlternatingSection({
  eyebrow,
  title,
  paragraphs,
  bullets,
  image,
  reverse = false,
  cta,
  background = 'white',
  imageContain = false,
  imageWide = false,
}: Props) {
  const bgClass = background === 'cream' ? 'section-cream' : background === 'brown' ? 'section-brown' : '';
  const rowClasses = ['alt-row', reverse ? 'reverse' : '', imageWide ? 'alt-row-image-wide' : '']
    .filter(Boolean)
    .join(' ');
  return (
    <section className={`section ${bgClass}`}>
      <div className="container">
        <div className={rowClasses}>
          <div className="alt-text">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h2>{title}</h2>
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            {bullets && bullets.length > 0 && (
              <ul className="checklist">
                {bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            )}
            {cta && (
              <Link href={cta.href} className="btn btn-primary" style={{ marginTop: 8 }}>
                {cta.label} <ArrowIcon size={16} />
              </Link>
            )}
          </div>
          <div
            className={`alt-image${imageContain ? ' alt-image-contain' : ''}`}
            style={{ backgroundImage: `url('${image}')` }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
