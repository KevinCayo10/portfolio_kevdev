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
      className="relative mt-20 flex flex-col justify-center items-center sm:h-screen sm:m-auto "
      id="top"
    >
      {/* Intro/Banner section */}
      <section className="w-full">
        <div className="container mx-auto text-center items-center px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 sm:text-left sm:items-center">
          <motion.div
            className="sm:w-2/3"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-bold text-3xl dark:text-white sm:text-4xl">
              Hello, I´m Kevin Cayo
            </h2>
            <h2 className="font-bold text-2xl mt-1 gradiant-text sm:text-4xl">
              Software Engineer
            </h2>
            <p className="mt-4 text-gray-600">
              Specializing in Fullstack development. I bring a collaborative,
              communicative approach and a strong passion for the field.
            </p>
            <div className="flex flex-row gap-5 justify-center sm:justify-start mt-5">
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

            <button className="text-sm py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full bg-gradient-hover px-5 mt-4 ">
              <a
                className="flex justify-around gap-2 items-center text-black"
                href={cv}
                target="_blank"
                rel="noreferrer"
              >
                <FaDownload className="" />
                Download CV
              </a>
            </button>
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
              className=" w-2/3 sm:w-full md:w-auto m-auto"
            />
          </motion.div>
        </div>
      </section>
      {/* Mouse Icon */}
      <a
        href="#aboutme"
        className=" transform "
        onClick={(e) => {
          handleSmoothScroll(e, "aboutme");
        }}
      >
        <FaMouse className="text-gray-400 text-3xl animate-bounce" />
      </a>
    </main>
  );
}

export default Banner;
