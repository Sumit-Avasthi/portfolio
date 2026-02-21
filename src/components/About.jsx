import { motion } from "framer-motion";

export default function SkillsBubbles() {
  const skills = [
    "C++", "Python", "JavaScript", "React",
    "Tailwind", "Node.js", "Express",
    "MySQL", "Git",
    "REST APIs", "DSA", 
    "Data Cleaning","Data Analysis","Data Visualization"
  ];

  return (
    <section className="relative min-h-screen bg-[#0d0d0d] text-white flex items-center justify-center overflow-hidden px-6">

      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-[#FF5B01]/10 blur-[140px] rounded-full"></div>

      <div className="relative max-w-5xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          My <span className="text-[#FF5B01]">Tech Stack</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-8">

          {skills.map((skill, index) => {
            const size =
              index % 3 === 0
                ? "w-32 h-32 text-lg"
                : index % 3 === 1
                ? "w-24 h-24 text-sm"
                : "w-28 h-28 text-base";

            return (
              <motion.div
                key={skill}
                className={`
                  ${size}
                  flex items-center justify-center
                  rounded-full
                  bg-white/5
                  border border-white/10
                  backdrop-blur-lg
                  shadow-lg
                  hover:border-[#FF5B01]
                  hover:shadow-[0_0_30px_rgba(255,91,1,0.5)]
                  transition-all duration-300
                  cursor-default
                `}
                animate={{
                  y: [0, -20, 0],
                  x: [0, 15, 0],
                }}
                transition={{
                  duration: 5 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {skill}
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
