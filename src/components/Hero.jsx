import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";
import { Player } from "@lottiefiles/react-lottie-player";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
        <section
      className="h-screen flex items-center justify-center px-6 md:px-10 
      bg-gradient-to-b from-blue-50 via-white to-blue-100
      dark:from-black dark:via-gray-900  dark:to-black transition-colors duration-500"
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl w-full"
        data-aos="fade-up"
      >
        {/* Left: Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-serif leading-tight dark:text-white">
            I{" "}
            <span
              className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 
              bg-clip-text text-transparent inline-block"
            >
              <Typewriter
                words={["Design", "Develop", "Deliver"]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={80}
                delaySpeed={1500}
              />
            </span>
            <br />
            <span className="dark:text-white text-gray-900">
              Digital Experiences
            </span>
          </h1>

          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl font-mono max-w-xl mx-auto md:mx-0">
            Building{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              responsive
            </span>{" "}
            &{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              modern
            </span>{" "}
            interfaces with React, Tailwind CSS & creativity — designed for
            global brands.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="/contact"
              className="px-7 py-3 rounded-full bg-blue-600 text-white font-semibold 
              shadow-md hover:bg-blue-700 hover:scale-105 hover:shadow-lg 
              transition-all duration-300"
            >
              Get Started
            </a>
            <a
              href="/services"
              className="px-7 py-3 rounded-full border-2 border-blue-600 
              text-gray-900 dark:text-white font-semibold 
              hover:bg-blue-600 hover:text-white hover:scale-105 
              transition-all duration-300"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Right: Animation */}
        <div className="flex justify-center" data-aos="zoom-in">
          <div className="rounded-2xl w-full max-w-xs sm:max-w-md md:max-w-lg">
            <Player
              autoplay
              loop
              src="https://assets2.lottiefiles.com/packages/lf20_jtbfg2nb.json"
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-blue-600 flex items-start justify-center p-1">
          <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
