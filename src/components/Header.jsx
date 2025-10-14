import { useEffect, useState } from "react";
import { Menu } from "../data/info";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Header() {
  const [darkMode, setDarkMode] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );
  const [scrolled, setScrolled] = useState(false);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;
    const yOffset = -100;
    const yPosition =
      targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  // 🔹 Detectar scroll para aplicar blur
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Escuchar cambios del sistema
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const updateDarkMode = (e) => setDarkMode(e.matches ? "dark" : "light");
    mediaQuery.addEventListener("change", updateDarkMode);
    return () => mediaQuery.removeEventListener("change", updateDarkMode);
  }, []);

  // 🔹 Aplicar modo oscuro
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode === "dark") {
      html.classList.add("dark");
      document.body.classList.add("bg-[#0a0a0a]");
      document.body.classList.remove("bg-white");
    } else {
      html.classList.remove("dark");
      document.body.classList.add("bg-white");
      document.body.classList.remove("bg-[#0a0a0a]");
    }
  }, [darkMode]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`navbar transition-all duration-500 ${
          scrolled
          ? "bg-gray-80/60 dark:bg-[#0a0a0a]-80/50 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
        }`}
      >
        {/* --- START --- */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content bg-[#303030] rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {Menu.map((option) => {
                const targetId = option.url.substring(1);
                return (
                  <li key={option.id}>
                    <a
                      href={option.url}
                      onClick={(e) => handleSmoothScroll(e, targetId)}
                      className="text-gray-400 dark:hover:text-white cursor-pointer hover:text-gray-200 text-lg sm:text-2lg"
                    >
                      {option.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <a className="btn btn-ghost  text-lg sm:text-2xl font-extrabold text-gray-700 dark:text-gray-300">
            Kevin Jo. Portafolio
          </a>
        </div>

        {/* --- CENTER MENU --- */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {Menu.map((option) => {
              const targetId = option.url.substring(1);
              return (
                <li key={option.id}>
                  <a
                    href={option.url}
                    onClick={(e) => handleSmoothScroll(e, targetId)}
                    className="text-gray-600 dark:text-gray-400 dark:hover:text-white cursor-pointer hover:text-gray-800 text-sm sm:text-lg"
                  >
                    {option.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* --- END BUTTONS --- */}
        <div className="navbar-end">
          <button
            onClick={toggleDarkMode}
            className="btn btn-ghost btn-circle"
            title={darkMode === "dark" ? "Light Mode" : "Dark Mode"}
          >
            {darkMode === "dark" ? (
              <FaSun className="text-gray-400 hover:text-yellow-400 cursor-pointer text-2xl" />
            ) : (
              <FaMoon className="text-gray-600 hover:text-gray-800 cursor-pointer text-2xl" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
