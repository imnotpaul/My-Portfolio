// Import necessary React hooks and components
import { useState } from "react";

// Import FontAwesome icons (brands and solid icons)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGithub,
  faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

// Import Framer Motion for animation
import { motion } from "framer-motion";

// Import custom loader overlay component
import LoaderOverlay from "./LoaderOverlay"; // Make sure path is correct

// Footer component definition
export default function Footer() {
  // State to control whether the loader is shown or not
  const [showLoader, setShowLoader] = useState(false);

  // Function to trigger loader and redirect to #home after delay
  const handleLogoClick = () => {
    setShowLoader(true); // Show loader
    setTimeout(() => {
      setShowLoader(false); // Hide loader after 2.5 seconds
      // window.location.hash = "#home"; // Navigate to Home section
    }, 2500);
  };

  return (
    <>
      {/* LoaderOverlay component shows full-screen loader when showLoader is true */}
      <LoaderOverlay show={showLoader} />

      {/* Footer section with fade-in animation using Framer Motion */}
      <motion.footer
        className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-400 text-center py-10 px-4 mt-16"
        initial={{ opacity: 0 }} // Animation start: invisible
        whileInView={{ opacity: 1 }} // Animate to visible when in view
        viewport={{ once: false }} // Animate again if re-enters viewport
        transition={{ duration: 0.8 }} // Animation duration
      >
        {/* Top container with logo and navigation links */}
        <div className="flex flex-col items-center mb-6">
          {/* Clickable logo that triggers loader animation and scrolls to #home */}
          <div
            onClick={handleLogoClick}
            className="cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            {/* Logo image */}
            <img
              src="/Jp1.png"
              alt="Logo"
              className="h-16 w-auto object-contain mb-3"
            />
          </div>

          {/* Internal navigation links to various page sections */}
          <div className="flex space-x-4 text-sm font-medium text-gray-700 dark:text-gray-300">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#projects" className="hover:underline">Projects</a>
          </div>
        </div>

        {/* Social media icon links */}
        <div className="flex justify-center space-x-4 mb-4">
          {/* GitHub */}
          <a href="https://github.com/imnotpaul" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition hover:scale-110"
            />
          </a>
          {/* Facebook */}
          <a href="https://www.facebook.com/johnpaul.jadielitrero/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-indigo-400 transition hover:scale-110"
            />
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/itszmepaull/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-gray-900 dark:text-white hover:text-pink-600 dark:hover:text-pink-400 transition hover:scale-110"
            />
          </a>
          {/* Twitter/X */}
          <a href="https://x.com/itszmepaul/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-gray-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 transition hover:scale-110"
            />
          </a>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/john-paul-litrero-b0b62a36a/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-gray-900 dark:text-white hover:text-[#0A66C2] dark:hover:text-[#1E8FFB] transition hover:scale-110"
            />
          </a>
        </div>

        {/* Contact information */}
        <div className="mb-4 text-sm text-gray-700 dark:text-gray-300 space-y-2">
          {/* Email */}
          <div className="flex justify-center items-center space-x-2">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>johnpaullitrero5@gmail.com</span>
          </div>
          {/* Phone */}
          <div className="flex justify-center items-center space-x-2">
            <FontAwesomeIcon icon={faPhone} />
            <span>+63 999 151 9865</span>
          </div>
        </div>

        {/* Divider line */}
        <hr className="border-t border-gray-400 dark:border-gray-400 my-3 w-1/4 mx-auto" />

        {/* Copyright */}
        <p className="text-sm text-black dark:text-white">
          &copy; {new Date().getFullYear()} John Paul Jadie Litrero. All Rights Reserved.
        </p>
      </motion.footer>
    </>
  );
}
