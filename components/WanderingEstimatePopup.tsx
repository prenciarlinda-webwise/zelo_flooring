'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useEstimateModal, ESTIMATE_MODAL_SHOWN_KEY } from './EstimateModalProvider';
import { SERVICES } from '@/lib/services';
import { LOCATIONS } from '@/lib/locations';

const IDLE_DELAY_MS = 28000;

const ELIGIBLE_SLUGS = new Set([...SERVICES.map((s) => s.slug), ...LOCATIONS.map((l) => l.slug)]);

function isEligiblePath(pathname: string) {
  if (pathname === '/') return true;
  return ELIGIBLE_SLUGS.has(pathname.replace(/^\/|\/$/g, ''));
}

// Renders nothing. Starts one dwell-time timer per site visit (not reset by client-side
// navigation between pages, since that's still the same visit "wandering" the site) and
// auto-opens the estimate popup if the visitor hasn't converted or seen it yet, but only
// while they're on the home page, a service page, or a location page.
export default function WanderingEstimatePopup() {
  const pathname = usePathname();
  const pathnameRef = useRef(pathname);
  pathnameRef.current = pathname;
  const { open } = useEstimateModal();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (sessionStorage.getItem(ESTIMATE_MODAL_SHOWN_KEY)) return;
      if (!isEligiblePath(pathnameRef.current)) return;
      open('wander');
    }, IDLE_DELAY_MS);
    return () => clearTimeout(timer);
    // Intentionally mount-once: this models "time spent wandering the site this visit",
    // not "time spent on the current page".
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
