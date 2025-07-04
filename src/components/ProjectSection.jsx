// Import Framer Motion for animations
import { motion } from "framer-motion";

// Import Slick Carousel for sliding projects
import Slider from "react-slick";

// Import required CSS for the carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// ===========================
// Custom Arrow Components
// ===========================

// Custom next arrow for the slider
function NextArrow({ onClick }) {
    return (
        <div
            onClick={onClick} // Trigger slide next on click
            className="absolute -right-4 md:-right-8 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-indigo-500 hover:text-indigo-400 text-3xl"
        >
            ❯
        </div>
    );
}

// Custom previous arrow for the slider
function PrevArrow({ onClick }) {
    return (
        <div
            onClick={onClick} // Trigger slide previous on click
            className="absolute -left-4 md:-left-8 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-indigo-500 hover:text-indigo-400 text-3xl"
        >
            ❮
        </div>
    );
}


// ===========================
// Project Data Array
// ===========================

const projects = [
    {
        title: "School Management System",
        image: "/LaravelProj1.jpg",
        description: "Developed a web-based system using Laravel, PHP, and MySQL with full CRUD functionality.",
        tags: ["PHP", "LARAVEL", "MySQL"],
        demo: "https://github.com/imnotpaul/litrero.git",
    },
    {
        title: "Portfolio Website",
        image: "/Proj Portfolio.jpg",
        description: "Built a responsive portfolio using React, Tailwind CSS, and Framer Motion.",
        tags: ["REACT", "TAILWIND", "FRAMER MOTION"],
        demo: "https://my-portfolio-fa9db.web.app/",
    },
    {
        title: "Wordpress Project",
        image: "/Project3.jpg",
        description: "Custom school website using WordPress, HTML, and CSS.",
        tags: ["WORDPRESS", "HTML", "CSS"],
        demo: "https://kccf.wuaze.com/",
    },
    {
        title: "CRUD Project",
        image: "/Homepage.jpg",
        description: "CRUD-based system to manage products, users, and print receipts.",
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
    dots: true, // Show navigation dots
    infinite: true, // Enable infinite looping
    speed: 600, // Animation speed in ms
    slidesToShow: 3, // Number of slides visible at once (desktop)
    slidesToScroll: 3, // Slides to scroll per navigation
    autoplay: true, // Enable automatic scrolling
    autoplaySpeed: 3500, // Delay between auto scrolls in ms
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom previous arrow
    responsive: [
        {
            breakpoint: 1024, // For tablets and below
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 640, // For mobile devices
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

// Section animation on enter
const containerVariants = {
    hidden: { opacity: 0, y: 30 }, // Initial state
    show: {
        opacity: 1,
        y: 0, // Animate to original position
        transition: {
            duration: 0.6,
            ease: "easeOut", // Smooth animation
        },
    },
};

// Animation for each card (with delay)
const cardVariants = {
    hidden: { opacity: 0, y: 40 }, // Start hidden and slightly lower
    show: (i) => ({
        opacity: 1,
        y: 0, // Slide into view
        transition: {
            delay: i * 0.2, // Staggered delay for each card
            duration: 0.6,
        },
    }),
};


// ===========================
// ProjectSection Component
// ===========================

export default function ProjectSection() {
    return (
        <motion.section
            id="projects"
            className="max-w-6xl mx-auto py-20 px-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }} // Only animate once per scroll into view
            variants={containerVariants}
        >
            {/* Section Heading with entrance animation */}
            <motion.h2
                className="text-3xl font-bold text-indigo-400 mb-16 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Projects
            </motion.h2>

            {/* Project Carousel using react-slick */}
            <Slider {...settings}>
                {projects.map(({ title, image, description, tags, demo }, index) => (
                    <motion.div
                        key={title}
                        className="px-3"
                        custom={index} // Used by Framer Motion for stagger
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false }} // Animate each time it comes into view
                        variants={cardVariants}
                    >
                        {/* Card Container */}
                        <div className="relative group rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-transform duration-300 hover:-translate-y-1">
                            
                            {/* Project Image */}
                            <img
                                src={image}
                                alt={title || "Project Screenshot"}
                                className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                            />

                            {/* Hover Overlay Info */}
                            <div className="absolute inset-0 bg-white/90 dark:bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-6">
                                
                                {/* Title + Description */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                        {title}
                                    </h3>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                                        {description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Project Demo Link */}
                                <a
                                    href={demo}
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
