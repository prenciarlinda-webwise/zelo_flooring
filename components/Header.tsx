'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PhoneIcon, PinIcon, ClockIcon } from './Icons';
import { SITE } from '@/lib/areas';
import { SERVICES } from '@/lib/services';
import { LOCATIONS } from '@/lib/locations';
import EstimateModalLink from './EstimateModalLink';

export default function Header() {
  const [open, setOpen] = useState(false);
  // Which dropdown is expanded on mobile (tap-to-expand). Desktop ignores this and uses hover.
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    return () => document.body.classList.remove('nav-open');
  }, [open]);

  const close = () => {
    setOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (key: string) => setOpenDropdown((prev) => (prev === key ? null : key));

  return (
    <>
      {/* TOP BAR */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <span><PinIcon size={14} /> {SITE.city}, {SITE.region}</span>
            <span><PhoneIcon size={14} /> <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a></span>
          </div>
          <div className="top-bar-right">
            <span><ClockIcon size={14} /> Open daily 7a-7p</span>
            <span className="divider" />
            <span>Lic: {SITE.license}</span>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="logo" onClick={close} aria-label="Zelo Flooring - Home">
            <Image
              src="/zelo-flooring-logo.png"
              alt="Zelo Flooring"
              width={180}
              height={56}
              priority
              className="logo-img"
            />
          </Link>

          <nav className={`main-nav${open ? ' open' : ''}`}>
            <ul>
              <li><Link href="/" onClick={close}>Home</Link></li>
              <li><Link href="/about-us" onClick={close}>About</Link></li>
              <li className={`has-dropdown${openDropdown === 'flooring' ? ' dropdown-open' : ''}`}>
                <div className="has-dropdown-row">
                  <Link href="/flooring-san-diego" onClick={close}>Flooring</Link>
                  <button
                    type="button"
                    className="caret-toggle"
                    onClick={() => toggleDropdown('flooring')}
                    aria-expanded={openDropdown === 'flooring'}
                    aria-label="Toggle Flooring submenu"
                  >
                    <span className="caret">▾</span>
                  </button>
                </div>
                <ul className="dropdown">
                  {SERVICES.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/${s.slug}`} onClick={close}>{s.shortName}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className={`has-dropdown${openDropdown === 'areas' ? ' dropdown-open' : ''}`}>
                <div className="has-dropdown-row">
                  <Link href="/service-areas" onClick={close}>Service Areas</Link>
                  <button
                    type="button"
                    className="caret-toggle"
                    onClick={() => toggleDropdown('areas')}
                    aria-expanded={openDropdown === 'areas'}
                    aria-label="Toggle Service Areas submenu"
                  >
                    <span className="caret">▾</span>
                  </button>
                </div>
                <ul className="dropdown">
                  {LOCATIONS.map((l) => (
                    <li key={l.slug}>
                      <Link href={`/${l.slug}`} onClick={close}>{l.city}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li><Link href="/projects" onClick={close}>Projects</Link></li>
              <li><Link href="/blog" onClick={close}>Blog</Link></li>
              <li><Link href="/careers" onClick={close}>Careers</Link></li>
              <li><Link href="/professional-network" onClick={close}>Partners</Link></li>
              <li><Link href="/contact" onClick={close}>Contact</Link></li>
            </ul>
          </nav>

          <EstimateModalLink className="btn btn-primary header-cta">
            Free Estimate
          </EstimateModalLink>

          <button
            className={`menu-toggle${open ? ' open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      <div className={`nav-backdrop${open ? ' open' : ''}`} onClick={close} aria-hidden="true" />
    </>
  );
}
