import Card from "./shared/Card";
import { Projects } from "../data/info";
import { motion } from "framer-motion";

function Project() {
  return (
    <section id="projects">
      <div className=" container m-auto px-4 py-12 text-center dark:text-white  ">
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <h2 className="text-2xl font-bold ">Proyectos</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-base">
            Explora una muestra de proyectos en los que he trabajado. Desde
            aplicaciones web hasta soluciones de software.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-11">
          {Projects.map((project) => {
            return <Card key={project.id} {...project} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Project;
