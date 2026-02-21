import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Project() {
  const projects = [
    {
      title: "WanderHub",
      image: "/project1.jpg",
      description: "",
    },
    {
      title: "DSA Visualizer",
      image: "/project2.jpg",
      description: "Interactive algorithm visualizer.",
    },
    {
      title: "Task API",
      image: "/project3.jpg",
      description: "RESTful task management API.",
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
            className="absolute w-full h-full bg-[#111] rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, info) => {
              if (info.offset.x > 120) {
                handleSwipe();
              } else if (info.offset.x < -120) {
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

            {/* Responsive Image */}
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
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-[#FF5B01] mb-3">
                {projects[index].title}
              </h3>

              <p className="text-gray-300 text-sm md:text-base">
                {projects[index].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
