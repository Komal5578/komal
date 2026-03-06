import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div
      id="home"
      className="flex flex-col md:flex-row items-center justify-between px-10 mt-20 mb-[225px]"
    >
      {/* LEFT: TEXT & ICONS */}
      <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left flex flex-col items-center md:items-start gap-6 md:gap-8">
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:justify-start text-4xl sm:text-5xl md:text-7xl font-bold"
        >
          Hello I am,{" "}
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="block sm:inline text-4xl sm:text-5xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500"
          >
            Komal
          </motion.span>
        </motion.h1>

        {/* Social Icons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center md:justify-start space-x-6 text-3xl text-white"
        >
          <motion.a
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            href="mailto:komalsk1472@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.linkedin.com/in/komal-kanojiya-97687a25b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/komal5578"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faGithub} />
          </motion.a>
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          href="https://drive.google.com/file/d/1JGkB65r2aLhbyAl7xGPoszXLDOBXHB9V/view?usp=sharing"
          className="mx-auto md:mx-0 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300"
        >
          View Resume
        </motion.a>
      </div>

      {/* RIGHT: IMAGE */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="md:w-1/2 flex justify-center"
      >
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          src="/bg.jpg"
          alt="profile"
          className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full object-cover border-[3px] border-white p-[5px] shadow-[0_0_50px_rgb(236,201,252)]"
        />
      </motion.div>
    </div>
  );
}
