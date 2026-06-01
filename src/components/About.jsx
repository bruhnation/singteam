import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="about">
      <Reveal className="container about-grid">
        <div>
          <p className="eyebrow">The Sing Real Estate Team difference</p>
          <h2>Real estate. Legacy. Conscious living.</h2>
          <p className="about-highlight">
            Buying or selling a home is more than a transaction — it is an energetic milestone
            that shapes your family’s legacy.
          </p>
        </div>
        <div>
          <p>
            Our mission is to help you grow wealth consciously, move with clarity, and create a
            life you love through strategic, values-aligned real estate decisions.
          </p>
          <p>
            We bring together data-driven strategy, intuitive insight, and over a decade of
            top-producing experience in the Metro Vancouver market. Every client, every property,
            and every decision is treated with respect, diligence, and care.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
