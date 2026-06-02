import { SERVICES } from "../data/siteData";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="services">
      <Reveal className="container">
        <div className="services-layout">
          <div className="services-intro">
            <p className="eyebrow">What we do</p>
            <h2 className="services-headline">
              <span className="services-headline__primary">Our services,</span>
              <span className="services-headline__muted">Elevated.</span>
            </h2>
            <p className="services-lead">
              Full-spectrum representation for residential, investment, and lifestyle moves.
            </p>
            <a className="services-cta" href="#contact">
              Book a consultation
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="services-list">
            <p className="services-list__label">Services:</p>
            <ol className="services-steps">
              {SERVICES.map((service, index) => (
                <li key={service.title}>
                  <span className="services-steps__num">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p>
                    <strong>{service.title}.</strong> {service.intro}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
