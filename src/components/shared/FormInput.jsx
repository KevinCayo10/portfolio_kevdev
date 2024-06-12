import React from "react";

function FormInput({
  inputLabel,
  labelFor,
  inputType,
  inputId,
  inputName,
  placeholderText,
  ariaLabelName,
}) {
  return (
    <div className=" mb-4">
      <input
        className="w-full px-5 py-2 text-black border border-gray-500 border-opacity-50 rounded-md dark:bg-transparent shadow-sm text-md placeholder-gray-700 dark:text-white text-black"
        type={inputType}
        id={inputId}
        name={inputName}
        placeholder={placeholderText}
        aria-label={ariaLabelName}
        required
      />
    </div>
  );
}

export default FormInput;
