import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";
import "./Philosophy.css";

export default function Philosophy() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const yText = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [40, -40]);
  const yObject = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [-60, 60]);

  return (
    <section className="philosophy section" ref={ref}>
      <div className="container philosophy__inner">
        <motion.div className="philosophy__text" style={{ y: yText }}>
          <span className="eyebrow">The Planivo Philosophy</span>
          <h2 className="philosophy__title">Planning should feel simple.</h2>
          <p className="philosophy__body">
            Your life is complicated enough. Planivo creates simple, beautiful systems that help
            you organize your days, focus on what matters, and make progress without the
            overwhelm.
          </p>
        </motion.div>

        <motion.div className="philosophy__object" style={{ y: yObject }} aria-hidden="true">
          <div className="philosophy__card">
            <span className="philosophy__card-mark">01</span>
            <span className="philosophy__card-line" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
