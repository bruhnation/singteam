"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { MANIFESTO, STATS, VALUES } from "../data/siteData";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function ManifestoWords({ text }) {
  return text.split(" ").map((word, index) => (
    <span key={`${word}-${index}`} className="manifesto__word-wrap">
      <span className="manifesto__word">{word}</span>{" "}
    </span>
  ));
}

export default function About() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // Manifesto: each word develops from haze to ink as the paragraph crosses the viewport.
      gsap.fromTo(
        ".manifesto__word",
        { opacity: 0.12 },
        {
          opacity: 1,
          stagger: 0.4,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-manifesto",
            start: "top 78%",
            end: "center 42%",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        },
      );

      gsap.fromTo(
        ".about-copy p",
        { autoAlpha: 0, y: 36 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: ".about-copy", start: "top 82%", once: true },
        },
      );

      // Stats: rule draws in, then each numeral counts up once.
      gsap.utils.toArray(".stat").forEach((stat, index) => {
        const valueEl = stat.querySelector(".stat__num");
        const target = Number(valueEl.dataset.value);
        const counter = { value: 0 };

        gsap.fromTo(
          stat,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: ".about-stats", start: "top 84%", once: true },
          },
        );

        gsap.to(counter, {
          value: target,
          duration: 1.6,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: ".about-stats", start: "top 84%", once: true },
          onUpdate: () => {
            valueEl.textContent = Math.round(counter.value);
          },
        });
      });

      gsap.fromTo(
        ".about-values li",
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".about-values", start: "top 86%", once: true },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section id="about" ref={sectionRef} className="about" aria-label="About the Sing Real Estate Team">
      <div className="container">
        <p className="eyebrow">Real estate · Legacy · Conscious living</p>

        <div className="about-manifesto">
          <p className="manifesto">
            <ManifestoWords text={MANIFESTO.lead} />
          </p>
        </div>

        <div className="about-copy">
          {MANIFESTO.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <dl className="about-stats">
          {STATS.map((stat) => (
            <div key={stat.label} className="stat">
              <dt className="stat__label">{stat.label}</dt>
              <dd className="stat__value">
                {stat.prefix && <span className="stat__affix">{stat.prefix}</span>}
                <span className="stat__num" data-value={stat.value}>
                  0
                </span>
                {stat.suffix && <span className="stat__affix">{stat.suffix}</span>}
              </dd>
            </div>
          ))}
        </dl>

        <ul className="about-values">
          {VALUES.map((value) => (
            <li key={value.title}>
              <strong>{value.title}</strong>
              <span>{value.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
