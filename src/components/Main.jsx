import { motion } from "framer-motion";
import Portfile from "../assets/images/perfil_7.png";
import { socialLinks } from "../data/info";
import { FaDownload, FaMouse, FaArrowDown } from "react-icons/fa";
import cv from "../assets/cv.pdf";

function Banner() {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    const yOffset = -125;
    const yPosition =
      targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: yPosition,
      behavior: "smooth",
    });
  };

  return (
    <main
      className="relative min-h-screen flex flex-col justify-center items-center bg-[#fafafa] dark:bg-base-100 overflow-hidden"
      id="top"
    >
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>

      {/* Main Content */}
      <section className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Text Content */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Greeting */}
            <motion.h1
              className="text-4xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent block">
                Hola,
              </span>
              <span className="text-gray-800 dark:text-white block mt-2">
                Soy Kevin Cayo
              </span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Ingeniero en Software
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Desarrollador Fullstack especializado en crear soluciones web 
              <span className="text-primary font-semibold"> innovadoras y eficientes</span>. 
              Comprometido con la excelencia técnica y la entrega de productos de alta calidad.
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex justify-center lg:justify-start gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-base-300 text-gray-700 dark:text-gray-400 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-110 border border-gray-200 dark:border-base-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="text-xl" />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <a
                href={cv}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary bg-gradient-to-r from-primary to-secondary border-none text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-300 group"
              >
                <FaDownload className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                Descargar CV
              </a>
              
              <button
                onClick={(e) => handleSmoothScroll(e, "contactme")}
                className="btn btn-outline border-gray-700 dark:border-primary text-gray-700 dark:text-primary hover:bg-primary dark:hover:bg-primary hover:border-gray-400 dark:hover:border-primary hover:text-white px-8 py-3 rounded-xl transition-all duration-300 group"
              >
                <span className="flex items-center gap-2">
                  Contáctame
                  <FaArrowDown className="group-hover:translate-y-1 transition-transform duration-300" />
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Decorative Border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-lg"></div>
              
              {/* Profile Image Container */}
              <div className="relative bg-white dark:bg-base-300 rounded-2xl p-2 shadow-2xl">
                <motion.img
                  src={Portfile}
                  alt="Kevin Cayo - Ingeniero en Software"
                  className="w-80 object-cover rounded-2xl shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 0.9, 0.6]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.5
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.a
          href="#experience"
          onClick={(e) => handleSmoothScroll(e, "experience")}
          className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-300 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mb-2"
          >
            <FaMouse className="text-2xl group-hover:scale-110 transition-transform duration-300" />
          </motion.div>
          <span className="text-sm font-medium group-hover:text-primary transition-colors duration-300">
            Scroll Down
          </span>
        </motion.a>
      </motion.div>
    </main>
  );
}

export default Banner;