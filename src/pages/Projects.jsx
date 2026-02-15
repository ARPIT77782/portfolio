import projects from "../data/projects";

const Projects = () => {
  return (
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
        ))}
      </div>
    </section>
  );
};

export default Projects;
