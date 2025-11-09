import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function About() {
  const columns = [
    {
      title: "Languages",
      skills: [
        { name: "C / C++", pct: 90 },
        { name: "Python", pct: 85 },
        { name: "JavaScript", pct: 80 },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", pct: 80 },
        { name: "Tailwind CSS", pct: 85 },
        { name: "HTML & CSS", pct: 90 },
      ],
    },
    {
      title: "Backend & DB",
      skills: [
        { name: "Node.js", pct: 75 },
        { name: "Express", pct: 70 },
        { name: "MySQL", pct: 70 },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git / GitHub", pct: 85 },
        { name: "Linux", pct: 70 },
        { name: "REST APIs", pct: 75 },
      ],
    },
  ];

  const scrollRef = useRef(null);
  const [index, setIndex] = useState(0);
  const scrollTimer = useRef(null);

  useEffect(() => {
    return () => {
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
    };
  }, []);

  const scrollToIndex = (i) => {
    const container = scrollRef.current;
    if (!container || !container.children.length) return;

    const child = container.children[i];
    if (!child) return;

    if (scrollTimer.current) clearTimeout(scrollTimer.current);

    container.scrollTo({
      left: child.offsetLeft - container.clientWidth / 2 + child.clientWidth / 2,
      behavior: "smooth",
    });
    setIndex(i);
  };

  const next = () => {
    if (index < columns.length - 1) scrollToIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) scrollToIndex(index - 1);
  };

  const onScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    if (scrollTimer.current) clearTimeout(scrollTimer.current);

    scrollTimer.current = setTimeout(() => {
      const children = Array.from(container.children);
      const center = container.scrollLeft + container.clientWidth / 2;

      const nearestIndex = children.reduce((bestIdx, el, idx) => {
        const elCenter = el.offsetLeft + el.clientWidth / 2;
        const bestCenter =
          children[bestIdx].offsetLeft + children[bestIdx].clientWidth / 2;
        return Math.abs(elCenter - center) < Math.abs(bestCenter - center)
          ? idx
          : bestIdx;
      }, 0);

      setIndex(nearestIndex);
    }, 250);
  };

  return (
    <motion.section
      id="about"
      className="flex flex-col md:flex-row w-screen min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#000] text-white"
    >
      {/* ABOUT SECTION */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 md:px-16 gap-6 py-16 md:py-0 border-b md:border-b-0 md:border-r border-[#FF5B01]/50"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h2 className="text-4xl md:text-5xl font-mono font-bold text-[#FF5B01] drop-shadow-[0_0_8px_rgba(255,91,1,0.6)]">
          About Me
        </h2>

        <p className="text-base md:text-lg leading-relaxed tracking-wide text-gray-200 text-justify max-w-[600px]">
          I’m a third-year Computer Science student focused on strengthening my
          understanding of core CS fundamentals like data structures, algorithms,
          and system design. Alongside my coursework, I’m working on real-world
          projects that connect theory with practical implementation. I’m
          passionate about building solutions that are both technically sound and
          valuable for users — and I’m always looking to collaborate, learn, and
          grow as a developer.
        </p>
      </motion.div>

      {/* SKILLS SECTION */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center items-center gap-8 px-8 md:px-16 py-16 md:py-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
      >
        <h2 className="text-4xl md:text-5xl font-mono font-bold text-[#FF5B01] drop-shadow-[0_0_8px_rgba(255,91,1,0.6)]">
          Skills
        </h2>

        <div className="max-w-5xl w-full">
          {/* Controls */}
          

          {/* Scrollable Skill Columns */}
          <div
            ref={scrollRef}
            onScroll={onScroll}
            className="flex gap-6 overflow-x-auto pb-6 hide-scrollbar snap-x snap-mandatory"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {columns.map((col) => (
              <motion.div
                key={col.title}
                className="snap-center shrink-0 w-[280px] sm:w-[300px] bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h3 className="text-xl font-semibold text-[#FF5B01] mb-4">
                  {col.title}
                </h3>

                <div className="flex flex-col gap-4">
                  {col.skills.map((s) => (
                    <div key={s.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-200">{s.name}</span>
                        <span className="text-sm text-gray-400">{s.pct}%</span>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-2 rounded-full"
                          style={{
                            background: "linear-gradient(90deg,#FF5B01,#FF9257)",
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.pct}%` }}
                          transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            delay: 0.2,
                          }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
