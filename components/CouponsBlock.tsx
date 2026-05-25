'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import Recaptcha, { RecaptchaHandle } from './Recaptcha';
import { SERVICE_AREAS } from '@/lib/areas';
import { track } from '@/lib/track';

export type Coupon = {
  id: string;
  badge: string; // e.g. "FREE" or "10% OFF"
  title: string; // headline
  body: string; // 1-2 sentence offer description
  expires?: string; // optional expiration date string
};

const DEFAULT_COUPONS: Coupon[] = [
  {
    id: 'free-estimate',
    badge: 'FREE',
    title: 'In-Home Flooring Estimate',
    body: 'We bring samples to your home, take exact measurements, and put together a written quote, at no cost and no pressure.',
  },
  {
    id: 'install-discount',
    badge: '10% OFF',
    title: 'Install Booked This Month',
    body: 'Save on labor when you sign for a whole-home install booked during the current month. New jobs only.',
    expires: 'End of month',
  },
  {
    id: 'pad-upgrade',
    badge: 'INCLUDED',
    title: 'Premium 8 lb Pad on Carpet Installs',
    body: 'Premium rebond pad standard on every residential carpet install. No upcharge.',
  },
  {
    id: 'commercial-after-hours',
    badge: 'NO UPCHARGE',
    title: 'After-Hours Commercial Install',
    body: 'Nights, weekends, and school break scheduling at standard rates so your space stays open.',
  },
];

type Props = {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  coupons?: Coupon[];
};

export default function CouponsBlock({ eyebrow, heading, subheading, coupons = DEFAULT_COUPONS }: Props) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errored, setErrored] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);
  const captchaRef = useRef<RecaptchaHandle>(null);

  useEffect(() => {
    if (openId) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [openId]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpenId(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const activeCoupon = coupons.find((c) => c.id === openId);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrored(false);
    setCaptchaError(false);
    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!captchaRef.current?.getResponse()) {
      setCaptchaError(true);
      return;
    }

    setSending(true);
    try {
      const res = await fetch('https://formspree.io/f/mbdbaqqy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
      track('lead_form_submit', {
        form_id: 'coupon_claim',
        offer: formData.get('offer'),
        neighborhood: formData.get('neighborhood'),
      });
      setSubmitted(true);
      form.reset();
      captchaRef.current?.reset();
      setTimeout(() => {
        setSubmitted(false);
        setOpenId(null);
      }, 3500);
    } catch (err) {
      console.error('Form submission failed:', err);
      track('lead_form_error', {
        form_id: 'coupon_claim',
        error_message: err instanceof Error ? err.message : String(err),
      });
      setErrored(true);
      captchaRef.current?.reset();
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="section section-cream coupons-block">
      <div className="container">
        <div className="section-header center">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2>{heading || 'Current Offers and Specials'}</h2>
          {subheading && <p>{subheading}</p>}
        </div>

        <div className="coupons-grid">
          {coupons.map((c) => (
            <article key={c.id} className="coupon-card">
              <span className="coupon-badge">{c.badge}</span>
              <p className="coupon-title">{c.title}</p>
              <p className="coupon-body">{c.body}</p>
              {c.expires && <p className="coupon-expires">Expires: {c.expires}</p>}
              <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={() => {
                  setSubmitted(false);
                  setOpenId(c.id);
                  track('coupon_open', { offer_id: c.id, offer_title: c.title });
                }}
              >
                Claim This Offer
              </button>
            </article>
          ))}
        </div>
      </div>

      {activeCoupon && (
        <div
          className="coupon-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={`Claim offer: ${activeCoupon.title}`}
          onClick={(e) => { if (e.target === e.currentTarget) setOpenId(null); }}
        >
          <div className="coupon-modal">
            <button
              type="button"
              className="coupon-modal-close"
              aria-label="Close offer form"
              onClick={() => setOpenId(null)}
            >
              ×
            </button>

            <span className="coupon-badge">{activeCoupon.badge}</span>
            <p className="coupon-modal-title">{activeCoupon.title}</p>
            <p className="coupon-modal-body">{activeCoupon.body}</p>

            <form
              className="coupon-modal-form"
              method="post"
              action="https://formspree.io/f/mbdbaqqy"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="_subject" value={`Offer Claim: ${activeCoupon.title}`} />
              <input type="hidden" name="offer" value={activeCoupon.title} />

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

              <textarea name="message" placeholder="Tell us about your project (optional)" rows={3} />

              <Recaptcha ref={captchaRef} className="form-recaptcha" />
              {captchaError && (
                <p className="coupon-modal-error" role="alert">
                  Please confirm you are not a robot before submitting.
                </p>
              )}

              <button type="submit" className="btn btn-primary btn-block btn-lg" disabled={sending}>
                {submitted ? '✓ Thanks, we will call you shortly.' : sending ? 'Sending...' : 'Send My Request'}
              </button>
              {errored && (
                <p className="coupon-modal-error" role="alert">
                  Something went wrong sending your request. Please try again or call us directly.
                </p>
              )}
              <p className="coupon-modal-trust">Your info is private and never shared.</p>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
