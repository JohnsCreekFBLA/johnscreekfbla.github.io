import { useCallback, useEffect, useRef, useState } from 'react';

const SPEED_PX_PER_SEC = 28;

/**
 * Auto-scrolling photo strip for one event, with a click-to-open lightbox.
 *
 * Behaviour:
 *  - Scrolls continuously right-to-left, looping seamlessly.
 *  - Pauses on hover, on touch, when a photo has keyboard focus, when the
 *    lightbox is open, and when the browser tab is hidden.
 *  - Honours prefers-reduced-motion: no auto-scroll, plain scrollable strip.
 *  - Arrow keys / Escape work in the lightbox.
 *
 * To add photos to a gallery section, edit src/data/conferenceGallery.js.
 */
const GalleryCarousel = ({ section }) => {
  const images = section.images || [];
  const trackRef = useRef(null);
  const rafRef = useRef(0);
  const lastTsRef = useRef(0);
  const offsetRef = useRef(0);

  const [paused, setPaused] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Only loop when there are enough photos to be worth looping.
  const shouldLoop = images.length > 2;
  const rendered = shouldLoop ? [...images, ...images] : images;

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => setReducedMotion(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  const frozen = paused || reducedMotion || lightboxIndex !== null || !shouldLoop;

  useEffect(() => {
    const track = trackRef.current;
    if (!track || frozen) {
      lastTsRef.current = 0;
      return undefined;
    }

    const step = (ts) => {
      if (!lastTsRef.current) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;

      const half = track.scrollWidth / 2;
      if (half > 0) {
        offsetRef.current = (offsetRef.current + SPEED_PX_PER_SEC * dt) % half;
        track.scrollLeft = offsetRef.current;
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(rafRef.current);
      lastTsRef.current = 0;
    };
  }, [frozen]);

  // Keep our internal offset honest if the user scrolls the strip by hand.
  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track || !frozen) return;
    const half = track.scrollWidth / 2;
    if (half > 0) offsetRef.current = track.scrollLeft % half;
  }, [frozen]);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showNext = useCallback(
    (delta) =>
      setLightboxIndex((i) =>
        i === null ? i : (i + delta + images.length) % images.length
      ),
    [images.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext(1);
      if (e.key === 'ArrowLeft') showNext(-1);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [lightboxIndex, closeLightbox, showNext]);

  if (images.length === 0) return null;

  const active = lightboxIndex === null ? null : images[lightboxIndex];

  return (
    <section className="gallery-section" id={section.id}>
      <div className="gallery-section-header">
        <h2>{section.title}</h2>
        {section.label && <p>{section.label}</p>}
      </div>

      <div
        className="gallery-strip"
        ref={trackRef}
        onScroll={handleScroll}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        {rendered.map((image, i) => {
          const realIndex = i % images.length;
          return (
            <button
              type="button"
              className="gallery-card"
              key={`${image.src}-${i}`}
              onClick={() => setLightboxIndex(realIndex)}
              aria-label={`Open photo: ${image.alt}`}
              tabIndex={i < images.length ? 0 : -1}
              aria-hidden={i >= images.length}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
            </button>
          );
        })}
      </div>

      {active && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="gallery-lightbox-close"
            onClick={closeLightbox}
            aria-label="Close photo"
          >
            &times;
          </button>
          <button
            type="button"
            className="gallery-lightbox-nav prev"
            onClick={(e) => {
              e.stopPropagation();
              showNext(-1);
            }}
            aria-label="Previous photo"
          >
            &#8249;
          </button>
          <figure
            className="gallery-lightbox-figure"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={active.src} alt={active.alt} />
            <figcaption>{active.alt}</figcaption>
          </figure>
          <button
            type="button"
            className="gallery-lightbox-nav next"
            onClick={(e) => {
              e.stopPropagation();
              showNext(1);
            }}
            aria-label="Next photo"
          >
            &#8250;
          </button>
        </div>
      )}
    </section>
  );
};

export default GalleryCarousel;
