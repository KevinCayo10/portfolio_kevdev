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
      <div className=" relative container m-auto px-4 py-12 max-w-4xl text-center dark:text-white ">
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <h2 className="font-bold text-2xl">About me</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-base">
            Here you will find more information about me, what I do and my
            current skills mainly in terms of programming and technology.
          </p>
        </motion.div>
        {/* Profile */}
        <div className="mt-5 flex flex-col gap-10 sm:flex-row">
          <div className="w-full flex flex-col sm:w-1/2 ">
            <h3 className="text-xl font-medium text-left">¡Get to know me!</h3>
            <div className="text-left">
              <div>
                <p className="text-base font-light mt-2">
                  I am a passionate fullstack developer specializing in backend
                  and frontend development. My focus is on building and managing
                  the logic and functionality behind websites and web
                  applications, leveraging my expertise to create robust and
                  efficient systems that drive the overall success of the
                  product.
                </p>
                <p className="text-base font-light mt-2">
                  In addition to my technical skills, I have a strong interest
                  in mastering DevOps practices, particularly continuous
                  integration (CI) and continuous delivery (CD). I thrive on
                  challenges and am dedicated to automating processes and
                  enhancing efficiency throughout the software development life
                  cycle.
                </p>
              </div>
            </div>
            <a
              href="#contactme"
              className="flex justify-start"
              onClick={(e) => {
                handleSmoothScroll(e, "contactme");
              }}
            >
              <button className="text-sm py-3  bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full bg-gradient-hover px-5  mt-4 ">
                <span className="flex justify-around gap-2 items-center text-black ">
                  <FaArrowRight className="" />
                  Contact me
                </span>
              </button>
            </a>
          </div>
          {/* Skills */}
          <div className="w-full flex flex-col sm:w-1/2">
            <h3 className="text-xl font-medium text-left">Skills</h3>
            <div>
              <p className="text-base font-light mt-2 text-left">
                I have experience in the following technologies and tools:
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
