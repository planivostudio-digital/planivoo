import { motion } from "framer-motion";
import "./FinalCTA.css";

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-cta__bg" aria-hidden="true">
        <span className="final-cta__card final-cta__card--1" />
        <span className="final-cta__card final-cta__card--2" />
        <span className="final-cta__card final-cta__card--3" />
      </div>

      <div className="container final-cta__inner">
        <motion.h2
          className="final-cta__title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Your life doesn't need more noise.
          <br />
          <span>It needs a better system.</span>
        </motion.h2>

        <motion.div
          className="final-cta__ctas"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <a href="#ecosystem" className="btn btn-primary">
            Explore Planivo →
          </a>
          <a href="#daily-planner" className="btn btn-secondary final-cta__secondary">
            Start Free →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
