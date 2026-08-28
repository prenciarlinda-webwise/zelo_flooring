import Image from 'next/image';
import { PhoneIcon } from './Icons';
import EstimateForm from './EstimateForm';
import { SITE } from '@/lib/areas';

export type TrustLogo = {
  src?: string;
  // Intrinsic pixel dimensions of `src`, so the browser can reserve the right box before
  // the image loads instead of shifting layout. Display size is still controlled by CSS
  // (.lead-hero-trust-visual img caps it at 44x40 with object-fit: contain).
  width?: number;
  height?: number;
  alt: string;
  href?: string;
  label?: string;
  subLabel?: string;
  kind?: 'bbb' | 'rating';
  bbbRating?: string;
  ratingValue?: number;
  ratingCount?: number;
};

type Props = {
  h1: string;
  valueProp: string;
  trustBullets?: string[];
  trustLogos?: TrustLogo[];
  image: string; // hero photo url
  imageAlt: string;
  defaultProjectType?: string;
};

export default function LeadFormHero({ h1, valueProp, trustBullets, trustLogos, image, imageAlt, defaultProjectType }: Props) {
  return (
    <section className="lead-hero">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="lead-hero-photo"
      />
      <div className="lead-hero-overlay" aria-hidden="true" />

      <div className="container lead-hero-grid">
        <div className="lead-hero-text">
          <p className="lead-hero-eyebrow">San Diego, CA · Licensed CSLB #{SITE.license}</p>
          <h1 className="lead-hero-h1">{h1}</h1>
          <p className="lead-hero-value">{valueProp}</p>

          <div className="lead-hero-cta">
            <a href={`tel:${SITE.phoneRaw}`} className="btn btn-primary btn-lg">
              <PhoneIcon size={18} /> Call {SITE.phone}
            </a>
          </div>

          {trustLogos && trustLogos.length > 0 ? (
            <ul className="lead-hero-trust-logos">
              {trustLogos.map((logo, i) => {
                const visual =
                  logo.kind === 'bbb' ? (
                    <span className="lead-hero-trust-visual lead-hero-trust-bbb">
                      <span className="lead-hero-trust-bbb-letters">BBB</span>
                      <span className="lead-hero-trust-bbb-rating">{logo.bbbRating || 'A+'}</span>
                    </span>
                  ) : logo.kind === 'rating' ? (
                    <span className="lead-hero-trust-visual lead-hero-trust-rating-visual">
                      <span className="lead-hero-trust-rating-value">{(logo.ratingValue ?? 5).toFixed(1)}</span>
                      <span className="lead-hero-trust-rating-stars" aria-hidden="true">★★★★★</span>
                    </span>
                  ) : (
                    <span className="lead-hero-trust-visual">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={logo.src} alt="" width={logo.width || 200} height={logo.height || 111} />
                    </span>
                  );

                const text = (logo.label || logo.subLabel) && (
                  <span className="lead-hero-trust-text">
                    {logo.label && <strong>{logo.label}</strong>}
                    {logo.subLabel && <span>{logo.subLabel}</span>}
                  </span>
                );

                const inner = (
                  <>
                    {visual}
                    {text}
                  </>
                );

                return (
                  <li key={logo.src || `${logo.kind}-${i}`}>
                    {logo.href ? (
                      <a
                        href={logo.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={logo.alt}
                        className="lead-hero-trust-chip"
                      >
                        {inner}
                      </a>
                    ) : (
                      <span className="lead-hero-trust-chip" aria-label={logo.alt}>
                        {inner}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          ) : trustBullets && trustBullets.length > 0 ? (
            <ul className="lead-hero-trust">
              {trustBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="lead-hero-form-wrap" id="quote-form">
          <EstimateForm formId="lead_form_hero" defaultProjectType={defaultProjectType} />
        </div>
      </div>
    </section>
  );
}
