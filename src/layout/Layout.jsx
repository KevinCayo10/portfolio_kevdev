import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaArrowUp } from "react-icons/fa";

function Layout({ children }) {
  const [scrolling, setScrolling] = useState(false);

  // Detectar preferencia inicial del sistema
  const [darkMode, setDarkMode] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  // Escuchar cambios de scroll
  useEffect(() => {
    const onScroll = () => setScrolling(window.pageYOffset > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Aplicar clase al <html> o <body>
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [darkMode]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative min-h-screen text-gray-900 dark:text-white transition-colors duration-500 bg-white dark:bg-[#0f0f0f] overflow-x-hidden">
      {/* Header y contenido principal */}
      <Header />
      <main id="top" className="relative z-10">{children}</main>
      <Footer />

      {/* Botón scroll to top */}
      {scrolling && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-20 bg-gradient-to-r from-primary to-secondary text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 border-none cursor-pointer"
          aria-label="Volver al inicio"
          style={{ right: '2rem' }} // Asegurar posición fija
        >
          <FaArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;