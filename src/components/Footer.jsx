// Importing FontAwesomeIcon for rendering icons from the Font Awesome library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Importing brand icons for GitHub, Facebook, Instagram, and Twitter (X)
import {
  faFacebookF,
  faInstagram,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

// Importing solid icons for email and phone
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

// Importing Framer Motion for animation effects
import { motion } from "framer-motion";

// Footer component definition
export default function Footer() {
  return (
    // Motion-enhanced <footer> with fade-in animation
    <motion.footer
      // Background and text color setup for both light and dark mode
      className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-400 text-center py-10 px-4 mt-16"
      // Start with opacity 0 (invisible)
      initial={{ opacity: 0 }}
      // When in view, fade in to full opacity
      whileInView={{ opacity: 1 }}
      // Trigger animation every time it scrolls into view
      viewport={{ once: false }}
      // Smooth transition for fade-in
      transition={{ duration: 0.8 }}
    >

      {/* Container for logo and quick links */}
      <div className="flex flex-col items-center mb-6">
        {/* School or brand logo image */}
        <img
          src="/Jp1.png" // Path to logo image
          alt="Logo" // Alt text for accessibility
          className="h-16 w-auto object-contain mb-3" // Styling: fixed height, keep aspect ratio, bottom margin
        />

        {/* Quick navigation links (Home, About, etc.) */}
        <div className="flex space-x-4 text-sm font-medium text-gray-700 dark:text-gray-300">
          <a href="#home" className="hover:underline">Home</a>      {/* Link to Home section */}
          <a href="#about" className="hover:underline">About</a>    {/* Link to About section */}
          <a href="#skills" className="hover:underline">Skills</a>  {/* Link to Skills section */}
          <a href="#projects" className="hover:underline">Projects</a> {/* Link to Projects section */}
        </div>
      </div>

      {/* Social media icon buttons */}
      <div className="flex justify-center space-x-4 mb-4">
        {/* GitHub Icon */}
        <a href="https://github.com/imnotpaul" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faGithub}
            className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition hover:scale-110"
          />
        </a>

        {/* Facebook Icon */}
        <a href="https://www.facebook.com/johnpaul.jadielitrero/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faFacebookF}
            className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-indigo-400 transition hover:scale-110"
          />
        </a>

        {/* Instagram Icon */}
        <a href="https://www.instagram.com/itszmepaull/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-gray-900 dark:text-white hover:text-pink-600 dark:hover:text-pink-400 transition hover:scale-110"
          />
        </a>

        {/* Twitter/X Icon */}
        <a href="https://x.com/itszmepaul/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-gray-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 transition hover:scale-110"
          />
        </a>
      </div>

      {/* Contact information: Email and phone */}
      <div className="mb-4 text-sm text-gray-700 dark:text-gray-300 space-y-2">
        {/* Email row with envelope icon */}
        <div className="flex justify-center items-center space-x-2">
          <FontAwesomeIcon icon={faEnvelope} />               {/* Email icon */}
          <span>johnpaullitrero5@gmail.com</span>             {/* Email text (not a link) */}
        </div>

        {/* Phone row with phone icon */}
        <div className="flex justify-center items-center space-x-2">
          <FontAwesomeIcon icon={faPhone} />                  {/* Phone icon */}
          <span>+63 999 151 9865</span>                        {/* Phone number text */}
        </div>
      </div>

      {/* Divider line (horizontal rule) */}
      <hr className="border-t border-gray-400 dark:border-gray-400 my-3 w-1/4 mx-auto" />
      {/* border-t = top border only
          dark:border-gray-400 = same line color in dark mode
          w-1/4 = 25% width of container
          mx-auto = center it
      */}

      {/* Copyright notice with year */}
      <p className="text-sm text-black dark:text-white">
        &copy; {new Date().getFullYear()} John Paul Jadie Litrero. All Rights Reserved.
        {/* Automatically shows current year using JavaScript */}
      </p>

    </motion.footer> // End of footer
  );
}
