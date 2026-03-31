import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
  faBolt
} from "@fortawesome/free-solid-svg-icons";

// Inline styles for seamless infinite scroll
const scrollStyles = `
  @keyframes scroll-left {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes scroll-right {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }
`;

export default function TechStack() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // First row - scrolls left
  const techsRow1 = [
    { name: "HTML", icon: faHtml5, color: "#fc1212" },
    { name: "CSS", icon: faCss3Alt, color: "#2196f3" },
    { name: "Bootstrap", icon: faBootstrap, color: "#563d7c" },
    { name: "JavaScript", icon: faJs, color: "#f0db4f" },
    { name: "React", icon: faReact, color: "#61dafb" },
    { name: "Node.js", icon: faNodeJs, color: "#3c873a" },
    { name: "MongoDB", icon: faDatabase, color: "#4DB33D" },
    { name: "GitHub", icon: faGithub, color: "#fff" },
  ];

  // Second row - scrolls right (opposite)
  const techsRow2 = [
    { name: "Express.js", icon: faServer, color: "#fff" },
 
    { name: "Framer Motion", icon: faBolt, color: "#FF0080" },
    { name: "Java", icon: faJava, color: "#ED8B00" },
    { name: "C++", icon: faCode, color: "#00599C" },
    { name: "Tailwind", icon: faCss3Alt, color: "#38BDF8" },
    { name: "Firebase", icon: faFire, color: "#FFA611" },
    { name: "SQL", icon: faDatabase, color: "#00758F" },
  ];

  return (
    <section id="techstack" className="mt-12 px-6 py-10 bg-transparent overflow-hidden">
      <style>{scrollStyles}</style>

      <div className="text-center mb-10">
        <h5 className="text-6xl font-bold text-white">
          Tech<span className="text-blue-500">Stack</span>
        </h5>
      </div>

      {/* First Row - Scrolls Left */}
      <div className="overflow-hidden mb-6">
        <div 
          className="flex gap-6 whitespace-nowrap w-max"
          style={{ animation: 'scroll-left 20s linear infinite' }}
        >

          {[...techsRow1, ...techsRow1].map((tech, idx) => (
            <div
              key={idx}
              className="min-w-[110px] h-28 rounded-xl shadow-md flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-300"
              style={{
                backgroundImage: "linear-gradient(to right, purple, blue)",
              }}
            >
              <div className="text-4xl">
                <FontAwesomeIcon icon={tech.icon} style={{ color: tech.color }} />
              </div>

              <p className="text-sm font-medium text-white">
                {tech.name}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* Second Row - Scrolls Right (Opposite) */}
      <div className="overflow-hidden">
        <div 
          className="flex gap-6 whitespace-nowrap w-max"
          style={{ animation: 'scroll-right 20s linear infinite' }}
        >

          {[...techsRow2, ...techsRow2].map((tech, idx) => (
            <div
              key={idx}
              className="min-w-[110px] h-28 rounded-xl shadow-md flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-300"
              style={{
                backgroundImage: "linear-gradient(to right, purple, blue)",
              }}
            >
              <div className="text-4xl">
                <FontAwesomeIcon icon={tech.icon} style={{ color: tech.color }} />
              </div>

              <p className="text-sm font-medium text-white">
                {tech.name}
              </p>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}