import { WHY_ITEMS } from "../data/siteData";
import Reveal from "./Reveal";

export default function WhyUs() {
  return (
    <section className="why">
      <Reveal className="container">
        <div className="section-header">
          <p className="eyebrow">Why clients choose us</p>
          <h2>Integrity-first representation</h2>
        </div>
        <div className="why-list">
          {WHY_ITEMS.map((item) => (
            <div key={item.title} className="why-item">
              <strong>{item.title}</strong>
              {item.text}
            </div>
          ))}
        </div>
        <div className="why-cta">
          <h3>Ready to begin?</h3>
          <p>
            Whether you are ready to buy, sell, invest, or explore what is next, we are here to
            guide you.
          </p>
          <a className="btn btn-primary" href="#contact">
            Let&apos;s begin your journey
          </a>
        </div>
      </Reveal>
    </section>
  );
}
