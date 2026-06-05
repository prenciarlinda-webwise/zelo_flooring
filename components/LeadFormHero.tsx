'use client';

import { FormEvent, useRef, useState } from 'react';
import { PhoneIcon } from './Icons';
import Recaptcha, { RecaptchaHandle } from './Recaptcha';
import { SITE, SERVICE_AREAS } from '@/lib/areas';
import { postToFormspree } from '@/lib/formspree';
import { track } from '@/lib/track';

export type TrustLogo = {
  src?: string;
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

const PROJECT_TYPES = [
  'Carpet',
  'Luxury Vinyl Plank',
  'Hardwood',
  'Laminate',
  'Tile',
  'Cork',
  'Rubber',
  'VCT (Commercial)',
  'Refinishing',
  'Not sure yet',
];

export default function LeadFormHero({ h1, valueProp, trustBullets, trustLogos, image, imageAlt, defaultProjectType }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errored, setErrored] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);
  const captchaRef = useRef<RecaptchaHandle>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrored(false);
    setCaptchaError(false);
    const form = e.currentTarget;
    const formData = new FormData(form);

    const captchaToken = captchaRef.current?.getResponse() || '';
    if (!captchaToken) {
      setCaptchaError(true);
      return;
    }
    // Set the canonical field name explicitly: with multiple widgets on a page,
    // reCAPTCHA may name the auto-injected field g-recaptcha-response-1, etc.
    formData.set('g-recaptcha-response', captchaToken);

    setSending(true);
    try {
      await postToFormspree('https://formspree.io/f/mbdbaqqy', formData);
      track('lead_form_submit', {
        form_id: 'lead_form_hero',
        project_type: formData.get('projectType'),
        neighborhood: formData.get('neighborhood'),
      });
      setSubmitted(true);
      form.reset();
      captchaRef.current?.reset();
      setTimeout(() => setSubmitted(false), 8000);
    } catch (err) {
      console.error('Form submission failed:', err);
      track('lead_form_error', {
        form_id: 'lead_form_hero',
        error_message: err instanceof Error ? err.message : String(err),
      });
      setErrored(true);
      captchaRef.current?.reset();
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="lead-hero">
      <div
        className="lead-hero-photo"
        style={{ backgroundImage: `url('${image}')` }}
        role="img"
        aria-label={imageAlt}
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
                      <img src={logo.src} alt="" />
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
          <form
            className="lead-hero-form"
            method="post"
            action="https://formspree.io/f/mbdbaqqy"
            onSubmit={handleSubmit}
          >
            <p className="lead-hero-form-title">Get a Free Quote</p>
            <p className="lead-hero-form-sub">Free in-home estimate. We respond within 1 business day.</p>

            <input type="hidden" name="_subject" value="New Free Quote Request - Zelo Flooring" />
            <input type="hidden" name="_template" value="table" />

            <input type="text" name="name" placeholder="Your Name *" required autoComplete="name" />
            <input type="tel" name="phone" placeholder="Phone *" required autoComplete="tel" />
            <input type="email" name="email" placeholder="Email *" required autoComplete="email" />

            <select name="neighborhood" required defaultValue="">
              <option value="" disabled>Neighborhood / City *</option>
              {SERVICE_AREAS.map((a) => (
                <option key={a.name} value={a.name}>{a.name}</option>
              ))}
              <option value="other">Other San Diego County</option>
            </select>

            <select name="projectType" required defaultValue={defaultProjectType || ''}>
              <option value="" disabled>Project Type / Sq Ft *</option>
              {PROJECT_TYPES.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>

            <Recaptcha ref={captchaRef} className="form-recaptcha" />
            {captchaError && (
              <p className="lead-hero-form-error" role="alert">
                Please confirm you are not a robot before submitting.
              </p>
            )}

            <button type="submit" className="btn btn-primary btn-block btn-lg" disabled={sending}>
              {submitted ? '✓ Thanks, we will be in touch soon.' : sending ? 'Sending...' : 'Get My Free Quote'}
            </button>
            {errored && (
              <p className="lead-hero-form-error" role="alert">
                Something went wrong sending your request. Please call {SITE.phone} or try again.
              </p>
            )}
            <p className="lead-hero-form-trust">Your info is private and never shared.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
