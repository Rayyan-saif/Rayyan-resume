import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Picture from "../assets/SMART-removebg.png";

const Aboute = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-blue-100 via-white to-blue-100
      dark:from-black dark:via-gray-900 border-gray-700 border-t dark:to-black text-gray-900 dark:text-white font-body"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Profile Image */}
        <div data-aos="fade-right" className="flex justify-center relative group">
          <div className="relative">
            <img
              src={Picture}
              alt="Rayyan Saifee"
              className="md:w-[23vw] w-64 h-64 md:h-[23vw] object-cover
              rounded-full border-4 border-transparent bg-gradient-to-tr 
              from-blue-900 via-blue-100 to-blue-900
              shadow-lg shadow-white/80 group-hover:scale-105 transition-all duration-500"
            />
            {/* Glow Effect */}
            {/* <div className="absolute inset-0 rounded-full blur-2xl opacity-30 
            bg-gradient-to-tr from-blue-500 via-blue-400 to-blue-600 animate-pulse"></div>*/}
          </div>
        </div>

        {/* About Text */}
        <div data-aos="fade-left" className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-blue-600 mb-4">
            Who is Rayyan?
          </h2>

          {/* Animated Underline */}
          <div className="h-1 w-32 bg-blue-600 rounded mb-6 mx-auto md:mx-0 animate-pulse"></div>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed sm:leading-loose mb-4 max-w-2xl mx-auto md:mx-0 text-center md:text-left">

          I’m <span className="text-blue-500 font-semibold">Rayyan Saifee</span>, a creative and self-taught <span className="text-blue-500 font-semibold">Frontend Developer</span>. I focus on crafting modern, responsive, and user-friendly websites using {""}
          <span className="text-blue-500 font-semibold">React.js</span> and {""}
          <span className="text-blue-500 font-semibold">Tailwind CSS</span> bringing together clean design and seamless functionality to deliver engaging digital experiences.
        </p>

        <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed sm:leading-loose mb-6 max-w-2xl mx-auto md:mx-0 text-center md:text-left">
          My mission is to deliver seamless user experiences with clean code, 
          eye-catching UI, and lightning-fast performance. Whether it’s for 
          individuals, startups, or businesses — I love building digital 
          solutions that truly make an impact.
        </p>


          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-5">
            <a
              href="/contact"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white 
              rounded-lg font-semibold shadow-md hover:shadow-lg 
              transition-all duration-300 hover:scale-105"
            >
              Let’s Talk
            </a>

            <a
              href="/Rayyan_Resume.pdf"
              download="RayyanResume.pdf"
              className="px-6 py-3 border border-blue-600 text-blue-600 
              hover:text-white hover:bg-blue-600 rounded-lg font-semibold 
              transition-all duration-300 hover:scale-105"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboute;
