import FormInput from "./shared/FormInput";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contactme">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileInView={{ opacity: 0.9, x: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
          delay: 0.1,
        }}
      >
        <div className="container mx-auto flex flex-col-reverse py-5 ">
          <div className="w-full lg:w-full ">
            <div className="leading-loose ">
              <h2 className="text-2xl font-semibold px-4 text-center">
                Contact me
              </h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Form submitted");
                }}
                className="container m-auto px-4 rounded-xl shadow-xl text-left "
              >
                <div className="mt-5">
                  <div className="flex flex-col sm:flex-row sm:gap-5">
                    <div className="flex-1 sm:w-1/2 ">
                      <FormInput
                        inputLabel="Full name"
                        labelFor="name"
                        inputType="text"
                        inputId="name"
                        inputName="name"
                        placeholderText="Your name"
                        ariaLabelName="Name"
                      />
                    </div>
                    <div className="flex-1 sm:w-1/2 ">
                      <FormInput
                        inputLabel="Email"
                        labelFor="email"
                        inputType="email"
                        inputId="email"
                        inputName="email"
                        placeholderText="Your email"
                        ariaLabelName="Email"
                      />
                    </div>
                  </div>
                  <FormInput
                    inputLabel="Subject"
                    labelFor="subject"
                    inputType="text"
                    inputId="subject"
                    inputName="subject"
                    placeholderText="Subject"
                    ariaLabelName="Subject"
                  />
                  <div className="mt-6">
                    <textarea
                      className="w-full px-5 py-2 border border-gray-500 rounded-md  bg-gray-400 shadow-sm text-md text-black placeholder-gray-700"
                      name="message"
                      id="message"
                      cols="14"
                      rows="6"
                      aria-label="Message"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
