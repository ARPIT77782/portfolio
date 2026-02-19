import Antigravity from "@/components/ui/Antigravity";
import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      title: "B.E. Computer Science Engineering",
      organization: "Chandigarh University",
      duration: "2023 – 2027",
      marks: "7.83 CGPA (current)",
      description:
        "Focused on Data Structures, Algorithms, System Design, Database Engineering and Full Stack Development. Strong foundation in backend systems and problem solving.",
    },
    {
      title: "Intermediate (12th) - Science",
      organization: "MMTM College, Darbhanga, Bihar",
      duration: "2021 – 2023",
      marks: "75.2%",
      description:
        "Completed higher secondary with Physics, Chemistry and Mathematics. Built strong analytical and problem-solving skills.",
    },
    {
      title: "Matriculation (10th)",
      organization: "BDY High School, Darbhanga, Bihar",
      duration: "2019 – 2021",
      marks: "77%",
      description:
        "Strong academic foundation with consistent performance in core subjects.",
    },
  ];

  return (
    <div className="relative min-h-[100svh] w-full bg-black text-white overflow-hidden">

      {/* 🌌 Background */}
      <div className="absolute inset-0 z-0">
        <Antigravity
          count={200}
          color="#00ffff"
          particleSize={0.6}
          waveSpeed={0.4}
          waveAmplitude={1}
          depthFactor={1.1}
        />
      </div>

      {/* content */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-5xl mx-auto">

          {/* heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            My Education
          </motion.h2>

          {/* timeline */}
          <div className="relative border-l border-gray-700 ml-6">

  {education.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="mb-14 ml-8 relative"
    >

      {/* 🔵 PERFECT CENTER DOT */}
      <div className="absolute left-[-34px] top-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_18px_cyan]" />

      {/* CARD */}
      <div className="bg-[#0d0d0d]/80 backdrop-blur-md border border-gray-800 p-6 rounded-xl hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,255,255,0.15)] transition">

        <h3 className="text-xl font-semibold text-white">
          {item.title}
        </h3>

        <p className="text-gray-400 mt-1 text-sm">
          {item.organization} • {item.duration}
        </p>

        <p className="text-cyan-400 mt-2 font-medium">
          {item.marks}
        </p>

        <p className="mt-3 text-gray-300 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>

    </motion.div>
  ))}



          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
