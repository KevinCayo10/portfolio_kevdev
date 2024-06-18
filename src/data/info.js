import project3 from "../assets/images/GSV Ventas.gif";
import project1 from "../assets/images/Vitmap.png";
import project2 from "../assets/images/certyget.gif";
import project4 from "../assets/images/PCG_web.gif";

import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
export const Projects = [
  {
    id: 1,
    title: "VitMap ",
    description: "Aplicación movil para localizar médicos cercanos. ",
    aporte: "Encargado del desarrollo Backend",
    url_img: project1,
    url_page: "",
    url_github: "https://github.com/MarcoOrtiz333/VitMapBackend/tree/develop",
    tools: ["React Native", "Nodejs", "Firebase"],
  },
  {
    id: 2,
    title: "Certyget ",
    description: "Sistema web para generar certificados de cursos",
    aporte: "",
    url_img: project2,
    url_page: "",
    url_github: "https://github.com/KevinCayo10/Certyget_Bakend",
    tools: ["Angular", "Nodejs", "MySQL"],
  },
  {
    id: 3,
    title: "Gestor Ventas ",
    description: "Sistema web para gestionar ventas de productos",
    url_img: project3,

    url_page: "",
    url_github: "https://github.com/KevinCayo10/proyecto_ventas",
    tools: ["Angular", "Bootstrap", "Nodejs", "MongoDB"],
  },
  {
    id: 4,
    title: "Website PCG Web ",
    description:
      "Sitio web del Sistema Programa Contable General (PCG) de Empresarial Díaz & Bonilla S. A. ",
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
    url: "www.linkedin.com/in/kevincayo10",
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
    title: "Inicio",
    url: "#top",
  },
  {
    id: 2,
    title: "Sobre mí",
    url: "#aboutme",
  },
  {
    id: 3,
    title: "Proyectos",
    url: "#projects",
  },
  {
    id: 4,
    title: "Contacto",
    url: "#contactme",
  },
];
