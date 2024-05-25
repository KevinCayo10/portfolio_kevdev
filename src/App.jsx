import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Project from "./components/Project";
import ArrowDown from "./assets/images/arrow-down.svg";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";

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
    <div className="max-w-4xl m-auto relative">
      <Header />
      <Main />
      <About />
      <Project />
      <Contact />
      <Footer />
      <div id="scrollToTopContainer" className="fixed bottom-8 right-8">
        {scrolling && (
          <button
            className="w-24 p-2 rounded-full shadow-lg"
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
