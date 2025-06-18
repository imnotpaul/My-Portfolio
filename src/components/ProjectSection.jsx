// Import required modules and styles
import { motion } from "framer-motion"; // Animation library
import Slider from "react-slick"; // React wrapper for Slick Carousel
import "slick-carousel/slick/slick.css"; // Slick Carousel base styles
import "slick-carousel/slick/slick-theme.css"; // Slick Carousel theme styles

// ========================
// Custom Arrow Components
// ========================

// Next arrow button component for slider
function NextArrow({ onClick }) {
    return (
        <div
            className="absolute -right-8 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-indigo-500 hover:text-indigo-400 text-3xl"
            onClick={onClick}
        >
            ❯ {/* Right arrow symbol */}
        </div>
    );
}

// Previous arrow button component for slider
function PrevArrow({ onClick }) {
    return (
        <div
            className="absolute -left-8 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-indigo-500 hover:text-indigo-400 text-3xl"
            onClick={onClick}
        >
            ❮ {/* Left arrow symbol */}
        </div>
    );
}

// ========================
// Project Data
// ========================
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
        description: "Built a responsive personal portfolio using React, Vite, and Tailwind CSS with Framer Motion animations, deployed on Firebase Hosting.",
        tags: ["REACT", "TAILWIND", "FRAMER MOTION",],
        demo: "https://my-portfolio-fa9db.web.app/",
    },
    {
        title: "Wordpress Project",
        image: "/Project3.jpg",
        description: "Built a responsive school website on WordPress with custom HTML and CSS for enhanced design and usability.",
        tags: ["WORDPRESS", "HTML", "CSS"],
        demo: "https://kccf.wuaze.com/",
    },
    {
        title: "CRUD Project",
        image: "/Project1.jpg",
        description: "CRUD-based product and user management system that allows users to fill in information, add and buy products, view receipts or print transaction records",
        tags: ["PHP", "MYSQL", "HTML", "CSS"],
        demo: "https://docs.google.com/...",
    },
    {
        title: "Arduino Project",
        image: "/Project2.jpg",
        description: "A smart electric fan built with Arduino Uno",
        tags: ["Arduino", "Unique"],
        demo: "https://www.canva.com/...",
    },
    {
        title: "IoT Smart Light",
        image: "/Project6.jpg",
        description: "An IoT-powered smart light controller using ESP32...",
        tags: ["IoT", "ESP32", "MQTT"],
        demo: "https://example.com",
    },
];

// ========================
// Slick Carousel Settings
// ========================
const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop slides infinitely
    speed: 500, // Transition speed in ms
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 3, // Number of slides to scroll at once
    autoplay: true, // Enable automatic scrolling
    autoplaySpeed: 3000, // Delay between slides in ms
    nextArrow: <NextArrow />, // Use custom next arrow
    prevArrow: <PrevArrow />, // Use custom prev arrow
    responsive: [
        {
            breakpoint: 1024, // For screens less than 1024px
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 640, // For mobile screens
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

// ========================
// ProjectSection Component
// ========================
export default function ProjectSection() {
    return (
        <section id="projects" className="max-w-6xl mx-auto py-16 px-6">
            {/* Animated Heading using Framer Motion */}
            <motion.h2
                className="text-3xl font-bold text-indigo-400 mb-10 text-center"
                initial={{ y: 50, opacity: 0 }} // Initial animation state
                whileInView={{ y: 0, opacity: 1 }} // Animate into view
                viewport={{ once: false }} // Animate every time it enters view
            >
                Projects
            </motion.h2>

            {/* Slider component rendering all projects */}
            <Slider {...settings}>
                {projects.map(({ title, image, description, tags, demo }) => (
                    <motion.div
                        key={title}
                        className="px-3"
                        initial={{ opacity: 0, y: 20 }} // Animate in from below
                        whileInView={{ opacity: 1, y: 0 }} // Animate to visible
                        viewport={{ once: false }} // Animate each time in view
                    >
                        <div className="relative group rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800">
                            {/* Project image */}
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                            />

                            {/* Overlay appears on hover with info */}
                            <div className="absolute inset-0 bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-6">
                                <div>
                                    {/* Title and description */}
                                    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                                    <p className="text-sm mb-4">{description}</p>

                                    {/* Technology tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="bg-indigo-600 text-white rounded-full px-3 py-1 text-xs font-semibold uppercase"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Project demo link */}
                                <a
                                    href={demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-indigo-500 hover:bg-indigo-400 text-white px-4 py-2 rounded font-semibold text-sm text-center transition"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </Slider>
        </section>
    );
}
