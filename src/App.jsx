import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Project from "./components/Project";
import ArrowDown from "./assets/images/arrow-down.svg";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import ParticleBg from "./components/Particle";
import Experience from "./components/Experience";

function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if (window.pageYOffset > 200) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll);
    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className=" m-auto relative">
      <div className="absolute inset-0 z-0 ">
        <ParticleBg />
      </div>
      <Header />
      <Main />
      <Experience />
      <About />
      <Project />
      <Contact />
      <Footer />
      <div id="scrollToTopContainer" className="fixed bottom-14 right-8 ">
        {scrolling && (
          <button
            className="w-20 rounded-full shadow-lg "
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("top").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <img src={ArrowDown} alt="Scroll to top" />
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
