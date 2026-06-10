"use client";

import { useState } from "react";
import { CONTACT, SOCIAL } from "../data/siteData";
import Reveal from "./Reveal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const message = data.get("message");
    const subject = encodeURIComponent(`Website inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="contact" aria-label="Contact us">
      <Reveal className="container">
        <div className="contact-layout">
          <div className="contact-side">
            <p className="eyebrow">Get in touch</p>
            <h2 className="display contact-title">
              Say <span className="dim">hello.</span>
            </h2>
            <p className="contact-lead">
              Tell us where you are in the journey — we&apos;ll meet you there. No pressure,
              ever.
            </p>

            <dl className="contact-details">
              <div>
                <dt>Phone</dt>
                <dd>
                  <a className="contact-phone" href={`tel:${CONTACT.phoneTel}`}>
                    {CONTACT.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a className="link-hover-line" href={`mailto:${CONTACT.email}`}>
                    {CONTACT.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt>Office</dt>
                <dd>
                  {CONTACT.address[0]}
                  <br />
                  {CONTACT.address[1]}
                </dd>
              </div>
              <div>
                <dt>Social</dt>
                <dd className="contact-social">
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
                </dd>
              </div>
            </dl>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your full name" />
            </div>
            <div className="field-row">
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@email.com" />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="(604) 000-0000" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="message">How can we help?</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Buying, selling, investing, or just exploring…"
              />
            </div>
            <button className="btn-pill contact-submit" type="submit">
              Send message
              <span aria-hidden="true">→</span>
            </button>
            <p className={`form-success ${submitted ? "visible" : ""}`} role="status">
              Your email app should open with your message ready to send. If it did not, email us
              directly at {CONTACT.email}.
            </p>
          </form>
        </div>

        <div className="contact-map">
          <iframe
            title="Sing Real Estate Team office location"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={CONTACT.mapUrl}
            allowFullScreen
          />
        </div>
      </Reveal>
    </section>
  );
}
