"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SERVICES } from "../data/siteData";

const revealEase = [0.22, 1, 0.36, 1];

export default function Services() {
  const reducedMotion = useReducedMotion();

  const itemMotion = (index) =>
    reducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 36 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.4 },
          transition: { duration: 0.7, delay: (index % 3) * 0.08, ease: revealEase },
        };

  return (
    <section id="services" className="services" aria-label="Our services">
      <div className="container">
        <div className="services-layout">
          <div className="services-intro">
            <p className="eyebrow">What we do</p>
            <h2 className="display services-headline">
              Our services, <span className="dim">elevated.</span>
            </h2>
            <p className="services-lead">
              Full-spectrum representation for residential, investment, and lifestyle moves.
            </p>
            <a className="btn-pill services-cta" href="#contact">
              Book a consultation
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <ol className="services-steps">
            {SERVICES.map((service, index) => (
              <motion.li key={service.title} {...itemMotion(index)}>
                <span className="services-steps__num">{String(index + 1).padStart(2, "0")}</span>
                <p>
                  <strong>{service.title}.</strong> {service.intro}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
