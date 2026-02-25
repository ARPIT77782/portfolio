const Resume = () => {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          My Resume
        </h2>

        <p className="text-gray-400 mb-10">
          You can view or download my resume below
        </p>

        <a
          href="/resume.pdf"
          download="Arpit_Resume.pdf"
          className="inline-block mb-10 px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition"
        >
          Download Resume ↓
        </a>

        <div className="w-full h-[800px] border border-gray-700 rounded-xl overflow-hidden">
          <iframe
            src="public\resume.pdf"
            title="Resume"
            className="w-full h-full"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Resume;
