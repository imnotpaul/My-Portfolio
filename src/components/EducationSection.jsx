// Importing 'motion' from the framer-motion library to apply animations
import { motion } from "framer-motion";

// Importing 'useState' hook from React to manage local component state
import { useState } from "react";

// Array of education entries, each with degree, school, dates, and certificate image
const educations = [
  {
    degree: "Bachelor of Science in Information Technology",
    school: "Kurios Christian Colleges Foundation, Inc.",
    date: "2021 - 2025",
    certificate: "/certificates/bsit.png", // Path to certificate image
  },
  {
    degree: "Academic Track Humanities and Social Science",
    school: "Saint Joseph Parochial School of Cavite",
    date: "2019 - 2021",
    certificate: "/K-12Certificate.jpg",
  },
];

// Animation variants for card entry (zoom in + fade)
const zoomFadeVariant = {
  hidden: { opacity: 0, scale: 0.9 }, // Start slightly smaller and invisible
  visible: {
    opacity: 1,
    scale: 1, // Full size and fully visible
    transition: {
      duration: 0.6, // Takes 0.6 seconds to animate
      ease: "easeOut", // Smooth animation effect
    },
  },
};

// The main functional component for the Education section
export default function EducationSection() {
  // State to track which certificate is currently being shown (null means none)
  const [visibleCertIndex, setVisibleCertIndex] = useState(null);

  // Function to toggle showing/hiding a certificate for a specific education entry
  const toggleCertificate = (index) =>
    setVisibleCertIndex(visibleCertIndex === index ? null : index);

  // The actual section being rendered
  return (
    <section id="education" className="max-w-6xl mx-auto py-16 px-6">
      {/* Section title with motion fade and slide-up effect */}
      <motion.h2
        className="text-3xl font-bold text-indigo-400 mb-10 text-center"
        initial={{ y: 50, opacity: 0 }} // Start below and invisible
        whileInView={{ y: 0, opacity: 1 }} // Slide up and appear when in view
        viewport={{ once: false }} // Allow animation to re-trigger on scroll
        transition={{ duration: 0.6 }} // Duration of animation
      >
        Education
      </motion.h2>

      {/* Container for all education cards */}
      <div className="space-y-8 max-w-4xl mx-auto">
        {/* Loop through each education item and render a card */}
        {educations.map(({ degree, school, date, certificate }, index) => (
          <motion.div
            key={degree + school} // Unique key for each card
            variants={zoomFadeVariant} // Animation variants
            initial="hidden" // Start in hidden state
            whileInView="visible" // Animate to visible when in viewport
            viewport={{ once: false, amount: 0.3 }} // Trigger animation when 30% visible
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md text-gray-800 dark:text-gray-100"
          >
            {/* Degree title */}
            <h3 className="text-xl font-semibold mb-1">{degree}</h3>
            
            {/* School name */}
            <p className="text-indigo-500 dark:text-indigo-400 font-medium">{school}</p>
            
            {/* Date range */}
            <p className="text-gray-600 dark:text-gray-400">{date}</p>

            {/* Button to toggle viewing the certificate image */}
            <button
              onClick={() => toggleCertificate(index)} // Toggle logic
              className="mt-4 text-sm text-white bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded transition duration-300"
            >
              {/* Change button text based on state */}
              {visibleCertIndex === index ? "Hide Certificate" : "View Certificate"}
            </button>

            {/* Conditional rendering: only show if current index is active */}
            {visibleCertIndex === index && (
              <motion.div
                className="mt-4"
                initial={{ opacity: 0, scale: 0.9 }} // Start hidden
                animate={{ opacity: 1, scale: 1 }} // Animate in
                transition={{ duration: 0.5 }} // Duration of animation
              >
                {/* Certificate image display */}
                <img
                  src={certificate} // Image source from data
                  alt={`${degree} certificate`} // Accessible image alt text
                  className="rounded shadow-lg w-full max-w-xl mx-auto border" // Styling the image
                />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
