import Link from 'next/link';
import Image from 'next/image';
import { SITE, SERVICE_AREAS } from '@/lib/areas';
import { SERVICES } from '@/lib/services';
import { PhoneIcon, MailIcon, PinIcon, MapQuestIcon } from './Icons';

function neighborhoodSlug(name: string) {
  return 'flooring-' + name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <Link href="/" className="logo logo-light" aria-label="Zelo Flooring - Home">
            <Image
              src="/logo.png"
              alt="Zelo Flooring"
              width={180}
              height={56}
              className="logo-img logo-img-footer"
            />
          </Link>
          <p>
            Zelo Flooring provides professional flooring sales and installation services in {SITE.city} for residential and commercial spaces. From carpet to hardwood, we install it right the first time.
          </p>
          <div className="license">
            <strong>LICENSED · BONDED · INSURED</strong>
            CSLB Lic: {SITE.license}
          </div>
        </div>

        <div className="footer-col">
          <p className="footer-label">Our Services</p>
          <ul>
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`}>{s.shortName} Flooring</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <p className="footer-label">Quick Links</p>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/services">All Services</Link></li>
            <li><Link href="/service-areas">Service Areas</Link></li>
            <li><Link href="/san-diego-flooring-faqs">FAQ</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/free-estimate">Free Estimate</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <p className="footer-label">Get In Touch</p>
          <p><PhoneIcon size={14} /> <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a></p>
          <p><MailIcon size={14} /> <a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
          <p><PinIcon size={14} /> {SITE.address}</p>
          <p style={{ marginTop: 14, fontSize: '0.82rem', opacity: 0.85 }}>
            <strong style={{ color: 'white' }}>Hours:</strong><br />
            {SITE.hoursDisplay}
          </p>
          <div className="socials" aria-label="Zelo Flooring on social media and review sites">
            <a
              href={SITE.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Zelo Flooring on Facebook"
              className="social-pill social-pill-icon"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/facebook-logo.png" alt="Facebook" />
            </a>
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Zelo Flooring on Instagram"
              className="social-pill social-pill-icon"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/instagram-logo.png" alt="Instagram" />
            </a>
            <a
              href={SITE.yelpUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Zelo Flooring on Yelp"
              className="social-pill social-pill-wordmark"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/yelp-logo.png" alt="Yelp" />
            </a>
            <a
              href={SITE.thumbtackUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Zelo Flooring on Thumbtack"
              className="social-pill social-pill-wordmark"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/thumbtack-logo.png" alt="Thumbtack" />
            </a>
            <a
              href={SITE.bbb.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Zelo Flooring on BBB, ${SITE.bbb.rating} rated`}
              className="social-pill social-pill-bbb"
            >
              <span className="social-pill-bbb-letters">BBB</span>
              <span className="social-pill-bbb-rating">{SITE.bbb.rating}</span>
            </a>
            <a
              href={SITE.mapquestUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Zelo Flooring on MapQuest"
              className="social-pill social-pill-svg"
            >
              <MapQuestIcon size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Service area dropdown */}
      <div className="footer-areas">
        <div className="container">
          <details className="footer-areas-details">
            <summary>
              <span className="footer-areas-label">Service Areas</span>
              <span className="footer-areas-hint">{SERVICE_AREAS.length} San Diego neighborhoods · tap to expand</span>
            </summary>
            <div className="footer-areas-grid">
              {SERVICE_AREAS.map((area) => (
                <Link key={area.name} href={`/${neighborhoodSlug(area.name)}`} className="footer-area-link">
                  <PinIcon size={12} />
                  <span>{area.name}</span>
                </Link>
              ))}
            </div>
          </details>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} {SITE.name}. All Rights Reserved. CSLB #{SITE.license}</p>
          <p className="footer-legal-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span aria-hidden="true">·</span>
            <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
          </p>
          <p>Built by <a href="https://www.websiteandseoagency.com/" target="_blank" rel="noopener noreferrer">Web Wise</a></p>
        </div>
      </div>
    </footer>
  );
}
