import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function ButtonG({ iconName, url, label, className }) {
  return (
    <button className={className} onClick={() => (window.location.href = url)}>
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
  className: PropTypes.string,
};

ButtonG.defaultProps = {
  className: "",
};
