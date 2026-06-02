import { CONTACT, LISTINGS } from "../data/siteData";
import Reveal from "./Reveal";

export default function Listings() {
  return (
    <section id="listings" className="listings">
      <Reveal className="container">
        <div className="section-header">
          <p className="eyebrow">Featured properties</p>
          <h2>Find the perfect property for your lifestyle</h2>
          <p>
            Explore our current listings across Metro Vancouver — each one selected to match
            quality, location, and long-term value.
          </p>
        </div>
        <div className="listings-grid">
          {LISTINGS.map((listing) => (
            <article key={listing.url} className="listing-card">
              <a
                className="listing-card__link"
                href={listing.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View details for ${listing.title}`}
              >
                <img src={listing.image} alt={listing.title} loading="lazy" />
                <div className="listing-card__overlay">
                  <div className="listing-card__topline">
                    <span>{listing.area}</span>
                    <strong>{listing.price}</strong>
                  </div>
                  <div className="listing-card__content">
                    <h3>{listing.title}</h3>
                    <div className="listing-meta">
                      {listing.meta.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                    <p className="listing-description">{listing.description}</p>
                    <span className="listing-card__action">
                      View details
                      <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
        <div className="listings-cta">
          <a
            className="btn btn-dark"
            href={CONTACT.allListingsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Browse all listings
          </a>
        </div>
      </Reveal>
    </section>
  );
}
