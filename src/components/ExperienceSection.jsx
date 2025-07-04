// Import animation tools from Framer Motion
import { motion, AnimatePresence } from "framer-motion";

// Import React hook for managing state and side effects
import { useEffect, useState } from "react";

// ======================
// Experience Data Array
// ======================
const experiences = [
    {
        title: "Web Development Support",
        company: "Laravel & PHP Project",
        date: "March 2024 - April 2024",
        description:
            "Developed a school management system using Laravel & PHP framework with front-end and back-end integration. Implemented student records, user authentication, dynamic routing, and responsive Blade templates for an efficient and user-friendly experience.",
        images: ["/LaravelProj1.jpg", "/LaravelProj2.jpg", "/LaravelProj3.jpg"], // Image slideshow
    },
    {
        title: "CCTV Installation & Networking",
        company: "IT Solution-WMM",
        date: "Aug 2024 - Nov 2024",
        description:
            "Assisted in CCTV installation, wirings like cable tracing, troubleshooting and termination at DIY Dad, Lake Hotel, and Char’s Garden Café. Gained hands-on experience in security systems, networking, and client communication.",
        images: ["/NetPic1.jpg", "/NetPic2.jpg", "/NetPic3.jpg", "/NetPic4.jpg"],
    },
    {
        title: "WordPress Web Designer",
        company: "Capstone Project",
        date: "Feb 2025 - May 2025",
        description:
            "Developed a responsive school website using WordPress with custom CSS and HTML for a clean, modern design. Focused on user-friendly, mobile optimization, and detailed content presentation to ensure a smooth and accessible experience.",
        images: ["/WProj1.jpg", "/WProj2.jpg", "/WProj3.jpg", "/WProj4.jpg"],
    },
];

// =====================================
// Main Functional Component Declaration
// =====================================
export default function ExperienceSection() {
    // Track current index for the active image shown per experience (slideshow effect)
    const [activeIndexes, setActiveIndexes] = useState(
        experiences.map(() => 0) // Initialize all indexes to 0
    );

    // Slideshow effect: change images every 4 seconds automatically
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndexes((prevIndexes) =>
                prevIndexes.map(
                    (index, i) => (index + 1) % experiences[i].images.length // Rotate to next image in each array
                )
            );
        }, 4000); // Interval: 4 seconds
        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    return (
        // Outer section wrapper with padding and centered content
        <section id="experience" className="max-w-6xl mx-auto py-20 px-6">
            {/* Section heading with slide-in animation */}
            <motion.h2
                className="text-3xl font-bold text-indigo-500 mb-16 text-center"
                initial={{ opacity: 0, y: 40 }} // Start faded and lower
                whileInView={{ opacity: 1, y: 0 }} // Animate to visible and slide up
                transition={{ duration: 0.6 }} // Duration of animation
                viewport={{ once: false }} // Animate again when scrolled back into view
            >
                Experience
            </motion.h2>

            {/* Wrapper for list of experience cards */}
            <div className="space-y-20 max-w-4xl mx-auto">
                {experiences.map(({ title, company, date, description, images }, index) => {
                    const isEven = index % 2 === 0; // Determine slide-in direction
                    const activeImage = images[activeIndexes[index]]; // Get current image

                    // Define animation variants for alternating horizontal entry
                    const slideInVariants = {
                        hidden: {
                            opacity: 0,
                            x: isEven ? -100 : 100, // Slide in from left (even) or right (odd)
                        },
                        show: {
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 0.8,
                                ease: "easeOut",
                            },
                        },
                    };

                    return (
                        // Animate each experience card on scroll into view
                        <motion.div
                            key={title + company}
                            className={`flex flex-col md:flex-row items-stretch gap-8 ${
                                !isEven ? "md:flex-row-reverse" : ""
                            }`}
                            initial="hidden" // Start in hidden state
                            whileInView="show" // Animate to show when in view
                            viewport={{ once: false, amount: 0.3 }} // Animate repeatedly at 30% visibility
                            variants={slideInVariants} // Use dynamic slide direction
                        >
                            {/* ================== */}
                            {/* Image Section Card */}
                            {/* ================== */}
                            <div className="w-full md:w-1/2 h-[300px] relative overflow-hidden rounded-lg shadow-md">
                                <AnimatePresence mode="wait">
                                    {/* Animate image transitions using fade effect */}
                                    <motion.img
                                        key={activeImage} // Key ensures re-render for animation
                                        src={activeImage} // Image path
                                        alt={title} // Descriptive alt text
                                        className="object-cover w-full h-full absolute top-0 left-0 rounded-lg"
                                        initial={{ opacity: 0 }} // Start invisible
                                        animate={{ opacity: 1 }} // Fade in
                                        exit={{ opacity: 0 }} // Fade out when replaced
                                        transition={{ duration: 1 }} // 1 second fade
                                    />
                                </AnimatePresence>
                            </div>

                            {/* ================== */}
                            {/* Text Information */}
                            {/* ================== */}
                            <div className="w-full md:w-1/2 h-[300px] overflow-auto bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-6 rounded-lg shadow-md">
                                {/* Experience title */}
                                <h3 className="text-2xl font-semibold mb-2">{title}</h3>

                                {/* Company or project name */}
                                <p className="text-indigo-500 dark:text-indigo-400 font-medium mb-1">
                                    {company}
                                </p>

                                {/* Duration or date range */}
                                <p className="text-gray-600 dark:text-gray-400 mb-4">{date}</p>

                                {/* Description of the work or role */}
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {description}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
