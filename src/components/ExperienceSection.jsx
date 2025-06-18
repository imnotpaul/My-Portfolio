// Import Framer Motion components for animations and React hooks for state and effects
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// Define an array of experience objects to be displayed
const experiences = [
    {
        title: "Web Development Support", // Job title
        company: "Laravel & PHP Project",     // Company or project name
        date: "March 2024 - April 2024",          // Duration of the experience
description: "Developed a school management system using Laravel & PHP framework with front-end and back-end integration. Implemented student records, user authentication, dynamic routing, and responsive Blade templates for an efficient and user-friendly experience.", // Job description
        images: ["/LaravelProj1.jpg", "/LaravelProj2.jpg", "/LaravelProj3.jpg"], // Images related to the project
    },
    {
        title: "CCTV Installation & Networking",
        company: "IT Solution-WMM",
        date: "Aug 2024 - Nov 2024",
        description: "Assisted in CCTV installation, wirings like cable tracing, troubleshooting and termination at DIY Dad, Lake Hotel, and Char’s Garden Café. Gained hands-on experience in security systems, networking, and client communication.",
        images: ["/NetPic1.jpg", "/NetPic2.jpg", "/NetPic3.jpg", "/NetPic4.jpg"],
    },
    {
        title: "WordPress Web Designer",
        company: "Capstone Project",
        date: "Feb 2025 - May 2025",
description: "Developed a responsive school website using WordPress with custom CSS and HTML for a clean, modern design. Focused on user-friendly navigation, mobile optimization, and detailed content presentation to ensure a smooth and accessible experience.",
        images: ["/WProj1.jpg", "/WProj2.jpg", "/WProj3.jpg", "/WProj4.jpg"],
    },
];

// Define the main React component for the "Experience" section
export default function ExperienceSection() {
    // Set up a state to track the current image index shown for each experience (for slideshow effect)
    const [activeIndexes, setActiveIndexes] = useState(
        experiences.map(() => 0) // Initialize all indexes to 0 (first image for each)
    );

    // Automatically change images every 4 seconds using setInterval
    useEffect(() => {
        const interval = setInterval(() => {
            // Update each experience's image index (slideshow logic)
            setActiveIndexes((prevIndexes) =>
                prevIndexes.map((index, i) =>
                    (index + 1) % experiences[i].images.length // Loop back to 0 if at end
                )
            );
        }, 4000); // Delay: 4 seconds per image

        // Cleanup the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);

    return (
        // Wrapper section with max width, centered horizontally with padding
        <section id="experience" className="max-w-6xl mx-auto py-16 px-6">
            {/* Animated section title with motion effect on scroll into view */}
            <motion.h2
                className="text-3xl font-bold text-indigo-400 mb-16 text-center"
                initial={{ y: 50, opacity: 0 }} // Start below and invisible
                whileInView={{ y: 0, opacity: 1 }} // Animate into place
                viewport={{ once: true }} // Animate only the first time it appears in view
            >
                Experience
            </motion.h2>

            {/* Container for all experience cards, stacked vertically with spacing */}
            <div className="space-y-20 max-w-4xl mx-auto">
                {/* Loop through each experience to render its card */}
                {experiences.map(({ title, company, date, description, images }, index) => {
                    const isEven = index % 2 === 1; // Determine whether to reverse layout
                    const activeImage = images[activeIndexes[index]]; // Get currently displayed image

                    return (
                        // Motion wrapper for each card with slide-in animation
                        <motion.div
                            key={title + company} // Unique key for React list rendering
                            className={`flex flex-col md:flex-row items-stretch gap-8 ${
                                isEven ? "md:flex-row-reverse" : "" // Reverse layout for alternating effect
                            }`}
                            initial={{ opacity: 0, y: 30 }} // Start lower and faded
                            whileInView={{ opacity: 1, y: 0 }} // Slide up and fade in
                            transition={{ duration: 0.6 }} // Animation duration
                            viewport={{ once: true }} // Animate only once
                        >
                            {/* Container for image with fixed height and animation on image change */}
                            <div className="w-full md:w-1/2 h-[300px] relative overflow-hidden rounded-lg shadow-lg">
                                <AnimatePresence mode="wait">
                                    {/* Animated image fade transition */}
                                    <motion.img
                                        key={activeImage} // Unique key to trigger animation on image change
                                        src={activeImage} // Image source
                                        alt={title} // Alt text for accessibility
                                        className="object-cover w-full h-full rounded-lg absolute top-0 left-0"
                                        initial={{ opacity: 0 }} // Start transparent
                                        animate={{ opacity: 1 }} // Fade in
                                        exit={{ opacity: 0 }} // Fade out
                                        transition={{ duration: 1 }} // Fade transition duration
                                    />
                                </AnimatePresence>
                            </div>

                            {/* Text information for the experience */}
                            <div className="w-full md:w-1/2 h-[300px] overflow-auto bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-6 rounded-lg shadow-md">
                                <h3 className="text-2xl font-semibold mb-2">{title}</h3> {/* Job title */}
                                <p className="text-indigo-500 dark:text-indigo-400 font-medium mb-1">{company}</p> {/* Company */}
                                <p className="text-gray-600 dark:text-gray-400 mb-4">{date}</p> {/* Date range */}
                                <p className="text-gray-700 dark:text-gray-300">{description}</p> {/* Description */}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
