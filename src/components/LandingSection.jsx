// Import animation wrapper from framer-motion
import { motion } from "framer-motion";

// Import FontAwesome icon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Import specific social media icons
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// Import the typing animation component
import { TypeAnimation } from "react-type-animation";

// Define and export the functional component
export default function LandingSection() {
  // Animation settings for the container - will animate its children with delay
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.3 },
    },
  };

  // Animation for each item inside the container
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },  // Start lower and invisible
    show: { y: 0, opacity: 1 },     // Animate to normal position and visible
  };

  return (
    // Section representing the landing/home area of the page
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      {/* Profile image with entrance animation */}
      <motion.div
        className="rounded-full border-4 border-indigo-400 shadow-lg overflow-hidden w-40 h-40 mb-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/Profile1.jpeg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Animated container for the rest of the text and buttons */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-6 w-full max-w-xl"
      >
        {/* Name with type animation */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
        >
          Hello,{" "}
          <TypeAnimation
            sequence={["I'm John Paul.", 1500, "", 500]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-indigo-400"
          />
        </motion.h1>

        {/* Subtitle description */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-600 dark:text-gray-400"
        >
          IT Support Specialist & Web Developer
        </motion.p>

        {/* Social Media Icons */}
        <motion.div
          variants={itemVariants}
          className="flex gap-8 justify-center mt-4"
        >
          {/* GitHub Link */}
          <a
            href="https://github.com/imnotpaul/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-2xl text-gray-900 dark:text-white hover:text-indigo-400 dark:hover:text-indigo-400 transition"
            />
          </a>

          {/* Facebook Link */}
          <a
            href="https://www.facebook.com/johnpaul.jadielitrero/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebookF}
              className="text-2xl text-gray-900 dark:text-white hover:text-indigo-400 dark:hover:text-indigo-400 transition"
            />
          </a>

          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/itszmepaull/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-2xl text-gray-900 dark:text-white hover:text-indigo-400 dark:hover:text-indigo-400 transition"
            />
          </a>
        </motion.div>

        {/* Buttons: Download CV & Hire Me */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-6"
        >
          {/* Download CV Button */}
          <motion.a
            href="/cv.pdf"
            download
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 transition-transform font-semibold"
          >
            Download CV
          </motion.a>

          {/* Hire Me Button scrolls to contact section */}
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 rounded-full border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-600 hover:text-white transition-transform font-semibold"
          >
            My Projects
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
