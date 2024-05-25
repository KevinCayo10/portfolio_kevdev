import PropTypes from "prop-types";
import ButtonG from "./Button";

function Card({ url_img, title, description, url_page, url_github, tools }) {
  console.log("TOOLS _ ", tools);
  return (
    <div className="border  rounded-md p-5 flex-1 ">
      <img src={url_img} alt="" width={200} className="w-full h-auto" />
      <h3 className="text-xl font-semibold mt-5">{title}</h3>
      <div>
        {tools.forEach((element) => {
          return (
            <div>
              <p>{element}</p>
            </div>
          );
        })}
      </div>
      <p className="text-gray-400">{description}</p>
      <div className="flex  mt-12 gap-1 ">
        <ButtonG
          className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
          url={url_page}
          label={"Live preview"}
        />
        <ButtonG
          className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500"
          url={url_github}
          label={"Github"}
        />
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  url_img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  url_page: PropTypes.string,
  url_github: PropTypes.string,
  tools: PropTypes.array,
};
