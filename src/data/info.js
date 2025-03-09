import project3 from "../assets/images/GSV Ventas.gif";
import project1 from "../assets/images/Vitmap.png";
import project2 from "../assets/images/certyget.gif";
import project4 from "../assets/images/PCG_web.gif";
import project5 from "../assets/images/portfolio.png";
import project6 from "../assets/images/tuLaptop.png";

import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";

export const AboutMe = {
  title_primary: "",
  title_secondary: "",
  about_me: ["description 1", "description 2"],
};

export const Experiences = [
  {
    id: 1,
    date: "Agosto 2024 - Febrero 2025",
    location: "Ambato, Ecuador",
    company: "Empresa Eléctrica Ambato - EEASA",
    level: "Junior",
    position: "Ingeniero en Software",
    functions:
      "Desarrollo de la aplicación de seguimiento para el departamento de Auditoría Interna, optimizando la gestión y monitoreode recomendaciones. Con 5 módulos y 5 roles (Auditor Operativo, Auditor Jefe, Administrador, Responsable y Director)",
    technology: ["Angular", "Spring boot", "Oracle"],
  },
  {
    id: 2,
    date: "Marzo 2024 - Mayo 2024",
    location: "Ambato, Ecuador",
    company: "Empresarial Díaz & Bonilla S.A.",
    level: "Trainer",
    position: "Desarrollador de software",
    functions:
      "Desarrollo de diversos sistemas para modernizar y mejorar los servicios de la empresa, con el objetivo de ofrecer unaexperiencia de alto valor a los clientes y cumplir con su misión.",
    technology: ["CodeIgniter", "Python", "Selenium WebDriver"],
  },
  {
    id: 3,
    date: "Junio 2023 - Noviembre 2023",
    location: "Ambato, Ecuador",
    company: "SpringCore",
    level: "Junior",
    position: "Desarrollador Fullstack",
    functions:
      "Participé en el desarrollo de una aplicación móvil para localizar médicos cercanos, con el objetivo de facilitar el acceso a atenciónmédica y mejorar la calidad de vida de los usuarios.",
    technology: [
      "React Native",
      "Node.js",
      "Express.js",
      "Socket.io",
      "Firebase",
    ],
  },
];

export const Projects = [
  {
    id: 1,
    title: "VitMap ",
    description: "Aplicación movil para localizar doctores ",
    position: "Desarrollador backend",
    url_img: project1,
    url_page: "",
    url_github: "https://github.com/MarcoOrtiz333/VitMapBackend/tree/develop",
    tools: ["React Native", "Nodejs", "Firebase"],
  },
  {
    id: 2,
    title: "Certyget ",
    description: "Sistema web para la generación y consulta de certificados",
    position: "Desarrollador Fullstack",
    url_img: project2,
    url_page: "",
    url_github: "https://github.com/KevinCayo10/Certyget_Bakend",
    tools: ["Angular", "Nodejs", "MySQL"],
  },
  {
    id: 3,
    title: "Gestor de ventas",
    description: "Aplicativo web para la gestión de ventas.",
    position: "Desarrollador Fullstack",

    url_img: project3,

    url_page: "",
    url_github: "https://github.com/KevinCayo10/proyecto_ventas",
    tools: ["Angular", "Bootstrap", "Nodejs", "MongoDB"],
  },
  {
    id: 4,
    title: "Sitio web PCG ",
    description:
      "Sitio web informativo para el producto PCG Web de Empresarial Díaz & Bonilla S. A.",
    position: "Desarrollador Frontend ",
    url_img: project4,
    url_page: "https://almogascialtda.com/",
    url_github: "https://github.com/KevinCayo10/bot_emp_bd/tree/develop",
    tools: ["Codeigniter", "HTML", "CSS"],
  },
  {
    id: 5,
    title: "Portafolio ",
    description:
      "Página web donde encontraras mis proyectos y aprenderas más sobre mí.",
    position: "Desarrollador Frontend",

    url_img: project5,
    url_page: "https://portfolio-kevdev.vercel.app/",
    url_github: "https://github.com/KevinCayo10/portfolio_kevdev",
    tools: ["Reactjs", "Tailwindcss", "Framer Motion"],
  },
  {
    id: 6,
    title: "tuLaptop ",
    description:
      "Sistema de recomendación para productos tecnológicos utilizando web scraping",
    position: "Desarrollador Fullstack",

    url_img: project6,
    url_page: "utatec.pro",
    url_github: "https://github.com/KevinCayo10/UtaLapRec",
    tools: ["Reactjs", "Tailwindcss", "DaisyUI", "Flask", "Selenium", "Scrapy"],
  },
];

export const socialLinks = [
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
    title: "Inicio",
    url: "#top",
  },
  {
    id: 2,
    title: "Experiencia",
    url: "#experience",
  },
  {
    id: 3,
    title: "Acerca de mí",
    url: "#aboutme",
  },
  {
    id: 4,
    title: "Proyectos",
    url: "#projects",
  },
  {
    id: 5,
    title: "Contacto",
    url: "#contactme",
  },
];

export const skills = [
  {
    id: 1,
    name: "Reactjs",
  },
  {
    id: 2,
    name: "Angular",
  },
  {
    id: 3,
    name: "Nodejs",
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
