import { FaArrowRight } from "react-icons/fa";
import FormInput from "./shared/FormInput";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
  const form = useRef();
  console.log(import.meta.env);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_REACT_APP_SERVICE_ID,
        import.meta.env.env.VITE_REACT_APP_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_REACT_APP_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contactme">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
      >
        <div className="container mx-auto flex flex-col-reverse py-5 dark:text-white">
          <div className="w-full lg:w-full ">
            <div className="leading-loose ">
              <h2 className="text-2xl font-semibold px-4 text-center">
                Contact me
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-base font-light text-center px-4">
                Get in touch! Whether it´s for inquiries, collaborations, or
                just a tech chat, I´m here. Developers, clients, or fellow tech
                enthusiasts, I´m open to new connections and opportunities.
                Let´s connect!
              </p>
              <form
                ref={form}
                onSubmit={sendEmail}
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
                      className="w-full px-5 py-2 border border-gray-500 rounded-md  
                      border-opacity-50 dark:bg-transparent shadow-sm text-md dark:text-white text-black placeholder-gray-700"
                      name="message"
                      id="message"
                      cols="14"
                      rows="3"
                      aria-label="Message"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="flex flex-1 justify-center items-end pb-4">
                    <button
                      type="submit"
                      className="text-sm py-3  bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full bg-gradient-hover px-5  mt-4 dark:text-black"
                    >
                      <span className="flex justify-around gap-2 items-center text-black ">
                        <FaArrowRight className="" />
                        Contact me
                      </span>
                    </button>
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
