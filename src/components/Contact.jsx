import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    emailjs
      .send(
        "service_skbzrli",
        "template_mcua8ri",
        {
          ...formData,
          to_email: "sumitavasthi.28@gmail.com",
        },
        "SmGe0S_5KaErH0rvf"
      )
      .then(
        () => {
          setStatus("✅ Message sent! Thank you for reaching out.");
          setFormData({ from_name: "", from_email: "", message: "" });
        },
        (error) => {
          console.error(error);
          setStatus("❌ Something went wrong. Please try again.");
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <motion.section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#000] text-white px-4 py-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Title */}
      <motion.h2
        className="text-5xl font-mono font-bold text-[#FF5B01] mb-10 drop-shadow-[0_0_15px_rgba(255,91,1,0.7)] text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Contact Me
      </motion.h2>

      {/* Centered Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-[#111]/70 backdrop-blur-md border border-[#FF5B01]/20 rounded-2xl p-10 flex flex-col gap-5 shadow-[0_0_25px_rgba(255,91,1,0.15)]"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#1a1a1a] border border-[#333] text-white placeholder-gray-400 focus:outline-none focus:border-[#FF5B01] focus:shadow-[0_0_8px_#FF5B01] transition-all duration-200"
          />

          <input
            type="email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#1a1a1a] border border-[#333] text-white placeholder-gray-400 focus:outline-none focus:border-[#FF5B01] focus:shadow-[0_0_8px_#FF5B01] transition-all duration-200"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 rounded-md bg-[#1a1a1a] border border-[#333] text-white placeholder-gray-400 focus:outline-none focus:border-[#FF5B01] focus:shadow-[0_0_8px_#FF5B01] transition-all duration-200 resize-none"
          ></textarea>
        </div>

        <motion.button
          type="submit"
          disabled={isSending}
          whileHover={!isSending ? { scale: 1.03 } : {}}
          whileTap={!isSending ? { scale: 0.97 } : {}}
          className={`mt-4 py-3 rounded-md font-semibold transition-all duration-300 text-white shadow-lg ${
            isSending
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-[#FF5B01] hover:bg-[#FF7B20] hover:shadow-[0_0_15px_#FF5B01]"
          }`}
        >
          {isSending ? "Sending..." : "Send Message"}
        </motion.button>

        {status && (
          <motion.p
            className="text-center text-sm mt-3 text-[#FF9257]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {status}
          </motion.p>
        )}
      </motion.form>

      <p className="mt-8 text-gray-400 text-sm text-center">
        Or email me directly at{" "}
        <span className="text-[#FF5B01] font-medium">
          sumitavasthi.28@gmail.com
        </span>
      </p>
    </motion.section>
  );
}
