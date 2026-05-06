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
}: Props) {
  const bgClass = background === 'cream' ? 'section-cream' : background === 'brown' ? 'section-brown' : '';
  return (
    <section className={`section ${bgClass}`}>
      <div className="container">
        <div className={`alt-row${reverse ? ' reverse' : ''}`}>
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
          <div className="alt-image" style={{ backgroundImage: `url('${image}')` }} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
