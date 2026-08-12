import { motion } from "framer-motion";
import { usePointerParallax } from "../hooks/usePointerParallax";
import "./CurrentProduct.css";

const FEATURES = [
  "Plan your priorities",
  "Organize your day",
  "Focus on what matters",
  "Reflect and reset",
  "Simple and distraction-free",
];

export default function CurrentProduct() {
  const tiltRef = usePointerParallax({ strength: 5 });

  return (
    <section className="current-product section" id="daily-planner">
      <div className="container current-product__inner">
        <motion.div
          className="current-product__copy"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="badge">FREE · START HERE</span>
          <h2 className="current-product__title">Daily Planner</h2>
          <p className="current-product__desc">
            A simple daily planning system designed to help you focus on what matters today.
          </p>

          <ul className="current-product__features">
            {FEATURES.map((f) => (
              <li key={f}>
                <span className="current-product__check" aria-hidden="true">
                  ✓
                </span>
                {f}
              </li>
            ))}
          </ul>

          <a href="#" className="btn btn-primary current-product__cta">
            Get Daily Planner — Free →
          </a>
        </motion.div>

        <motion.div
          className="current-product__visual"
          data-parallax-zone
          ref={tiltRef}
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="current-product__mock">
            <div className="current-product__mock-header">
              <span>DAILY PLANNER</span>
              <span className="current-product__mock-date">Monday, 12 Aug</span>
            </div>
            <div className="current-product__mock-block">
              <span className="current-product__mock-label">Top Priorities</span>
              <div className="current-product__mock-row" />
              <div className="current-product__mock-row" />
              <div className="current-product__mock-row" />
            </div>
            <div className="current-product__mock-block">
              <span className="current-product__mock-label">Schedule</span>
              <div className="current-product__mock-grid">
                {Array.from({ length: 6 }).map((_, i) => (
                  <span key={i} />
                ))}
              </div>
            </div>
          </div>
          <div className="current-product__glow" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}
