import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-7 md:right-6 right-2 z-50 p-1"
    >
      {darkMode ? (
        <SunIcon className="h-6 w-6 text-orange-400 bg-black rounded-lg" />
        ) : (
        <MoonIcon className="h-6 w-6 text-black" />
        )}
    </button>
  );
};

export default DarkModeToggle;
