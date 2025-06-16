// Importing necessary libraries
import React from "react";                    // Core React functionality
import { motion } from "framer-motion";       // Framer Motion for animations

// =====================
// Define Web Development Skills
// =====================
const webDevSkills = [
  // Each skill object has a name, proficiency level, and gradient color
  { name: "Wordpress", level: 80, color: "from-orange-400 to-orange-600" },
  { name: "HTML", level: 75, color: "from-cyan-400 to-cyan-600" },
  { name: "CSS", level: 75, color: "from-blue-400 to-blue-600" },
  { name: "MySQL", level: 70, color: "from-emerald-500 to-emerald-700" },
  { name: "Php", level: 70, color: "from-gray-400 to-gray-600" },
  { name: "JavaScript", level: 65, color: "from-yellow-300 to-yellow-500" },
  { name: "C++", level: 60, color: "from-red-400 to-red-600" },
  { name: "Java", level: 50, color: "from-purple-400 to-purple-600" },
];

// =====================
// Define IT Specialization Skills
// =====================
const itSkills = [
  { name: "System Utilities & Tools", level: 80, color: "from-purple-400 to-purple-600" },
  { name: "Technical Support / IT Helpdesk", level: 75, color: "from-cyan-400 to-cyan-600" },
  { name: "Hardware & Infrastructure", level: 70, color: "from-red-400 to-red-600" },
  { name: "Networking", level: 65, color: "from-indigo-400 to-indigo-600" },  
];

// =====================
// Main Functional Component
// =====================
export default function SkillsSection() {
  return (
    // Outer section wrapper with max width and padding
    <section id="skills" className="max-w-6xl mx-auto px-4 py-16 mt-12">

      {/* Section Title */}
      <h2 className="text-3xl font-semibold mb-10 text-indigo-400 text-center">
        Technical Skills
      </h2>

      {/* Create two columns for Web Dev and IT skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* ========== Web Development Skills Column ========== */}
        <div>
          {/* Subheading for Web Development */}
      <h3 className="text-xl font-semibold text-black dark:text-white mb-6 border-b border-indigo-600 pb-2">
        Web Development
      </h3>

          {/* Container for each skill card */}
          <div className="space-y-4">
            {/* Loop through webDevSkills array */}
            {webDevSkills.map(({ name, level, color }) => (
              // Skill card with background, shadow, and hover effect
              <div key={name} className="bg-gray-800/60 dark:bg-white/5 backdrop-blur-md p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                
                {/* Skill title and percentage */}
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-white">{name}</span>
                  <span className="text-xs text-indigo-300">{level}%</span>
                </div>

                {/* Progress bar background */}
                <div className="w-full h-3 bg-gray-700 rounded">
                  {/* Animated bar using Framer Motion */}
                  <motion.div
                    className={`h-3 rounded bg-gradient-to-r ${color}`} // gradient bar color
                    initial={{ width: 0 }}                                // animation starts at 0% width
                    whileInView={{ width: `${level}%` }}                 // animate to actual skill level
                    transition={{ duration: 1, ease: "easeInOut" }}      // animation effect
                    viewport={{ once: false, amount: 0.5 }}              // trigger animation when 50% in view
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========== IT Specialization Skills Column ========== */}
        <div>
          {/* Subheading for IT Skills */}
          <h3 className="text-xl font-semibold text-black dark:text-white mb-6 border-b border-indigo-600 pb-2">
            IT Specialization
          </h3>

          {/* Container for each IT skill card */}
          <div className="space-y-4">
            {/* Loop through itSkills array */}
            {itSkills.map(({ name, level, color }) => (
              // Skill card styling same as web dev
              <div key={name} className="bg-gray-800/60 dark:bg-white/5 backdrop-blur-md p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                
                {/* Skill name and percentage */}
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-white">{name}</span>
                  <span className="text-xs text-indigo-300">{level}%</span>
                </div>

                {/* Progress bar container */}
                <div className="w-full h-3 bg-gray-700 rounded">
                  {/* Animated progress bar */}
                  <motion.div
                    className={`h-3 rounded bg-gradient-to-r ${color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    viewport={{ once: false, amount: 0.5 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
