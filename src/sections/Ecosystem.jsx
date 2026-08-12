import SectionHeading from "../components/SectionHeading";
import ProductCard from "../components/ProductCard";
import { products, featuredProductIds } from "../data/products";
import "./Ecosystem.css";

export default function Ecosystem() {
  const featured = featuredProductIds
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <section className="ecosystem section" id="ecosystem">
      <div className="container">
        <SectionHeading
          eyebrow="The Planivo Ecosystem"
          title="One life. Different systems."
          subtitle="Whatever season of life you're in, there's a Planivo system for it."
        />

        <div className="ecosystem__grid">
          {featured.map((product, i) => (
            <div
              key={product.id}
              className={i === 0 ? "ecosystem__grid-item ecosystem__grid-item--wide" : "ecosystem__grid-item"}
            >
              <ProductCard product={product} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
