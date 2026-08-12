import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import "./WhyPlanivo.css";

const FEATURES = [
  { title: "Simple", desc: "No unnecessary complexity." },
  { title: "Beautiful", desc: "Planning should be something you enjoy opening." },
  { title: "Flexible", desc: "Systems that adapt to different lifestyles." },
  { title: "Intentional", desc: "Designed to help you focus on what actually matters." },
];

export default function WhyPlanivo() {
  return (
    <section className="why section">
      <div className="container">
        <SectionHeading title="Designed for real life." align="center" />

        <div className="why__grid">
          {FEATURES.map((f, i) => (
            <motion.div
              className="why__item"
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="why__mark" aria-hidden="true" />
              <h3 className="why__title">{f.title}</h3>
              <p className="why__desc">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
