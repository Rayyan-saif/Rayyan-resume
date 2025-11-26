import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Client from "../assets/Ukasha.jpg"

const Testimonial = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-100 via-white to-blue-100 py-20  dark:from-black dark:via-gray-900 dark:to-black border-gray-700 border-t px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,#60a5fa,transparent_25%),radial-gradient(circle_at_80%_80%,#1e3a8a,transparent_25%)]"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold font-serif dark:text-cyan-400 text-blue-600 mb-6">
          A Highlight from My Web Project
        </h2>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-mono max-w-3xl mx-auto mb-10 leading-relaxed">
          I designed and developed a fully responsive website for a tech
          services agency using{" "}
          <span className="font-semibold text-blue-500">React</span> and{" "}
          <span className="font-semibold text-blue-500">Tailwind CSS</span>. The
          client provides computer and IT services, and the website helps them
          showcase their services online. The project included responsive UI
          design, optimized performance, and SEO-friendly structure.
        </p>

<motion.div
  initial={{ opacity: 0, y: 50, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
  viewport={{ once: true, amount: 0.4 }}
  className="
    relative max-w-3xl mx-auto 
    p-12 md:p-16 
    rounded-[32px]
    bg-gradient-to-br from-black/80 via-black/60 to-black/40
    backdrop-blur-2xl 
    shadow-[0_15px_60px_rgba(0,0,0,0.6)]
    border border-white/10
    overflow-hidden
  "
>

  {/* Aura Gold Glows */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-10 left-10 w-40 h-40 bg-yellow-300/10 blur-3xl rounded-full"></div>
    <div className="absolute bottom-0 right-0 w-52 h-52 bg-yellow-500/10 blur-3xl rounded-full"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-200/5 blur-[100px] rounded-full"></div>
  </div>

  {/* Gold 3D Quote Icons */}
  <FaQuoteLeft className="absolute top-8 left-8 text-yellow-400 md:text-4xl text-2xl drop-shadow-[0_0_10px_rgba(255,215,0,0.5)] opacity-90" />
  <FaQuoteRight className="absolute bottom-10 right-8 text-yellow-400 md:text-4xl text-2xl drop-shadow-[0_0_10px_rgba(255,215,0,0.5)] opacity-90" />

  {/* Text */}
  <p className="relative text-gray-200 text-xl md:text-2xl leading-relaxed italic mb-12 tracking-wide z-10 font-light">
    “Collaborating with Rayyan was a world-class experience. The website delivery,
    animations, responsiveness, and aesthetic quality truly reflect premium
    craftsmanship and a deep understanding of modern design.”
  </p>

  {/* Client Info */}
  <div className="relative flex flex-col items-center text-center z-10">
    <motion.img
      src={Client}
      alt="Client"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="
        w-28 h-28 rounded-full 
        border-[3.5px] border-yellow-400 
        shadow-[0_0_25px_rgba(255,215,0,0.5)] 
        object-cover
      "
    />

    <p className="mt-6 text-yellow-300 font-semibold text-2xl tracking-wide">
      Ukasha Rajpoot
    </p>
    <p className="text-sm md:text-base text-gray-400 tracking-wide">
      Founder – Virtunests Solutions
    </p>
  </div>

  {/* Golden Divider */}
  <div className="relative mt-12">
    <div className="
      mx-auto w-32 h-1 
      rounded-full 
      bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-300 
      shadow-[0_0_25px_rgba(255,215,0,0.6)]
    "></div>
  </div>
</motion.div>




        <motion.a
          href="https://virtunests.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="inline-block mt-10 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-8 py-3 rounded-full shadow-md transition-all duration-300"
        >
          🔗 View Live Website
        </motion.a>

        <p className="mt-4 text-sm text-gray-500">
          Tech Stack: React, Tailwind CSS, AOS Animation, React Router
        </p>
      </motion.div>

    </section>
  );
};

export default Testimonial;
