'use client';

import { FormEvent, useRef, useState } from 'react';
import Recaptcha, { RecaptchaHandle } from './Recaptcha';
import { postToFormspree, APPLICATIONS_FORMSPREE_ENDPOINT } from '@/lib/formspree';
import { track } from '@/lib/track';
import { SITE } from '@/lib/areas';

export default function PartnerInterestForm() {
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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
    formData.set('g-recaptcha-response', captchaToken);
    formData.set('_subject', `Partner Interest - ${formData.get('company_name') || 'New Company'}`);

    setSending(true);
    try {
      await postToFormspree(APPLICATIONS_FORMSPREE_ENDPOINT, formData);
      track('lead_form_submit', {
        form_id: 'partner_interest',
        primary_trade: formData.get('primary_trade'),
      });
      setSubmitted(true);
      form.reset();
      captchaRef.current?.reset();
    } catch (err) {
      console.error('Partner interest submission failed:', err);
      track('lead_form_error', {
        form_id: 'partner_interest',
        error_message: err instanceof Error ? err.message : String(err),
      });
      setErrored(true);
      captchaRef.current?.reset();
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="long-form long-form-success" role="status">
        <p className="long-form-success-title">Thanks for reaching out.</p>
        <p>
          We review every partner inquiry and will follow up if it looks like a good fit. Questions in
          the meantime? Call <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="long-form" onSubmit={handleSubmit}>
      <input type="hidden" name="form_name" value="Partner Interest Form" />

      <div className="long-form-section">
        <div className="long-form-grid">
          <label className="long-form-field">
            Company Name *
            <input type="text" name="company_name" required autoComplete="organization" />
          </label>
          <label className="long-form-field">
            Contact Name *
            <input type="text" name="contact_name" required autoComplete="name" />
          </label>
          <label className="long-form-field">
            Email *
            <input type="email" name="email" required autoComplete="email" />
          </label>
          <label className="long-form-field">
            Phone *
            <input type="tel" name="phone" required autoComplete="tel" />
          </label>
          <label className="long-form-field">
            Website
            <input type="url" name="website" placeholder="https://" />
          </label>
          <label className="long-form-field">
            Years in Business
            <input type="text" name="years_in_business" placeholder="e.g. 10" />
          </label>
          <label className="long-form-field">
            Primary Trade / Service
            <input type="text" name="primary_trade" placeholder="e.g. General Contractor, Designer, Property Manager" />
          </label>
          <label className="long-form-field">
            License / Insurance Information
            <input type="text" name="license_insurance" />
          </label>
          <label className="long-form-field long-form-field-full">
            Service Area
            <input type="text" name="service_area" placeholder="e.g. San Diego County" />
          </label>
          <label className="long-form-field long-form-field-full">
            Why would you like to work with Zelo Flooring?
            <textarea name="why_partner" rows={4} />
          </label>
        </div>
      </div>

      <Recaptcha ref={captchaRef} className="form-recaptcha" />
      {captchaError && (
        <p className="long-form-error" role="alert">
          Please confirm you are not a robot before submitting.
        </p>
      )}

      <div className="long-form-actions">
        <button type="submit" className="btn btn-primary btn-lg btn-block" disabled={sending}>
          {sending ? 'Submitting...' : 'Submit Partner Interest'}
        </button>
        {errored && (
          <p className="long-form-error" role="alert">
            Something went wrong submitting your inquiry. Please try again, or call us directly at{' '}
            <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a>.
          </p>
        )}
        <p className="long-form-trust">
          Submission does not automatically create a partnership or guarantee acceptance into the Zelo
          Flooring Professional Network. Zelo Flooring may review references, licensing, insurance,
          experience, reputation, and business practices before establishing a professional relationship.
        </p>
      </div>
    </form>
  );
}
