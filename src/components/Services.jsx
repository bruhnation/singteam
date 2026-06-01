import { SERVICES } from "../data/siteData";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="services">
      <Reveal className="container">
        <div className="section-header">
          <p className="eyebrow">What we do</p>
          <h2>Our services</h2>
          <p>Full-spectrum representation for residential, investment, and lifestyle moves.</p>
        </div>
        <div className="services-grid">
          {SERVICES.map((service) => (
            <article key={service.title} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.intro}</p>
              <ul>
                {service.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
