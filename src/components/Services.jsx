import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCode, FaMobileAlt, FaRocket } from 'react-icons/fa';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    {
      icon: <FaCode size={28} className="text-blue-900" />,
      title: 'Frontend Development',
      desc: 'I create fast, interactive, and modern web applications using React and Tailwind CSS.',
    },
    {
      icon: <FaMobileAlt size={28} className="text-cyan-900" />,
      title: 'Mobile-First Design',
      desc: 'My layouts are mobile-friendly and fully responsive across all devices.',
    },
    {
      icon: <FaRocket size={28} className="text-blue-900" />,
      title: 'Performance & SEO',
      desc: 'I ensure fast load times and SEO-friendly code structure for better search ranking.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b  from-blue-100 via-white to-blue-100
      dark:from-black dark:via-gray-900 border-t border-gray-700 dark:to-black text-gray-900 dark:text-white font-body">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Heading */}
        <div data-aos="fade-up" className="mb-16 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold 
            dark:text-white text-blue-900">
            My <span className="text-blue-500 dark:text-cyan-400">Services</span>
          </h2>

          {/* <div className="w-24 h-1 bg-blue-500 dark:bg-cyan-400 mt-6 rounded mx-auto md:mx-0">
          </div> */}

          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl 
            dark:text-gray-300 text-gray-600 leading-relaxed sm:leading-loose 
            mx-auto md:mx-0 max-w-xl md:max-w-2xl">
            I help businesses and individuals stand out with visually appealing and{" "}
            <br className="hidden sm:block" /> 
            high-performance websites.
          </p>

        </div>


        {/* Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 cursor-pointer">
          {services.map((service, i) => (
            <div
              key={i}
              data-aos="fade-up"
              className="group bg-white/80 dark:bg-gray-900 border border-blue-400 dark:border-cyan-400 hover:border-blue-500 dark:hover:border-cyan-300 transition-all duration-300 rounded-xl p-8 shadow-md hover:shadow-xl hover:scale-105"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-blue-500 dark:bg-cyan-400 rounded-full text-white mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-heading text-xl font-bold dark:text-white mb-3">{service.title}</h3>
              <p className="dark:text-gray-300 text-gray-800 leading-relaxed text-sm">{service.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
