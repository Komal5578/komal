import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section id="about" className="bg-transparent py-10 px-6 flex flex-col items-center">
      <h2 className="text-5xl md:text-6xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 mb-8">
        About Me
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full"
      >
        <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-lg shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-600/25 hover:to-blue-500/25 hover:border-purple-400/40 hover:shadow-lg hover:shadow-purple-500/20">
          <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-4">
            I'm a <span className="text-purple-300 font-semibold">Full-Stack Developer</span> specializing in the <span className="text-blue-400 font-semibold">MERN stack</span>, currently pursuing Computer Engineering at Fr. CRCE, Bandra.
          </p>
          <p className="text-gray-200 text-base md:text-lg leading-relaxed">
            I enjoy building responsive and user-friendly web applications and working on projects that solve real-world problems. I'm passionate about learning new technologies and continuously improving my development skills.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
