import Card from "./shared/Card";
import { Projects } from "../data/info";
import { motion } from "framer-motion";
import useIsMobile from "../hooks/useIsMobile";

function Project() {
  const isMobile = useIsMobile();

  return (
    <section id="projects">
      <div className="container m-auto px-4 sm:py-12 text-center">
        <motion.h2
          className="text-2xl font-semibold"
          initial={!isMobile ? { opacity: 0, y: 10 } : null}
          whileInView={!isMobile ? { opacity: 2, y: 0 } : null}
          transition={{ duration: 2 }}
        >
          Projects
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-11"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 5 }}
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
