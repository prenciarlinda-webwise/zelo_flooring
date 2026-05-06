'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PhoneIcon, PinIcon, MailIcon, ClockIcon } from './Icons';
import { SITE } from '@/lib/areas';
import { SERVICES } from '@/lib/services';

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    return () => document.body.classList.remove('nav-open');
  }, [open]);

  const close = () => setOpen(false);

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
            <span><ClockIcon size={14} /> Mon-Sun 8a-5p</span>
            <span className="divider" />
            <span><MailIcon size={14} /> <a href={`mailto:${SITE.email}`}>{SITE.email}</a></span>
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
              src="/logo.png"
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
              <li className="has-dropdown">
                <Link href="/flooring-san-diego" onClick={close}>
                  Flooring <span className="caret">▾</span>
                </Link>
                <ul className="dropdown">
                  {SERVICES.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/${s.slug}`} onClick={close}>{s.shortName}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li><Link href="/service-areas" onClick={close}>Service Areas</Link></li>
              <li><Link href="/blog" onClick={close}>Blog</Link></li>
              <li><Link href="/contact" onClick={close}>Contact</Link></li>
            </ul>
          </nav>

          <Link href="/free-estimate" className="btn btn-primary header-cta">
            Free Estimate
          </Link>

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
