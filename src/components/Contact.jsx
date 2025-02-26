import FormInput from "./shared/FormInput";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_REACT_APP_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_REACT_APP_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success("Message send!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Error al enviar mensaje");
        }
      );
  };

  return (
    <section id="contactme">
      <Toaster position="bottom-center" reverseOrder={true} />
      <div className="relative container mx-auto flex flex-col-reverse py-12   dark:text-white ">
        <div className="w-full lg:w-full  px-4 ">
          <div className="leading-loose ">
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
            >
              <h2 className="text-2xl font-semibold text-center ">
                ¡Contáctame!
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-base font-light text-center px-4">
                ¡Ponte en contacto! Ya sea para consultas, colaboraciones o
                simplemente para charlar sobre tecnología, estoy aquí.
                Desarrolladores, clientes o compañeros entusiastas de la
                tecnología, estoy abierto a nuevas conexiones y oportunidades.
                ¡Contáctame!
              </p>
            </motion.div>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="container m-auto  rounded-xl shadow-xl text-left "
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
                      placeholderText="Nombres"
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
                      placeholderText="Email"
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
                  placeholderText="Tema"
                  ariaLabelName="Subject"
                />
                <div className="mt-6">
                  <textarea
                    className="input input-bordered w-full px-5 py-2 border border-gray-500 rounded-md  
                      border-opacity-50  bg-transparent shadow-sm text-md dark:text-white text-black placeholder-gray-700"
                    name="message"
                    id="message"
                    cols="14"
                    rows="3"
                    aria-label="Message"
                    placeholder="Mensaje"
                  ></textarea>
                </div>
                <div className="flex flex-1 justify-center items-end pb-4">
                  <button
                    type="submit"
                    className="btn border-none text-sm py-3  bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full bg-gradient-hover px-5  mt-4 dark:text-black"
                  >
                    <span className="flex justify-around gap-2 items-center text-black ">
                      <FaPaperPlane className="" />
                      Enviar
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
