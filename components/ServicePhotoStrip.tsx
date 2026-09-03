'use client';

import { useState } from 'react';
import PhotoLightbox from './PhotoLightbox';

type Photo = { src: string; alt: string };

// Photo grid on a service page's city-context section. Always has at least the
// secondaryImage; services with confirmed-material realPhotos (currently carpet, LVP,
// hardwood, tile — see the note on Service.realPhotos) show those alongside it. auto-fit
// column sizing (see globals.css) means 1 photo and 5 photos both render as an evenly
// sized, centered set instead of a fixed grid with dead trailing cells. Click any photo
// to zoom, same viewer as ProjectGallery/BehindTheScenes.
export default function ServicePhotoStrip({ photos }: { photos: Photo[] }) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  if (!photos || photos.length === 0) return null;

  return (
    <div className="service-photo-strip">
      {photos.map((photo, i) => (
        <button
          type="button"
          key={photo.src}
          className="service-photo-strip-item"
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
