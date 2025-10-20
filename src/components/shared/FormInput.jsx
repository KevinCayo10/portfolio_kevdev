import React from "react";
import { motion } from "framer-motion";

function FormInput({
  inputLabel,
  labelFor,
  inputType,
  inputId,
  inputName,
  placeholderText,
  ariaLabelName,
  required = false,
}) {
  return (
    <motion.div className="space-y-2" whileFocus={{ scale: 1.01 }}>
      <label 
        htmlFor={labelFor} 
        className="text-sm font-medium text-gray-700 dark:text-gray-300 block"
      >
        {inputLabel} {required && <span className="text-primary">*</span>}
      </label>
      <motion.input
        className="input input-bordered w-full px-4 py-3 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 bg-white dark:bg-base-200 border-gray-300 dark:border-base-200 focus:border-primary transition-all duration-300 focus:ring-2 focus:ring-primary/20"
        type={inputType}
        id={inputId}
        name={inputName}
        placeholder={placeholderText}
        aria-label={ariaLabelName}
        required={required}
        whileFocus={{ 
          scale: 1.01,
          transition: { duration: 0.2 }
        }}
      />
    </motion.div>
  );
}

export default FormInput;