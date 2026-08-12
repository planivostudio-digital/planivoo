import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { journalArticles } from "../data/products";
import "./Journal.css";

export default function Journal() {
  return (
    <section className="journal section" id="journal">
      <div className="container">
        <SectionHeading eyebrow="Reading" title="The Planivo Journal" />

        <div className="journal__grid">
          {journalArticles.map((article, i) => (
            <motion.a
              href="#"
              className="journal__card"
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="journal__card-index">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="journal__card-title">{article.title}</h3>
              <p className="journal__card-excerpt">{article.excerpt}</p>
              <span className="journal__card-read">Read article →</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
