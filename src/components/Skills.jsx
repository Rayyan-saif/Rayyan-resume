import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiVite, SiVercel } from "react-icons/si";

const skills = [
  { name: "HTML5 95%", icon: <FaHtml5 />, color: "text-blue-600" },
  { name: "CSS3 80%", icon: <FaCss3Alt />, color: "text-blue-400" },
  { name: "JavaScript 70%", icon: <FaJs />, color: "text-yellow-500" },
  { name: "React 80%", icon: <FaReact />, color: "text-cyan-400" },
  { name: "Tailwind 90%", icon: <SiTailwindcss />, color: "text-teal-400" },
  { name: "Git 50%", icon: <FaGitAlt />, color: "text-red-500" },
  { name: "Vite 80%", icon: <SiVite />, color: "text-purple-500" },
  { name: "Vercel 80%", icon: <SiVercel />, color: "text-gray-800 dark:text-white" },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b  from-blue-100 via-white to-blue-100
      dark:from-black dark:via-gray-900 border-t border-gray-700 dark:to-black text-gray-900 dark:text-white font-body">
      <div className="max-w-6xl mx-auto text-center" data-aos="fade-right">
        <h2 className="text-5xl font-extrabold font-heading my-4 text-blue-900 dark:text-white">
          Tech <span className="text-blue-500 dark:text-cyan-400">Stack</span>
        </h2>

        <p className="my-5 text-lg text-gray-700 dark:text-gray-300 tracking-wide leading-relaxed max-w-3xl mx-auto">
          I craft fast, modern UIs using <span className="font-semibold text-blue-500 dark:text-cyan-400">React</span>, <span className="font-semibold text-blue-500 dark:text-cyan-400">Tailwind CSS</span>, and <span className="font-semibold text-blue-500 dark:text-cyan-400">Vite</span> and deploy pixel-perfect websites with <span className="font-semibold text-blue-500 dark:text-cyan-400">Vercel</span>. Clean code. <br /> Smooth design. No excuses.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 cursor-pointer">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/80 dark:bg-gray-900 shadow-md p-6 rounded-xl hover:scale-105 transition-transform duration-300 border border-blue-400 hover:shadow-xl"
            >
              <div className={`text-5xl mb-3 ${skill.color} flex justify-center`}>
                {skill.icon}
              </div>
              <h3 className="text-lg text-gray-900 dark:text-white">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
