import React, { useEffect } from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiTailwindcss, SiVite, SiVercel } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer className="relative bg-gradient-to-tr from-black via-[#0a0f1c] to-black text-white pt-20 pb-6 px-6 overflow-hidden">
      {/* SVG wave background */}
      <svg
        className="absolute top-0 left-0 w-full rotate-180"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#0a0f1c"
          fillOpacity="1"
          d="M0,32L60,58.7C120,85,240,139,360,144C480,149,600,107,720,106.7C840,107,960,149,1080,160C1200,171,1320,149,1380,138.7L1440,128V0H0Z"
        ></path>
      </svg>

      {/* Top Section */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700 pb-12">
        {/* Branding */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-cyan-400">Rayyan Saifee</h1>
          <p className="text-gray-400 leading-relaxed">
            Crafting premium UIs with React, Tailwind & modern web tools.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-blue-400">Quick Links</h2>
          <ul className="space-y-3 text-gray-300">
            {["Aboute", "Skills", "AllProjects", "contact"].map((link) => (
              <li key={link}>
                <a
                  href={`/${link}`}
                  className="inline-block hover:text-cyan-400 relative group transition"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                  <span className="block h-[2px] w-0 bg-cyan-400 group-hover:w-full transition-all duration-300 mt-1"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-blue-400">Connect</h2>
          <div className="flex gap-5 text-2xl">
            <a
              href="https://github.com/Rayyan-saif"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-3 rounded-full hover:text-cyan-400 hover:bg-white/20 transition transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rayyan-saifee-80718b337/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-3 rounded-full hover:text-cyan-400 hover:bg-white/20 transition transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-3 rounded-full hover:text-cyan-400 hover:bg-white/20 transition transform hover:scale-110"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* Call-to-Action Card */}
      <div
        className="relative z-10 max-w-xl mx-auto mt-10 bg-gradient-to-r from-blue-600 to-cyan-500 p-6 rounded-xl shadow-xl text-center"
        data-aos="fade-up"
      >
        <h3 className="text-2xl font-bold mb-2 text-white">Let’s Build Together</h3>
        <p className="text-white/90 mb-4 text-sm">
          I’m always open to exciting projects. Let’s bring your idea to life.
        </p>
        <a
          href="/contact"
          className="px-6 py-2 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition"
        >
          Say Hello →
        </a>
      </div>

      {/* Tech Stack Icons */}
      <div className="relative z-10 flex justify-center gap-6 mt-6 text-2xl text-white/70">
        {[FaReact, SiTailwindcss, SiVite, SiVercel].map((Icon, idx) => (
          <span key={idx} className="hover:text-cyan-400 transition">
            <Icon />
          </span>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
