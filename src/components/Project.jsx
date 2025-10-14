import Card from "./shared/Card";
import { Projects } from "../data/info";
import { motion } from "framer-motion";
import { FaCode, FaRocket } from "react-icons/fa";

function Project() {
  return (
    <section id="projects" className="min-h-screen py-20 bg-base-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <FaCode className="text-primary text-2xl" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Proyectos
            </h2>
          </div>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Descubre una selección de proyectos donde he aplicado mis habilidades 
            en desarrollo fullstack para crear soluciones innovadoras y eficientes
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {Projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <Card {...project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-base-200/50 dark:bg-base-300/30 backdrop-blur-sm rounded-2xl p-8 border border-base-300 dark:border-base-300/30 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaRocket className="text-primary text-2xl" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                ¿Tienes un proyecto en mente?
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Estoy siempre abierto a nuevos desafíos y oportunidades para colaborar 
              en proyectos interesantes.
            </p>
            <motion.a
              href="#contactme"
              className="btn btn-primary bg-gradient-to-r from-primary to-secondary border-none text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaRocket />
              Hablemos de tu proyecto
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Project;