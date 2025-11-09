import { useRef } from "react";
import { motion } from "framer-motion";

export default function Project() {
  const scrollRef = useRef(null);

  const projects = [
    {
      title: "Coming Soon",
      description: "soon",
      tech: ["..", "..", "..."],
      link: "..",
      github: "..",
    },
    {
      title: "Coming Soon",
      description: "soon",
      tech: ["..", "..", "..."],
      link: "..",
      github: "..",
    },
    {
      title: "Coming Soon",
      description: "soon",
      tech: ["..", "..", "..."],
      link: "..",
      github: "..",
    },
    {
      title: "Coming Soon",
      description: "soon",
      tech: ["..", "..", "..."],
      link: "..",
      github: "..",
    },
  ];

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount =
      direction === "left"
        ? -container.clientWidth * 0.8
        : container.clientWidth * 0.8;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <motion.section
      id="projects"
      className="w-screen min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#000] text-white flex flex-col justify-center items-center px-6 md:px-16 relative overflow-visible"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-mono font-bold text-[#FF5B01] drop-shadow-[0_0_10px_rgba(255,91,1,0.6)] mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Projects
      </motion.h2>

      {/* Scroll Buttons */}
      <motion.div
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-[20]"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
      >
        <button
          onClick={() => scroll("left")}
          className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-2xl transition"
        >
          ‹
        </button>
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-[20]"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
      >
        <button
          onClick={() => scroll("right")}
          className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-2xl transition"
        >
          ›
        </button>
      </motion.div>

      {/* Projects List */}
      <div
        ref={scrollRef}
        className="flex gap-12 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 hide-scrollbar w-full max-w-6xl overflow-visible relative z-[10] isolate"
      >
        {projects.map((p, index) => (
          <motion.div
            key={index}
            className="relative snap-center shrink-0 w-[300px] sm:w-[360px] bg-[#111]/80 border border-[#FF5B01]/20 rounded-2xl p-6 flex flex-col justify-between backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.3)]"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            style={{ zIndex: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2 + index * 0.15,
              ease: "easeOut",
              type: "spring",
              stiffness: 250,
              damping: 18,
            }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-[#FF5B01] mb-3 text-center">
                {p.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4 text-center">
                {p.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {p.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-[#FF5B01]/20 text-[#FF5B01] px-2 py-1 rounded-md border border-[#FF5B01]/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-4">
              <motion.a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-[48%] text-center px-3 py-2 border border-[#FF5B01] text-[#FF5B01] rounded-md hover:bg-[#FF5B01] hover:text-black transition-all duration-200"
              >
                Live
              </motion.a>

              <motion.a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-[48%] text-center px-3 py-2 border border-white/40 text-white rounded-md hover:bg-white hover:text-black transition-all duration-200"
              >
                Code
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
