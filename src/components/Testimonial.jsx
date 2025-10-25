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
        <h2 className="text-4xl md:text-5xl font-extrabold dark:text-cyan-400 text-blue-600 mb-6">
          Featured Project —{" "}
          <span className="dark:text-cyan-400 text-blue-600">Client Website</span>
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
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-lg p-10 md:p-12 mx-auto max-w-3xl relative"
        >
          {/* Quote Icons */}
          <FaQuoteLeft className="absolute top-8 left-8 text-cyan-500 md:text-3xl text-1xl opacity-80" />
          <FaQuoteRight className="absolute bottom-8 right-8 text-cyan-500 md:text-3xl text-1xl opacity-80" />

          <p className="text-gray-700 text-lg italic leading-relaxed mb-6">
            “Rayyan built our agency website with a modern and professional
            design. The communication and delivery were excellent.”
          </p>

          <div className="flex items-center justify-center flex-col">
            <img
              src={Client}
              alt="Client"
              className="w-16 h-16 rounded-full border-2 border-blue-500 shadow-md mb-3"
            />
            <p className="font-semibold text-gray-800 text-lg">
              Ukasha Rajpoot
            </p>
            <p className="text-sm text-gray-500">
              Founder – Virtunests Solutions
            </p>
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
