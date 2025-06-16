// Importing 'motion' from the framer-motion library for animations
import { motion } from "framer-motion";

// Importing 'useState' from React to manage toggle state
import { useState } from "react";

// An array of education data objects with degree, school, and date information
const educations = [
    {
        degree: "Bachelor of Science in Information Technology", // Degree title
        school: "Kurios Christian Colleges Foundation, Inc.",     // Name of the school
        date: "2021 - 2025",                                     // Duration
        certificate: "/certificates/bsit.png",                  // Path to certificate image
    },
    {
        degree: "Academic Track Humanities and Social Science",
        school: "Saint Joseph Parochial School of Cavite",
        date: "2019 - 2021",
        certificate: "/K-12Certificate.jpg",
    },
];

// Main functional component for the Education section
export default function EducationSection() {
    // State to track which certificate is currently visible
    const [visibleCertIndex, setVisibleCertIndex] = useState(null);

    // Toggle function to show/hide certificate
    const toggleCertificate = (index) => {
        // If already visible, hide it; else show the clicked one
        setVisibleCertIndex(visibleCertIndex === index ? null : index);
    };

    return (
        // Section container with padding and max width
        <section
            id="education" // Unique ID for anchor linking
            className="max-w-6xl mx-auto py-16 px-6" // Styling for spacing and alignment
        >
            {/* Animated heading for the section */}
            <motion.h2
                className="text-3xl font-bold text-indigo-400 mb-10 text-center" // Styles for font and layout
                initial={{ y: 50, opacity: 0 }} // Animation starts off-screen and transparent
                whileInView={{ y: 0, opacity: 1 }} // When in view, move into place and fade in
                viewport={{ once: true }} // Animate only the first time it comes into view
            >
                Education
            </motion.h2>

            {/* Animated container for the education cards */}
            <motion.div
                className="space-y-8 max-w-4xl mx-auto" // Stack items with spacing and center them
                initial="hidden" // Initial state before animation
                whileInView="visible" // Trigger animation when in view
                viewport={{ once: true }} // Animate once only
                variants={{
                    visible: { transition: { staggerChildren: 0.3 } }, // Stagger animations of children
                    hidden: {}, // Empty state
                }}
            >
                {/* Mapping through the educations array and rendering each item */}
                {educations.map(({ degree, school, date, certificate }, index) => (
                    // Each card is animated individually
                    <motion.div
                        key={degree + school} // Unique key for React list rendering
                        className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md text-gray-800 dark:text-gray-100" // Card styling
                        variants={{
                            visible: { opacity: 1, y: 0 }, // Fade in and move up when visible
                            hidden: { opacity: 0, y: 20 }, // Start faded and lower
                        }}
                    >
                        {/* Degree title */}
                        <h3 className="text-xl font-semibold mb-1">{degree}</h3>
                        {/* School name with accent color */}
                        <p className="text-indigo-500 dark:text-indigo-400 font-medium">{school}</p>
                        {/* Date or duration of study */}
                        <p className="text-gray-600 dark:text-gray-400">{date}</p>

                        {/* Button to toggle certificate view */}
                        <button
                            onClick={() => toggleCertificate(index)} // Toggle visibility for the current index
                            className="mt-4 text-sm text-white bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded transition duration-300" // Styling for button
                        >
                            {visibleCertIndex === index ? "Hide Certificate" : "View Certificate"} {/* Toggle button label */}
                        </button>

                        {/* Conditionally render the certificate if the index matches */}
                        {visibleCertIndex === index && (
                            <motion.div
                                className="mt-4"
                                initial={{ opacity: 0, y: 20 }} // Start hidden and below
                                animate={{ opacity: 1, y: 0 }} // Animate to visible
                                exit={{ opacity: 0, y: 20 }}   // Animate out when removed
                            >
                                {/* Certificate image preview */}
                                <img
                                    src={certificate} // Image source from object
                                    alt={`${degree} certificate`} // Alt text for accessibility
                                    className="rounded shadow-lg w-full max-w-xl mx-auto border" // Image styling
                                />
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
