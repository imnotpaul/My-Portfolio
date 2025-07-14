// ================================
// Importing necessary libraries
// ================================
import React from "react"; // Import React core library
import { motion } from "framer-motion"; // Import motion component from Framer Motion for animation

// Import various icons from react-icons
import {
  FaWordpress,       // WordPress icon
  FaHtml5,           // HTML5 icon
  FaCss3Alt,         // CSS3 icon
  FaPhp,             // PHP icon
  FaJava,            // Java icon
  FaNetworkWired,    // Networking icon
  FaTools,           // Tools/System Utilities icon
  FaDesktop,         // IT Support/Desktop icon
  FaMicrochip        // Hardware icon
} from "react-icons/fa";

import {
  SiMysql,           // MySQL icon
  SiJavascript,      // JavaScript icon
  SiCplusplus        // C++ icon
} from "react-icons/si";

// ================================
// Web Development Skills Array
// Each object holds name, level, color, and icon
// ================================
const webDevSkills = [
  {
    name: "Wordpress",
    level: 80,
    color: "from-[#21759B] to-[#21759B]", // Color gradient (same start and end)
    icon: <FaWordpress color="#21759B" size={20} />
  },
  {
    name: "HTML",
    level: 75,
    color: "from-[#E34F26] to-[#E34F26]",
    icon: <FaHtml5 color="#E34F26" size={20} />
  },
  {
    name: "CSS",
    level: 75,
    color: "from-[#1572B6] to-[#1572B6]",
    icon: <FaCss3Alt color="#1572B6" size={20} />
  },
  {
    name: "MySQL",
    level: 70,
    color: "from-[#4479A1] to-[#4479A1]",
    icon: <SiMysql color="#4479A1" size={20} />
  },
  {
    name: "Php",
    level: 70,
    color: "from-[#777BB4] to-[#777BB4]",
    icon: <FaPhp color="#777BB4" size={20} />
  },
  {
    name: "JavaScript",
    level: 65,
    color: "from-[#F7DF1E] to-[#F7DF1E]",
    icon: <SiJavascript color="#F7DF1E" size={20} />
  },
  {
    name: "Java",
    level: 60,
    color: "from-[#007396] to-[#007396]",
    icon: <FaJava color="#007396" size={20} />
  },
  {
    name: "C++",
    level: 55,
    color: "from-[#00599C] to-[#00599C]",
    icon: <SiCplusplus color="#00599C" size={20} />
  },
];

// ================================
// IT Specialization Skills Array
// Same structure as webDevSkills
// ================================
const itSkills = [
  {
    name: "System Utilities & Tools",
    level: 80,
    color: "from-[#6f42c1] to-[#6f42c1]",
    icon: <FaTools color="#6f42c1" size={20} />
  },
  {
    name: "Technical Support / IT Helpdesk",
    level: 75,
    color: "from-[#17a2b8] to-[#17a2b8]",
    icon: <FaDesktop color="#17a2b8" size={20} />
  },
  {
    name: "Hardware & Infrastructure",
    level: 70,
    color: "from-[#dc3545] to-[#dc3545]",
    icon: <FaMicrochip color="#dc3545" size={20} />
  },
  {
    name: "Networking",
    level: 65,
    color: "from-[#6610f2] to-[#6610f2]",
    icon: <FaNetworkWired color="#6610f2" size={20} />
  },
];

// ================================
// Functional Component: SkillsSection
// Renders two categories of skills: Web Dev and IT
// ================================
export default function SkillsSection() {
  return (
    // Entire section container
    <section
      id="skills" // Used for anchor navigation (e.g., #skills)
      className="max-w-6xl mx-auto px-4 py-16 mt-12" // Width + spacing
    >
      {/* Section title */}
      <h2 className="text-3xl font-bold mb-10 text-indigo-400 text-center">
        Technical Skills
      </h2>

      {/* Grid layout: single column on small screens, two columns on medium+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Column: Web Development Skills */}
        <div>
          {/* Subheading */}
          <h3 className="text-xl font-semibold text-black dark:text-white mb-6 border-b border-indigo-600 pb-2">
            Web Development
          </h3>

          {/* List of web dev skill bars */}
          <div className="space-y-4">
            {/* Loop through webDevSkills array */}
            {webDevSkills.map(({ name, level, color, icon }) => (
              <div
                key={name} // Key for React rendering
                className="bg-gray-400 dark:bg-white/5 backdrop-blur-md p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                {/* Skill name with icon and percentage */}
                <div className="flex justify-between mb-1 items-center">
                  <span className="text-sm text-white flex items-center gap-2">
                    {icon} {name}
                  </span>
                  <span className="text-xs text-white">{level}%</span>
                </div>

                {/* Progress bar background */}
                <div className="w-full h-3 bg-gray-700 rounded">
                  {/* Progress bar animation */}
                  <motion.div
                    className={`h-3 rounded bg-gradient-to-r ${color}`} // Dynamic gradient color
                    initial={{ width: 0 }} // Start from 0% width
                    whileInView={{ width: `${level}%` }} // Animate to actual level
                    transition={{ duration: 1, ease: "easeInOut" }} // Animation config
                    viewport={{ once: false, amount: 0.5 }} // Animate when 50% visible
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: IT Specialization Skills */}
        <div>
          {/* Subheading */}
          <h3 className="text-xl font-semibold text-black dark:text-white mb-6 border-b border-indigo-600 pb-2">
            IT Specialization
          </h3>

          {/* List of IT skill bars */}
          <div className="space-y-4">
            {/* Loop through itSkills array */}
            {itSkills.map(({ name, level, color, icon }) => (
              <div
                key={name}
                className="bg-gray-400 dark:bg-white/5 backdrop-blur-md p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                {/* Skill name and percentage */}
                <div className="flex justify-between mb-1 items-center">
                  <span className="text-sm text-white flex items-center gap-2">
                    {icon} {name}
                  </span>
                  <span className="text-xs text-white">{level}%</span>
                </div>

                {/* Background of the progress bar */}
                <div className="w-full h-3 bg-gray-700 rounded">
                  {/* Animated progress bar using Framer Motion */}
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
