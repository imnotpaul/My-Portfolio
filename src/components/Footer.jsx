// Importing the FontAwesomeIcon component to display icons from Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Importing specific brand icons from Font Awesome (GitHub, Facebook, etc.)
import {
  faFacebookF,
  faInstagram,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

// Importing motion from framer-motion to animate the footer
import { motion } from "framer-motion";

// Defining and exporting a functional React component called Footer
export default function Footer() {
  return (
    // The <footer> is wrapped with <motion.footer> to animate it using Framer Motion
    <motion.footer
      className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-400 text-center py-10 px-4 mt-16"
      // Initial state: invisible (opacity 0)
      initial={{ opacity: 0 }}
      // When in view: fade in (opacity 1)
      whileInView={{ opacity: 1 }}
      // Keep animating every time it comes into view
      viewport={{ once: false }}
      // Animation duration
      transition={{ duration: 0.8 }}
    >

      {/* Centered logo image */}
      <div className="flex justify-center mb-4">
        <img
          src="/Jp1.png" // Replace this with your actual logo path
          alt="Logo" // Alt text for accessibility
          className="h-16 w-auto object-contain" // Height set to 4rem; maintain image ratio
        />
      </div>

      {/* Social media icons row */}
      <div className="flex justify-center space-x-6 mb-4">
        
        {/* GitHub link icon */}
        <a href="https://github.com/imnotpaul" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faGithub} // GitHub icon
            className="text-lg text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition" // Color and hover style
          />
        </a>

        {/* Facebook link icon */}
        <a href="https://www.facebook.com/johnpaul.jadielitrero/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faFacebookF} // Facebook icon
            className="text-lg text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-indigo-400 transition"
          />
        </a>

        {/* Instagram link icon */}
        <a href="https://www.instagram.com/itszmepaull/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faInstagram} // Instagram icon
            className="text-lg text-gray-900 dark:text-white hover:text-pink-600 dark:hover:text-pink-400 transition"
          />
        </a>

        {/* Twitter (X) link icon */}
        <a href="https://x.com/itszmepaul/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faTwitter} // Twitter icon
            className="text-lg text-gray-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 transition"
          />
        </a>
      </div>

      {/* Copyright notice */}
      <p className="text-sm">
        &copy; {new Date().getFullYear()} John Paul Jadie Litrero. All Rights Reserved.
        {/* {new Date().getFullYear()} dynamically shows the current year */}
      </p>

    </motion.footer> // End of footer
  );
}
