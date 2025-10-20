import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaRobot,
  FaGraduationCap,
  FaTimes,
  FaChevronUp,
} from "react-icons/fa";
import { skills } from "../data/info";
import { useState, useEffect } from "react";

function About() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  // Agrupar skills por categoría
  const skillsByCategory = {
    lenguajes: skills.filter((skill) => skill.type === "lenguajes"),
    backend: skills.filter((skill) => skill.type === "backend"),
    frontend: skills.filter((skill) => skill.type === "frontend"),
    database: skills.filter((skill) => skill.type === "database"),
    qaCicd: skills.filter((skill) => skill.type === "qa-cicd"),
    iaAutomation: skills.filter((skill) => skill.type === "ia-automation"),
  };

  // Configuración de categorías
  const categories = [
    {
      key: "lenguajes",
      title: "Lenguajes de Programación",
      icon: FaCode,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      description:
        "Dominio de múltiples lenguajes de programación para desarrollo versátil y eficiente",
    },
    {
      key: "backend",
      title: "Backend",
      icon: FaServer,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      description: "Desarrollo de APIs robustas y servicios backend escalables",
    },
    {
      key: "frontend",
      title: "Frontend",
      icon: FaCode,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      description:
        "Creación de interfaces modernas y experiencias de usuario excepcionales",
    },
    {
      key: "database",
      title: "Base de Datos",
      icon: FaDatabase,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      description: "Manejo de bases de datos relacionales y no relacionales",
    },
    {
      key: "qaCicd",
      title: "QA & CI/CD",
      icon: FaTools,
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20",
      description:
        "Automatización de pruebas y procesos de integración continua",
    },
    {
      key: "iaAutomation",
      title: "IA & Automatización",
      icon: FaRobot,
      color: "from-teal-500 to-green-500",
      bgColor: "bg-teal-500/10",
      borderColor: "border-teal-500/20",
      description:
        "Implementación de soluciones de inteligencia artificial y automatización",
    },
  ];

  const openModal = (category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
    setTimeout(() => setSelectedCategory(null), 300);
  };

  // Modal para Desktop (pequeño y centrado)
  const DesktopModal = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="modal-box max-w-2xl w-full max-h-[80vh] overflow-hidden p-0"
    >
      {/* Modal Header */}
      <div
        className={`p-6 border-b ${selectedCategory.borderColor} bg-gradient-to-r ${selectedCategory.color} bg-opacity-5`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2 ${selectedCategory.bgColor} rounded-lg`}>
              <selectedCategory.icon
                className={`text-2xl bg-gradient-to-r ${selectedCategory.color} bg-clip-text text-transparent`}
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-base-content">
                {selectedCategory.title}
              </h3>
              <p className="text-sm text-base-content/80">
                {selectedCategory.description}
              </p>
            </div>
          </div>
          <button
            onClick={closeModal}
            className="btn btn-ghost btn-sm btn-circle"
          >
            <FaTimes className="text-lg" />
          </button>
        </div>
      </div>

      {/* Modal Content */}
      <div className="p-6 overflow-y-auto max-h-[50vh]">
        <div className="mb-4">
          <span className="text-sm text-base-content/70">
            {skillsByCategory[selectedCategory.key]?.length} habilidades
            encontradas
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {skillsByCategory[selectedCategory.key]?.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`p-3 rounded-lg border ${selectedCategory.borderColor} bg-base-200 dark:bg-base-300 hover:shadow-md transition-all duration-200`}
            >
              <span className="text-base-content font-medium text-sm">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Footer */}
      <div className="modal-action p-4 border-t border-base-300 dark:border-base-400">
        <button onClick={closeModal} className="btn btn-primary">
          Cerrar
        </button>
      </div>
    </motion.div>
  );

  // Modal para Móvil (deslizante inferior)
  const MobileModal = () => (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-base-100 rounded-t-3xl border-t border-base-300 shadow-2xl max-h-[85vh]"
    >
      {/* Handle de arrastre */}
      <div className="flex justify-center pt-3 pb-2">
        <div className="w-12 h-1.5 bg-base-300 rounded-full"></div>
      </div>

      {/* Modal Header */}
      <div className={`px-6 py-4 border-b ${selectedCategory.borderColor}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2 ${selectedCategory.bgColor} rounded-lg`}>
              <selectedCategory.icon
                className={`text-xl bg-gradient-to-r ${selectedCategory.color} bg-clip-text text-transparent`}
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-base-content">
                {selectedCategory.title}
              </h3>
              <p className="text-sm text-base-content/80">
                {selectedCategory.description}
              </p>
            </div>
          </div>
          <button
            onClick={closeModal}
            className="btn btn-ghost btn-sm btn-circle"
          >
            <FaTimes className="text-lg" />
          </button>
        </div>
      </div>

      {/* Modal Content */}
      <div className="p-6 overflow-y-auto max-h-[60vh]">
        <div className="mb-4">
          <span className="text-sm text-base-content/70">
            {skillsByCategory[selectedCategory.key]?.length} habilidades
            encontradas
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {skillsByCategory[selectedCategory.key]?.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              className={`p-3 rounded-lg border ${selectedCategory.borderColor} bg-base-200 hover:shadow-md transition-all duration-200`}
            >
              <span className="text-base-content font-medium text-sm">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Footer */}
      <div className="p-4 border-t border-base-300 bg-base-200">
        <button onClick={closeModal} className="btn btn-primary w-full">
          Cerrar
        </button>
      </div>
    </motion.div>
  );

  return (
    <section
      id="aboutme"
      className="min-h-screen py-20 bg-base-400 dark:bg-base-200 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

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
          <p className="text-lg text-base-200 dark:text-base-content/70 max-w-2xl mx-auto leading-relaxed">
            Descubre mi pasión por el desarrollo, mis habilidades técnicas y mi
            trayectoria académica en el mundo de la tecnología
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 ">
          {/* Left Column - About Me */}
          <motion.div
            className="w-full lg:w-1/2 "
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-base-400 dark:bg-base-100 rounded-2xl p-8 border border-base-400 dark:border-base-300 shadow-sm hover:shadow-lg transition-all duration-300">
              {/* Section Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <FaCode className="text-primary text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-base-200 dark:text-base-content">
                  ¡Conóceme!
                </h3>
              </div>

              {/* Content */}
              <div className="space-y-4 text-left">
                <motion.p
                  className="text-base-200/90 dark:text-base-content/80 leading-relaxed text-pretty"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Soy un{" "}
                  <span className="text-primary font-semibold">
                    desarrollador fullstack apasionado
                  </span>{" "}
                  especializado en desarrollo backend y frontend. Mi enfoque
                  está en construir y gestionar la lógica y funcionalidad detrás
                  de sitios web y aplicaciones web, creando sistemas robustos y
                  eficientes que impulsen el éxito general del producto.
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
                  className="inline-flex items-center gap-3 btn btn-primary bg-gradient-to-r from-primary to-secondary border-none text-primary-content px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-300 group"
                  onClick={(e) => handleSmoothScroll(e, "contactme")}
                >
                  <span className="flex items-center gap-2">
                    Contáctame
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </a>
              </motion.div>
            </div>
            {/* Education Section */}
            <div className="bg-base-400 dark:bg-base-100 mt-5 rounded-2xl p-8 border border-base-400 dark:border-base-300 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <FaGraduationCap className="text-accent text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-base-200 dark:text-base-content">
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
                    <h4 className="text-lg font-bold text-base-200 dark:text-base-content">
                      Universidad Técnica de Ambato
                    </h4>
                    <p className="text-primary font-semibold mt-1">
                      Mayo 2020 - Febrero 2025
                    </p>
                    <p className="text-base-200/90 dark:text-base-content/70 mt-2">
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
                    <p className="text-xs text-base-200/80 dark:text-base-content/50 mt-2 text-right">
                      100% completado
                    </p>
                  </div>
                </div>
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
              <div className="bg-base-400 dark:bg-base-100 rounded-2xl p-8 border border-base-400 dark:border-base-300 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <FaServer className="text-secondary text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-base-200 dark:text-base-content">
                    Habilidades Técnicas
                  </h3>
                </div>

                <motion.p
                  className="text-base-200/90 dark:text-base-content/70 mb-6 text-left"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Haz clic en cada categoría para ver mis habilidades
                  específicas:
                </motion.p>

                {/* Skills Grid por Categorías */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {categories.map((category, index) => (
                    <motion.button
                      key={category.key}
                      className={`p-4 rounded-xl border-2 ${category.borderColor} bg-base-400 dark:bg-base-100 hover:shadow-lg transition-all duration-300 group text-left`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ delay: 0.1 * index }}
                      onClick={() => openModal(category)}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className={`p-2 ${category.bgColor} rounded-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <category.icon
                            className={`text-xl bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                          />
                        </div>
                        <h4 className="font-semibold text-base-200 dark:text-base-content text-sm flex-1">
                          {category.title}
                        </h4>
                      </div>
                      <p className="text-xs text-base-200/80 dark:text-base-content/60 line-clamp-2">
                        {category.description}
                      </p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-base-200/70 dark:text-base-content/50">
                          {skillsByCategory[category.key]?.length} habilidades
                        </span>
                        <FaChevronUp className="text-base-200/70 dark:text-base-content/50 group-hover:text-primary transition-colors duration-300" />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedCategory && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={closeModal}
            />

            {/* Modal Container */}
            <div
              className={`fixed inset-0 z-50 flex ${
                isMobile ? "items-end" : "items-center justify-center"
              }`}
            >
              {isMobile ? <MobileModal /> : <DesktopModal />}
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

export default About;
