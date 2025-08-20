// Import animation wrapper from Framer Motion
import { motion } from "framer-motion";

// Import FontAwesomeIcon to display vector icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Import specific brand icons for social media
import { faFacebookF, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

// Import the typing effect component from react-type-animation
import { TypeAnimation } from "react-type-animation";

// Define and export the functional React component
export default function LandingSection() {
  // Define animation settings for the entire container (parent)
  const containerVariants = {
    hidden: { opacity: 0 }, // Initial state: hidden
    show: {
      opacity: 1, // Fade in
      transition: {
        staggerChildren: 0.3, // Delay each child animation
        delayChildren: 0.3,   // Wait before starting children animations
      },
    },
  };

  // Define animation for each item inside the container
  const itemVariants = {
    hidden: { y: 30, opacity: 0 }, // Start slightly below with 0 opacity
    show: { y: 0, opacity: 1 },    // Animate to normal position and full opacity
  };

  return (
    // Section element that acts as the landing page
    <section
      id="home" // Anchor ID used for navigation
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      {/* Profile Image with entrance zoom animation */}
      <motion.div
        className="rounded-full border-4 border-indigo-400 shadow-lg overflow-hidden w-40 h-40 mb-8"
        initial={{ scale: 0 }}             // Start with scale 0 (invisible)
        animate={{ scale: 1 }}             // Animate to full size
        transition={{ duration: 0.8 }}     // Duration of the zoom
      >
        <img
          src="/Profile 5.png"             // Profile picture path
          alt="Profile"                    // Accessibility alt text
          className="w-full h-full object-flex" // Fill container; adjust image display
          draggable="false" // Disable dragging the image in browser
        />
      </motion.div>

      {/* Animated container for name, subtitle, icons, and buttons */}
      <motion.div
        variants={containerVariants}        // Use parent animation config
        initial="hidden"                    // Start hidden
        animate="show"                      // Animate into view
        className="space-y-6 w-full max-w-xl"
      >
        {/* Name with typing effect animation */}
        <motion.h1
          variants={itemVariants}           // Child animation config
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
        >
          Hello,{" "}
          <TypeAnimation
            sequence={["I'm John Paul.", 1500, "", 500]} // Text to show & loop
            wrapper="span"
            speed={50}               // Typing speed
            repeat={Infinity}        // Loop forever
            className="text-indigo-400"
          />
        </motion.h1>

        {/* Subtitle under the name */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-black dark:text-white"
        >
          IT Support Specialist & Web Developer
        </motion.p>

        {/* Social media icon row */}
        <motion.div
          variants={itemVariants}
          className="flex gap-8 justify-center mt-4"
        >
          {/* GitHub Icon */}
          <a
            href="https://github.com/imnotpaul/" // GitHub profile link
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-2xl text-gray-900 dark:text-white hover:text-indigo-400 dark:hover:text-indigo-400 transition transform hover:scale-110"
            />
          </a>

          {/* Facebook Icon */}
          <a
            href="https://www.facebook.com/johnpaul.jadielitrero/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebookF}
              className="text-2xl text-gray-900 dark:text-white hover:text-indigo-400 dark:hover:text-indigo-400 transition transform hover:scale-110"
            />
          </a>

          {/* Linkedin Icon */}
          <a
            href="https://www.linkedin.com/in/john-paul-litrero-b0b62a36a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-2xl text-gray-900 dark:text-white hover:text-indigo-400 dark:hover:text-indigo-400 transition transform hover:scale-110"
            />
          </a>
        </motion.div>

        {/* Call-to-action buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-6"
        >
          {/* Download CV button */}
          <motion.a
            href="/cv.pdf"               // File to download
            download                    // Enables browser download
            whileHover={{ scale: 1.05 }} // Hover effect
            className="px-8 py-3 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 transition-transform font-semibold"
          >
            Download CV
          </motion.a>

          {/* Link to projects section */}
          <motion.a
            href="#projects"             // Scroll to #projects section
            whileHover={{ scale: 1.05 }} // Hover scale
            className="px-8 py-3 rounded-full border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-600 hover:text-white transition-transform font-semibold"
          >
            My Projects
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
