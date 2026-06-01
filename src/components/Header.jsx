import { useState } from "react";
import { IMAGES, NAV_LINKS } from "../data/siteData";
import { useScrollHeader } from "../hooks/useScrollHeader";

export default function Header() {
  const scrolled = useScrollHeader();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-inner">
        <a href="#" className="logo" aria-label="Sing Real Estate Team home" onClick={closeMenu}>
          <img src={IMAGES.logo} alt="Sing Real Estate Team" width="137" height="52" />
        </a>
        <nav aria-label="Main">
          <ul className="nav-desktop">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a className="link-hover-line" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="link-hover-line nav-desktop-cta" href="#contact">
          Book a consultation
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>
      <nav id="mobile-nav" className={`nav-mobile ${menuOpen ? "open" : ""}`} aria-label="Mobile">
        {NAV_LINKS.map((link) => (
          <a key={link.href} className="link-hover-line" href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a className="link-hover-line" href="#contact" onClick={closeMenu}>
          Book a consultation
        </a>
      </nav>
    </header>
  );
}
