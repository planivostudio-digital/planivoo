import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";
import "./Storytelling.css";

const STAGES = [
  { key: "open", label: "One philosophy.", name: "Planivo" },
  { key: "daily", label: "Daily Planner", name: "Your everyday life" },
  { key: "life", label: "Ultimate Life Planner", name: "Goals & the bigger picture" },
  { key: "student", label: "Student OS", name: "Studying & academic life" },
  { key: "health", label: "Health & Fitness Planner", name: "Routines & consistency" },
  { key: "adhd", label: "ADHD Planner", name: "Focus, without the overwhelm" },
];

export default function Storytelling() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const [stageIndex, setStageIndex] = useState(0);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const coverRotate = useTransform(scrollYProgress, [0, 1 / (STAGES.length - 1)], [0, -172]);
  const bookRotateY = useTransform(scrollYProgress, [0, 1], [-8, 8]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(STAGES.length - 1, Math.floor(v * (STAGES.length - 1) + 0.5));
    setStageIndex(idx);
  });

  const activeStage = STAGES[stageIndex];

  return (
    <section className="storytelling" ref={ref} style={{ height: `${STAGES.length * 100}vh` }}>
      <div className="storytelling__sticky">
        <div className="container storytelling__inner">
          <div className="storytelling__caption">
            <span className="eyebrow">One philosophy. Many ways to plan your life.</span>
            <motion.h2
              key={activeStage.key}
              className="storytelling__title"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {activeStage.label}
            </motion.h2>
            <motion.p
              key={activeStage.key + "-sub"}
              className="storytelling__caption-sub"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {activeStage.name}
            </motion.p>

            <div className="storytelling__dots" aria-hidden="true">
              {STAGES.map((s, i) => (
                <span key={s.key} className={i === stageIndex ? "is-active" : ""} />
              ))}
            </div>
          </div>

          <div className="storytelling__stage">
            <motion.div
              className="storytelling__book"
              style={{ rotateY: reduced ? 0 : bookRotateY }}
            >
              <div className="storytelling__spine" />
              <div className="storytelling__page storytelling__page--back">
                <span className="storytelling__page-mark">P</span>
              </div>
              <motion.div
                className="storytelling__cover"
                style={{ rotateY: reduced ? -172 : coverRotate }}
              >
                <span className="storytelling__cover-brand">PLANIVO</span>
                <span className="storytelling__cover-tag">Plan your life. Beautifully.</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
