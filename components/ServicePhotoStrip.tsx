'use client';

import { useState } from 'react';
import PhotoLightbox from './PhotoLightbox';

type Photo = { src: string; alt: string };

// 2026-09-03: client wants this below the city-context text (not side-by-side), but as a
// horizontal slider, not a grid — a grid with an uneven photo count (e.g. 4 in a 3-column
// grid: 3 up, 1 down, 2 empty cells) always leaves dead space. A single scrollable row
// sidesteps that entirely: any photo count just scrolls, nothing to leave empty. Same
// slider mechanics as the homepage "Flooring Guides" blog-guides-slider.
export default function ServicePhotoStrip({ photos }: { photos: Photo[] }) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  if (!photos || photos.length === 0) return null;

  return (
    <div className="service-photo-slider">
      {photos.map((photo, i) => (
        <button
          type="button"
          key={photo.src}
          className="service-photo-slider-item"
          onClick={() => setLightbox(i)}
          aria-label={`View photo: ${photo.alt}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
        </button>
      ))}

      {lightbox !== null && (
        <PhotoLightbox
          photos={photos}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onNavigate={setLightbox}
        />
      )}
    </div>
  );
}
