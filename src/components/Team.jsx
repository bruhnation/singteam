"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TEAM } from "../data/siteData";

const revealEase = [0.22, 1, 0.36, 1];

export default function Team() {
  const reducedMotion = useReducedMotion();

  const cardMotion = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 56, clipPath: "inset(12% 0% 0% 0%)" },
        whileInView: { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" },
        viewport: { once: true, amount: 0.3 },
      };

  return (
    <section id="team" className="team" aria-label="Meet the team">
      <div className="container">
        <header className="team-header">
          <p className="eyebrow">The team</p>
          <h2 className="display team-title">
            The people behind <span className="dim">the move.</span>
          </h2>
          <p className="team-lead">
            Three agents, one standard — strategic guidance with genuine care, backed by
            Bel-Air Realty Group Ltd.
          </p>
        </header>

        <div className="team-grid">
          {TEAM.map((member, index) => (
            <motion.article
              key={member.name}
              className="team-card"
              {...cardMotion}
              transition={{ duration: 0.85, delay: index * 0.12, ease: revealEase }}
            >
              <figure className="team-card__media">
                <img src={member.image} alt={member.name} loading="lazy" width={800} height={800} />
              </figure>
              <p className="team-card__role">{member.title}</p>
              <h3 className="team-card__name">{member.name}</h3>
              <p className="team-card__bio">{member.bio}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
