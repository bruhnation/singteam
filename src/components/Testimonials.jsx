"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { CONTACT, TESTIMONIALS } from "../data/siteData";

const AUTOPLAY_MS = 7000;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();
  const current = TESTIMONIALS[index];

  useEffect(() => {
    if (paused || reducedMotion) return undefined;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, reducedMotion]);

  const goTo = (next) => {
    setPaused(true);
    setIndex(((next % TESTIMONIALS.length) + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="testimonials" aria-label="Client reviews">
      <div className="container">
        <header className="testimonials-header">
          <p className="eyebrow">Client reviews</p>
          <h2 className="display testimonials-title">
            Word of <span className="dim">mouth.</span>
          </h2>
        </header>

        <div
          className="testimonial-stage"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <span className="testimonial-mark" aria-hidden="true">
            &ldquo;
          </span>
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              className="testimonial"
              initial={reducedMotion ? false : { opacity: 0, y: 28, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={reducedMotion ? undefined : { opacity: 0, y: -20, filter: "blur(6px)" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <blockquote className="testimonial__quote">{current.quote}</blockquote>
              <figcaption className="testimonial__byline">
                <span className="testimonial__author">{current.author}</span>
                <span className="testimonial__detail">{current.detail}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <div className="testimonial-controls">
            <div className="testimonial-dots" role="tablist" aria-label="Choose review">
              {TESTIMONIALS.map((item, dotIndex) => (
                <button
                  key={item.author}
                  type="button"
                  role="tab"
                  aria-selected={dotIndex === index}
                  aria-label={`Review by ${item.author}`}
                  className={`testimonial-dot${dotIndex === index ? " is-active" : ""}`}
                  onClick={() => goTo(dotIndex)}
                />
              ))}
            </div>
            <div className="testimonial-arrows">
              <button type="button" onClick={() => goTo(index - 1)} aria-label="Previous review">
                ←
              </button>
              <button type="button" onClick={() => goTo(index + 1)} aria-label="Next review">
                →
              </button>
            </div>
          </div>
        </div>

        <a
          className="testimonials-more link-hover-line"
          href={CONTACT.googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read all Google reviews <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
