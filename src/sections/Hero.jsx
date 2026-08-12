import { motion } from "framer-motion";
import PlannerStack3D from "../components/PlannerStack3D";
import "./Hero.css";

const easing = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <motion.div
          className="hero__copy"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easing }}
        >
          <span className="eyebrow">Planivo Studio</span>
          <h1 className="hero__headline">
            Plan your life.
            <br />
            <em>Beautifully.</em>
          </h1>
          <p className="hero__sub">
            Thoughtfully designed planning systems for your everyday life, goals, studies, health,
            and everything in between.
          </p>
          <div className="hero__ctas">
            <a href="#ecosystem" className="btn btn-primary">
              Explore Planners
            </a>
            <a href="#daily-planner" className="btn btn-secondary">
              Start with Daily Planner — Free
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: easing, delay: 0.15 }}
        >
          <PlannerStack3D />
        </motion.div>
      </div>

      <div className="hero__scroll-cue" aria-hidden="true">
        <span className="hero__scroll-line" />
        <span className="hero__scroll-label">Scroll</span>
      </div>
    </section>
  );
}
