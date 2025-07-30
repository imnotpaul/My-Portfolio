import React from "react";
import { motion } from "framer-motion";
import {
  FaWordpress, FaHtml5, FaCss3Alt, FaPhp, FaJava,
  FaNetworkWired, FaTools, FaDesktop, FaMicrochip
} from "react-icons/fa";
import { SiMysql, SiJavascript, SiCplusplus } from "react-icons/si";

// Skill data grouped for reusability
const skillGroups = {
  "Web Development": [
    { name: "WordPress", level: 80, color: "#21759B", icon: <FaWordpress /> },
    { name: "HTML", level: 75, color: "#E34F26", icon: <FaHtml5 /> },
    { name: "CSS", level: 75, color: "#1572B6", icon: <FaCss3Alt /> },
    { name: "MySQL", level: 70, color: "#4479A1", icon: <SiMysql /> },
    { name: "PHP", level: 70, color: "#777BB4", icon: <FaPhp /> },
    { name: "JavaScript", level: 65, color: "#F7DF1E", icon: <SiJavascript /> },
    { name: "Java", level: 60, color: "#007396", icon: <FaJava /> },
    { name: "C++", level: 55, color: "#00599C", icon: <SiCplusplus /> },
  ],
  "IT Specialization": [
    { name: "System Utilities", level: 80, color: "#6f42c1", icon: <FaTools /> },
    { name: "IT Helpdesk", level: 75, color: "#17a2b8", icon: <FaDesktop /> },
    { name: "Hardware", level: 70, color: "#dc3545", icon: <FaMicrochip /> },
    { name: "Networking", level: 65, color: "#6610f2", icon: <FaNetworkWired /> },
  ],
};

// Reusable skill bar
const SkillBar = ({ name, level, color, icon }) => (
  <div className="bg-gray-400 dark:bg-white/5 p-4 rounded-xl shadow-md hover:shadow-lg transition">
    <div className="flex justify-between items-center mb-1 text-sm text-white">
      <span className="flex items-center gap-2">{React.cloneElement(icon, { color, size: 20 })} {name}</span>
      <span className="text-xs">{level}%</span>
    </div>
    <div className="w-full h-3 bg-gray-700 rounded">
      <motion.div
        className="h-3 rounded"
        style={{ background: `linear-gradient(to right, ${color}, ${color})` }}
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.5 }}
      />
    </div>
  </div>
);

export default function SkillsSection() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-16 mt-12">
      <h2 className="text-3xl font-bold mb-10 text-indigo-400 text-center">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {Object.entries(skillGroups).map(([groupName, skills]) => (
          <div key={groupName}>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-6 border-b border-indigo-600 pb-2">
              {groupName}
            </h3>
            <div className="space-y-4">
              {skills.map(skill => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
