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
    image: "/portfolio/design3.png",
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
    title: "Todo-list",
    liveUrl: "",
    p: "This website is not live",
  },
  {
    id: 7,
    image: "/portfolio/web7.png",
    title: "Netflix Clone",
    liveUrl: "",
    p: "This website is not live",
  },
  {
    id: 8,
    image: "/portfolio/web8.png",
    title: "Service Website",
    liveUrl: "",
    p: "This website is not live",
  },
  {
    id: 9,
    image: "/portfolio/web9.png",
    title: "Package Website",
    liveUrl: "",
    p: "This website is not live",
  },
  {
    id: 10,
    image: "/portfolio/web10.png",
    title: "Amazone Clone",
    liveUrl: "",
    p: "This website is not live",
  },
  {
    id: 11,
    image: "/portfolio/web11.png",
    title: "Pararoze",
    liveUrl: "",
    p: "This website is not live",
  },
  {
    id: 12,
    image: "/portfolio/web12.png",
    title: "Form",
    liveUrl: "",
    p: "This website is not live",
  },
  {
    id: 13,
    image: "/portfolio/web13.png",
    title: "Calculator",
    liveUrl: "",
    p: "This website is not live",
  },
  {
    id: 14,
    image: "/portfolio/web14.png",
    title: "Dummy Portfolio",
    liveUrl: "",
    p: "This website is not live",
  },
];

const AllProjects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="portfolio"
      className="py-24 bg-gradient-to-b from-blue-100 via-white to-blue-100
      dark:from-black dark:via-gray-900 border-gray-700 border-t dark:to-black text-gray-900 dark:text-white font-body"
    >
      <div className="max-w-6xl mx-auto text-center">
       <h2
  className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold mb-4 text-center md:text-left"
  data-aos="fade-down"
  data-aos-delay="100"
>
  All <span className="text-blue-500">Projects</span>
</h2>

<p
  className="text-sm sm:text-base md:text-lg lg:text-xl dark:text-gray-300 text-gray-700 mb-8 sm:mb-10 font-mono max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto text-center md:text-left leading-relaxed sm:leading-loose"
  data-aos="fade-down"
  data-aos-delay="200"
>
  Blending creativity and code to deliver sleek, scalable, and impactful web
  projects with <span className="font-semibold text-blue-500">React</span>,{" "}
  <span className="font-semibold text-blue-500">Tailwind CSS</span>,{" "}
  <span className="font-semibold text-blue-500">HTML</span>,{" "}
  <span className="font-semibold text-blue-500">CSS</span> &{" "}
  <span className="font-semibold text-blue-500">JS</span>.
</p>


        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 cursor-pointer">
          {webProjects.map((project, index) => (
          <div
  key={project.id}
  className="relative overflow-hidden rounded-xl shadow-lg group"
  data-aos="zoom-in-up"
  data-aos-delay={index * 150}
>
  {/* Project Image */}
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-64 object-cover transform md:group-hover:scale-110 transition duration-500"
  />

  {/* ===== Mobile View (Visible on small screens) ===== */}
  <div className="md:hidden bg-white text-black p-4">
    <h3 className="text-lg font-bold mb-1">{project.title}</h3>
    <p className="text-sm italic mb-2">{project.p}</p>
    {project.liveUrl ? (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-semibold hover:bg-blue-700 transition"
      >
        Visit Site
      </a>
    ) : (
      <span className="inline-block px-4 py-2 bg-gray-600 text-white rounded-md text-sm font-semibold">
        Not Live
      </span>
    )}
  </div>

  {/* ===== Desktop Hover Overlay (md and up) ===== */}
  <div className="
    hidden md:flex absolute inset-0 bg-black/70 text-white 
    items-center justify-center flex-col text-center px-4 
    opacity-0 group-hover:opacity-100 transition duration-300
  ">
    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
    <p className="text-sm italic mb-4">{project.p}</p>
    {project.liveUrl ? (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-blue-600 rounded-md text-sm font-semibold hover:bg-blue-700 transition"
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
      </div>
    </section>
  );
}

export default AllProjects