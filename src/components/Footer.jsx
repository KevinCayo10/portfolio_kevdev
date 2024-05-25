import React from "react";
import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiGlobe,
  FiYoutube,
} from "react-icons/fi";
import FooterCopyright from "./FooterCopyright";
function Footer() {
  const socialLinks = [
    {
      id: 1,
      icon: <FiGlobe />,
      url: "https://www.stoman.me/",
    },
    {
      id: 2,
      icon: <FiGithub />,
      url: "https://github.com/realstoman",
    },
    {
      id: 3,
      icon: <FiTwitter />,
      url: "https://twitter.com/realstoman",
    },
    {
      id: 4,
      icon: <FiLinkedin />,
      url: "https://www.linkedin.com/in/realstoman",
    },
    {
      id: 5,
      icon: <FiYoutube />,
      url: "https://www.youtube.com/c/realstoman",
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="pt-20 pb-8 mt-20 border-t-2 ">
        {/* Footer social links */}
        <div className="flex flex-col justify-center items-center mb-10 sm:mb-20">
          <p className="text-3xl sm:text-2xl font-semibold mb-5">Follow me</p>
          <ul className="flex gap-4 sm:gap-8">
            {socialLinks.map((link) => {
              return (
                <a
                  href={link.url}
                  target="__blank"
                  key={link.id}
                  className="text-gray-400 cursor-pointer rounded-lg bg-gray-100 p-4 duration-300
                  hover:text-blue-500
                  hover:bg-gray-300"
                >
                  <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
                </a>
              );
            })}
          </ul>
        </div>
        <FooterCopyright />
      </div>
    </div>
  );
}

export default Footer;
