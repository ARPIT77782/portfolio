import { motion } from "framer-motion";
import Antigravity from "@/components/ui/Antigravity";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      {/* HERO */}
      <div className="relative min-h-[100svh] w-full bg-black text-white flex items-center justify-center overflow-hidden">

        {/* 🌌 Background */}
        <div className="absolute inset-0 z-0">
          <Antigravity
            count={220}
            color="#00ffff"
            particleSize={0.6}
            waveSpeed={0.4}
            waveAmplitude={1}
            depthFactor={1.1}
          />
        </div>

        {/* glow */}
        <div className="absolute w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full top-[-120px] left-[-120px]" />
        <div className="absolute w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full bottom-[-120px] right-[-120px]" />

        {/* 🔥 MAIN CONTENT */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.18,
              },
            },
          }}
          className="z-10 text-center px-6"
        >
          {/* intro */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="text-gray-400 tracking-widest mb-3"
          >
            HI, MY NAME IS
          </motion.p>

          {/* name */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Arpit Jha
            </span>
          </motion.h1>

          {/* role */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6"
          >
            Full Stack Developer | Java • React • Spring Boot
          </motion.h2>

          {/* desc */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-gray-400 mb-8"
          >
            I build scalable full-stack applications and modern web
            experiences. Passionate about problem solving, clean code,
            and creating impactful digital products.
          </motion.p>

          {/* buttons */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-md font-semibold transition hover:scale-105"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-gray-600 hover:border-cyan-400 rounded-md font-semibold transition hover:scale-105"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* scroll indicator */}
        <motion.div
          animate={{ y: [0, 14, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="absolute bottom-6 text-gray-400 text-sm"
        >
          Scroll ↓
        </motion.div>
      </div>

      {/* PROJECTS */}
      <div id="projects">
        <Projects />
      </div>

      {/* CONTACT */}
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
