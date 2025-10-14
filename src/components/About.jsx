import { motion } from "framer-motion";
import { FaArrowRight, FaDownload, FaCode, FaServer, FaCloud, FaGraduationCap } from "react-icons/fa";
import { skills } from "../data/info";

function About() {
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
    <section id="aboutme" className="min-h-screen py-20 bg-base-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Acerca de Mí
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Descubre mi pasión por el desarrollo, mis habilidades técnicas y mi 
            trayectoria académica en el mundo de la tecnología
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column - About Me */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-base-200/50 dark:bg-base-300/30 backdrop-blur-sm rounded-2xl p-8 border border-base-300 dark:border-base-300/30 shadow-sm hover:shadow-lg transition-all duration-300">
              {/* Section Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <FaCode className="text-primary text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  ¡Conóceme!
                </h3>
              </div>

              {/* Content */}
              <div className="space-y-4 text-left">
                <motion.p 
                  className="text-gray-700 dark:text-gray-300 leading-relaxed text-pretty"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Soy un <span className="text-primary font-semibold">desarrollador fullstack apasionado</span> especializado en 
                  desarrollo backend y frontend. Mi enfoque está en construir y gestionar la lógica y funcionalidad 
                  detrás de sitios web y aplicaciones web, creando sistemas robustos y eficientes que impulsen 
                  el éxito general del producto.
                </motion.p>

                <motion.p 
                  className="text-gray-700 dark:text-gray-300 leading-relaxed text-pretty"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Además de mis habilidades técnicas, tengo un fuerte interés en dominar las prácticas de 
                  <span className="text-secondary font-semibold"> DevOps</span>, especialmente la integración continua (CI) y la entrega continua (CD). 
                  Disfruto de los desafíos y me dedico a automatizar procesos y mejorar la eficiencia a lo 
                  largo del ciclo de vida del desarrollo de software.
                </motion.p>
              </div>

              {/* CTA Button */}
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href="#contactme"
                  className="inline-flex items-center gap-3 btn btn-primary bg-gradient-to-r from-primary to-secondary border-none text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-300 group"
                  onClick={(e) => handleSmoothScroll(e, "contactme")}
                >
                  <span className="flex items-center gap-2">
                    Contáctame
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Skills & Education */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              {/* Skills Section */}
              <div className="bg-base-200/50 dark:bg-base-300/30 backdrop-blur-sm rounded-2xl p-8 border border-base-300 dark:border-base-300/30 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <FaServer className="text-secondary text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Habilidades Técnicas
                  </h3>
                </div>

                <motion.p 
                  className="text-gray-600 dark:text-gray-400 mb-6 text-left"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Tengo experiencia en las siguientes tecnologías y habilidades:
                </motion.p>

                <motion.div 
                  className="flex flex-wrap gap-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {skills.map((item) => (
                    <motion.span
                      key={item.id}
                      className="px-4 py-2 bg-base-300 dark:bg-base-200 text-gray-700 dark:text-gray-300 rounded-full border border-base-300 dark:border-base-400 text-sm font-medium hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              {/* Education Section */}
              <div className="bg-base-200/50 dark:bg-base-300/30 backdrop-blur-sm rounded-2xl p-8 border border-base-300 dark:border-base-300/30 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <FaGraduationCap className="text-accent text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Formación Académica
                  </h3>
                </div>

                <motion.div 
                  className="text-left space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl mt-1">
                      <FaGraduationCap className="text-primary text-lg" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 dark:text-white">
                        Universidad Técnica de Ambato
                      </h4>
                      <p className="text-primary font-semibold mt-1">Mayo 2020 - Febrero 2025</p>
                      <p className="text-gray-600 dark:text-gray-400 mt-2">
                        Ingeniería en Software
                      </p>
                      <div className="mt-3 w-full bg-base-300 rounded-full h-2">
                        <motion.div 
                          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                        ></motion.div>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-right">
                        100% completado
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;