import project3 from "../assets/images/GSV Ventas.gif";
import project1 from "../assets/images/Vitmap.png";
import project2 from "../assets/images/certyget.gif";
import project4 from "../assets/images/PCG_web.gif";

import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
export const Projects = [
  {
    id: 1,
    title: "VitMap ",
    description: "Mobile application to locate nearby doctors. ",
    position: "Backend Developer",
    url_img: project1,
    url_page: "",
    url_github: "https://github.com/MarcoOrtiz333/VitMapBackend/tree/develop",
    tools: ["React Native", "Nodejs", "Firebase"],
  },
  {
    id: 2,
    title: "Certyget ",
    description: "Web system to generate course certificates",
    position: "Fullstack Developer",
    url_img: project2,
    url_page: "",
    url_github: "https://github.com/KevinCayo10/Certyget_Bakend",
    tools: ["Angular", "Nodejs", "MySQL"],
  },
  {
    id: 3,
    title: "Gestor Ventas ",
    description: "Web system to manage product sales",
    position: "Fullstack Developer",

    url_img: project3,

    url_page: "",
    url_github: "https://github.com/KevinCayo10/proyecto_ventas",
    tools: ["Angular", "Bootstrap", "Nodejs", "MongoDB"],
  },
  {
    id: 4,
    title: "Website PCG Web ",
    description:
      "Website to Programa Contable General (PCG) of Empresarial Díaz & Bonilla S. A. ",
    position: "Frontend Developer",

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
    id: 1,
    icon: FiLinkedin,
    url: "https://linkedin.com/in/kevincayo10",
  },
  {
    id: 2,
    icon: FiGithub,
    url: "https://github.com/KevinCayo10",
  },
  {
    id: 3,
    icon: FiInstagram,
    url: "https://www.instagram.com/kevincayo10/",
  },
  {
    id: 4,
    icon: FiMail,
    url: "mailto:kejoelct1002@gmail.com",
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
    title: "Projects",
    url: "#projects",
  },
  {
    id: 4,
    title: "Contact me",
    url: "#contactme",
  },
];

export const skills = [
  {
    id: 1,
    name: "React.js",
  },
  {
    id: 2,
    name: "Angular",
  },
  {
    id: 3,
    name: "Node.js",
  },
  {
    id: 4,
    name: "Express",
  },
  {
    id: 5,
    name: "Socket.IO",
  },
  {
    id: 6,
    name: "SQL",
  },
  {
    id: 7,
    name: "Python",
  },
  {
    id: 8,
    name: "Selenium WebDriver",
  },
  {
    id: 9,
    name: "Git",
  },
  {
    id: 10,
    name: "GCloud",
  },
];
