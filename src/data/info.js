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
    date: "Marzo 2025 - Julio 2025",
    location: "Santo Domingo, Ecuador",
    company: "Ingenieria y Aplicaciones SystemWorks S.A.",
    level: "Junior",
    position: "Desarrollador de software",
    functions:
      "Implementación de tareas de desarrollo del sistema contable 'Contamatic 3', con el objetivo de mejorar y optimizar las funcionalidades existentes, así como desarrollar nuevas características que satisfagan las necesidades del cliente.",
    technology: ["React", "Node.js", "Express.js", "MySQL"],
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
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
    title: "Servicios",
    url: "#services",
  },
  {
    id: 6,
    title: "Contacto",
    url: "#contactme",
  },
];

export const skills = [
  // Lenguajes de Programación
  {
    id: 1,
    name: "Javascript",
    type: "lenguajes",
  },
  {
    id: 2,
    name: "Typescript",
    type: "lenguajes",
  },
  {
    id: 3,
    name: "Python",
    type: "lenguajes",
  },
  {
    id: 4,
    name: "Java",
    type: "lenguajes",
  },
  // Backend
  {
    id: 5,
    name: "Node.js",
    type: "backend",
  },
  {
    id: 6,
    name: "Express.js",
    type: "backend",
  },
  {
    id: 7,
    name: "FastAPI",
    type: "backend",
  },
  {
    id: 8,
    name: "SpringBoot",
    type: "backend",
  },
  {
    id: 9,
    name: "Socket.IO",
    type: "backend",
  },
  // Frontend
  {
    id: 10,
    name: "HTML",
    type: "frontend",
  },
  {
    id: 11,
    name: "CSS",
    type: "frontend",
  },
  {
    id: 12,
    name: "React.js",
    type: "frontend",
  },
  {
    id: 13,
    name: "Angular",
    type: "frontend",
  },
  // Base de Datos
  {
    id: 14,
    name: "MySQL",
    type: "database",
  },
  {
    id: 15,
    name: "PostgreSQL",
    type: "database",
  },
  {
    id: 16,
    name: "MongoDB",
    type: "database",
  },
  {
    id: 17,
    name: "Firebase",
    type: "database",
  },
  // QA & CI/CD
  {
    id: 18,
    name: "PyTest",
    type: "qa-cicd",
  },
  {
    id: 19,
    name: "SonarQube",
    type: "qa-cicd",
  },
  {
    id: 20,
    name: "Postman",
    type: "qa-cicd",
  },
  {
    id: 21,
    name: "Swagger",
    type: "qa-cicd",
  },
  {
    id: 22,
    name: "Git",
    type: "qa-cicd",
  },
  {
    id: 23,
    name: "GitHub",
    type: "qa-cicd",
  },
  {
    id: 24,
    name: "Docker",
    type: "qa-cicd",
  },
  // IA & Automatización
  {
    id: 25,
    name: "Azure Foundry",
    type: "ia-automation",
  },
  {
    id: 26,
    name: "Azure AI Document Intelligence",
    type: "ia-automation",
  },
  {
    id: 27,
    name: "LangGraph",
    type: "ia-automation",
  },
  {
    id: 28,
    name: "Scrapy",
    type: "ia-automation",
  },
  {
    id: 29,
    name: "Selenium",
    type: "ia-automation",
  },
  {
    id: 30,
    name: "Playwright",
    type: "ia-automation",
  },
];

export const services = [
  {
    id: 1,
    title: "Desarrollo Web",
    description:
      "Creación de sitios web atractivos y funcionales que se adaptan a tus necesidades y objetivos.",
  },
  {
    id: 2,
    title: "Desarrollo de Aplicaciones Móviles",
    description:
      "Diseño y desarrollo de aplicaciones móviles intuitivas y eficientes para iOS y Android.",
  },
  {
    id: 3,
    title: "Consultoría Tecnológica",
    description:
      "Asesoramiento experto para optimizar tus procesos tecnológicos y mejorar la eficiencia de tu negocio.",
  },
  {
    id: 4,
    title: "Mantenimiento y Soporte",
    description:
      "Servicios de mantenimiento y soporte continuo para garantizar el rendimiento óptimo de tus sistemas y aplicaciones.",
  },
  {
    id: 5,
    title: "Integración de Sistemas",
    description:
      "Conexión e integración de diferentes sistemas y plataformas para mejorar la interoperabilidad y eficiencia.",
  },
];
