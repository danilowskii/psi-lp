import { useReveal } from "./hooks/useReveal.jsx";
import { THEME, IMAGES, globalStyle } from "./components/variants/variants.js";
import Nav from "./components/layout/Nav.jsx";
import Hero from "./components/layout/Hero.jsx";
import Diferenciais from "./components/layout/Diferenciais.jsx";
import Sobre from "./components/layout/Sobre.jsx";
import Servicos from "./components/layout/Servicos.jsx";
import Depoimentos from "./components/layout/Depoimentos.jsx";
import FAQ from "./components/layout/FAQ.jsx";
import CTABanner from "./components/layout/Banner.jsx";
import Footer from "./components/layout/Footer.jsx";
import WAFloat from "./components/button/WAFloat.jsx";

export default function App() {
  useReveal();

  return (
    <>
      <style>{globalStyle}</style>
      <Nav theme={THEME} />
      <Hero images={IMAGES} theme={THEME} />
      <Diferenciais useReveal theme={THEME} />
      <Sobre images={IMAGES} theme={THEME} />
      <Servicos images={IMAGES} theme={THEME} />
      <Depoimentos images={IMAGES} theme={THEME} />
      <FAQ theme={THEME} />
      <CTABanner theme={THEME} />
      <Footer theme={THEME} />
      <WAFloat theme={THEME} />
    </>
  );
}
