import { HERO_SLIDES } from "../data/siteData";
import { useCarousel } from "../hooks/useCarousel";

export default function Hero() {
  const { index, goTo } = useCarousel(HERO_SLIDES.length);

  return (
    <section className="hero" aria-label="Featured properties">
      <div className="hero-slides">
        {HERO_SLIDES.map((slide, i) => (
          <div key={slide.src} className={`hero-slide ${i === index ? "active" : ""}`}>
            <img
              src={slide.src}
              alt={slide.alt}
              fetchPriority={i === 0 ? "high" : undefined}
            />
          </div>
        ))}
      </div>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container hero-content">
        <p className="eyebrow hero-eyebrow">Metro Vancouver · Bel-Air Realty Group</p>
        <h1>Find your dream home</h1>
        <p className="hero-lead">
          Real estate. Legacy. Conscious living. We guide buyers, sellers, and investors with
          strategy, integrity, and over a decade of top-producing experience.
        </p>
        <div className="hero-actions">
          <a className="link-hover-line" href="#listings">
            View listings
          </a>
          <a className="link-hover-line" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
      <div className="hero-dots" aria-hidden="true">
        {HERO_SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            className={i === index ? "active" : ""}
            aria-label={`Slide ${i + 1}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  );
}
