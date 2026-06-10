"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { CONTACT, NAV_LINKS } from "../data/siteData";
import { useScrollHeader } from "../hooks/useScrollHeader";
import HeroLogo from "./HeroLogo";

const menuEase = [0.22, 1, 0.36, 1];

export default function Header() {
  const scrolled = useScrollHeader(80);
  const [menuOpen, setMenuOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
      <div className="header-inner">
        <a href="#top" className="logo" aria-label="Sing Real Estate Team home" onClick={closeMenu}>
          <HeroLogo />
        </a>

        <nav className="nav-end" aria-label="Main">
          <ul className="nav-desktop">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a className="nav-link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="nav-toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={`nav-toggle__bars ${menuOpen ? "is-open" : ""}`} aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-nav"
            className="nav-overlay"
            aria-label="Mobile"
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: menuEase }}
          >
            <ul className="nav-overlay__links">
              {NAV_LINKS.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={reducedMotion ? false : { opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.08 + index * 0.06, ease: menuEase }}
                >
                  <a href={link.href} onClick={closeMenu}>
                    <span className="nav-overlay__num">{String(index + 1).padStart(2, "0")}</span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.div
              className="nav-overlay__footer"
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 + NAV_LINKS.length * 0.06, ease: menuEase }}
            >
              <a className="btn-pill" href="#contact" onClick={closeMenu}>
                Book a consultation
                <span aria-hidden="true">→</span>
              </a>
              <div className="nav-overlay__contact">
                <a href={`tel:${CONTACT.phoneTel}`}>{CONTACT.phone}</a>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
