import project3 from "../assets/images/GSV Ventas.gif";
import project1 from "../assets/images/Vitmap.png";
import project2 from "../assets/images/certyget.gif";
import project4 from "../assets/images/PCG_web.gif";

import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
export const Projects = [
  {
    id: 1,
    title: "VitMap ",
    description:
      "This portfolio is created with React.js, Framer Motio, Vite and Tailwindcss",
    url_img: project1,
    url_page: "",
    url_github: "https://github.com/MarcoOrtiz333/VitMapBackend/tree/develop",
    tools: ["React Native", "Nodejs", "Firebase"],
  },
  {
    id: 2,
    title: "Certyget ",
    description:
      "This portfolio is created with React.js, Framer Motio, Vite and Tailwindcss",
    url_img: project2,
    url_page: "",
    url_github: "https://github.com/KevinCayo10/Certyget_Bakend",
    tools: ["Angular", "Nodejs", "MySQL"],
  },
  {
    id: 3,
    title: "Gestor Ventas ",
    description:
      "This portfolio is created with React.js, Framer Motio, Vite and Tailwindcss",
    url_img: project3,

    url_page: "",
    url_github: "https://github.com/KevinCayo10/proyecto_ventas",
    tools: ["Angular", "Bootstrap", "NodeJS", "MongoDB"],
  },
  {
    id: 4,
    title: "Website PCG Web ",
    description:
      "This portfolio is created with React.js, Framer Motio, Vite and Tailwindcss",
    url_img: project4,

    url_page: "https://almogascialtda.com/",
    url_github: "https://github.com/KevinCayo10/bot_emp_bd/tree/develop",
    tools: ["Codeigniter", "HTML", "CSS"],
  },
];

export const socialLinks = [
  // {
  //   id: 1,
  //   icon: FiGlobe,
  //   url: "https://www.stoman.me/",
  // },
  {
    id: 2,
    icon: FiGithub,
    url: "https://github.com/KevinCayo10",
  },
  {
    id: 3,
    icon: FiTwitter,
    url: "#",
  },
  {
    id: 4,
    icon: FiLinkedin,
    url: "www.linkedin.com/in/kevincayo10",
  },
];

export const Menu = [
  {
    id: 1,
    title: "Home",
    url: "#top",
  },
  {
    id: 2,
    title: "About me",
    url: "#aboutme",
  },
  {
    id: 3,
    title: "My Projects",
    url: "#projects",
  },
  {
    id: 4,
    title: "Contact me",
    url: "#contactme",
  },
];
