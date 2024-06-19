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
      className="relative border  rounded-md p-5 flex-1 "
      initial={{ opacity: 1, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <img src={url_img} alt="" width={200} className="w-full h-auto" />
      <h3 className="text-xl font-semibold mt-5">{title}</h3>
      <p className="text-gray-600 m-2">{description}</p>
      <div className="flex flex-wrap gap-2 items-center  m-2 justify-center">
        {tools.map((element, index) => {
          return (
            <p className="border rounded-full px-2 " key={index}>
              {element}
            </p>
          );
        })}
      </div>
      <div className="flex justify-center gap-2 m-2">
        <p className="border  rounded-full px-2">{position}</p>
      </div>
      <div className="flex  mt-12 gap-1 ">
        {url_page !== "" ? (
          <ButtonG
            version="live"
            url={url_page}
            label={"Live preview"}
            iconName={<FaLink></FaLink>}
          />
        ) : (
          ""
        )}
        <ButtonG
          version="code"
          url={url_github}
          label={"Github"}
          iconName={<FaGithub></FaGithub>}
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
