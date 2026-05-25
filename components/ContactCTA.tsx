'use client';

import { FormEvent, useRef, useState } from 'react';
import { PhoneIcon, PinIcon, ClockIcon } from './Icons';
import Recaptcha, { RecaptchaHandle } from './Recaptcha';
import { SITE } from '@/lib/areas';
import { SERVICES } from '@/lib/services';
import { track } from '@/lib/track';

export default function ContactCTA({ heading }: { heading?: string }) {
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
        form_id: 'contact_form',
        service: formData.get('service'),
      });
      setSubmitted(true);
      form.reset();
      captchaRef.current?.reset();
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      console.error('Form submission failed:', err);
      track('lead_form_error', {
        form_id: 'contact_form',
        error_message: err instanceof Error ? err.message : String(err),
      });
      setErrored(true);
      captchaRef.current?.reset();
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact-cta-section">
      <div className="container contact-cta-inner">
        <div className="contact-cta-text">
          <span className="eyebrow" style={{ color: '#E8B547' }}>Get Started Today</span>
          <h2>{heading || 'Ready for New Floors? Get a Free In-Home Estimate.'}</h2>
          <p>
            Tell us about your project and we&apos;ll bring samples, take measurements, and put together a clear quote - all at no cost and with zero pressure.
          </p>

          <div className="contact-cta-info">
            <div><PhoneIcon size={18} /> Call us at <strong><a href={`tel:${SITE.phoneRaw}`} style={{ color: 'white' }}>{SITE.phone}</a></strong></div>
            <div><PinIcon size={18} /> {SITE.address}</div>
            <div><ClockIcon size={18} /> {SITE.hoursDisplay}</div>
          </div>
        </div>

        <form
          className="contact-form"
          method="post"
          action="https://formspree.io/f/mbdbaqqy"
          onSubmit={handleSubmit}
        >
          <h3>Request Free Estimate</h3>
          <p className="form-sub">We respond to every request within 1 business day.</p>
          <input type="hidden" name="_subject" value="New Free Estimate Request - Zelo Flooring" />
          <input type="text" name="name" placeholder="Your Name *" required />
          <input type="tel" name="phone" placeholder="Phone Number *" required />
          <input type="email" name="email" placeholder="Email Address *" required />
          <select name="service" required defaultValue="">
            <option value="" disabled>Flooring Type *</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.slug}>{s.shortName}</option>
            ))}
            <option value="not-sure">Not sure yet</option>
          </select>
          <textarea name="message" placeholder="Tell us about your project (optional)" rows={3} />
          <Recaptcha ref={captchaRef} className="form-recaptcha" />
          {captchaError && (
            <p className="form-error" role="alert">
              Please confirm you are not a robot before submitting.
            </p>
          )}
          <button type="submit" className="btn btn-primary btn-block btn-lg" disabled={sending}>
            {submitted ? '✓ Thank you - we will be in touch soon.' : sending ? 'Sending...' : 'Get My Free Estimate'}
          </button>
          {errored && (
            <p className="form-error" role="alert">
              Something went wrong sending your request. Please call {SITE.phone} or try again.
            </p>
          )}
          <p className="form-trust">Your info is private and never shared.</p>
        </form>
      </div>
    </section>
  );
}
