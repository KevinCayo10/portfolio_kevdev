import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { skills } from "../data/info";

function About() {
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
    <section id="aboutme">
      <div className=" relative container m-auto px-4 py-12  text-center dark:text-white ">
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <h2 className="font-bold text-2xl">Acerca de mí</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-base">
            Aquí encontrarás más información sobre mí, lo que hago y mis
            habilidades actuales principalmente en términos de programación y
            tecnología.
          </p>
        </motion.div>
        {/* Profile */}
        <div className="mt-5 flex flex-col gap-10 sm:flex-row">
          <div className="w-full flex flex-col sm:w-1/2 ">
            <h3 className="text-xl font-medium text-left">¡Conóceme!</h3>
            <div className="text-left">
              <div>
                <p className="text-base font-light mt-2">
                  Soy un apasionado desarrollador fullstack especializado en
                  desarrollo backend y frontend. Mi enfoque está en construir y
                  gestionar la lógica y funcionalidad detrás de sitios web y
                  aplicaciones web, aprovechando mi experiencia para crear
                  sistemas robustos y eficientes que impulsen el éxito general
                  del producto.
                </p>
                <p className="text-base font-light mt-2">
                  Además de mis habilidades técnicas, tengo un fuerte interés en
                  dominar las prácticas de DevOps, especialmente la integración
                  continua (CI) y la entrega continua (CD). Disfruto de los
                  desafíos y me dedico a automatizar procesos y mejorar la
                  eficiencia a lo largo del ciclo de vida del desarrollo de
                  software.
                </p>
              </div>
            </div>
            <a
              href="#contactme"
              className="flex justify-start items-center btn border-none text-sm py-3  bg-gradient-to-r from-blue-500 to-cyan-500 bg-gradient-hover px-5  mt-4 w-1/3 md:w-1/2 lg:w-1/4"
              onClick={(e) => {
                handleSmoothScroll(e, "contactme");
              }}
            >
              <span className="flex justify-around gap-2 items-center text-black ">
                <FaArrowRight className="" />
                Contáctame
              </span>
            </a>
          </div>
          {/* Skills */}
          <div className="w-full flex flex-col sm:w-1/2">
            <h3 className="text-xl font-medium text-left">Habilidades</h3>
            <div>
              <p className="text-base font-light mt-2 text-left">
                Tengo experiencia en las siguientes tecnologías y habilidades
              </p>
              <ul className="text-left mt-2 flex flex-wrap gap-3 ">
                {skills.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className="text-base font-light border rounded-lg py-1 px-3 "
                    >
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div class="divider"></div>

            <h3 className="text-xl font-medium text-left ">Educación </h3>
            <p className="text-left">
              <strong>Universidad Técnica de Ambato</strong>
            </p>
            <p className="text-left">Mayo 2020 - Febrero 2025</p>
            <p className="text-left">Ingeniería en Software</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
