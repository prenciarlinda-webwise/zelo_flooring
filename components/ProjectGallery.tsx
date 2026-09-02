'use client';

import { useState } from 'react';
import Link from 'next/link';
import PhotoLightbox from './PhotoLightbox';

type Props = {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  photos?: string[];
  initialCount?: number;
  /** Where "View All N Projects" sends visitors. Set to undefined to hide the link
   * entirely (e.g. on the /projects page itself, which already shows everything). */
  viewAllHref?: string | null;
};

// 2026-09-02: client flagged project-37 as "visibly the before" sitting in a gallery
// presented as finished work. Checked all 44 and found 6 that are actually demo/subfloor/
// self-leveling/mid-install shots, not a finished result: 20, 29, 30, 35, 37, 40. No EXIF
// timestamps to reliably pair any of them with a specific "after" shot elsewhere in this
// set (only 01-03 have datetime metadata at all), so rather than guess at a pairing and
// risk it being wrong, moved all 6 to BehindTheScenes.tsx instead — that's exactly the
// "in-progress" content that section already presents, so they're still on the site,
// just grouped with photos of the same kind instead of mixed into "finished work".
// 2026-09-02: client asked to group these by material. There's no metadata for any of
// this — went through all 38 remaining photos individually (not guessing from the small
// contact-sheet thumbnails; a first pass misread 01/02/03 as carpet from the thumbnail,
// they're actually a flecked resilient/VCT-look sheet floor, caught on a closer look).
// Grouped as: wood-look (hardwood or LVP — genuinely can't always tell those two apart
// from a phone photo, so they're one bucket), carpet, tile/resilient, then the 2 RV/
// motorhome interior shots on their own at the end (real Zelo jobs, but a vehicle isn't
// a home flooring material category, so they don't belong grouped into any of the above).
const PORTFOLIO_WOOD_LOOK = [4, 5, 6, 7, 8, 12, 13, 14, 15, 18, 19, 22, 25, 26, 27, 33, 36, 38, 42, 44];
const PORTFOLIO_CARPET = [11, 16, 17, 21, 23, 24, 28, 31, 32, 34, 39, 43];
const PORTFOLIO_TILE = [1, 2, 3, 41];
const PORTFOLIO_OTHER = [9, 10]; // RV/motorhome interiors
const PORTFOLIO_PHOTOS = [
  ...PORTFOLIO_WOOD_LOOK,
  ...PORTFOLIO_CARPET,
  ...PORTFOLIO_TILE,
  ...PORTFOLIO_OTHER,
].map((n) => `/img/projects/portfolio/zelo-project-${String(n).padStart(2, '0')}.webp`);

// 2026-08-31: added from a fresh batch of ~300 real job-site photos the client uploaded.
// Draft filenames (stair/room/kitchen/etc + sequence) — staging only, resized to a max
// 1600px edge and recompressed as jpg. Client will confirm which stay before the final
// webp-convert + service/location-based rename + jpg cleanup pass.
// 2026-09-01: dropped 3 (1 room, 2 carpet) that were unfinished/messy demo shots, not
// the polished "recent work" result this gallery is presenting — client flagged the set
// as having some bad-quality entries. Remaining files renumbered sequentially.
const NEW_2025_PHOTOS = [
  ...Array.from({ length: 9 }, (_, i) => `/img/projects/2025-showcase/stair-${String(i + 1).padStart(2, '0')}.jpg`),
  ...Array.from({ length: 14 }, (_, i) => `/img/projects/2025-showcase/room-${String(i + 1).padStart(2, '0')}.jpg`),
  ...Array.from({ length: 6 }, (_, i) => `/img/projects/2025-showcase/kitchen-${String(i + 1).padStart(2, '0')}.jpg`),
  ...Array.from({ length: 2 }, (_, i) => `/img/projects/2025-showcase/bath-${String(i + 1).padStart(2, '0')}.jpg`),
  ...Array.from({ length: 2 }, (_, i) => `/img/projects/2025-showcase/bed-${String(i + 1).padStart(2, '0')}.jpg`),
  ...Array.from({ length: 3 }, (_, i) => `/img/projects/2025-showcase/tile-${String(i + 1).padStart(2, '0')}.jpg`),
  // 2026-09-02: carpet-01/02 removed — client review caught these are actually old, worn
  // carpet awaiting replacement, not finished Zelo work. Moved to BehindTheScenes.tsx.
];

const DEFAULT_PHOTOS = [...NEW_2025_PHOTOS, ...PORTFOLIO_PHOTOS];

export default function ProjectGallery({
  eyebrow = 'Recent Work',
  heading = 'Recent Zelo Flooring Projects',
  subheading = 'Real installs across San Diego County. Carpet, LVP, hardwood, and tile, all completed by the Zelo Flooring team.',
  photos = DEFAULT_PHOTOS,
  initialCount = 6,
  viewAllHref = '/projects',
}: Props) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const visible = photos.slice(0, initialCount);
  const hasMore = viewAllHref && photos.length > initialCount;
  const lightboxPhotos = visible.map((src, i) => ({ src, alt: `Zelo Flooring project ${i + 1}` }));

  return (
    <section className="section section-cream project-gallery-section">
      <div className="container">
        <div className="section-header center">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{heading}</h2>
          {subheading && <p>{subheading}</p>}
        </div>

        <ul className="project-gallery-grid">
          {visible.map((src, i) => (
            <li key={src} className="project-gallery-item">
              <button
                type="button"
                className="project-gallery-thumb"
                onClick={() => setLightbox(i)}
                aria-label={`View project photo ${i + 1}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={`Zelo Flooring project ${i + 1}`} width={800} height={800} loading="lazy" decoding="async" />
              </button>
            </li>
          ))}
        </ul>

        {hasMore && (
          <div className="project-gallery-more">
            <Link href={viewAllHref} className="btn btn-outline-orange">
              View All {photos.length} Projects
            </Link>
          </div>
        )}

        {lightbox !== null && (
          <PhotoLightbox
            photos={lightboxPhotos}
            index={lightbox}
            onClose={() => setLightbox(null)}
            onNavigate={setLightbox}
          />
        )}
      </div>
    </section>
  );
}
