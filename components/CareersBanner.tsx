'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

// Homepage "Now Hiring" banner. Opens a lightweight teaser modal (not the full application,
// which runs many sections long) with a CTA through to the real form at /careers. Reuses the
// shared coupon-modal-* backdrop/card/close-button base (see CouponsBlock/EstimateModal), with
// a `careers-teaser-modal` modifier for its own content.
export default function CareersBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section className="careers-banner">
      <div className="container careers-banner-inner">
        <div className="careers-banner-text">
          <span className="eyebrow">Now Hiring</span>
          <h2>Join Our Installer Network</h2>
          <p>
            We&apos;re looking for reliable, skilled flooring installers and subcontractor crews across
            San Diego County.
          </p>
        </div>
        <button type="button" className="btn btn-primary btn-lg" onClick={() => setOpen(true)}>
          Apply to Join Our Team
        </button>
      </div>

      {open && (
        <div
          className="coupon-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Join the Zelo Flooring installer network"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="coupon-modal careers-teaser-modal">
            <button type="button" className="coupon-modal-close" aria-label="Close" onClick={() => setOpen(false)}>
              &times;
            </button>
            <span className="eyebrow">Now Hiring</span>
            <p className="coupon-modal-title">Installer &amp; Subcontractor Application</p>
            <p className="coupon-modal-body">
              We are looking for reliable, skilled installers and crews who take pride in quality
              workmanship, communication, professionalism, and clean job sites. Solo installers and
              subcontractor crews are both welcome, using the same application.
            </p>
            <ul className="careers-teaser-list">
              <li>Residential and commercial work across San Diego County</li>
              <li>Independent subcontractor / 1099 work</li>
              <li>CSLB C-15 licensed, bonded, and insured company</li>
            </ul>
            <Link href="/careers" className="btn btn-primary btn-block btn-lg" onClick={() => setOpen(false)}>
              Start Your Application
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
