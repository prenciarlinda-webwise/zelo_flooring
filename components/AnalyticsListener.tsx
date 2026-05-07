'use client';

import { useEffect } from 'react';
import { track } from '@/lib/track';

function identifyPlatform(url: string): string | null {
  if (url.includes('facebook.com')) return 'facebook';
  if (url.includes('instagram.com')) return 'instagram';
  if (url.includes('yelp.com')) return 'yelp';
  if (url.includes('thumbtack.com')) return 'thumbtack';
  if (url.includes('mapquest.com')) return 'mapquest';
  if (url.includes('bbb.org')) return 'bbb';
  if (url.includes('cslb.ca.gov')) return 'cslb';
  if (url.includes('wa.me') || url.includes('whatsapp.com')) return 'whatsapp';
  return null;
}

// Listens for clicks site-wide on anchor tags and pushes click events to
// the dataLayer for GTM. Avoids littering every link with onClick handlers.
export default function AnalyticsListener() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = (e.target as HTMLElement | null)?.closest?.('a');
      if (!target) return;
      const href = target.getAttribute('href') || '';
      const label = (target.textContent || '').trim().slice(0, 80);

      if (href.startsWith('tel:')) {
        track('phone_click', {
          phone: href.replace('tel:', ''),
          link_text: label,
        });
        return;
      }

      if (href.startsWith('mailto:')) {
        track('email_click', {
          email: href.replace('mailto:', ''),
          link_text: label,
        });
        return;
      }

      if (href.startsWith('https://wa.me/') || href.includes('whatsapp.com')) {
        track('whatsapp_click', { link_text: label });
        return;
      }

      // Outbound profile/social clicks (BBB, Yelp, Thumbtack, FB, IG, MapQuest, CSLB)
      const platform = identifyPlatform(href);
      if (platform) {
        track('profile_click', {
          platform,
          url: href,
          link_text: label,
        });
        return;
      }
    }

    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  return null;
}
