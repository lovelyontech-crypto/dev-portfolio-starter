"use client";

import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from "react";

type SliderProps = {
  children: ReactNode;
  label: string;
  /** Milliseconds each slide stays before auto-advancing. */
  interval?: number;
  /** Slides visible at once on wide screens (>= 900px). */
  perViewDesktop?: number;
};

export default function Slider({ children, label, interval = 8000, perViewDesktop = 1 }: SliderProps) {
  const slides = Children.toArray(children);
  const [perView, setPerView] = useState(1);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [tick, setTick] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);

  const maxIndex = Math.max(0, slides.length - perView);
  const pages = maxIndex + 1;

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 900px)");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setPerView(wide.matches ? perViewDesktop : 1);
      setReducedMotion(motion.matches);
    };
    update();
    wide.addEventListener("change", update);
    motion.addEventListener("change", update);
    return () => {
      wide.removeEventListener("change", update);
      motion.removeEventListener("change", update);
    };
  }, [perViewDesktop]);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const go = useCallback(
    (next: number) => {
      setIndex(((next % pages) + pages) % pages);
      setTick((t) => t + 1);
    },
    [pages]
  );

  const autoplay = !paused && inView && !reducedMotion && pages > 1;

  useEffect(() => {
    if (!autoplay) return;
    const id = window.setTimeout(() => go(index + 1), interval);
    return () => window.clearTimeout(id);
  }, [autoplay, index, interval, go, tick]);

  return (
    <div
      ref={rootRef}
      className={`slider${autoplay ? " is-playing" : ""}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(index + 1);
        if (e.key === "ArrowLeft") go(index - 1);
      }}
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX;
        setPaused(true);
      }}
      onTouchEnd={(e) => {
        if (touchX.current !== null) {
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 45) go(index + (dx < 0 ? 1 : -1));
        }
        touchX.current = null;
      }}
    >
      <div className="slider-viewport">
        <div className="slider-track" style={{ transform: `translateX(-${(index * 100) / perView}%)` }}>
          {slides.map((slide, i) => {
            const visible = i >= index && i < index + perView;
            return (
              <div
                className="slider-slide"
                key={i}
                style={{ flexBasis: `${100 / perView}%` }}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${slides.length}`}
                aria-hidden={!visible}
                inert={!visible}
              >
                {slide}
              </div>
            );
          })}
        </div>
      </div>

      {pages > 1 && (
        <div className="slider-controls">
          <button type="button" className="slider-arrow" onClick={() => go(index - 1)} aria-label="Previous">←</button>
          <div className="slider-dots">
            {Array.from({ length: pages }, (_, i) => (
              <button
                type="button"
                key={i}
                className={`slider-dot${i === index ? " is-active" : ""}`}
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
              >
                {i === index && (
                  <span
                    key={`${index}-${tick}-${autoplay}`}
                    className="slider-progress"
                    style={{ animationDuration: `${interval}ms` }}
                  />
                )}
              </button>
            ))}
          </div>
          <span className="slider-count">{String(index + 1).padStart(2, "0")} / {String(pages).padStart(2, "0")}</span>
          <button type="button" className="slider-arrow" onClick={() => go(index + 1)} aria-label="Next">→</button>
        </div>
      )}
    </div>
  );
}
