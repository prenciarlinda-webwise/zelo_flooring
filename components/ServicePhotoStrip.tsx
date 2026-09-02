'use client';

import { useState } from 'react';
import PhotoLightbox from './PhotoLightbox';

type Photo = { src: string; alt: string };

// Small strip of real Zelo job photos for this specific service/material, shown only
// when lib/services.ts has confirmed-material realPhotos for it (currently carpet, LVP,
// hardwood, tile — see the note on Service.realPhotos for why the others don't have one
// yet). Click any photo to zoom, same viewer as ProjectGallery/BehindTheScenes.
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
