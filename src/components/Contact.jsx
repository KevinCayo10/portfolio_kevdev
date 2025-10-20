import FormInput from "./shared/FormInput";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaPaperPlane, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_REACT_APP_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_REACT_APP_PUBLIC_KEY,
        }
      );
      
      toast.success("¡Mensaje enviado correctamente! Te responderé pronto.");
      form.current.reset();
    } catch (error) {
      console.log("FAILED...", error.text);
      toast.error("Error al enviar el mensaje. Inténtalo de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contactme" className="min-h-screen py-20 bg-[#fafafa] dark:bg-base-200 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <Toaster 
          position="top-right" 
          reverseOrder={false}
          toastOptions={{
            duration: 4000,
            style: {
              background: '#fff',
              color: '#1f2937',
              border: '1px solid #e5e7eb',
            },
          }}
        />
        
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <FaEnvelope className="text-primary text-2xl" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Contáctame
            </h2>
          </div>
          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ¿Tienes un proyecto en mente? Hablemos. Estoy aquí para colaborar, 
            innovar y crear soluciones extraordinarias contigo.
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            className="w-full lg:w-2/5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white dark:bg-base-300 rounded-2xl p-8 border border-gray-200 dark:border-base-200 shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-base-200 rounded-xl hover:shadow-md transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <FaEnvelope className="text-primary text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                    <p className="text-gray-800 dark:text-white font-medium">kejoelct1002@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 p-4  bg-gray-50 dark:bg-base-200 rounded-xl hover:shadow-md transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <FaPhone className="text-secondary text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Teléfono</p>
                    <p className="text-gray-800 dark:text-white font-medium">+593 99 397 2854</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-base-200 rounded-xl hover:shadow-md transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <FaMapMarkerAlt className="text-accent text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Ubicación</p>
                    <p className="text-gray-800 dark:text-white font-medium">Puerto Quito, Ecuador</p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-8 p-4 bg-primary/10 rounded-xl border border-primary/20">
                <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
                  ⚡ Respuesta rápida garantizada en menos de 24 horas
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="w-full lg:w-3/5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-base-300 rounded-2xl p-8 border border-gray-200 dark:border-base-200 shadow-sm hover:shadow-lg transition-all duration-300">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput
                    inputLabel="Nombre completo"
                    labelFor="name"
                    inputType="text"
                    inputId="name"
                    inputName="name"
                    placeholderText="Tu nombre completo"
                    ariaLabelName="Name"
                    required
                  />
                  <FormInput
                    inputLabel="Email"
                    labelFor="email"
                    inputType="email"
                    inputId="email"
                    inputName="email"
                    placeholderText="tu.email@ejemplo.com"
                    ariaLabelName="Email"
                    required
                  />
                </div>

                <FormInput
                  inputLabel="Asunto"
                  labelFor="subject"
                  inputType="text"
                  inputId="subject"
                  inputName="subject"
                  placeholderText="¿En qué puedo ayudarte?"
                  ariaLabelName="Subject"
                  required
                />

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Mensaje *
                  </label>
                  <motion.textarea
                    className="textarea textarea-bordered w-full h-32 px-4 py-3 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-200 bg-white dark:bg-base-200 border-gray-300 dark:border-base-200 resize-none focus:border-primary transition-colors duration-300"
                    name="message"
                    id="message"
                    placeholder="Cuéntame sobre tu proyecto o consulta..."
                    aria-label="Message"
                    required
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                <motion.div
                  className="flex justify-center pt-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`btn btn-primary bg-gradient-to-r from-primary to-secondary border-none text-white px-8 py-3 rounded-xl min-w-48 ${
                      isLoading ? 'loading' : ''
                    }`}
                  >
                    {!isLoading && (
                      <span className="flex items-center gap-2">
                        <FaPaperPlane />
                        {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
                      </span>
                    )}
                    {isLoading && 'Enviando...'}
                  </button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;