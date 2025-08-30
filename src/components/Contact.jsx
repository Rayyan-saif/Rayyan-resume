import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="contact" className="py-24 dark:bg-gradient-to-b bg-gradient-to-r from-white via-blue-100 to-white dark:from-black dark:via-gray-900 border-t border-gray-700 dark:to-black text-gray-900 dark:text-white font-body">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10" data-aos="fade-down">
       <h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading 
                  text-blue-900 dark:text-cyan-400 
                  text-center md:text-left"
      >
        <span className="text-blue-500 dark:text-cyan-300">Let’s</span> Talk
      </h2>

      <p
        className="text-sm sm:text-base md:text-lg lg:text-xl 
                  text-gray-700 dark:text-gray-300 mt-3 font-mono 
                  max-w-xl md:max-w-2xl 
                  mx-auto md:mx-0 
                  text-center md:text-left 
                  leading-relaxed sm:leading-loose"
      >
        Have a project or idea? Reach out and let’s build something amazing!
      </p>


        </div> 

        {/* Form */}
        <form
        action="https://formspree.io/f/mnqekxyz"
        method="POST"
        className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2"
        data-aos="fade-up"
      >
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="bg-white dark:bg-gray-900 text-black dark:text-white p-4 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 dark:border-cyan-400 transition"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="bg-white dark:bg-gray-900 text-black dark:text-white p-4 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 dark:border-cyan-400 transition"
        />

        {/* Message */}
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="md:col-span-2 bg-white dark:bg-gray-900 text-black dark:text-white p-4 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 dark:border-cyan-400 transition"
        ></textarea>

        {/* Submit Button */}
        <div className="md:col-span-2 text-center mt-4">
          <button
            type="submit"
            className="bg-blue-500 dark:bg-cyan-400 hover:bg-blue-600 dark:hover:bg-cyan-500 text-white font-bold py-3 px-8 rounded-tr-xl rounded-bl-xl transition-all duration-300 shadow-lg"
          >
            Send Message
          </button>
        </div>
      </form>

      </div>
    </section>
  );
};

export default Contact;
