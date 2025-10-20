import { motion } from "framer-motion";
import { socialLinks } from "../data/info";
import { FaHeart, FaCode, FaRegCopyright, FaArrowUp } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-gray-50 dark:bg-base-300 border-t border-gray-200 dark:border-base-400">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-8 gap-6">
          {/* Brand Section */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Animated Logo */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                <FaCode className="text-white text-lg" />
              </div>
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-30"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.div>

            <div className="flex flex-col">
              <span className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Kevin Cayo
              </span>
              <motion.p
                className="text-gray-700 dark:text-gray-400 text-sm flex items-center gap-1 mt-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <FaRegCopyright className="text-xs" />
                {currentYear} - Todos los derechos reservados
              </motion.p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.nav
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-sm text-gray-700 dark:text-gray-400 mr-2 hidden sm:block">
              Sígueme en:
            </span>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl  text-gray-700 dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg border border-gray-400 dark:border-gray-700"
                  whileHover={{
                    scale: 1.1,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    },
                  }}
                >
                  <link.icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </motion.nav>
        </div>

  
      </div>
    </footer>
  );
}

export default Footer;