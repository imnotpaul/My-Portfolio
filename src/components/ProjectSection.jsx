// Import motion from Framer Motion for scroll animations and transitions
import { motion } from "framer-motion";

// Import Slider component from react-slick for carousel functionality
import Slider from "react-slick";

// Import required CSS files for react-slick (carousel styling)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ===========================
// Custom Arrow Components for the Slider
// ===========================

// Right (next) arrow component for the carousel
function NextArrow({ onClick }) {
    return (
        <div
            onClick={onClick} // This calls the slick "next" method
            className="absolute -right-4 md:-right-8 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-indigo-500 hover:text-indigo-400 text-3xl"
        >
            ❯ {/* Unicode right arrow character */}
        </div>
    );
}

// Left (previous) arrow component for the carousel
function PrevArrow({ onClick }) {
    return (
        <div
            onClick={onClick} // This calls the slick "previous" method
            className="absolute -left-4 md:-left-8 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-indigo-500 hover:text-indigo-400 text-3xl"
        >
            ❮ {/* Unicode left arrow character */}
        </div>
    );
}

// ===========================
// Project Data Array (for carousel items)
// ===========================

const projects = [
    {
        title: "School Management System", // Project title
        image: "/LaravelProj1.jpg", // Image path (stored in public folder)
        description: "Developed a web-based system using Laravel, PHP, and MySQL with full CRUD functionality.",
        tags: ["PHP", "LARAVEL", "MySQL"], // Tech tags
        demo: "https://github.com/imnotpaul/litrero.git", // Project link
    },
    {
        title: "Portfolio Website",
        image: "/Proj Portfolio.jpg",
        description: "Built a responsive portfolio using React, Tailwind CSS, and Framer Motion, deployed via Firebase.",
        tags: ["REACT", "TAILWIND", "FRAMER MOTION", "FIREBASE"],
        demo: "https://my-portfolio-fa9db.web.app/",
    },
    {
        title: "School Website",
        image: "/Project3.jpg",
        description: "School Website using WordPress with custom HTML and CSS.",
        tags: ["WORDPRESS", "HTML", "CSS"],
        demo: "https://kccf.wuaze.com/",
    },
    {
        title: "Product Management System",
        image: "/Homepage.jpg",
        description: "CRUD-based system to manage products, handle purchases, manage users, and generate printable receipts with full transaction history.",
        tags: ["PHP", "MYSQL", "HTML", "CSS"],
        demo: "https://drive.google.com/file/d/1Mb4wDbxJ7NGrBNvo0N9KUkg_EGEOrZyr/view?usp=sharing",
    },
    {
        title: "Arduino Project",
        image: "/Project2.jpg",
        description: "A smart electric fan using Arduino Uno.",
        tags: ["Arduino", "Unique"],
        demo: "https://www.canva.com/...",
    },
    {
        title: "IoT Smart Light",
        image: "/Project6.jpg",
        description: "IoT-powered smart light controller using ESP32 and MQTT.",
        tags: ["IoT", "ESP32", "MQTT"],
        demo: "https://example.com",
    },
];

// ===========================
// Slider Configuration
// ===========================

const settings = {
    dots: true, // Show navigation dots at bottom
    infinite: true, // Allows infinite loop when scrolling
    speed: 600, // Animation transition speed in ms
    slidesToShow: 3, // Number of slides visible at once on large screens
    slidesToScroll: 3, // Number of slides to scroll per navigation click
    autoplay: true, // Enables auto-scrolling
    autoplaySpeed: 3500, // Delay between auto scrolls (ms)
    nextArrow: <NextArrow />, // Custom next arrow component
    prevArrow: <PrevArrow />, // Custom previous arrow component
    responsive: [
        {
            breakpoint: 1024, // For screen width below 1024px (tablet)
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 640, // For screen width below 640px (mobile)
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

// ===========================
// Framer Motion Animation Variants
// ===========================

// Animation for the whole section (fade + slide in)
const containerVariants = {
    hidden: { opacity: 0, y: 30 }, // Initial state: hidden and moved down
    show: {
        opacity: 1,
        y: 0, // Final state: visible and in place
        transition: {
            duration: 0.6,
            ease: "easeOut", // Smooth transition
        },
    },
};

// Animation variant for each card with stagger delay
const cardVariants = {
    hidden: { opacity: 0, y: 40 }, // Start hidden and pushed down
    show: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2, // Delay each card
            duration: 0.6,
        },
    }),
};

// ===========================
// Main ProjectSection Component
// ===========================

export default function ProjectSection() {
    return (
        // Section wrapper with motion animation
        <motion.section
            id="projects" // Section anchor
            className="max-w-6xl mx-auto py-20 px-6" // Width and padding
            initial="hidden" // Initial animation state
            whileInView="show" // Trigger animation when in view
            viewport={{ once: true }} // Animate only once when visible
            variants={containerVariants} // Use defined animation
        >
            {/* Section heading with fade + slide-in animation */}
            <motion.h2
                className="text-3xl font-bold text-indigo-400 mb-16 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Projects
            </motion.h2>

            {/* Render carousel using react-slick */}
            <Slider {...settings}>
                {projects.map(({ title, image, description, tags, demo }, index) => (
                    <motion.div
                        key={title}
                        className="px-3" // Spacing between cards
                        custom={index} // Used for staggered animation
                          initial="hidden"
                        whileInView="show"
                        viewport={{ once: false }} // Animate every time it scrolls into view
                        variants={cardVariants}
                    >
                        {/* Card container */}
                        <div className="relative group rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-transform duration-300 hover:-translate-y-1">
                            
                            {/* Project Image */}
                            <img
                                src={image} // Project screenshot
                                alt={title || "Project Screenshot"}
                                className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                            />

                            {/* Hover overlay with project info */}
                            <div className="absolute inset-0 bg-white/90 dark:bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-6">
                                
                                {/* Project title and description */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                        {title}
                                    </h3>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                                        {description}
                                    </p>

                                    {/* Tag list (technologies used) */}
                                    <div className="flex flex-wrap gap-2">
                                        {tags.map((tag) => (
                                            <span
                                                key={tag} // Unique key
                                                className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Project demo button */}
                                <a
                                    href={demo} // Link to project or repo
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 text-center bg-indigo-500 hover:bg-indigo-400 text-white font-semibold py-2 px-4 rounded transition"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </Slider>
        </motion.section>
    );
}
