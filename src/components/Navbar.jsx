import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 z-50 w-full bg-transparent text-white">
      <div className="flex justify-end items-center p-4 md:pr-10">
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-12 text-lg font-medium">
          <li>
            <a
              href="#about"
              className="border-[8px] border-transparent hover:bg-[#FF5B01] hover:border-[#FF5B01] hover:rounded-lg transition-all duration-200 ease-in-out px-4"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="border-[8px] border-transparent hover:bg-[#FF5B01] hover:border-[#FF5B01] hover:rounded-xl transition-all duration-200 ease-in-out px-4 "
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="border-[8px] border-transparent hover:bg-[#FF5B01] hover:border-[#FF5B01] hover:rounded-xl transition-all duration-200 ease-in-out px-4 "
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden text-3xl focus:outline-none transition-transform duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Sliding Box Menu */}
      <div
        className={`fixed top-4 right-2 w-[250px] h-[280px] bg-black/90 backdrop-blur-lg rounded-xl shadow-xl text-white flex flex-col items-center justify-center gap-6 text-xl font-semibold transition-all duration-500 ease-in-out ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-[120%] opacity-0"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-4 text-2xl hover:text-[#FF5B01] transition-colors duration-200"
        >
          ✕
        </button>

        <a
          href="#about"
          onClick={() => setIsOpen(false)}
          className="hover:text-[#FF5B01] transition"
        >
          About
        </a>
        <a
          href="#projects"
          onClick={() => setIsOpen(false)}
          className="hover:text-[#FF5B01] transition"
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="hover:text-[#FF5B01] transition"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
