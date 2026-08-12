import { motion } from "framer-motion";
import { usePointerParallax } from "../hooks/usePointerParallax";
import "./ProductCard.css";

export default function ProductCard({ product, index = 0 }) {
  const tiltRef = usePointerParallax({ strength: 6 });
  const isAvailable = product.status === "available";

  return (
    <motion.article
      className={`product-card ${isAvailable ? "product-card--available" : ""}`}
      data-parallax-zone
      ref={tiltRef}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="product-card__tilt">
        <div className="product-card__mock" aria-hidden="true">
          <div className="product-card__mock-bar" />
          <div className="product-card__mock-lines">
            <span style={{ width: "70%" }} />
            <span style={{ width: "45%" }} />
            <span style={{ width: "58%" }} />
          </div>
        </div>

        <div className="product-card__body">
          <span className={`product-card__status product-card__status--${product.status}`}>
            {product.statusLabel}
          </span>
          <h3 className="product-card__title">{product.name}</h3>
          <p className="product-card__desc">{product.shortDescription}</p>

          <span className="product-card__cta">
            {isAvailable ? "Get it free" : "Notify me"} <span className="product-card__arrow">→</span>
          </span>
        </div>
      </div>
    </motion.article>
  );
}
