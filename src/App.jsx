import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Home />
      </main>
      <Footer />
    </>
  );
}
