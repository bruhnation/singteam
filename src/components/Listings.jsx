"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { CONTACT, LISTINGS } from "../data/siteData";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Listings() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Desktop: pin the section and pan the gallery sideways like a tracking shot.
      mm.add("(min-width: 901px) and (prefers-reduced-motion: no-preference)", () => {
        const track = trackRef.current;
        const distance = () => track.scrollWidth - window.innerWidth;

        const pan = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => "+=" + distance(),
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (progressRef.current) {
                progressRef.current.style.transform = `scaleX(${self.progress})`;
              }
            },
          },
        });

        // Counter-drift inside each frame so the photos feel like a dolly move.
        gsap.utils.toArray(".listing-panel__img").forEach((img) => {
          gsap.fromTo(
            img,
            { xPercent: -7 },
            {
              xPercent: 7,
              ease: "none",
              scrollTrigger: {
                trigger: img.closest(".listing-panel"),
                containerAnimation: pan,
                start: "left right",
                end: "right left",
                scrub: true,
              },
            },
          );
        });
      });

      // Mobile / reduced motion: simple staggered rise as each card enters.
      mm.add("(max-width: 900px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray(".listing-panel").forEach((panel) => {
          gsap.fromTo(
            panel,
            { autoAlpha: 0, y: 48 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: { trigger: panel, start: "top 86%", once: true },
            },
          );
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section id="listings" ref={sectionRef} className="listings-cinema" aria-label="Featured listings">
      <div className="listings-cinema__viewport">
        <div ref={trackRef} className="listings-track">
          <header className="listing-panel listing-panel--intro">
            <p className="eyebrow">Featured listings</p>
            <h2 className="display listings-intro__title">
              Homes with <span className="dim">presence.</span>
            </h2>
            <p className="listings-intro__lead">
              A curated slice of what we&apos;re representing across Metro Vancouver right now —
              chosen for quality, location, and long-term value.
            </p>
            <p className="listings-intro__hint" aria-hidden="true">
              Keep scrolling <span>→</span>
            </p>
          </header>

          {LISTINGS.map((listing, index) => (
            <article key={listing.url} className="listing-panel">
              <a
                className="listing-panel__link"
                href={listing.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View details for ${listing.title}, ${listing.price}`}
              >
                <figure className="listing-panel__media">
                  <img
                    className="listing-panel__img"
                    src={listing.image}
                    alt={`${listing.title}, ${listing.area}`}
                    loading={index === 0 ? "eager" : "lazy"}
                    width={1280}
                    height={960}
                  />
                  <span className="listing-panel__index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")} / {String(LISTINGS.length).padStart(2, "0")}
                  </span>
                  <span className="listing-panel__price">{listing.price}</span>
                </figure>
                <div className="listing-panel__caption">
                  <div className="listing-panel__heading">
                    <p className="listing-panel__area">{listing.area}</p>
                    <h3 className="listing-panel__title">{listing.title}</h3>
                  </div>
                  <div className="listing-panel__details">
                    <p className="listing-panel__meta">{listing.meta.join(" · ")}</p>
                    <span className="listing-panel__action">
                      View listing <span aria-hidden="true">↗</span>
                    </span>
                  </div>
                </div>
              </a>
            </article>
          ))}

          <footer className="listing-panel listing-panel--outro">
            <p className="listings-outro__kicker" aria-hidden="true">
              And more
            </p>
            <h3 className="display listings-outro__title">
              The right one is <span className="dim">out there.</span>
            </h3>
            <a
              className="btn-pill"
              href={CONTACT.allListingsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Browse all listings
              <span aria-hidden="true">→</span>
            </a>
          </footer>
        </div>

        <div className="listings-progress" aria-hidden="true">
          <span ref={progressRef} className="listings-progress__bar" />
        </div>
      </div>
    </section>
  );
}
