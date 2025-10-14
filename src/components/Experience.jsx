import React from "react";
import illustrator from "../assets/images/software-illustrator.webp";
import { motion } from "framer-motion";
import { Experiences } from "../data/info";

function Experience() {
  return (
    <section id="experience" className="min-h-screen py-20 bg-base-100">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Experiencia Laboral
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Un recorrido por mi trayectoria profesional y las contribuciones 
            significativas en cada rol que he desempeñado
          </p>
        </motion.div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Illustration Side */}
          <motion.div 
            className="w-full lg:w-2/5 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative max-w-md">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-lg"></div>
              <img 
                src={illustrator} 
                alt="Software developer illustration" 
                className="relative rounded-xl shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Timeline Side */}
          <div className="w-full lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 via-secondary/50 to-primary/30"></div>
                
                {/* Experience Items */}
                <div className="space-y-8">
                  {Experiences.map((item, index) => (
                    <motion.div
                      key={index}
                      className="relative pl-16 group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-6 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-base-100 shadow-lg group-hover:scale-125 transition-transform duration-300 z-10"></div>
                      
                      {/* Content Card */}
                      <div className="bg-base-200/50 dark:bg-base-300/30 backdrop-blur-sm rounded-2xl p-6 border border-base-300 dark:border-base-300/30 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:border-primary/30">
                        
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                          <div>
                            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-2">
                              {item.date}
                            </span>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                              {item.position}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="font-semibold text-primary dark:text-primary-light">
                                {item.company}
                              </span>
                              <span className="text-gray-400">•</span>
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                {item.level}
                              </span>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                              📍 {item.location}
                            </span>
                          </div>
                        </div>

                        {/* Technologies */}
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {item.technology.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 text-xs font-medium bg-base-300 dark:bg-base-200 text-gray-700 dark:text-gray-300 rounded-full border border-base-300 dark:border-base-400"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Functions */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                            Principales responsabilidades:
                          </h4>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-pretty">
                            {item.functions}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}

export default Experience;