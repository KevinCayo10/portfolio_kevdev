import { motion } from "framer-motion";
import Portfile from "../assets/images/perfil.png";
import PortfileBag from "../assets/images/fondo1.png";
import ButtonG from "./shared/Button";

function Banner() {
  return (
    <main className="relative mt-20 sm:mt-25">
      {/* Intro/Banner section */}
      <section id="home">
        <div className="container  text-center items-center px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 sm:text-left sm:items-center">
          <motion.div
            className="w-2/3"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-bold text-4xl">Hello, I´m Kevin Cayo</h2>
            <h2 className="font-bold text-2xl mt-1 gradiant-text sm:text-4xl ">
              Software Engineer
            </h2>
            <p className="mt-4 text-gray-400">
              Specialized in Backend development, seeking to apply my
              development skills with a collaborative, communicative approach
              and a passion for the field.
            </p>
            <ButtonG
              className="px-8 shadow-gray-500 shadow-md py-3 mt-5 border rounded-full hover:border-blue-500"
              label="Download CV"
            />
          </motion.div>
          <motion.div
            className="relative w-1/3"
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
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
