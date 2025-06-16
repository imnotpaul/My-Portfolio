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
      id="home"  // Anchor for navigation
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 bg-white dark:bg-[#05161A] transition-colors duration-300"
      // Full viewport height, center-aligned content, responsive padding, background changes in dark mode
    >
      {/* Profile image with entrance animation */}
      <motion.div
        className="rounded-full border-4 border-[#0F969C] shadow-lg overflow-hidden w-40 h-40 mb-6"
        // Circular profile container with border and shadow
        initial={{ scale: 0 }}  // Start scaled down
        animate={{ scale: 1 }}  // Animate to full scale
        transition={{ duration: 0.8 }}  // Duration of the scale animation
      >
        <img
          src="/Profile1.jpeg"  // Path to profile image
          alt="Profile"         // Alt text for accessibility
          className="w-full h-full object-cover"  // Image styling to fully fill the circle
        />
      </motion.div>

      {/* Animated container for the rest of the text and buttons */}
      <motion.div
        variants={containerVariants}  // Use the defined container animation
        initial="hidden"
        animate="show"
        className="space-y-4"  // Vertical spacing between elements
      >
        {/* Name with type animation */}
        <motion.h1
          variants={itemVariants}  // Apply item animation
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
        >
          Hello,{" "}
          <TypeAnimation
            sequence={["I'm John Paul.", 1500, "", 500]}  // Typing and deleting animation
            wrapper="span"
            speed={50}
            repeat={Infinity}  // Loops forever
            className="text-[#0F969C]"  // Text color
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
          className="flex gap-6 justify-center"
        >
          {/* GitHub Link */}
          <a
            href="https://github.com/imnotpaul/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-xl text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-[#0F969C] transition"
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
              className="text-xl text-gray-900 dark:text-white hover:text-[#0F969C] dark:hover:text-[#0F969C] transition"
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
              className="text-xl text-gray-900 dark:text-white hover:text-[#0F969C] dark:hover:text-[#0F969C] transition"
            />
          </a>
        </motion.div>

        {/* Buttons: Download CV & Hire Me */}
        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center"
        >
          {/* Download CV Button */}
          <motion.a
            href="/cv.pdf"  // Link to your CV file
            download  // Trigger download when clicked
            whileHover={{ scale: 1.05 }}  // Slight scale up on hover
            className="px-8 py-3 rounded-full bg-[#0F969C] text-white hover:opacity-90 transition-transform font-semibold"
          >
            Download CV
          </motion.a>

          {/* Hire Me Button scrolls to contact section */}
          <motion.a
            href="#projects"  // Scrolls to contact section
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 rounded-full border-2 border-[#0F969C] text-[#0F969C] hover:bg-[#0F969C] hover:text-white transition-transform font-semibold"
          >
            My Projects
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
