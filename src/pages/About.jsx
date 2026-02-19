import { motion } from "framer-motion";

const About = () => {
  const skills = [
  // Languages
  "Java",
  "JavaScript",
  "C++",
  "SQL",

  // Frontend
  "React JS",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap",

  // Backend
  "Spring Boot",
  "REST APIs",
  

  // Database
  "MySQL",
  "MongoDB",

  // Core CS
  "Data Structures & Algorithms",
  "OOPs",
  "DBMS",
  "Operating System",
  "Computer Networks",
  "System Design",

  // Tools
  "Git",
  "GitHub",
  "Postman",
  "VS Code",
  "IntelliJ",

  // Concepts
  "Problem Solving",
  "Competitive Programming",
  "Debugging",
  "API Integration"
];


  return (
    <section className="relative min-h-[100svh] bg-black text-white py-24 px-6 overflow-hidden">

      {/* glow background */}
      <div className="absolute w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        {/* top section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
              Who am I?
            </h3>

            <p className="text-gray-300 leading-relaxed mb-4">
              I'm <span className="text-white font-semibold">Prabhakar Kumar Jha</span>,
              a passionate Full Stack Developer and Computer Science student.
              I love building scalable web applications and solving real-world problems.
            </p>

            <p className="text-gray-300 leading-relaxed mb-4">
              My core interest lies in backend development, system design and
              database engineering. I work with Java, Spring Boot, React and MySQL
              to build high-performance applications.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Currently focused on mastering DSA, system design and full stack
              development to crack top software engineering roles.
            </p>
          </motion.div>

          {/* RIGHT INFO CARD */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-[#0d0d0d]/80 backdrop-blur-md border border-gray-800 rounded-xl p-8 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,255,255,0.15)] transition"
          >
            <h3 className="text-xl font-semibold mb-6 text-cyan-400">
              Quick Info
            </h3>

            <div className="space-y-3 text-gray-300">
              <p><span className="text-white">Name:</span> Prabhakar Kumar Jha</p>
              <p><span className="text-white">Degree:</span> B.E CSE</p>
              <p><span className="text-white">University:</span> Chandigarh University</p>
              <p><span className="text-white">Location:</span> India</p>
              <p><span className="text-white">Role:</span> Full Stack Developer</p>
              <p><span className="text-white">Focus:</span> Backend & Software Engineering</p>
            </div>
          </motion.div>
        </div>

        {/* SKILLS */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Tech Stack
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-5 py-2 bg-[#0d0d0d]/80 backdrop-blur-md border border-gray-700 rounded-lg text-gray-300 hover:border-cyan-400 hover:text-white hover:shadow-[0_0_15px_rgba(0,255,255,0.2)] transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
