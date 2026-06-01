import { CONTACT, IMAGES, SOCIAL } from "../data/siteData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <img src={IMAGES.logo} alt="Sing Real Estate Team" width="137" height="48" />
          <p>Real Estate. Legacy. Conscious Living.</p>
          <div className="social-links">
            {SOCIAL.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p>
            <strong>Contact</strong>
          </p>
          <p>
            <a href={`tel:${CONTACT.phoneTel}`}>{CONTACT.phone}</a>
          </p>
          <p>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </p>
        </div>
        <div>
          <img src={IMAGES.belair} alt="Bel-Air Realty Group" width="180" height="48" />
        </div>
      </div>
      <div className="container footer-bottom">
        <p>&copy; {year} Sing Real Estate Team. All rights reserved.</p>
      </div>
    </footer>
  );
}
