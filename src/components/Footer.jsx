// Importing FontAwesomeIcon component to use icons from Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Importing specific brand icons from Font Awesome's brand set
import {
  faFacebookF,
  faInstagram,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

// Importing 'motion' from framer-motion to add animation effects
import { motion } from "framer-motion";

// Functional component named Footer
export default function Footer() {
  return (
    // Animated <footer> using Framer Motion
    <motion.footer
      className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-400 text-center py-6 mt-16"
      // Footer background and text styling for both light and dark modes, center-aligned text, padding, and top margin

      initial={{ opacity: 0 }} // Footer starts as invisible
      whileInView={{ opacity: 1 }} // Fades in when it comes into view
      viewport={{ once: false }} // Animation can happen multiple times (not just once)
      transition={{ duration: 0.8 }} // Duration of fade-in animation
    >

      {/* Social media icons container */}
      <div className="flex justify-center space-x-6 mb-2">
        {/* GitHub link */}
        <a
          href="https://github.com/imnotpaul/" // GitHub profile URL
          target="_blank" // Opens link in a new tab
          rel="noopener noreferrer" // Security best practice
        >
          <FontAwesomeIcon
            icon={faGithub} // GitHub icon
            className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition"
            // Sets icon color with hover and dark mode variations
          />
        </a>

        {/* Facebook link */}
        <a
          href="https://www.facebook.com/johnpaul.jadielitrero/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebookF}
            className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-indigo-400 transition"
          />
        </a>

        {/* Instagram link */}
        <a
          href="https://www.instagram.com/itszmepaull/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-gray-900 dark:text-white hover:text-pink-600 dark:hover:text-pink-400 transition"
          />
        </a>

        {/* Twitter (X) link */}
        <a
          href="https://x.com/itszmepaul/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-gray-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 transition"
          />
        </a>
      </div>

      {/* Copyright text */}
      <p>
        &copy; {new Date().getFullYear()} John Paul Jadie Litrero. All Rights Reserved.
        {/* Dynamically shows the current year */}
      </p>
    </motion.footer>
  );
}
