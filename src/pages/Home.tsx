import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { Features } from "../components/Features/Features";
import { Covers } from "../components/Covers/Covers";
import { Footer } from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      {/* Skip link para teclado */}
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <header>
        <Header />
      </header>

      <main id="contenido" tabIndex={-1}>
        <Hero />
        <Features />
        <Covers />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
