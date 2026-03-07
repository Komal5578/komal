import { useState, useEffect } from "react";
import "./index.css";
import "./App.css"
import Loader from "./Loader";
import Bgvideo from "./Bgvideo";
import Navbar from "./Navbar";
import Home from "./Home";
import TechStack from "./TechStack";
import EducationTimeline from "./AboutMe";
import Projects from "./Projects"
import ContactMe from "./Contact"
export default function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 6000); // Show loader for 6 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader && <Loader fadeOut={!showLoader} onAnimationEnd={() => setShowLoader(false)} />}
      <Navbar />

     
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <Bgvideo />
      </div>

      
      <main className="relative z-10">
        <section className="min-h-screen flex items-center justify-center text-white text-center">
          <Home />
        </section>
        <EducationTimeline/>
        <TechStack />
        <Projects/>  
        <ContactMe/>
      </main>
    </>
  );
}
