import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Project() {
  const projects = [
    {
      title: "Calculator",
      image: "calci.png",
      description: "A fully functional calculator application built with clean logic implementation and responsive UI design. It supports standard arithmetic operations, real-time display updates, and error handling. This project demonstrates strong understanding of DOM manipulation, event handling, and structured JavaScript logic.",
      github: "https://github.com/Sumit-Avasthi/CALCULATOR.git",
      live: "https://calculator-qpq1bu48e-sumit-avasthis-projects.vercel.app/",
    },
    {
      title: "Spotify Clone",
      image: "/spotify.png",
      description: "A fully responsive Spotify clone that replicates the core UI and functionality of a modern music streaming platform. It includes interactive playback controls, dynamic song lists, smooth transitions, and a pixel-perfect dark theme design. Built to strengthen frontend architecture, UI structuring, and component-based development skills.",
      github: "https://github.com/Sumit-Avasthi/SPOTIFY-CLONE.git",
      live: "https://spotify-clone-eight-neon.vercel.app/",
    },
    {
      title: "Comming Soon..!!!",
      image: "/project3.jpg",
      description: "..............................Comming Soon .................!!!!!",
      github: "https://github.com/yourusername/task-api",
      live: "https://task-api-live.com",
    },
  ];

  const [index, setIndex] = useState(0);

  const handleSwipe = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <section className="min-h-screen bg-[#0d0d0d] text-white flex flex-col justify-center items-center px-6">

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-16">
        My <span className="text-[#FF5B01]">Projects</span>
      </h2>

      {/* Responsive Card Container */}
      <div
        className="
          relative
          w-full max-w-[320px]
          sm:max-w-[420px]
          md:max-w-[550px]
          lg:max-w-[700px]
          h-[480px]
          sm:h-[550px]
          md:h-[650px]
          lg:h-[750px]
        "
      >
        <AnimatePresence>
          <motion.div
            key={index}
            className="absolute w-full h-full bg-[#111] rounded-2xl shadow-2xl border border-white/10 overflow-hidden flex flex-col"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, info) => {
              if (info.offset.x > 120 || info.offset.x < -120) {
                handleSwipe();
              }
            }}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{
              x: 500,
              opacity: 0,
              transition: { duration: 0.3 },
            }}
            whileDrag={{ rotate: 10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Image */}
            <img
              src={projects[index].image}
              alt={projects[index].title}
              className="
                w-full
                h-[220px]
                sm:h-[260px]
                md:h-[320px]
                lg:h-[380px]
                object-cover
              "
            />

            {/* Content */}
            <div className="p-6 md:p-8 flex flex-col justify-between flex-1">

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#FF5B01] mb-3">
                  {projects[index].title}
                </h3>

                <p className="text-gray-300 text-sm md:text-base mb-6">
                  {projects[index].description}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-auto">
                <a
                  href={projects[index].live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 text-center px-4 py-2 border border-[#FF5B01] text-[#FF5B01] rounded-md hover:bg-[#FF5B01] hover:text-black transition"
                >
                  Live
                </a>

                <a
                  href={projects[index].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 text-center px-4 py-2 border border-white/30 text-white rounded-md hover:bg-white hover:text-black transition"
                >
                  GitHub
                </a>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
