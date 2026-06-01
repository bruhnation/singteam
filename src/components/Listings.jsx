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
              <a href={listing.url} target="_blank" rel="noopener noreferrer">
                <img src={listing.image} alt={listing.title} loading="lazy" />
              </a>
              <div className="listing-body">
                <p className="eyebrow">{listing.area}</p>
                <h3>{listing.title}</h3>
                <p className="listing-price">{listing.price}</p>
                <div className="listing-meta">
                  {listing.meta.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <p>{listing.description}</p>
                <a
                  className="btn btn-dark"
                  href={listing.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View details
                </a>
              </div>
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
