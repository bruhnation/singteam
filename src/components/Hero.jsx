import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

const easeOut = [0.25, 0.1, 0.25, 1];
const heroImage = "/images/hero-background.jpg";

export default function Hero() {
  const heroRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 0.46], [0, 300]);
  const textAlpha = useTransform(scrollYProgress, [0, 0.16, 0.38], [1, 0.45, 0]);
  const subheadAlpha = useTransform(scrollYProgress, [0, 0.16, 0.38], [0.62, 0.28, 0]);
  const headingColor = useMotionTemplate`rgba(3, 5, 7, ${textAlpha})`;
  const subheadColor = useMotionTemplate`rgba(3, 5, 7, ${subheadAlpha})`;
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.07]);
  const textStyle = reducedMotion ? undefined : { y: textY };
  const imageStyle = reducedMotion ? undefined : { scale: imageScale };

  return (
    <section
      ref={heroRef}
      className={`hero ${reducedMotion ? "hero--reduced" : ""}`}
      aria-label="Sing Real Estate — find your dream home"
    >
      <div className="hero__sticky">
        <motion.img
          className="hero__image"
          src={heroImage}
          alt="Vancouver skyline at dusk"
          width={2400}
          height={1600}
          fetchPriority="high"
          decoding="sync"
          style={imageStyle}
        />
        <motion.div className="hero__content" style={textStyle}>
          <div className="hero__copy">
            <motion.h1
              style={reducedMotion ? undefined : { color: headingColor }}
              initial={reducedMotion ? false : { y: 18 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, ease: easeOut }}
            >
              Find Your Dream Home
            </motion.h1>
            <motion.p
              className="hero__subhead"
              style={reducedMotion ? undefined : { color: subheadColor }}
              initial={reducedMotion ? false : { y: 14 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.45, delay: 0.06, ease: easeOut }}
            >
              Expert agents. <strong>Real guidance.</strong> A clear path to find what&apos;s next.
            </motion.p>
            <motion.a
              className="hero__cta"
              href="#listings"
              style={reducedMotion ? undefined : { opacity: textAlpha }}
              initial={reducedMotion ? false : { y: 12 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, delay: 0.12, ease: easeOut }}
            >
              View Listings
              <span aria-hidden="true">→</span>
            </motion.a>
          </div>
        </motion.div>
        <motion.img
          className="hero__foreground"
          src={heroImage}
          alt=""
          width={2400}
          height={1600}
          decoding="async"
          aria-hidden="true"
          style={imageStyle}
        />
      </div>
    </section>
  );
}
