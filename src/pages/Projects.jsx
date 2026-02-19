import projects from "../data/projects";
import ElectricBorder from "@/components/ui/ElectricBorder";
import Antigravity from "@/components/ui/Antigravity";
import AnimatedContent from "@/components/ui/AnimatedContent";

const Projects = () => {
  return (
    
    <div className="relative h-screen w-full bg-black text-white flex items-center justify-center overflow-hidden">

      {/* 🌌 Antigravity Background */}
      <div className="absolute inset-0 z-0">
        <Antigravity
          count={350}
          magnetRadius={6}
          ringRadius={8}
          waveSpeed={0.5}
          waveAmplitude={1.2}
          particleSize={0.7}
          lerpSpeed={0.05}
          color="#00ffff"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0.05}
          depthFactor={1.2}
          pulseSpeed={2}
          particleShape="sphere"
          fieldStrength={12}
        />
      </div>


<AnimatedContent
  distance={100}
  direction="vertical"
  reverse={false}
  duration={1.2}
  ease="power3.out"
  initialOpacity={0}
  animateOpacity
  scale={1}
  threshold={0.5}
  delay={0.2}
>
 


    <section
      id="projects"
      className="min-h-screen py-20 px-6 bg-[#0b0b0b] text-white"
    >
      {/* Heading */}
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-16 text-cyan-400">
        My Projects
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          // <ElectricBorder key={index} color="#7df9ff"speed={1} chaos={0.12} thickness={2} style={{ borderRadius: 16 }}>
          <div
            key={index}
            className="bg-[#111] border border-gray-800 rounded-xl p-6 shadow-lg 
            hover:border-cyan-400 hover:shadow-cyan-500/20 hover:-translate-y-2 
            transition-all duration-300"
          >
            {/* Title */}
            <h3 className="text-2xl font-semibold mb-2 text-white hover:text-cyan-400 transition">
              {project.title}
            </h3>

            {/* Tech */}
            <p className="text-sm text-cyan-400 mb-3">{project.tech}</p>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed">
              {project.description}
            </p>

            {/* GitHub Button */}
            <div className="mt-6">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-5 py-2 bg-cyan-500 hover:bg-cyan-600 
                rounded-lg text-sm font-semibold transition"
              >
                View Code
              </a>
            </div>
          </div>
          //  </ElectricBorder>
        ))}
      </div>
    </section>
    </AnimatedContent>
    </div>
  );
};

export default Projects;
