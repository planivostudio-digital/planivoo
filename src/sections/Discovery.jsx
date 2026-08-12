import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { discoveryOptions, products } from "../data/products";
import "./Discovery.css";

export default function Discovery() {
  const [activeId, setActiveId] = useState(discoveryOptions[0].id);
  const activeProduct = products.find((p) => p.id === activeId);

  return (
    <section className="discovery section" id="discovery">
      <div className="container">
        <SectionHeading title="What are you planning for?" />

        <div className="discovery__layout">
          <div className="discovery__options" role="tablist" aria-label="Choose a planning focus">
            {discoveryOptions.map((opt) => (
              <button
                key={opt.id}
                role="tab"
                aria-selected={activeId === opt.id}
                className={`discovery__option ${activeId === opt.id ? "discovery__option--active" : ""}`}
                onClick={() => setActiveId(opt.id)}
              >
                <span className="discovery__option-label">{opt.label}</span>
                <span className="discovery__option-product">{opt.product}</span>
              </button>
            ))}
          </div>

          <div className="discovery__preview">
            <AnimatePresence mode="wait">
              {activeProduct && (
                <motion.div
                  key={activeProduct.id}
                  className="discovery__preview-card"
                  initial={{ opacity: 0, y: 18, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -18, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className={`discovery__status discovery__status--${activeProduct.status}`}>
                    {activeProduct.statusLabel}
                  </span>
                  <h3>{activeProduct.name}</h3>
                  <p>{activeProduct.description}</p>
                  <ul>
                    {activeProduct.features?.slice(0, 4).map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <a href={`#${activeProduct.id}`} className="btn btn-secondary">
                    {activeProduct.status === "available" ? "Get it free →" : "Learn more →"}
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
