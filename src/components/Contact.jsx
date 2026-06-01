import { useState } from "react";
import { CONTACT } from "../data/siteData";
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
    <section id="contact">
      <Reveal className="container">
        <div className="section-header">
          <p className="eyebrow">Get in touch</p>
          <h2>Connect with us</h2>
          <p>Visit our office or send a message — we respond promptly.</p>
        </div>
        <div className="contact-grid">
          <div>
            <div className="contact-info">
              <h3>Visit our office</h3>
              <p>
                {CONTACT.address[0]}
                <br />
                {CONTACT.address[1]}
                <br />
                {CONTACT.address[2]}
              </p>
              <p>
                <strong>Email</strong>
                <br />
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </p>
              <p>
                <strong>Phone</strong>
                <br />
                <a href={`tel:${CONTACT.phoneTel}`}>{CONTACT.phone}</a>
              </p>
            </div>
            <div className="contact-map" style={{ marginTop: "1.5rem" }}>
              <iframe
                title="Sing Real Estate Team office location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={CONTACT.mapUrl}
                allowFullScreen
              />
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send a message</h3>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required autoComplete="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required autoComplete="email" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Comment or message</label>
              <textarea id="message" name="message" required />
            </div>
            <button className="btn btn-dark" type="submit">
              Submit
            </button>
            <p className={`form-success ${submitted ? "visible" : ""}`}>
              Your email app should open with your message ready to send. If it did not, email us
              directly at {CONTACT.email}.
            </p>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
