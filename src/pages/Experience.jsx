const Experience = () => {
  const experiences = [
    {
      title: "B.E. Computer Science Engineering",
      organization: "Chandigarh University",
      duration: "2023 – 2027",
      description:
        "Focused on Data Structures, Algorithms, System Design, Database Engineering and Full Stack Development. Strong foundation in backend systems and problem solving.",
    },
    {
      title: "AI Multi-Disease Prediction System",
      organization: "Research Based Academic Project",
      duration: "2025",
      description:
        "Built a machine learning based system to predict Breast Cancer, Cervical Cancer and PCOS using classification algorithms with React frontend and model integration.",
    },
    {
      title: "Hotel Reservation System",
      organization: "Java Swing + JDBC Application",
      duration: "2024",
      description:
        "Developed a complete hotel management system with authentication, booking module, admin dashboard and MySQL database integration.",
    },
    {
      title: "Vehicle Service Booking System",
      organization: "Full Stack Web Application",
      duration: "2026",
      description:
        "Built a vehicle service booking platform using React, Spring Boot and MySQL with REST API integration and email confirmation system.",
    },
  ];

  return (
    <section className="min-h-screen py-24 px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Experience & Projects
        </h2>

        {/* Timeline */}
        <div className="relative border-l border-gray-700">
          {experiences.map((item, index) => (
            <div key={index} className="mb-12 ml-8 relative">

              {/* Dot */}
              <div className="absolute -left-[10px] top-2 w-4 h-4 bg-cyan-400 rounded-full"></div>

              {/* Card */}
              <div className="bg-[#111] border border-gray-800 p-6 rounded-xl hover:border-cyan-400 transition">
                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="text-gray-400 mt-1 text-sm">
                  {item.organization} • {item.duration}
                </p>

                <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
