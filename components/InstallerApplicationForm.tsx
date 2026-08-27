'use client';

import { FormEvent, useRef, useState } from 'react';
import Recaptcha, { RecaptchaHandle } from './Recaptcha';
import { postToFormspree, APPLICATIONS_FORMSPREE_ENDPOINT } from '@/lib/formspree';
import { track } from '@/lib/track';
import { FLOORING_SKILLS, EXPERIENCE_RANGES, APPLICANT_TYPES } from '@/lib/careers-data';
import { SITE } from '@/lib/areas';

// One combined form for both solo installers and subcontractor crews (distinguished by the
// Applicant Type field below) - not two separate forms, since both are hired the same way.
export default function InstallerApplicationForm() {
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
    formData.set('_subject', `Installer Application - ${formData.get('full_name') || 'New Applicant'}`);

    setSending(true);
    try {
      await postToFormspree(APPLICATIONS_FORMSPREE_ENDPOINT, formData);
      track('lead_form_submit', {
        form_id: 'installer_application',
        applicant_type: formData.get('applicant_type'),
        city: formData.get('city'),
      });
      setSubmitted(true);
      form.reset();
      captchaRef.current?.reset();
    } catch (err) {
      console.error('Installer application submission failed:', err);
      track('lead_form_error', {
        form_id: 'installer_application',
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
        <p className="long-form-success-title">Application received.</p>
        <p>
          Thanks for applying to work with Zelo Flooring. We review every application and will reach
          out if it looks like a good fit for an upcoming project. Questions in the meantime? Call{' '}
          <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="long-form" onSubmit={handleSubmit}>
      <input type="hidden" name="form_name" value="Installer & Subcontractor Application" />

      <div className="long-form-section">
        <h3 className="long-form-section-title">Contact Information</h3>
        <div className="long-form-grid">
          <label className="long-form-field">
            Full Name *
            <input type="text" name="full_name" required autoComplete="name" />
          </label>
          <label className="long-form-field">
            Phone Number *
            <input type="tel" name="phone" required autoComplete="tel" />
          </label>
          <label className="long-form-field">
            Email *
            <input type="email" name="email" required autoComplete="email" />
          </label>
          <label className="long-form-field">
            City *
            <input type="text" name="city" required placeholder="e.g. San Diego, Chula Vista, Escondido" />
          </label>
        </div>
      </div>

      <div className="long-form-section">
        <h3 className="long-form-section-title">Experience &amp; Crew</h3>
        <div className="long-form-grid">
          <label className="long-form-field">
            Years of Flooring Experience *
            <select name="years_experience" required defaultValue="">
              <option value="" disabled>Select one</option>
              {EXPERIENCE_RANGES.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </label>
          <label className="long-form-field">
            Applicant Type *
            <select name="applicant_type" required defaultValue="">
              <option value="" disabled>Select one</option>
              {APPLICANT_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </label>
          <label className="long-form-field">
            Number of Installers on Crew
            <input type="number" name="crew_size" min={1} placeholder="e.g. 1" />
          </label>
          <label className="long-form-field">
            Languages Spoken
            <input type="text" name="languages" placeholder="e.g. English, Spanish" />
          </label>
        </div>
      </div>

      <div className="long-form-section">
        <h3 className="long-form-section-title">Flooring Skills</h3>
        <p className="long-form-hint">Check everything you or your crew are experienced installing.</p>
        <div className="long-form-checkbox-grid">
          {FLOORING_SKILLS.map((skill) => (
            <label key={skill} className="long-form-checkbox-item">
              <input type="checkbox" name="skills" value={skill} />
              <span>{skill}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="long-form-section">
        <h3 className="long-form-section-title">Qualifications</h3>
        <div className="long-form-yesno-grid">
          <YesNo label="Authorized to Work in the U.S." name="authorized_to_work" required />
          <YesNo label="Reliable Transportation" name="reliable_transportation" required />
          <YesNo label="Own Professional Tools &amp; Equipment" name="own_tools" required />
          <YesNo label="General Liability Insurance" name="general_liability_insurance" />
          <YesNo label="Workers' Compensation Insurance" name="workers_comp_insurance" />
          <YesNo label="California Contractor License" name="ca_contractor_license" />
        </div>
        <label className="long-form-field">
          License Number, if applicable
          <input type="text" name="license_number" />
        </label>
      </div>

      <div className="long-form-section">
        <h3 className="long-form-section-title">Availability &amp; Work Preferences</h3>
        <div className="long-form-checkbox-grid long-form-checkbox-grid-narrow">
          <label className="long-form-checkbox-item">
            <input type="checkbox" name="availability" value="Residential Projects" />
            <span>Residential Projects</span>
          </label>
          <label className="long-form-checkbox-item">
            <input type="checkbox" name="availability" value="Commercial Projects" />
            <span>Commercial Projects</span>
          </label>
          <label className="long-form-checkbox-item">
            <input type="checkbox" name="availability" value="Nights / Weekends" />
            <span>Nights / Weekends</span>
          </label>
        </div>
        <div className="long-form-grid">
          <label className="long-form-field">
            Areas You Can Work
            <input type="text" name="work_areas" placeholder="e.g. La Jolla, Chula Vista, North County" />
          </label>
          <label className="long-form-field">
            Typical Labor Rates
            <input type="text" name="labor_rates" placeholder="e.g. $2.50/sq ft or $400/day" />
          </label>
        </div>
      </div>

      <div className="long-form-section">
        <h3 className="long-form-section-title">Experience &amp; References</h3>
        <label className="long-form-field long-form-field-full">
          Tell Us About Your Flooring Experience *
          <textarea name="experience_details" rows={5} required />
        </label>
        <label className="long-form-field long-form-field-full">
          Professional References
          <textarea name="references" rows={3} placeholder="Name, company, and phone for 1-3 references" />
        </label>
        <label className="long-form-field long-form-field-full long-form-file">
          Upload Project Photos
          <input type="file" name="project_photos" accept="image/*" multiple />
          <span className="long-form-hint">Optional. Photos up to 10MB each.</span>
        </label>
        <label className="long-form-field long-form-field-full long-form-file">
          Upload License / Insurance
          <input type="file" name="license_insurance_docs" accept="image/*,.pdf" multiple />
          <span className="long-form-hint">Optional. Images or PDFs up to 10MB each.</span>
        </label>
      </div>

      <div className="long-form-section">
        <h3 className="long-form-section-title">Professional Standards</h3>
        <div className="long-form-standards">
          <label className="long-form-standards-item">
            <input type="checkbox" name="agree_professional_conduct" value="Yes" required />
            <span>
              I understand that Zelo Flooring expects professional conduct, proper PPE, clean work
              areas, quality workmanship, good communication, and required project photos/documentation. *
            </span>
          </label>
          <label className="long-form-standards-item">
            <input type="checkbox" name="agree_1099" value="Yes" required />
            <span>
              I understand I am applying for independent subcontractor / 1099 work and that submitting
              this application does not guarantee work, employment, or project assignments. *
            </span>
          </label>
          <label className="long-form-standards-item">
            <input type="checkbox" name="agree_accurate" value="Yes" required />
            <span>
              I certify that the information provided in this application is accurate and may be
              verified by Zelo Flooring. *
            </span>
          </label>
          <label className="long-form-standards-item">
            <input type="checkbox" name="acknowledge_future_employment" value="Yes" />
            <span>
              I understand that qualified subcontractors who demonstrate strong workmanship,
              reliability, professionalism, and a good fit with Zelo Flooring may be considered for
              future employment opportunities with the company.
            </span>
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
          {sending ? 'Submitting...' : 'Submit Installer Application'}
        </button>
        {errored && (
          <p className="long-form-error" role="alert">
            Something went wrong submitting your application. Please try again, or call us directly at{' '}
            <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a>.
          </p>
        )}
        <p className="long-form-trust">Your information is private and only used to evaluate your application.</p>
      </div>
    </form>
  );
}

function YesNo({ label, name, required }: { label: string; name: string; required?: boolean }) {
  return (
    <div className="long-form-yesno">
      <span className="long-form-yesno-label">
        {label}
        {required ? ' *' : ''}
      </span>
      <div className="long-form-radio-group">
        <label><input type="radio" name={name} value="Yes" required={required} /> Yes</label>
        <label><input type="radio" name={name} value="No" required={required} /> No</label>
      </div>
    </div>
  );
}
