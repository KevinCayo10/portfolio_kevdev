import PropTypes from "prop-types";
import ButtonG from "./Button";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaCode, FaUserTie } from "react-icons/fa";

function Card({
  url_img,
  title,
  description,
  url_page,
  url_github,
  tools,
  position,
}) {
  return (
    <motion.div
      className="group relative bg-base-100 dark:bg-base-300 rounded-2xl overflow-hidden border border-base-300 dark:border-base-300/30 shadow-lg hover:shadow-2xl transition-all duration-500 flex-1 flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }}
    >
      {/* Image Container with Overlay */}
      <div className="relative overflow-hidden">
        <motion.img 
          src={url_img} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          whileHover={{ scale: 1.05 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base-100/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Position Badge */}
        {position && (
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
              <FaUserTie className="text-xs" />
              {position}
            </span>
          </div>
        )}
        
        {/* Tools Preview */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex flex-wrap gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {tools.slice(0, 3).map((tool, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-base-100/90 dark:bg-base-300/90 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-md backdrop-blur-sm border border-base-300"
              >
                {tool}
              </span>
            ))}
            {tools.length > 3 && (
              <span className="px-2 py-1 bg-base-100/90 dark:bg-base-300/90 text-gray-500 dark:text-gray-400 text-xs font-medium rounded-md backdrop-blur-sm border border-base-300">
                +{tools.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Tools Section */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <FaCode className="text-primary text-sm" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Tecnologías</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => (
              <motion.span
                key={index}
                className="px-3 py-1 bg-base-200 dark:bg-base-400 text-gray-700 dark:text-gray-300 text-sm rounded-lg border border-base-300 dark:border-base-500 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 cursor-default"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto pt-4 border-t border-base-300 dark:border-base-300/30">
          {url_page && url_page !== "" && (
            <motion.div 
              className="flex-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ButtonG
                version="live"
                url={url_page}
                label={"Demo"}
                iconName={<FaExternalLinkAlt />}
              />
            </motion.div>
          )}
          <motion.div 
            className="flex-1"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ButtonG
              version="code"
              url={url_github}
              label={"Código"}
              iconName={<FaGithub />}
            />
          </motion.div>
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
}

// Enhanced ButtonG component (if you can modify it)
// If you can't modify ButtonG, here's a temporary inline solution:
function EnhancedButton({ version, url, label, iconName }) {
  const baseClasses = "w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300";
  
  const versions = {
    live: `${baseClasses} bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:scale-105`,
    code: `${baseClasses} bg-base-200 dark:bg-base-400 text-gray-700 dark:text-gray-300 hover:bg-base-300 dark:hover:bg-base-500 hover:shadow-md`
  };

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={versions[version]}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {iconName}
      {label}
    </motion.a>
  );
}

Card.propTypes = {
  url_img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url_page: PropTypes.string,
  url_github: PropTypes.string.isRequired,
  tools: PropTypes.array.isRequired,
  position: PropTypes.string,
};

export default Card;