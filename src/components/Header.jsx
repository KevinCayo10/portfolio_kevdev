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
      document.body.classList.add("bg-[#0a0a0a]");
      document.body.classList.remove("bg-white");
    } else {
      document.querySelector("html").classList.remove("dark");
      document.body.classList.add("bg-white");
      document.body.classList.remove("bg-[#0a0a0a]");
    }
  }, [darkMode]);

  return (
    <header className="">
      <div class="navbar  m-auto fixed top-0 left-0 right-0   z-20 bg-white dark:bg-[#0a0a0a]  ">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-[#303030] rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {Menu.map((option) => {
                const targetId = option.url.substring(1);
                return (
                  <li key={option.id}>
                    <a
                      href={option.url}
                      onClick={(e) => handleSmoothScroll(e, targetId)}
                      className="text-gray-400 dark:hover:text-white cursor-pointer hover:text-gray-200 text-sm sm:text-base"
                    >
                      {option.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <a class="btn btn-ghost text-xl font-extrabold text-gray-400">
            KevDev Portafolio
          </a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            {Menu.map((option) => {
              const targetId = option.url.substring(1);
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
          </ul>
        </div>
        <div class="navbar-end ">
          <button
            onClick={toggleDarkMode}
            class=" btn btn-ghost btn-circle "
            title={`${darkMode !== "dark" ? "Light Mode" : "Dark Mode"}`}
          >
            {darkMode !== "dark" ? (
              <FaMoon className="text-gray-600 hover:text-gray-800 cursor-pointer" />
            ) : (
              <FaSun className="text-gray-400 hover:text-white cursor-pointer" />
            )}
          </button>
        </div>
      </div>
    </header> // <header className="fixed left-0 right-0 top-0 z-20 " id="home">
    //   <div className="container m-auto px-4 py-6 bg-white dark:bg-black">
    //     <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
    //       <div>
    //         <h1 className="font-extrabold text-2xl dark:text-white">
    //           KevDev Portafolio
    //         </h1>
    //       </div>
    //       <div>
    //         <ul className="flex gap-4 items-center">
    //           {Menu.map((option) => {
    //             const targetId = option.url.substring(1);
    //             console.log("TargetId : ", targetId);
    //             return (
    //               <li key={option.id}>
    //                 <a
    //                   href={option.url}
    //                   onClick={(e) => handleSmoothScroll(e, targetId)}
    //                   className="text-gray-600 dark:text-gray-400 dark:hover:text-white cursor-pointer hover:text-gray-800 text-sm sm:text-base"
    //                 >
    //                   {option.title}
    //                 </a>
    //               </li>
    //             );
    //           })}

    //           <li>
    //             <button onClick={toggleDarkMode}>
    //               {darkMode !== "dark" ? (
    //                 <FaMoon className="text-gray-600 hover:text-gray-800 cursor-pointer" />
    //               ) : (
    //                 <FaSun className="text-gray-400 hover:text-white cursor-pointer" />
    //               )}
    //             </button>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </header>
  );
}
