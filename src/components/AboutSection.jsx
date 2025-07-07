// Import React hook for managing component state
import { useState } from 'react';

// Import FontAwesomeIcon component for using icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import specific icons from FontAwesome
import {
    faBirthdayCake,
    faEnvelope,
    faPhone,
    faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

// Import motion from Framer Motion for animations
import { motion } from 'framer-motion';

// Define and export the functional component
export default function AboutSection() {
    // State to track whether "more info" is expanded or not
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        // Main section for the About content
        <section
            id="about" // Anchor ID for navigation
            className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center md:items-start gap-10"
            // Layout: max width container, padding, responsive flex direction and spacing
        >
            {/* Left Side: Profile Picture with animation */}
            <motion.div
                className="w-full md:w-1/2 flex justify-center" // Full width on mobile, half on medium and up
                initial={{ opacity: 0, x: -100 }} // Start animation: hidden and shifted left
                whileInView={{ opacity: 1, x: 0 }} // Animate to visible and original position
                viewport={{ once: false }} // Animate every time it enters the viewport
                transition={{ duration: 0.8 }} // Animation duration
            >
                <img
                    src="/Profile 5.png" // Path to profile picture
                    alt="Profile" // Accessibility: alternative text
                    className="rounded-lg object-cover w-full max-w-md h-auto shadow-lg"
                    // Style: rounded corners, cover image, responsive size, shadow
                    style={{ maxHeight: '400px', transform: 'translateY(30px)'}} // Limit height
                />
            </motion.div>

            {/* Right Side: Bio and Contact Info with animation */}
            <motion.div
                className="w-full md:w-1/2 text-gray-900 dark:text-white"
                // Full width on mobile, half on medium; text color adjusts for dark mode
                initial={{ opacity: 0, x: 100 }} // Start hidden and shifted right
                whileInView={{ opacity: 1, x: 0 }} // Animate to visible and original position
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
            >
                {/* Heading */}
                <h2 className="text-4xl font-bold mb-6 text-indigo-400 dark:text-indigo-400">
                    About Me
                </h2>

                {/* Intro paragraph */}
                <p className="mb-6 leading-relaxed text-lg text-gray-800 dark:text-gray-300">
                    I'm an IT Support Specialist and web developer with hands-on experience in networking, CCTV setup, and troubleshooting complex wiring systems. I develop functional, responsive websites using Laravel and WordPress blending technical support expertise with web development to deliver reliable, end-to-end solutions with confidence and precision.
                </p>

                {/* Conditionally rendered "more about me" section */}
                {isExpanded && (
                    <div className="mb-6 leading-relaxed text-lg text-gray-700 dark:text-indigo-100">
                        <p>
                            In addition to my technical support experience, I build responsive and user-friendly websites using WordPress and Laravel delivering practical and visually polished solutions.
                        </p>
                        <p className="mt-4">
                          In my free time, I enjoy exploring new areas of web development, frontend and backend tools. I'm passionate about development and committed to continuously growing my skills and knowledge in the IT field.
                        </p>
                    </div>
                )}

                {/* Toggle Button to show/hide more info */}
                <button
                    onClick={() => setIsExpanded(!isExpanded)} // Toggle state
                    className="text-indigo-600 dark:text-indigo-400 font-semibold underline hover:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
                    // Style: Indigo text, underline, hover color changes for dark/light mode
                >
                    {isExpanded ? 'View Less' : 'View More'} {/* Toggle button label */}
                </button>

                {/* Contact Information section with icons */}
                <div className="mt-8 space-y-4 text-lg text-gray-800 dark:text-gray-200">
                    {/* Birthday */}
                    <div className="flex items-center gap-3">
                        <FontAwesomeIcon icon={faBirthdayCake} className="text-indigo-600 dark:text-indigo-400" />
                        <span>Age: 22</span>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-3">
                        <FontAwesomeIcon icon={faEnvelope} className="text-indigo-600 dark:text-indigo-400" />
                        <span>Email: johnpaullitrero5@gmail.com</span>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-3">
                        <FontAwesomeIcon icon={faPhone} className="text-indigo-600 dark:text-indigo-400" />
                        <span>Phone: +63 999 151 9865</span>
                    </div>

                    {/* Address */}
                    <div className="flex items-center gap-3">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-indigo-600 dark:text-indigo-400" />
                        <span>Address: Purok 7, kaytitinga 3, Alfonso, Cavite</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
