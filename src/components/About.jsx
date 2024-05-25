function About() {
  return (
    <section id="aboutme">
      <div className="container m-auto px-4 py-6 max-w-4xl text-center dark:text-white">
        <h2 className="font-bold text-2xl">About me</h2>
        <p className="text-gray-400 mt-4">
          Here you will find more information about me, what I do and my current
          skills mainly in terms of programming and technology.
        </p>
        {/* Profile */}
        <div className="mt-5 flex flex-col gap-10 sm:flex-row">
          <div className="w-full flex flex-col sm:w-1/2 ">
            <h3 className="text-xl font-medium text-left">¡Get to know me!</h3>
            <div className="text-left">
              <p className="text-base font-light mt-2 text-justify">
                I am a passionate backend developer with experience in building
                and managing the logic and functionality behind websites and web
                applications. My focus is on creation of robust and efficient
                systems that drive the overall success of the product.
              </p>
              <p className="text-base font-light mt-2 text-justify">
                In addition to my experience in backend development, I have a
                great interest in learning and applying DevOps practices,
                especially in continuous integration (CI) and continuous
                delivery (CD). strongly believe on the importance of automating
                processes and improving efficiency in the software development
                life cycle.
              </p>
            </div>
            <a
              className=" text-sm w-1/2 py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700 px-5 mt-4"
              href="#contactme"
            >
              Contact me
            </a>
          </div>
          {/* Skills */}
          <div className="w-full flex flex-col sm:w-1/2">
            <h3 className="text-xl font-medium text-left">Skills</h3>
            <div>
              <p className="text-base font-light mt-2 text-justify">
                I have experience in the following technologies and tools:
              </p>
              <ul className="text-left mt-2 flex flex-wrap gap-3 ">
                <li className="text-base font-light border rounded-lg py-1 px-3 ">
                  Node.js
                </li>
                <li className="text-base font-light border rounded-lg py-1 px-3">
                  Express.js
                </li>
                <li className="text-base font-light border rounded-lg py-1 px-3">
                  MongoDB
                </li>
                <li className="text-base font-light border rounded-lg py-1 px-3">
                  PostgreSQL
                </li>
                <li className="text-base font-light border rounded-lg py-1 px-3">
                  Docker
                </li>
                <li className="text-base font-light border rounded-lg py-1 px-3">
                  Kubernetes
                </li>
                <li className="text-base font-light border rounded-lg py-1 px-3">
                  Git
                </li>
                <li className="text-base font-light border rounded-lg py-1 px-3">
                  Github
                </li>
                <li className="text-base font-light border rounded-lg py-1 px-3">
                  Jenkins
                </li>
                <li className="text-base font-light border rounded-lg py-1 px-3">
                  AWS
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
