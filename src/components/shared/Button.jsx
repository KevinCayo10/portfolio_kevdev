import PropTypes from "prop-types";

function ButtonG({ iconName, url, label, version }) {
  return (
    <button
      className={`${
        version == "live"
          ? "btn border-none text-sm w-1/2 py-3  bg-gradient-to-r from-blue-500 to-cyan-500  bg-gradient-hover px-5 "
          : "btn border-none flex-1 text-sm py-3 border  hover:border-blue-500 hover:text-blue-500"
      }`}
      onClick={() => window.open(url, "_blank")}
    >
      <span
        className={`${
          version == "live"
            ? "flex justify-center gap-1 items-center text-black"
            : "flex justify-center gap-1 items-center  text-white"
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
