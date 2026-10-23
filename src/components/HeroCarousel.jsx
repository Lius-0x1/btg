"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SLIDE_INTERVAL = 4000; // ms each slide stays on screen before the next slides in
const SLIDE_DURATION = 700; // ms the slide animation itself takes

const clampTwoLines = {
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
};

export default function HeroCarousel({ slides }) {
  const [active, setActive] = useState(0);
  const [leaving, setLeaving] = useState(null); // slide currently sliding out to the left
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  // Respect "reduce motion": no autoplay, no sliding animation.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = (e) => setReduceMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Auto-advance. Re-arms whenever the active slide changes, so clicking a dot
  // restarts the countdown instead of flipping again a moment later.
  useEffect(() => {
    if (!slides || slides.length < 2 || paused || reduceMotion) return;
    const t = setTimeout(() => {
      setLeaving(active);
      setActive((active + 1) % slides.length);
    }, SLIDE_INTERVAL);
    return () => clearTimeout(t);
  }, [active, paused, reduceMotion, slides]);

  // Once the outgoing slide has finished leaving, park it off-screen on the right.
  useEffect(() => {
    if (leaving === null) return;
    const t = setTimeout(() => setLeaving(null), SLIDE_DURATION + 50);
    return () => clearTimeout(t);
  }, [leaving]);

  if (!slides || slides.length === 0) return null;

  const goTo = (next) => {
    if (next === active) return;
    setLeaving(active);
    setActive(next);
  };

  return (
    <div
      className="hero-card"
      aria-roledescription="carousel"
      aria-label="Latest from Before They Graduate"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* All slides share one grid cell, so the card is always as tall as the
          tallest slide and nothing jumps when the slides swap. */}
      <div style={{ display: "grid", overflow: "hidden" }}>
        {slides.map((slide, i) => {
          const isActive = i === active;
          const isLeaving = i === leaving;
          const isStory = slide.kind === "story";

          return (
            <div
              key={`${slide.kind}-${i}`}
              aria-hidden={!isActive}
              inert={!isActive}
              style={{
                gridArea: "1 / 1",
                transform: isActive ? "translateX(0)" : isLeaving ? "translateX(-100%)" : "translateX(100%)",
                transition:
                  (isActive || isLeaving) && !reduceMotion
                    ? `transform ${SLIDE_DURATION}ms cubic-bezier(.4, 0, .2, 1)`
                    : "none",
              }}
            >
              <div className="hero-thumb" style={{ position: "relative", aspectRatio: "16 / 9", overflow: "hidden" }}>
                <Image
                  src={slide.image}
                  alt={slide.imageAlt || slide.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 480px"
                  priority={i === 0}
                  unoptimized={!!slide.unoptimized}
                  style={{ objectFit: "cover", objectPosition: slide.objectPosition || "center" }}
                />
                <div className="hero-thumb-overlay"></div>
                <span className="ep-pill">{slide.pill}</span>

                {isStory ? (
                  <Link
                    href={slide.href}
                    aria-label={`Read the story: ${slide.title}`}
                    style={{ position: "absolute", inset: 0, zIndex: 2 }}
                  />
                ) : (
                  <a className="play-ring" href={slide.href} target="_blank" rel="noopener noreferrer">
                    <div className="play-icon"></div>
                  </a>
                )}
              </div>

              <div className="hero-card-body">
                <div className="hero-card-title" style={isStory ? clampTwoLines : undefined}>{slide.title}</div>
                <div className="hero-card-meta">{slide.meta}</div>
                {isStory && (
                  <Link
                    href={slide.href}
                    style={{
                      display: "inline-block",
                      marginTop: ".6rem",
                      color: "var(--orange)",
                      fontSize: ".72rem",
                      textTransform: "uppercase",
                      letterSpacing: ".08em",
                    }}
                  >
                    Read the story →
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {slides.length > 1 && (
        <div style={{ display: "flex", justifyContent: "center", gap: ".45rem", padding: ".25rem 0 1rem" }}>
          {slides.map((slide, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show slide ${i + 1}`}
              aria-current={i === active}
              style={{
                width: i === active ? 22 : 8,
                height: 8,
                borderRadius: 999,
                border: "none",
                padding: 0,
                cursor: "pointer",
                background: i === active ? "var(--orange)" : "var(--muted)",
                opacity: i === active ? 1 : 0.5,
                transition: "width .3s ease, background .3s ease, opacity .3s ease",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}