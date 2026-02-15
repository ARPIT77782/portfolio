import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="h-screen w-full bg-black text-white flex items-center justify-center relative overflow-hidden">

      {/* 🔵 Animated background glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-6"
      >
        {/* Hello text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg mb-4 tracking-widest"
        >
          HELLO, I'M
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Prabhakar Kumar Jha
          </span>
        </motion.h1>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6 text-2xl md:text-3xl text-gray-300 font-semibold"
        >
          Full Stack Developer
        </motion.h2>

        {/* Small description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-4 max-w-xl mx-auto text-gray-400 text-lg"
        >
          I design and build scalable web applications with modern 
          technologies like React, Spring Boot and Java. 
          Passionate about clean code and real-world problem solving.
        </motion.p>

        {/* Divider line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="h-[3px] bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-8 rounded-full"
        />
      </motion.div>
    </div>
  );
};

export default Home;
