"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { CONTACT } from "../data/siteData";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function FinalCta() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // Slow push-in on the skyline while the section is on screen.
      gsap.fromTo(
        ".finale__bg img",
        { scale: 1.0, yPercent: 6 },
        {
          scale: 1.12,
          yPercent: -4,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        },
      );

      gsap.fromTo(
        [".finale__eyebrow", ".finale__title", ".finale__lead", ".finale__actions"],
        { autoAlpha: 0, y: 44 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 62%", once: true },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="finale" aria-label="Start your move">
      <div className="finale__bg" aria-hidden="true">
        <img src="/hero-back.webp" alt="" width={1920} height={1306} loading="lazy" />
      </div>
      <div className="container finale__inner">
        <p className="eyebrow finale__eyebrow">Your next chapter</p>
        <h2 className="display finale__title">
          Find what&apos;s <span className="dim">next.</span>
        </h2>
        <p className="finale__lead">
          Whether you&apos;re ready to buy, sell, invest, or simply explore — one conversation is
          all it takes to get clarity.
        </p>
        <div className="finale__actions">
          <a className="btn-pill btn-pill--light" href="#contact">
            Book a consultation
            <span aria-hidden="true">→</span>
          </a>
          <a className="btn-pill btn-pill--ghost" href={`tel:${CONTACT.phoneTel}`}>
            Call {CONTACT.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
