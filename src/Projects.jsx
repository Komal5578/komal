import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faJs,
  faReact,
  faNodeJs,
  faGithub,
  faFigma,
  faJava
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faFire,
  faServer,
  faCode,
  faBolt,
  faCloudSun
} from "@fortawesome/free-solid-svg-icons";

const techIcons = {
  React: faReact,
  Tailwind: faCss3Alt,
  "Tailwind CSS": faCss3Alt,
  "Framer Motion": faBolt,
  MongoDB: faDatabase,
  Express: faServer,
  "Node.js": faNodeJs,
  JavaScript: faJs,
  HTML: faHtml5,
  Html: faHtml5,
  CSS: faCss3Alt,
  Bootstrap: faBootstrap,
  Firebase: faFire,
  "OpenWeather API": faCloudSun,
  Github: faGithub,
  Figma: faFigma,
  Java: faJava,
  "Interactive Games": faJs,
  SQL: faDatabase,
};

const techColors = {
  React: "#61dafb",
  Tailwind: "#38BDF8",
  "Tailwind CSS": "#38BDF8",
  "Framer Motion": "#FF0080",
  MongoDB: "#4DB33D",
  Express: "#fff",
  "Node.js": "#3c873a",
  JavaScript: "#f0db4f",
  HTML: "#fc1212",
  Html: "#fc1212",
  CSS: "#2196f3",
  Bootstrap: "#563d7c",
  Firebase: "#FFA611",
  "OpenWeather API": "#fbbf24",
  Github: "#fff",
  Figma: "#F24E1E",
  Java: "#ED8B00",
  "Interactive Games": "#f0db4f",
  SQL: "#00758F",
};

const firstYearProjects = [
 
  {
    name: "Wanderlust",
    description: "A fullstack travel booking app with user auth and reviews.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    image: "/wanderlust.jpg",
    link: "https://first-project-8vqu.onrender.com/",
    repo: "https://github.com/komalskanojia/wanderlust",
  },
  {
    name: "LevelUpFi",
    description: "A gamified learning platform where users learn finance through 6 interactive games.",
    tech: ["React", "JavaScript", "Interactive Games"],
    image: "/levelupfi.png",
    link: "https://levelup-hazel.vercel.app/",
    repo: "https://github.com/Komal5578/levelupfi",
  },
   {
    name: "Portfolio Website",
    description: "Personal portfolio site to showcase projects and skills.",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: "/portfolio.jpg",
    link: "https://komalskanojia.vercel.app/",
    repo: "https://github.com/komalskanojia/portfolio",
  },
  {
    name: "Simon Says Game",
    description: "A fun memory game that tests your pattern recognition skills.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/simon.jpg", 
  },
  {
    name: "Spotify Clone",
    description: "Music streaming UI clone of Spotify with modern styling.",
    tech: ["Html", "Bootstrap"],
    image: "/spotify.jpg",
  },
  {
    name: "Weather App",
    description: "Search any city and view real-time weather information.",
    tech: ["Bootstrap", "OpenWeather API"],
    image: "/weather.jpg",
  },
  {
    name: "To-Do App",
    description: "A simple and efficient to-do list with edit/delete features.",
    tech: ["JavaScript", "Local Storage"],
    image: "/todo.jpg",
  },
];

const secondYearProjects = [
  {
    name: "Everbloom",
    description: "An ecommerce platform for handcrafted blooms with add to cart, buy now, and user authentication.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    image: "/everbloom.png",
    link: "https://ever-bloom-one.vercel.app/",
    
  },
];

export default function Projects() {
  const secondYearRef = useRef(null);
  const firstYearRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const scroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = 350;
      ref.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const ProjectCard = ({ project, index }) => (
    <div
      key={index}
      data-aos="fade-up"
      className={`bg-gradient-to-br from-purple-800 to-blue-700 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 h-[420px] flex flex-col ${
        project.link ? "cursor-pointer" : ""
      }`}
      onClick={() => project.link && window.open(project.link, "_blank")}
    >
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-48 object-cover flex-shrink-0"
      />
      <div className="p-5 flex flex-col flex-grow overflow-hidden">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold">{project.name}</h3>
          {project.link && (
            <span className="flex items-center text-green-400 text-xs font-bold flex-shrink-0">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></span>
              LIVE
            </span>
          )}
        </div>
        <p className="text-sm text-gray-200 mb-3 line-clamp-2">{project.description}</p>
        <div className="flex gap-2 text-sm text-white font-medium mt-auto">
          {project.tech.map((t, i) => (
            <span key={i} className="flex items-center justify-center w-10 h-10 rounded-full bg-black">
              {techIcons[t] ? (
                <FontAwesomeIcon icon={techIcons[t]} style={{ color: techColors[t] || "#fff", fontSize: "1.5rem" }} />
              ) : t}
            </span>
          ))}
        </div>
        {project.link && (
          <div className="flex gap-2 mt-2">
            <button
              className="bg-black/30 px-2 py-1 rounded-md whitespace-nowrap text-sm font-medium text-white cursor-pointer inline-block"
              onClick={() => window.open(project.link, '_blank')}
              style={{ transition: 'background 0.2s' }}
            >
              Live Demo
            </button>
            {project.repo && (
              <button
                className="bg-black/30 px-2 py-1 rounded-md whitespace-nowrap text-sm font-medium text-white cursor-pointer inline-block"
                onClick={() => window.open(project.repo, '_blank')}
                style={{ transition: 'background 0.2s' }}
              >
                GitHub Repo
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-16 px-6 bg-transparent text-white">
      <div className="text-center mb-12">
        <h2 className="text-6xl font-bold">
          My <span className="text-blue-500 font-bold text-6xl">Projects</span>
        </h2>
        <p className="text-gray-400 mt-2">Here are a few of my recent works</p>
      </div>

      {/* First Year Section */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-center mb-8">
          <span className="text-blue-400">First Year</span>
        </h3>
        <div className="relative flex items-center justify-center">
          <button
            onClick={() => scroll(firstYearRef, "left")}
            className="absolute left-0 z-10 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all"
          >
            <FaChevronLeft />
          </button>
          <div
            ref={firstYearRef}
            className="flex gap-6 overflow-x-auto scroll-smooth px-12 py-4 scrollbar-hide items-start"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {firstYearProjects.map((project, index) => (
              <div key={index} className="flex-shrink-0 w-80">
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll(firstYearRef, "right")}
            className="absolute right-0 z-10 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Second Year Section */}
      <div>
        <h3 className="text-3xl font-bold text-center mb-8">
          <span className="text-blue-400">Second Year</span>
        </h3>
        <div className="relative flex items-center justify-center">
          <button
            onClick={() => scroll(secondYearRef, "left")}
            className="absolute left-0 z-10 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all"
          >
            <FaChevronLeft />
          </button>
          <div
            ref={secondYearRef}
            className="flex gap-6 overflow-x-auto scroll-smooth px-12 py-4 scrollbar-hide items-start"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {secondYearProjects.map((project, index) => (
              <div key={index} className="flex-shrink-0 w-80">
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll(secondYearRef, "right")}
            className="absolute right-0 z-10 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
