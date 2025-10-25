import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const webProjects = [
  {
    id: 1,
    image: "/portfolio/web1.png",
    title: "E-Commerce Website",
    liveUrl: "https://ecommerce-site-psi-gilt.vercel.app/",
    p: "This website is live",
  },
  {
    id: 2,
    image: "/portfolio/web2 (2).png",
    title: "Service Website",
    liveUrl: "https://virtunests.com",
    p: "This website is live",
  },
  {
    id: 3,
    image: "/portfolio/web3.png",
    title: "Blogging Page",
    liveUrl: "https://blog-cms-app-ten.vercel.app/",
    p: "This website is live",
  },
  {
    id: 4,
    image: "/portfolio/web4.png",
    title: "Weather App",
    liveUrl: "https://weather-app-react-gray-sigma.vercel.app/",
    p: "This website is live",
  },
  {
    id: 5,
    image: "/portfolio/web5.png",
    title: "Recipe Finder App",
    liveUrl: "",
    p: "This website is not live",
  },
  {
    id: 6,
    image: "/portfolio/web6.png",
    title: "Todo-List",
    liveUrl: "",
    p: "This website is not live",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="portfolio"
      className="py-24 bg-gradient-to-b  from-blue-100 via-white to-blue-100
      dark:from-black dark:via-gray-900 border-t border-gray-700 dark:to-black text-gray-900 dark:text-white font-body"
    >
      <div className="max-w-6xl mx-auto text-center">
      <h2
      className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold mb-4 
                text-blue-900 dark:text-cyan-400 text-center md:text-left"
      data-aos="fade-down"
      data-aos-delay="100"
    >
      Featured <span className="text-blue-500 dark:text-cyan-300">Projects</span>
    </h2>

    <p
      className="text-sm sm:text-base md:text-lg lg:text-xl 
                dark:text-gray-300 text-gray-700 mb-8 sm:mb-10 
                font-mono mx-auto md:mx-0 
                max-w-xl md:max-w-2xl lg:max-w-3xl 
                text-center md:text-left 
                leading-relaxed sm:leading-loose"
      data-aos="fade-down"
      data-aos-delay="200"
    >
      A showcase of my top 6 hand-picked projects that highlight my expertise in
      modern web development. Each project is built with clean code, optimized
      performance, and user-friendly design.
    </p>



        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 cursor-pointer pb-10">
          {webProjects.map((project, index) => (
            <div
              key={project.id}
              className="relative overflow-hidden rounded-xl shadow-lg group"
              data-aos="zoom-in-up"
              data-aos-delay={index * 150}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transform md:group-hover:scale-110 transition duration-500"
              />

              {/* Mobile Info */}
              <div className="md:hidden bg-white text-black p-4">
                <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                <p className="text-sm italic mb-2">{project.p}</p>
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md text-sm font-semibold hover:bg-blue-600 transition"
                  >
                    Visit Site
                  </a>
                ) : (
                  <span className="inline-block px-4 py-2 bg-gray-600 text-white rounded-md text-sm font-semibold">
                    Not Live
                  </span>
                )}
              </div>

              {/* Desktop Overlay */}
              <div className="
                hidden md:flex absolute inset-0 bg-gradient-to-b from-black/70 via-blue-900/60 to-black/80
                text-white items-center justify-center flex-col text-center px-4
                opacity-0 group-hover:opacity-100 transition duration-300
              ">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm italic mb-4">{project.p}</p>
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 rounded-md text-sm font-semibold hover:bg-blue-600 transition"
                  >
                    Visit Site
                  </a>
                ) : (
                  <span className="px-4 py-2 bg-gray-600 rounded-md text-sm font-semibold cursor-not-allowed">
                    Not Live
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

       <a
  href="/AllProjects"
  className="relative inline-block px-6 hover:before:px-10 py-3 text-lg font-semibold font-heading tracking-wide 
             text-white dark:text-white bg-blue-600 dark:bg-blue-500 rounded-xl shadow-lg 
             transition-all duration-300 ease-out 
             hover:scale-105 hover:shadow-blue-400/50 hover:bg-blue-900 dark:hover:bg-blue-600 
             before:absolute before:inset-0 before:rounded-xl before:border-2 
             before:border-blue-500 before:scale-105 before:opacity-0 
             hover:before:opacity-100 hover:before:scale-110"
>
  See my all projects →
</a>
      </div>
    </section>
  );
};

export default Projects;
