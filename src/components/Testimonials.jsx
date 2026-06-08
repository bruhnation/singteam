"use client";

import { useState } from "react";
import { TESTIMONIALS } from "../data/siteData";
import Reveal from "./Reveal";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = TESTIMONIALS[index];

  const prev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);

  return (
    <section id="testimonials" className="testimonials">
      <Reveal className="container">
        <div className="section-header">
          <p className="eyebrow">Client stories</p>
          <h2>What our clients say</h2>
        </div>
        <div className="testimonial-slider">
          <div className="testimonial-slide active">
            <blockquote>&ldquo;{current.quote}&rdquo;</blockquote>
            <cite>{current.author}</cite>
          </div>
        </div>
        {TESTIMONIALS.length > 1 && (
          <div className="testimonial-nav">
            <button type="button" onClick={prev} aria-label="Previous testimonial">
              ←
            </button>
            <button type="button" onClick={next} aria-label="Next testimonial">
              →
            </button>
          </div>
        )}
      </Reveal>
    </section>
  );
}
