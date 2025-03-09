import { motion } from "framer-motion";
import Portfile from "../assets/images/perfil_8.png";
import { socialLinks } from "../data/info";
import { FaDownload } from "react-icons/fa";
import { FaMouse } from "react-icons/fa"; // Importa el icono de mouse
import cv from "../assets/cv.pdf";
function Banner() {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    const yOffset = -125; // Ajusta este valor según sea necesario
    const yPosition =
      targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: yPosition,
      behavior: "smooth",
    });
  };

  return (
    <main
      className="relative  flex flex-col justify-center items-center h-screen sm:m-auto mt-10"
      id="top"
    >
      {/* Intro/Banner section */}
      <section className="w-full">
        <div className="container mx-auto text-center items-center px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 sm:text-left   ">
          <motion.div
            className="sm:w-2/3"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-bold text-3xl dark:text-white sm:text-4xl">
              Hola, Soy Kevin Cayo
            </h2>
            <h2 className="font-bold text-2xl mt-1 gradiant-text sm:text-4xl">
              Ingeniero en Software
            </h2>
            <p className="mt-4 text-gray-600">
              Desarrollador Fullstack enfocado en crear soluciones web
              innovadoras y eficientes. Basado en una colaboración efectiva y
              una comunicación clara
            </p>
            <div className="flex flex-row gap-5 justify-center sm:justify-start mt-5 ">
              {socialLinks.map((link) => {
                return (
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={link.id}
                    className="text-gray-400 cursor-pointer rounded-lg bg-gray-300 p-2 duration-300 hover:text-blue-500 dark:text-gray-500 dark:hover:text-blue-500"
                  >
                    <i className="text-base sm:text-xl md:text-xl">
                      <link.icon />
                    </i>
                  </a>
                );
              })}
            </div>

            {/* <button className="btn text-sm py-3 bg-gradient-to-r from-blue-500 to-cyan-500 bg-gradient-hover px-5 mt-4 "> */}
            <a
              className="btn border-none text-sm py-3 bg-gradient-to-r from-blue-500 to-cyan-500 bg-gradient-hover px-5 mt-4 flex items-center text-black w-2/4 lg:w-1/4  mx-auto sm:mx-0"
              href={cv}
              target="_blank"
              rel="noreferrer"
            >
              <FaDownload />
              Descargar CV
            </a>
            {/* </button> */}
          </motion.div>
          <motion.div
            className=" w-full sm:w-1/3  profile-image"
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={Portfile}
              alt="Profile"
              className=" w-2/3 sm:w-full md:w-3/4 m-auto"
            />
          </motion.div>
        </div>
      </section>
      {/* Mouse Icon */}
      <a
        href="#experience"
        className=" transform "
        onClick={(e) => {
          handleSmoothScroll(e, "experience");
        }}
      >
        <FaMouse className="text-gray-400 text-3xl animate-bounce" />
      </a>
    </main>
  );
}

export default Banner;
