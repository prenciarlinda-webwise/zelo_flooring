import Link from 'next/link';
import { PhoneIcon, ArrowIcon } from './Icons';
import { SITE } from '@/lib/areas';

export default function HomeHero() {
  return (
    <section className="home-hero">
      <div className="home-hero-inner">
        <div className="home-hero-text">
          <span className="eyebrow" style={{ color: '#E8B547' }}>San Diego&apos;s Trusted Flooring Pros</span>
          <h1>
            <span>Flooring San Diego</span> - Installed Right the First Time.
          </h1>
          <p className="lede">
            Zelo Flooring is a San Diego flooring company specializing in carpet, vinyl, hardwood, laminate and tile installation. We provide free in-home estimates, honest pricing, and certified installers across San Diego County.
          </p>

          <div className="home-hero-cards">
            <div className="offer-card">
              <div className="badge">FREE</div>
              <div>
                <p className="offer-title">In-Home Estimate</p>
                <p>We bring the showroom to you - samples, measurements, and a real quote.</p>
              </div>
            </div>
            <div className="offer-card">
              <div className="badge">$200 OFF</div>
              <div>
                <p className="offer-title">Whole-Home Installs</p>
                <p>Save on jobs over 800 sq ft. Mention this offer when you call.</p>
              </div>
            </div>
          </div>

          <div className="home-hero-cta">
            <a href={`tel:${SITE.phoneRaw}`} className="btn btn-primary btn-lg">
              <PhoneIcon size={18} /> Call {SITE.phone}
            </a>
            <Link href="/free-estimate" className="btn btn-ghost-light btn-lg">
              Get Free Estimate <ArrowIcon size={16} />
            </Link>
          </div>
        </div>
        <div className="home-hero-image" aria-hidden="true" />
      </div>
    </section>
  );
}
