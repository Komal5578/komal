import { useEffect, useState } from "react";
import "./index.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClasses = "text-lg font-semibold cursor-pointer hover:text-purple-300";
  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop;
      const navbarHeight = document.querySelector("nav").offsetHeight;
      window.scrollTo({
        top: offsetTop - navbarHeight / 20, // Adjust for navbar height to center the section
        behavior: "smooth",
      });
    }

    setOpen(false);
  };

  return (
    <>
      <nav className="fixed top-2 left-0 w-full z-50">
        <div
          className={`mt-4 mx-auto flex w-[90%] md:w-[80%] items-center justify-between md:justify-around px-4 md:px-6 py-4 text-white transition-all duration-300 ${
            scrolled
              ? "bg-purple-800 shadow-lg rounded-3xl"
              : "bg-transparent shadow-none"
          }`}
        >
          <a href="#home" className="text-xl font-bold md:hidden" onClick={handleNavClick}>
            Komal
          </a>

          {/* Hamburger Menu */}
          <button
            className="md:hidden w-11 h-11 inline-flex flex-col items-center justify-center gap-1.5 rounded-lg border border-white/30 bg-black/20 hover:border-white/60 transition"
            aria-label="Toggle navigation"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="block w-6 h-[2px] bg-white"></span>
            <span className="block w-6 h-[2px] bg-white"></span>
            <span className="block w-6 h-[2px] bg-white"></span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-around w-full">
            <a href="#home" className={linkClasses} onClick={handleNavClick}>
              Home
            </a>
            <a href="#about" className={linkClasses} onClick={handleNavClick}>
              Education
            </a>
            <a href="#techstack" className={linkClasses} onClick={handleNavClick}>
              Skills
            </a>
            <a href="#projects" className={linkClasses} onClick={handleNavClick}>
              Projects
            </a>
            <a href="#contact" className={linkClasses} onClick={handleNavClick}>
              Contact
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-2 mx-auto w-[90%] bg-purple-900/95 rounded-2xl shadow-lg backdrop-blur px-5 py-4 text-white">
            <div className="flex flex-col gap-3 text-base">
              <a href="#home" className={`${linkClasses} block`} onClick={handleNavClick}>
                Home
              </a>
              <a href="#education" className={`${linkClasses} block`} onClick={handleNavClick}>
                Education
              </a>
              <a href="#techstack" className={`${linkClasses} block`} onClick={handleNavClick}>
                Skills
              </a>
              <a href="#projects" className={`${linkClasses} block`} onClick={handleNavClick}>
                Projects
              </a>
              <a href="#contact" className={`${linkClasses} block`} onClick={handleNavClick}>
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Header Section */}
      <header id="home" className="pt-36 flex justify-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 bg-[length:200%_auto] animate-shiny">
          Welcome to My Portfolio
        </h1>
      </header>
    </>
  );
}
