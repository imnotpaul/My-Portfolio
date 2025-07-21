// Import Framer Motion tools for animations
import { motion, AnimatePresence } from "framer-motion";

// Import React hooks
import { useEffect, useState } from "react";

// Import React Parallax Tilt effect
import Tilt from "react-parallax-tilt";

// Import React Spring for animated scaling on hover
import { useSpring, animated } from "@react-spring/web";

// Experience data array with image slideshow and text details
const experiences = [
  {
    title: "Web Development Support",
    company: "Laravel & PHP Project",
    date: "March 2024 - April 2024",
    description:
      "Supported the development of a school management system using Laravel, integrating student records, authentication, dynamic routing, and responsive Blade templates for an efficient, user-friendly experience.",
    images: ["/LaravelProj1.jpg", "/LaravelProj2.jpg", "/LaravelProj3.jpg"],
  },
  {
    title: "CCTV Installation & Networking",
    company: "IT Solution-WMM",
    date: "Aug 2024 - Nov 2024",
    description:
      "Assisted in CCTV installation, wirings like cable tracing, troubleshooting and termination at DIY Dad, Lake Hotel, and Char’s Garden Café. Gained hands-on experience in security systems, networking, and client communication.",
    images: ["/NetPic1.jpg", "/NetPic2.jpg", "/NetPic3.jpg", "/NetPic4.jpg"],
  },
  {
    title: "WordPress Web Designer",
    company: "Capstone Project",
    date: "Feb 2025 - May 2025",
    description:
      "Developed a responsive school website using WordPress with custom CSS and HTML for a clean, modern design. Focused on user-friendly, mobile optimization, and detailed content presentation to ensure a smooth and accessible experience.",
    images: ["/WProj1.jpg", "/WProj2.jpg", "/WProj3.jpg", "/WProj4.jpg"],
  },
];

// Main Experience section component
export default function ExperienceSection() {
  // State to track current image index per experience (for slideshow)
  const [activeIndexes, setActiveIndexes] = useState(
    experiences.map(() => 0) // Start each experience with index 0
  );

  // Automatically change image every 4 seconds (slideshow effect)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndexes((prevIndexes) =>
        prevIndexes.map(
          (index, i) => (index + 1) % experiences[i].images.length // Loop back to 0 after last image
        )
      );
    }, 4000);
    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  return (
    <section id="experience" className="max-w-6xl mx-auto py-20 px-6">
      {/* Section Title */}
      <motion.h2
        className="text-3xl font-bold text-indigo-400 mb-16 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        Experience
      </motion.h2>

      {/* Experience Card List */}
      <div className="space-y-20 max-w-4xl mx-auto">
        {experiences.map(({ title, company, date, description, images }, index) => {
          const isEven = index % 2 === 0; // Alternate layout direction
          const activeImage = images[activeIndexes[index]]; // Get current image

          // Define entry animation direction
          const slideInVariants = {
            hidden: { opacity: 0, x: isEven ? -100 : 100 },
            show: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          };

          // React Spring scaling for text box on hover
          const [springStyle, api] = useSpring(() => ({
            scale: 1,
            config: { tension: 220, friction: 12 },
          }));

          return (
            <motion.div
              key={title + company}
              className={`flex flex-col md:flex-row items-stretch gap-8 ${
                !isEven ? "md:flex-row-reverse" : ""
              }`}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              variants={slideInVariants}
            >
              {/* Left/Right: Image Section */}
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={1000}
                transitionSpeed={1000}
                gyroscope={true}
                className="w-full md:w-1/2 h-[300px]"
              >
                <div className="relative w-full h-full overflow-hidden rounded-lg group hover:shadow-2xl hover:border-2 hover:border-[#6366f1] transition-all duration-300 ease-in-out">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImage}
                      src={activeImage}
                      alt={title}
                      className="object-cover w-full h-full absolute top-0 left-0 rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1 }}
                      draggable="false"
                    />
                  </AnimatePresence>
                </div>
              </Tilt>

              {/* Right/Left: Text Section */}
              <animated.div
                onMouseEnter={() => api.start({ scale: 0.97 })} // Shrink a bit on hover
                onMouseLeave={() => api.start({ scale: 1 })} // Reset scale
                style={springStyle}
                className="w-full md:w-1/2 h-[300px] overflow-auto bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-6 rounded-lg shadow-md transition-transform"
              >
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                <p className="text-indigo-500 dark:text-indigo-400 font-medium mb-1">
                  {company}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{date}</p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {description}
                </p>
              </animated.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
