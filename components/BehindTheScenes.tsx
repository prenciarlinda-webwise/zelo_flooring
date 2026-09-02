'use client';

import { useState } from 'react';
import Link from 'next/link';
import PhotoLightbox from './PhotoLightbox';

type Photo = {
  src: string;
  alt: string;
};

// 2026-08-31/2026-09-01: draft placement from the client's fresh job-site photo batch
// (see components/ProjectGallery.tsx for the matching note). Demo, subfloor prep, and
// self-leveling shots the site never had before. Staging filenames/paths only.
//
// 2026-09-01: client feedback was "not well placed" (the earlier masonry version let
// very tall portrait photos stack unevenly, one column running much longer than the
// next) and "some of them have bad quality" (a few were dim/blurry, and a few were
// mismatched demo-mess shots, not the polished result the section is presenting) plus
// visible captions reading oddly ("On our knees getting the install right"). Fixed by:
// dropping the 4 weakest photos (down from 18 to 14, renumbered sequentially), moving
// to a uniform grid with a fixed aspect-ratio box per tile (object-fit: contain, so
// nothing is cropped, just letterboxed on whichever side doesn't fill), and dropping
// the visible caption text entirely — alt text only now, for accessibility/SEO.
const PHOTOS: Photo[] = [
  { src: '/img/projects/2025-showcase/process/process-01.jpg', alt: 'Removing old flooring down to the subfloor' },
  { src: '/img/projects/2025-showcase/process/process-02.jpg', alt: 'Hallway stripped down to the subfloor' },
  { src: '/img/projects/2025-showcase/process/process-03.jpg', alt: 'Staircase subfloor prep before install' },
  { src: '/img/projects/2025-showcase/process/process-04.jpg', alt: 'Prepping a room for new flooring' },
  { src: '/img/projects/2025-showcase/process/process-05.jpg', alt: 'Self-leveling underlayment curing' },
  { src: '/img/projects/2025-showcase/process/process-06.jpg', alt: 'Pouring self-leveling underlayment' },
  { src: '/img/projects/2025-showcase/process/process-07.jpg', alt: 'The Zelo crew mid self-leveling pour' },
  { src: '/img/projects/2025-showcase/process/process-08.jpg', alt: 'Hauling flooring material into a job site' },
  { src: '/img/projects/2025-showcase/process/process-09.jpg', alt: 'Zelo installers laying vinyl plank flooring' },
  { src: '/img/projects/2025-showcase/process/process-10.jpg', alt: 'Spreading underlayment compound' },
  { src: '/img/projects/2025-showcase/process/process-11.jpg', alt: 'Taping off a staircase mid-install' },
  { src: '/img/projects/2025-showcase/process/process-12.jpg', alt: 'Prepping a spiral staircase for new hardwood' },
  { src: '/img/projects/2025-showcase/process/process-13.jpg', alt: 'Installing hardwood on a spiral staircase, tread by tread' },
  { src: '/img/projects/2025-showcase/process/process-14.jpg', alt: 'Subfloor prep before a new install' },
  // 2026-09-02: moved from ProjectGallery.tsx — visibly before/mid-install shots that
  // don't belong in a "finished work" gallery. See the note there for why they weren't
  // paired with a specific "after" (no reliable way to match them).
  { src: '/img/projects/portfolio/zelo-project-20.webp', alt: 'Self-leveling underlayment poured in a living room' },
  { src: '/img/projects/portfolio/zelo-project-29.webp', alt: 'Self-leveling underlayment curing before flooring install' },
  { src: '/img/projects/portfolio/zelo-project-30.webp', alt: 'Protecting a new floor with tape during a multi-room install' },
  { src: '/img/projects/portfolio/zelo-project-35.webp', alt: 'Installing dark plank flooring, mid-job' },
  { src: '/img/projects/portfolio/zelo-project-37.webp', alt: 'Subfloor prep before a home gym flooring install' },
  { src: '/img/projects/portfolio/zelo-project-40.webp', alt: 'Cork underlayment exposed during closet flooring prep' },
  // 2026-09-02: moved from ProjectGallery/Carpet's realPhotos — client review caught
  // these are old, worn carpet awaiting replacement, not a finished Zelo install.
  { src: '/img/projects/2025-showcase/carpet-01.jpg', alt: 'Old carpeted staircase before replacement' },
  { src: '/img/projects/2025-showcase/carpet-02.jpg', alt: 'Old, worn carpet before replacement' },
];

export default function BehindTheScenes({
  eyebrow = 'Behind the Scenes',
  heading = 'The Work Before the Reveal',
  subheading = 'The prep work behind every finished floor.',
  initialCount = 8,
  // 2026-09-02: this used to always render all 20 photos wherever it was placed, with
  // no preview/link-out — client feedback: "still many images, not a button to take you
  // to that part of the project." Now matches ProjectGallery's pattern: a short preview
  // plus a link to the full set on /projects (anchored straight to this section there).
  viewAllHref = '/projects#behind-the-scenes',
}: {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  initialCount?: number;
  viewAllHref?: string | null;
}) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const visible = PHOTOS.slice(0, initialCount);
  const hasMore = viewAllHref && PHOTOS.length > initialCount;
  const lightboxPhotos = visible.map((p) => ({ src: p.src, alt: p.alt }));

  return (
    <section id="behind-the-scenes" className="section section-brown behind-the-scenes-section">
      <div className="container">
        <div className="section-header center">
          <span className="eyebrow" style={{ color: 'var(--gold)' }}>{eyebrow}</span>
          <h2>{heading}</h2>
          {subheading && <p>{subheading}</p>}
        </div>

        <div className="bts-grid">
          {visible.map((photo, i) => (
            <button
              type="button"
              key={photo.src}
              className="bts-item"
              onClick={() => setLightbox(i)}
              aria-label={`View photo: ${photo.alt}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
            </button>
          ))}
        </div>

        {hasMore && (
          <div className="project-gallery-more">
            <Link href={viewAllHref} className="btn btn-outline">
              View All {PHOTOS.length} Photos
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
