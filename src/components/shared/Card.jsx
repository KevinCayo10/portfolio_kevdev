import PropTypes from "prop-types";
import ButtonG from "./Button";
import { motion } from "framer-motion";
import { FaDownload, FaGit, FaGithub, FaLink } from "react-icons/fa";

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
      className="relative border rounded-md p-5 flex-1 flex flex-col dark:border-gray-600"
      initial={{ opacity: 1, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <img src={url_img} alt="" width={200} className="w-full h-auto" />
      <h3 className="text-xl font-semibold mt-5">{title}</h3>
      <p className="text-gray-600 m-2 max-w-xl">{description}</p>
      <div className="flex flex-wrap gap-2 items-center  justify-center">
        {tools.map((element, index) => {
          return (
            <p className="border rounded-lg py-1 px-3 text-center" key={index}>
              {element}
            </p>
          );
        })}
      </div>
      <div className="flex justify-center gap-2 my-4">
        <p className="border-x-2 px-2">{position}</p>
      </div>
      <div className="flex mt-auto gap-1">
        {url_page !== "" ? (
          <ButtonG
            version="live"
            url={url_page}
            label={"Vista previa"}
            iconName={<FaLink />}
          />
        ) : (
          ""
        )}
        <ButtonG
          version="code"
          url={url_github}
          label={"Github"}
          iconName={<FaGithub />}
        />
      </div>
    </motion.div>
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
