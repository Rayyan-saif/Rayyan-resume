import React, { useState } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
  className={`fixed top-0 left-0 w-full z-50 shadow-md transition duration-300 ${
    darkMode ? "bg-black/70 text-white" : "bg-white text-gray-900"
  }`}
>
  <div className="container mx-auto flex justify-between items-center px-6 py-4">
    {/* Logo */}
    <h1 className={`text-2xl font-bold ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
      MyPortfolio
    </h1>

    {/* Desktop Nav */}
    <nav className="hidden md:flex space-x-8 items-center">
      <a href="/" className={`hover:${darkMode ? "text-blue-300" : "text-blue-500"} transition`}>
        Home
      </a>
      <a href="/Aboute" className={`hover:${darkMode ? "text-blue-300" : "text-blue-500"} transition`}>
        About Me
      </a>
      <a href="/Services" className={`hover:${darkMode ? "text-blue-300" : "text-blue-500"} transition`}>
        Services
      </a>
      <a href="/AllProjects" className={`hover:${darkMode ? "text-blue-300" : "text-blue-500"} transition`}>
        Projects
      </a>
      <a href="/Testimonial" className={`hover:${darkMode ? "text-blue-300" : "text-blue-500"} transition`}>
        Testimonial
      </a>
      <a href="/contact" className={`hover:${darkMode ? "text-blue-300" : "text-blue-500"} transition`}>
        Contact
      </a>

      {/* Hire Me Button (Desktop Only) */}
      <a
        href="/HireMe"
        className={`px-5 py-2 rounded-full ${
          darkMode ? "bg-blue-700 text-white hover:bg-blue-600" : "bg-blue-500 text-white hover:bg-blue-600"
        } transition`}
      >
        Hire Me
      </a>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full border hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </nav>

    {/* Mobile Menu Button */}
    <div className="md:hidden flex items-center space-x-4">
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full border hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      <button onClick={toggleMenu} className="text-2xl">
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  </div>

  {/* Mobile Nav */}
  {menuOpen && (
    <nav
      className={`md:hidden flex flex-col space-y-6 py-6 px-6 ${
        darkMode ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      <a href="/" className={`hover:${darkMode ? "text-blue-300" : "text-blue-500"} transition`}>
        Home
      </a>
      <a href="/Aboute" className={`hover:${darkMode ? "text-blue-300" : "text-blue-500"} transition`}>
        About Me
      </a>
      <a href="/Services" className={`hover:${darkMode ? "text-blue-300" : "text-blue-500"} transition`}>
        Services
      </a>
      <a href="/AllProjects" className={`hover:${darkMode ? "text-blue-300" : "text-blue-500"} transition`}>
        Projects
      </a>
      <a href="/Testimonial" className={`hover:${darkMode ? "text-blue-300" : "text-blue-500"} transition`}>
        Testimonial
      </a>
      <a href="/contact" className={`hover:${darkMode ? "text-blue-300" : "text-blue-500"} transition`}>
        Contact
      </a>

      {/* Hire Me Button (Mobile Only) */}
      <a
        href="/HireMe"
        className={`px-4 py-2 rounded-full ${
          darkMode ? "bg-blue-700 text-white hover:bg-blue-600" : "bg-blue-500 text-white hover:bg-blue-600"
        } transition`}
      >
        Hire Me
      </a>
    </nav>
  )}
</header>
  );
};

export default Header;
