import { motion } from "framer-motion";
import "./About.css";

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container about__inner">
        <motion.div
          className="about__visual"
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="about__rings">
            <span />
            <span />
            <span />
          </div>
        </motion.div>

        <motion.div
          className="about__copy"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">About Planivo</span>
          <h2 className="about__title">Thoughtful tools for modern life.</h2>
          <p className="about__body">
            Planivo Studio is building a collection of digital planning systems designed to make
            everyday life feel a little more organized, intentional, and beautiful.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
