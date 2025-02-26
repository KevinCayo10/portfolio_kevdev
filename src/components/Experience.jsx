import React from "react";
import illustrator from "../assets/images/software-illustrator.webp";
import { motion } from "framer-motion";
import { Experiences } from "../data/info";

function Experience() {
  return (
    <section id="experience" className="container m-auto">
      <div className="relative container m-auto px-4 py-12  text-center dark:text-white ">
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <h2 className="font-bold text-2xl">Experiencia laboral</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-base">
            Aquí encontrarás información sobre mi experiencia laboral durante mi
            desarrollo profesional
          </p>
        </motion.div>
        <div className=" sm:flex gap-2  mt-5  items-center">
          <div className="w-full lg:w-1/2">
            <img src={illustrator} alt="Software developer illustrator" />
          </div>
          <div className=" w-full lg:w-1/2">
            <ol class="relative border-s border-gray-200 ml-3 text-left">
              {Experiences.map((item, index) => {
                return (
                  <li class="mb-10 ms-4" key={index}>
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time class="mb-1 text-sm font-normal leading-none text-black/50 dark:text-gray-500">
                      {item.date} · {item.location}
                    </time>
                    <h3 class="text-sm font-semibold text-gray-300/70">
                      {item.company}
                    </h3>
                    <div class="flex gap-2 justify-start items-center">
                      <h3 class="mt-1 text-xl font-semibold text-gray/80 dark:text-white">
                        {item.level} · {item.position}
                      </h3>
                    </div>
                    <div>
                      <ul className="text-left mt-2 flex flex-wrap gap-3 ">
                        {item.technology.map((tech, index) => {
                          return (
                            <li
                              key={index}
                              className="text-base font-light badge badge-outline py-1 px-3 "
                            >
                              {tech}
                            </li>
                          );
                        })}
                      </ul>{" "}
                    </div>
                    <p class="mt-2 mb-4 text-base font-normal text-gray/60 text-pretty">
                      <span class="text-gray-400/80">Funciones: </span>
                      {item.functions}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
