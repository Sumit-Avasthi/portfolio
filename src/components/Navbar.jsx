import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 z-50 w-full bg-transparent text-white font-[Poppins]">
      <div className="flex justify-end items-center p-4 md:pr-10">
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-lg font-medium items-center">
          {["About", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="
                  px-4 py-1 rounded-lg border-2 border-transparent
                  hover:border-[#FF5B01] hover:bg-[#FF5B01]/10
                  hover:text-[#FF5B01]
                  transition-all duration-300 ease-in-out
                "
              >
                {item}
              </a>
            </li>
          ))}

          {/* Download Resume Button */}
          <li>
            <a
              href="/resume.pdf" // 🔗 replace this with your actual resume file path or Google Drive link
              download="Sumit_Avasthi_Resume.pdf"
              className="
                px-5 py-2 rounded-lg border-2 border-[#FF5B01]
                text-[#FF5B01] font-semibold
                hover:bg-[#FF5B01] hover:text-black
                transition-all duration-300 ease-in-out
                shadow-[0_0_10px_rgba(255,91,1,0.3)]
              "
            >
              Download Resume
            </a>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button
          className={`md:hidden text-3xl focus:outline-none transition-all duration-500 ease-in-out transform ${
            isOpen ? "rotate-90 text-[#FF5B01]" : "rotate-0 text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-4 right-4 w-[240px] h-[320px]
          bg-gradient-to-br from-[#0a0a0a]/95 to-[#1a1a1a]/90
          border border-[#FF5B01]/30 shadow-[0_0_20px_rgba(255,91,1,0.3)]
          backdrop-blur-xl rounded-2xl text-white flex flex-col
          items-center justify-center gap-6 text-xl font-semibold
          transition-all duration-500 ease-in-out
          ${
            isOpen
              ? "translate-x-0 opacity-100 scale-100"
              : "translate-x-[120%] opacity-0 scale-90"
          }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-4 text-2xl hover:text-[#FF5B01] transition duration-200"
        >
          ✕
        </button>

        {["About", "Projects", "Contact"].map((item, index) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setIsOpen(false)}
            className="
              hover:text-[#FF5B01] transition-all duration-200
              transform hover:scale-110
            "
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {item}
          </a>
        ))}

        {/* Mobile Resume Button */}
        <a
          href="/resume.pdf"
          download="Sumit_Avasthi_Resume.pdf"
          onClick={() => setIsOpen(false)}
          className="
            mt-2 px-5 py-2 border-2 border-[#FF5B01]
            text-[#FF5B01] rounded-lg text-base
            hover:bg-[#FF5B01] hover:text-black
            transition-all duration-300 ease-in-out
            shadow-[0_0_10px_rgba(255,91,1,0.3)]
          "
        >
          Download Resume
        </a>
      </div>
    </nav>
  );
}
