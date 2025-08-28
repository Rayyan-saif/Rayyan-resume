import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheckCircle } from "react-icons/fa";

const HireMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white dark:from-black dark:via-[#0a0f1c] dark:to-black px-6 py-20">
      <div className="max-w-5xl mx-auto" data-aos="fade-up">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center">
          <span className="text-blue-600 dark:text-cyan-400">Hire</span> Me
        </h1>
        <p className="text-center text-gray-700 dark:text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
          Looking for a passionate developer who delivers fast, responsive, and modern web experiences?
          You’re at the right place. I specialize in building React-based web apps with Tailwind CSS,
          Vite, and deploying smoothly on Vercel. Let’s bring your idea to life.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Features */}
          <div className="space-y-6">
            {[
              "Responsive design for all devices",
              "Fast performance with Vite",
              "SEO & Deployment ready",
              "Smooth animations and clean UI",
              "Client-first approach and quick turnaround"
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <FaCheckCircle className="text-cyan-500 mt-1 text-[22px]" />
                <p className="text-gray-800 dark:text-gray-200">{feature}</p>
              </div>
            ))}
          </div>

          {/* Right: Contact Form */}
          <div data-aos="fade-left" className="-mt-5">
            <form
              action="https://formsubmit.co/rayyansaifee02@gmail.com"
              method="POST"
              className="space-y-4 bg-white/90 dark:bg-white/5 p-6 rounded-xl shadow-lg backdrop-blur"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://rayyan-resume.vercel.app/thank-you"/>

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-gray-100 dark:bg-black text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-gray-100 dark:bg-black text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows="5"
                required
                className="w-full px-4 py-3 bg-gray-100 dark:bg-black text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg transition transform hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
