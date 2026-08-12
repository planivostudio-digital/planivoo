import { products } from "../data/products";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">PLANIVO STUDIO</span>
          <p className="footer__desc">Thoughtful planning systems for modern life.</p>
        </div>

        <div className="footer__cols">
          <div className="footer__col">
            <span className="footer__col-title">Products</span>
            {products.map((p) => (
              <a key={p.id} href={`#${p.id}`} className="footer__link">
                {p.name}
              </a>
            ))}
          </div>

          <div className="footer__col">
            <span className="footer__col-title">Studio</span>
            <a href="#journal" className="footer__link">Journal</a>
            <a href="#about" className="footer__link">About</a>
            <a href="#top" className="footer__link">Contact</a>
          </div>

          <div className="footer__col">
            <span className="footer__col-title">Social</span>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer__link">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {year} Planivo Studio</span>
      </div>
    </footer>
  );
}
