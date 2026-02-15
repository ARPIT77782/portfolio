import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaCopy, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const email = "jhaprabhakarindia@gmail.com"; // change
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const socials = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://linkedin.com/in/prabhakar-kumar-jha-4080ba28a",
      color: "from-blue-500 to-cyan-400"
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/prabhakar_jha_18?igsh=b2NlYnljcWdtaGJj",
      color: "from-pink-500 to-purple-500"
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/23bcs12284",
      color: "from-gray-700 to-gray-900"
    }
  ];

  return (
    <section className="min-h-screen bg-black text-white py-28 px-6 relative overflow-hidden">

      {/* background glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full top-[-200px] left-[-200px]" />
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[150px] rounded-full bottom-[-200px] right-[-200px]" />

      {/* heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center text-5xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
      >
        Let's Connect
      </motion.h2>

      {/* SOCIAL BIG CARDS */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-16">
        {socials.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className={`group relative p-12 rounded-2xl bg-gradient-to-br ${item.color} text-black font-bold text-3xl shadow-2xl`}
          >
            <div className="flex justify-between items-start">
              <div className="text-5xl">{item.icon}</div>
              <div className="text-3xl">↗</div>
            </div>

            <h3 className="mt-16 tracking-widest">{item.name}</h3>

            {/* glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl bg-white/20 transition"></div>
          </motion.a>
        ))}
      </div>

      {/* EMAIL BIG BOX */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="flex items-center gap-6">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6 rounded-xl text-3xl">
            <FaEnvelope />
          </div>

          <div>
            <p className="text-gray-400">DROP ME A MAIL</p>
            <h3 className="text-2xl md:text-3xl font-bold tracking-wider">
              {email}
            </h3>
          </div>
        </div>

        {/* copy */}
        <button
          onClick={copyEmail}
          className="px-8 py-4 border border-white rounded-xl hover:bg-white hover:text-black transition flex items-center gap-3"
        >
          <FaCopy />
          COPY
        </button>
      </motion.div>

      {copied && (
        <p className="text-center text-green-400 mt-6">Email copied ✔</p>
      )}
    </section>
  );
};

export default Contact;
