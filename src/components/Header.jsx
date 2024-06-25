import { useEffect, useState } from "react";
import { Menu } from "../data/info";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Header() {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    const yOffset = -100; // Ajusta este valor según sea necesario
    const yPosition =
      targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: yPosition,
      behavior: "smooth",
    });
  };

  // Estado del modo oscuro basado en la preferencia del usuario
  const [darkMode, setDarkMode] = useState(() => {
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const toggleDarkMode = () => {
    setDarkMode((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const updateDarkMode = (e) => {
      setDarkMode(e.matches ? "dark" : "light");
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addListener(updateDarkMode);

    return () => {
      mediaQuery.removeListener(updateDarkMode);
    };
  }, []);

  useEffect(() => {
    if (darkMode === "dark") {
      document.querySelector("html").classList.add("dark");
      document.body.classList.add("bg-black");
      document.body.classList.remove("bg-white");
    } else {
      document.querySelector("html").classList.remove("dark");
      document.body.classList.add("bg-white");
      document.body.classList.remove("bg-black");
    }
  }, [darkMode]);

  return (
    <header className="fixed left-0 right-0 top-0 z-20" id="home">
      <div className="container m-auto px-4 py-6 max-w-4xl bg-white dark:bg-black">
        <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
          <div>
            <h1 className="font-extrabold text-2xl dark:text-white">
              KevDev Portafolio
            </h1>
          </div>
          <div>
            <ul className="flex gap-4 items-center">
              {Menu.map((option) => {
                const targetId = option.url.substring(1);
                console.log("TargetId : ", targetId);
                return (
                  <li key={option.id}>
                    <a
                      href={option.url}
                      onClick={(e) => handleSmoothScroll(e, targetId)}
                      className="text-gray-600 dark:text-gray-400 dark:hover:text-white cursor-pointer hover:text-gray-800 text-sm sm:text-base"
                    >
                      {option.title}
                    </a>
                  </li>
                );
              })}

              <li>
                <button onClick={toggleDarkMode}>
                  {darkMode !== "dark" ? (
                    <FaMoon className="text-gray-600 hover:text-gray-800 cursor-pointer" />
                  ) : (
                    <FaSun className="text-gray-400 hover:text-white cursor-pointer" />
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
