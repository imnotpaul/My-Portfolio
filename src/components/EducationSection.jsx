// Importing 'motion' from the framer-motion library for animations
import { motion } from "framer-motion";
import { useState } from "react";

// Education data
const educations = [
  {
    degree: "Bachelor of Science in Information Technology",
    school: "Kurios Christian Colleges Foundation, Inc.",
    date: "2021 - 2025",
    certificate: "/certificates/bsit.png",
  },
  {
    degree: "Academic Track Humanities and Social Science",
    school: "Saint Joseph Parochial School of Cavite",
    date: "2019 - 2021",
    certificate: "/K-12Certificate.jpg",
  },
];

// Zoom In + Fade animation variant
const zoomFadeVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function EducationSection() {
  const [visibleCertIndex, setVisibleCertIndex] = useState(null);
  const toggleCertificate = (index) =>
    setVisibleCertIndex(visibleCertIndex === index ? null : index);

  return (
    <section id="education" className="max-w-6xl mx-auto py-16 px-6">
      {/* Section heading */}
      <motion.h2
        className="text-3xl font-bold text-indigo-400 mb-10 text-center"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>

      {/* Education Cards */}
      <div className="space-y-8 max-w-4xl mx-auto">
        {educations.map(({ degree, school, date, certificate }, index) => (
          <motion.div
            key={degree + school}
            variants={zoomFadeVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md text-gray-800 dark:text-gray-100"
          >
            <h3 className="text-xl font-semibold mb-1">{degree}</h3>
            <p className="text-indigo-500 dark:text-indigo-400 font-medium">{school}</p>
            <p className="text-gray-600 dark:text-gray-400">{date}</p>

            <button
              onClick={() => toggleCertificate(index)}
              className="mt-4 text-sm text-white bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded transition duration-300"
            >
              {visibleCertIndex === index ? "Hide Certificate" : "View Certificate"}
            </button>

            {visibleCertIndex === index && (
              <motion.div
                className="mt-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={certificate}
                  alt={`${degree} certificate`}
                  className="rounded shadow-lg w-full max-w-xl mx-auto border"
                />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
