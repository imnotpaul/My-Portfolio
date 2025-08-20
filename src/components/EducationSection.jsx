// Import the useState hook from React for managing state
import { useState } from "react";

// Import the motion component from Framer Motion for animations
import { motion } from "framer-motion";

// Array of education history data, each entry includes degree, school, dates, and certificate image path
const educations = [
  {
    degree: "Bachelor of Science in Information Technology",
    school: "Kurios Christian Colleges Foundation, Inc.",
    date: "2021 - 2025",
    certificate: "/Certificate 2.jpg", // Path to certificate image
  },
  {
    degree: "Academic Track Humanities and Social Science",
    school: "Saint Joseph Parochial School of Cavite",
    date: "2019 - 2021",
    certificate: "/K-12Certificate.jpg",
  },
];

// Animation variant for zoom-fade effect when cards appear
const zoomFadeVariant = {
  hidden: { opacity: 0, scale: 0.9 }, // Initially hidden and slightly smaller
  visible: {
    opacity: 1,
    scale: 1, // Full size and visible
    transition: { duration: 0.6, ease: "easeOut" }, // Animation timing
  },
};

// Main component function
export default function EducationSection() {
  // State to track which certificate (if any) is visible
  const [visibleCertIndex, setVisibleCertIndex] = useState(null);

  // Toggle function to show/hide certificate when button is clicked
  const toggleCertificate = (index) =>
    setVisibleCertIndex(visibleCertIndex === index ? null : index);

  return (
    // Section container with responsive padding and max width
    <section id="education" className="max-w-4xl mx-auto py-16 px-6">

      {/* Animated section heading */}
      <motion.h2
        className="text-3xl font-bold text-indigo-400 mb-10 text-center"
        initial={{ y: 50, opacity: 0 }} // Start below and transparent
        whileInView={{ y: 0, opacity: 1 }} // Animate up and fade in
        viewport={{ once: false }} // Animation triggers every time it scrolls into view
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>

      {/* Container for all education cards */}
      <div className="space-y-8 max-w-4xl mx-auto">
        {/* Loop through each education record and render it */}
        {educations.map(({ degree, school, date, certificate }, index) => (
          <motion.div
            key={degree + school} // Unique key for React
            variants={zoomFadeVariant} // Apply zoom-fade animation
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }} // Animation triggers when 30% is visible
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md text-gray-800 dark:text-gray-100"
          >
            {/* Degree title */}
            <h3 className="text-xl font-semibold mb-1">{degree}</h3>
            {/* School name styled in indigo */}
            <p className="text-indigo-500 dark:text-indigo-400 font-medium">{school}</p>
            {/* Date range */}
            <p className="text-gray-600 dark:text-gray-400">{date}</p>

            {/* Button to toggle certificate view */}
            <button
              onClick={() => toggleCertificate(index)} // Show or hide certificate
              className="mt-4 text-sm text-white bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded transition transform hover:scale-110 duration-300"
            >
              {/* Button text changes based on visibility */}
              {visibleCertIndex === index ? "Hide Certificate" : "View Certificate"}
            </button>

            {/* Show certificate image if it's the visible one */}
            {visibleCertIndex === index && (
              <motion.div
                className="mt-4"
                initial={{ opacity: 0, scale: 0.9 }} // Start hidden and scaled down
                animate={{ opacity: 1, scale: 1 }} // Animate to visible and normal scale
                transition={{ duration: 0.5 }}
              >
                <img
                  src={certificate} // Image path
                  alt={`${degree} certificate`} // Alt text
                  draggable="false"
                  className="rounded shadow-lg w-full max-w-xl mx-auto border" // Styling
                />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
