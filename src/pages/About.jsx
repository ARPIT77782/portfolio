const About = () => {
  return (
    <section className="min-h-screen bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
          About Me
        </h2>

        {/* Top section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left text */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
              Who am I?
            </h3>

            <p className="text-gray-300 leading-relaxed mb-4">
              I'm <span className="text-white font-semibold">Prabhakar Kumar Jha</span>, 
              a passionate Full Stack Developer and Computer Science Engineering student 
              at Chandigarh University. I love building scalable web applications and 
              solving real-world problems using modern technologies.
            </p>

            <p className="text-gray-300 leading-relaxed mb-4">
              My core interest lies in backend development, system design, and 
              database engineering. I enjoy working with Java, Spring Boot, React, 
              and MySQL to create efficient and user-friendly applications.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Currently, I am focused on strengthening my DSA, full stack 
              development skills, and preparing for software engineering roles 
              in top tech companies.
            </p>
          </div>

          {/* Right info box */}
          <div className="bg-[#111] border border-gray-800 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-6 text-cyan-400">
              Quick Info
            </h3>

            <div className="space-y-4 text-gray-300">
              <p><span className="text-white">Name:</span> Prabhakar Kumar Jha</p>
              <p><span className="text-white">Degree:</span> B.E CSE</p>
              <p><span className="text-white">University:</span> Chandigarh University</p>
              <p><span className="text-white">Location:</span> India</p>
              <p><span className="text-white">Role:</span> Full Stack Developer</p>
              <p><span className="text-white">Focus:</span> Software Engineering & Backend</p>
            </div>
          </div>
        </div>

        {/* Skills section */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Tech Stack
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Java",
              "Spring Boot",
              "React JS",
              "JavaScript",
              "MySQL",
              "HTML",
              "CSS",
              "Tailwind",
              "Git",
              "REST API",
              "DSA",
              "System Design"
            ].map((skill, index) => (
              <span
                key={index}
                className="px-5 py-2 bg-[#111] border border-gray-700 rounded-lg text-gray-300 hover:border-cyan-400 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
