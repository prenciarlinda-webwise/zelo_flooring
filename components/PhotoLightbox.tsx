'use client';

import { useEffect } from 'react';

type Photo = { src: string; alt: string };

type Props = {
  photos: Photo[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

// Shared full-size photo viewer with prev/next (slideshow-style) navigation. Used by
// ProjectGallery and BehindTheScenes so clicking any photo on the site opens the same
// zoomed-in, keyboard-navigable viewer instead of just sitting there un-clickable.
export default function PhotoLightbox({ photos, index, onClose, onNavigate }: Props) {
  const goPrev = () => onNavigate((index - 1 + photos.length) % photos.length);
  const goNext = () => onNavigate((index + 1) % photos.length);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, photos.length]);

  const photo = photos[index];
  if (!photo) return null;

  return (
    <div
      className="project-gallery-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <button type="button" className="project-gallery-lightbox-close" aria-label="Close photo" onClick={onClose}>
        &times;
      </button>

      {photos.length > 1 && (
        <button
          type="button"
          className="project-gallery-lightbox-nav project-gallery-lightbox-prev"
          aria-label="Previous photo"
          onClick={goPrev}
        >
          &lsaquo;
        </button>
      )}

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={photo.src} alt={photo.alt} className="project-gallery-lightbox-img" />

      {photos.length > 1 && (
        <>
          <button
            type="button"
            className="project-gallery-lightbox-nav project-gallery-lightbox-next"
            aria-label="Next photo"
            onClick={goNext}
          >
            &rsaquo;
          </button>
          <div className="project-gallery-lightbox-counter">{index + 1} / {photos.length}</div>
        </>
      )}
    </div>
  );
}
