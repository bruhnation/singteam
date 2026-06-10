"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CONTACT, IMAGES, NAV_LINKS, SOCIAL } from "../data/siteData";
import HeroLogo from "./HeroLogo";

export default function Footer() {
  const year = new Date().getFullYear();
  const reducedMotion = useReducedMotion();

  const wordmarkMotion = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 80 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.4 },
        transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={IMAGES.logo} alt="Sing Real Estate Team" width="110" height="76" />
          <p className="footer-tagline">
            Real Estate. Legacy. <span className="dim">Conscious Living.</span>
          </p>
        </div>
        <nav className="footer-col" aria-label="Footer">
          <p className="footer-col__label">Explore</p>
          {NAV_LINKS.map((link) => (
            <a key={link.href} className="link-hover-line" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="footer-col">
          <p className="footer-col__label">Contact</p>
          <a className="link-hover-line" href={`tel:${CONTACT.phoneTel}`}>
            {CONTACT.phone}
          </a>
          <a className="link-hover-line" href={`mailto:${CONTACT.email}`}>
            {CONTACT.email}
          </a>
          <p className="footer-address">
            {CONTACT.address[0]}
            <br />
            {CONTACT.address[1]}
          </p>
        </div>
        <div className="footer-col">
          <p className="footer-col__label">Follow</p>
          {SOCIAL.map((link) => (
            <a
              key={link.href}
              className="link-hover-line"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
          <img
            className="footer-belair"
            src={IMAGES.belair}
            alt="Bel-Air Realty Group Ltd."
            width="160"
            height="42"
          />
        </div>
      </div>

      <motion.div className="footer-wordmark" aria-hidden="true" {...wordmarkMotion}>
        <HeroLogo />
      </motion.div>

      <div className="container footer-bottom">
        <p>&copy; {year} Sing Real Estate Team · Bel-Air Realty Group Ltd. All rights reserved.</p>
        <a className="footer-top link-hover-line" href="#top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
