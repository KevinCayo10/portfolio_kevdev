import { motion } from "framer-motion";
import Portfile from "../assets/images/perfil.png";
import PortfileBag from "../assets/images/fondo1.png";
import ButtonG from "./Button";

function Banner() {
  return (
    <main className="relative mt-20 sm:mt-25" id="aboutme">
      {/* Intro/Banner section */}
      <section>
        <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left sm:items-center">
          <motion.div
            className="w-2/3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
          >
            <h2 className="font-bold text-4xl">Hello, I´m Kevin</h2>
            <h2 className="font-bold text-4xl mt-1 gradiant-text">
              Software Engineer
            </h2>
            <p className="mt-4 text-gray-400">
              Especializado en el desarrollo Backend, que busca aplicar las
              habilidad de desarrollo con enfoque colaborativo, comunicativo y
              pasión
            </p>
            <ButtonG
              className="px-8 shadow-gray-500 shadow-md py-3 mt-5 border rounded-full hover:border-blue-500"
              label="Download CV"
            />
          </motion.div>
          <motion.div
            className="relative w-1/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 0.5, x: 0 }}
            transition={{ duration: 3 }}
          >
            <img
              src={Portfile}
              alt=""
              width={400}
              className="relative z-10 w-auto m-auto"
            />
            <img
              src={PortfileBag}
              alt=""
              className="absolute top-10 left-0 z-0"
              width={600}
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default Banner;
