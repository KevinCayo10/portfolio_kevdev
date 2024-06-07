import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function ButtonG({ iconName, url, label, version }) {
  return (
    <button
      className={`${
        version == "live"
          ? "text-sm w-1/2 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full bg-gradient-hover px-5 mt-4"
          : "flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500"
      }`}
      onClick={() => (window.location.href = url)}
    >
      {iconName ? <FontAwesomeIcon icon={iconName} /> : null}
      {label}
    </button>
  );
}

export default ButtonG;

ButtonG.propTypes = {
  iconName: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  url: PropTypes.string,
  label: PropTypes.string,
  version: PropTypes.string,
};
