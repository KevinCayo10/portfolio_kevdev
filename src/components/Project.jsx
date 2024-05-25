import Card from "./Card";
import { Projects } from "../data/info";
import { motion } from "framer-motion";

function Project() {
  return (
    <section id="projects">
      <div className="container m-auto px-4 sm:py-12">
        <motion.h2
          className="text-2xl font-semibold"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          Projects
        </motion.h2>{" "}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-11"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 0.5, x: 5 }}
          transition={{ duration: 2 }}
        >
          {Projects.map((project) => {
            return <Card key={project.id} {...project} />;
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Project;
