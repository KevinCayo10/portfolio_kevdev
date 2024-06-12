import PropTypes from "prop-types";

function ButtonG({ iconName, url, label, version }) {
  return (
    <button
      className={`${
        version == "live"
          ? "text-sm w-1/2 py-3  bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full bg-gradient-hover px-5 "
          : "flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500"
      }`}
      onClick={() => (window.location.href = url)}
    >
      <span
        className={`${
          version == "live"
            ? "flex justify-center gap-1 items-center text-black"
            : "flex justify-center gap-1 items-center text-black dark:text-white"
        }`}
      >
        {iconName ? iconName : null}
        {label}
      </span>
    </button>
  );
}

export default ButtonG;

ButtonG.propTypes = {
  iconName: PropTypes.node,
  url: PropTypes.string,
  label: PropTypes.string,
  version: PropTypes.string,
};
