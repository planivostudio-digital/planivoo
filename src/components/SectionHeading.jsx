import { motion } from "framer-motion";
import "./SectionHeading.css";

export default function SectionHeading({ eyebrow, title, subtitle, align = "left" }) {
  return (
    <motion.div
      className={`section-heading section-heading--${align}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-heading__title">{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </motion.div>
  );
}
