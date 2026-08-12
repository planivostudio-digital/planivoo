import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Nav.css";

const LINKS = [
  { label: "Products", href: "#ecosystem" },
  { label: "About", href: "#about" },
  { label: "Journal", href: "#journal" },
  { label: "Free Planner", href: "#daily-planner" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleLinkClick = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner container">
        <a href="#top" className="nav__logo">
          PLANIVO
        </a>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav__link">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#ecosystem" className="nav__cta btn btn-secondary">
          Explore Planners →
        </a>

        <button
          className={`nav__burger ${open ? "nav__burger--open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav__mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="nav__mobile-link"
                onClick={handleLinkClick}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#ecosystem"
              className="nav__mobile-cta btn btn-primary"
              onClick={handleLinkClick}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + LINKS.length * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              Explore Planners →
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
