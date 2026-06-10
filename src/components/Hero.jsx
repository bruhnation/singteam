"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useId, useRef } from "react";
import HeroLogo, { HeroLogoImageFill } from "./HeroLogo";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const HOUSE_SRC = "/hero-house.webp";
const CLOUD_SRC = "/hero-cloud.webp";
const SMOKE_SRC = "/hero-smoke.webp";
const BACK_SRC = "/hero-back.webp";

function HouseImage() {
  return (
    <img
      className="hero__house-img"
      src={HOUSE_SRC}
      alt=""
      width={2000}
      height={1779}
      decoding="async"
      fetchPriority="high"
    />
  );
}

export default function Hero() {
  const heroRef = useRef(null);
  const maskId = useId().replace(/:/g, "");

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        gsap.set(".hero__cue", { autoAlpha: 0 });
        gsap.set(".hero__intro", { autoAlpha: 0 });
        gsap.set(".hero__back", { autoAlpha: 1, scale: 1 });
        gsap.set(".hero__house-stage", { xPercent: -50, autoAlpha: 0, yPercent: -4, scale: 1.12 });
        gsap.set(".hero__smoke", { autoAlpha: 0.78, yPercent: 8 });
        gsap.set(".hero__cloudbank", { autoAlpha: 1, yPercent: -4 });
        gsap.set(".hero__logo-outline", { xPercent: -50, yPercent: -50, autoAlpha: 0.12, scale: 1, y: 0 });
        gsap.set(".hero__logo-fill", { xPercent: -50, yPercent: -50, autoAlpha: 1, scale: 1, y: 0, filter: "blur(0px)" });
        return;
      }

      // ---- initial states ----
      // xPercent / yPercent carry the centering transforms so GSAP doesn't drop the CSS translate.
      gsap.set(".hero__intro", { autoAlpha: 1, yPercent: 0 });
      gsap.set(".hero__back", { autoAlpha: 0.25, scale: 1.06 });
      gsap.set(".hero__house-stage", { xPercent: -50, autoAlpha: 1, yPercent: 50, scale: 1.03 });
      gsap.set(".hero__smoke", { autoAlpha: 0.72, yPercent: 12 });
      gsap.set(".hero__cloudbank", { autoAlpha: 0.72, yPercent: 76 });
      gsap.set(".hero__logo-outline", { xPercent: -50, yPercent: -50, autoAlpha: 0, scale: 0.88, y: 24, filter: "blur(10px)" });
      gsap.set(".hero__logo-fill", { xPercent: -50, yPercent: -50, autoAlpha: 0, scale: 0.9, y: 22, filter: "blur(18px)" });

      // ---- page-load entrance: headline rises out of the haze, then the scroll cue appears ----
      const entrance = gsap.timeline({ defaults: { ease: "power3.out" } });
      entrance
        .fromTo(
          ".hero__cluster h1",
          { y: 64, autoAlpha: 0, filter: "blur(12px)" },
          { y: 0, autoAlpha: 1, filter: "blur(0px)", duration: 1.15 },
          0.15,
        )
        .fromTo(".hero__subhead", { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.9 }, 0.5)
        .fromTo(".hero__actions", { y: 22, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8 }, 0.68)
        .fromTo(".hero__cue", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.9 }, 1.15);

      // ---- ambient drift so the cloud layers never sit perfectly still ----
      gsap.to(".hero__cloudbank .hero__fog-img--a", {
        xPercent: 2.4,
        duration: 16,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
      gsap.to(".hero__cloudbank .hero__fog-img--b", {
        xPercent: -2,
        duration: 13,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // ---- Scroll: clouds engulf immediately; house rises and fades beneath them ----
      tl.to(".hero__cue", { autoAlpha: 0, duration: 0.08, overwrite: "auto" }, 0)
        .to(".hero__intro", { autoAlpha: 0, yPercent: 26, duration: 0.5, ease: "power1.in" }, 0)
        .to(".hero__house-stage", { yPercent: -4, scale: 1.12, duration: 0.85 }, 0)
        .to(".hero__back", { autoAlpha: 1, scale: 1, duration: 0.5 }, 0.05)
        .to(".hero__cloudbank", { autoAlpha: 1, duration: 0.12 }, 0)
        .to(".hero__cloudbank", { yPercent: 6, duration: 0.48, ease: "power1.in" }, 0)
        .to(".hero__cloudbank", { yPercent: -8, duration: 0.58, ease: "power1.out" }, 0.48)
        .to(".hero__smoke", { autoAlpha: 0.95, yPercent: -4, duration: 0.55 }, 0)
        .to(".hero__logo-outline", { autoAlpha: 0.56, scale: 1.04, y: 0, filter: "blur(0px)", duration: 0.32, ease: "power3.out" }, 0.38)
        .to(".hero__logo-outline", { autoAlpha: 0.24, scale: 1, duration: 0.26, ease: "power1.out" }, 0.66)
        .to(".hero__house-stage", { autoAlpha: 0, duration: 0.42 }, 0.74)
        .to(".hero__smoke", { autoAlpha: 0, duration: 0.38 }, 0.78)
        .to(
          ".hero__logo-fill",
          { autoAlpha: 1, scale: 1.035, y: 0, filter: "blur(0px)", duration: 0.34, ease: "power3.out" },
          0.52,
        )
        .to(".hero__logo-fill", { scale: 1, duration: 0.34, ease: "power2.out" }, 0.86)
        .to(".hero__logo-outline", { autoAlpha: 0.12, scale: 1, y: 0, duration: 0.42, ease: "power2.out" }, 0.86)

        // ---- Brief hold on SING, then a quick cut straight into the next section.
        // Keep the cloud backdrop white (never reveal the sky photo) so the pin releases
        // on a clean frame and the next section comes straight up beneath it. ----
        .to([".hero__logo-fill", ".hero__logo-outline"], { autoAlpha: 0, y: -12, duration: 0.34, ease: "power1.in" }, 1.62);

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    },
    { scope: heroRef },
  );

  return (
    <section ref={heroRef} className="hero" aria-label="Find what moves you">
        <div className="hero__top">
          <div className="hero__bg">
            <div className="hero__back" aria-hidden="true">
              <img src={BACK_SRC} alt="" width={1920} height={1306} decoding="async" />
            </div>

            <div className="hero__house-stage" aria-hidden="true">
              <div className="hero__house">
                <HouseImage />
              </div>
            </div>

            <div className="hero__smoke" aria-hidden="true">
              <img src={SMOKE_SRC} alt="" width={2200} height={710} decoding="async" />
            </div>

            <div className="hero__cloudbank" aria-hidden="true">
              <img className="hero__fog-img hero__fog-img--a" src={CLOUD_SRC} alt="" decoding="async" />
              <img className="hero__fog-img hero__fog-img--b" src={CLOUD_SRC} alt="" decoding="async" />
            </div>

            <div className="hero__logo hero__logo-fill" aria-hidden="true">
              <HeroLogoImageFill maskId={`hero-logo-mask-${maskId}`} src={HOUSE_SRC} />
            </div>

            <div className="hero__logo hero__logo-outline" aria-hidden="true">
              <HeroLogo />
            </div>
          </div>

          <div className="hero__content">
            <div className="hero__intro">
              <div className="hero__cluster">
                <h1>Find What Moves You</h1>
                <p className="hero__subhead">
                  <strong>Expert agents. Real guidance.</strong> A clear path to find what&apos;s{" "}
                  <span className="dim">next.</span>
                </p>
                <div className="hero__actions">
                  <a className="hero__cta" href="#listings">
                    Find Properties
                    <span aria-hidden="true">→</span>
                  </a>
                  <a className="hero__cta hero__cta--secondary" href="#contact">
                    Get in contact
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="hero__cue" aria-hidden="true">
            <span className="hero__cue-label">Scroll</span>
            <span className="hero__cue-line" />
          </div>
        </div>
      </section>
  );
}
