// Import React hooks to manage state and lifecycle
import { useState, useEffect } from "react";

// Import icons from lucide-react for UI interactions
import { Menu, X, Sun, Moon } from "lucide-react";

// Export the Navbar component
export default function Navbar() {
  // Track mobile menu toggle state
  const [isOpen, setIsOpen] = useState(false);

  // Track which section is currently active for nav highlighting
  const [activeSection, setActiveSection] = useState("home");

  // Track whether dark mode is enabled
  const [darkMode, setDarkMode] = useState(false);

  // Control display of loader overlay when logo is clicked
  const [showClickLoader, setShowClickLoader] = useState(false);

  // List of navigation links
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
  ];

  // Handle dark mode preference and section visibility
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }

    // Find all sections to observe
    const sections = document.querySelectorAll("section[id]");
    const visibilityMap = new Map();

    // Create observer to track visibility of sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityMap.set(entry.target.id, entry.intersectionRatio);
        });

        // Find section with highest visibility ratio
        let mostVisibleSection = "";
        let maxRatio = 0;
        visibilityMap.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            mostVisibleSection = id;
          }
        });

        // Remove highlight if "contact" section is active
        if (mostVisibleSection === "contact") {
          setActiveSection("");
        } else {
          setActiveSection(mostVisibleSection);
        }
      },
      { threshold: [0.25, 0.5, 0.75] }
    );

    // Start observing each section
    sections.forEach((section) => observer.observe(section));

    // Clear highlight when scrolled to bottom
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const totalHeight = document.body.offsetHeight;
      if (scrollPosition >= totalHeight - 50) {
        setActiveSection("");
      }
    };

    // Attach scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle dark mode and save preference
  const toggleDarkMode = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  // Show loader screen when logo is clicked
  const handleNameClick = () => {
    setShowClickLoader(true);
    setTimeout(() => {
      setShowClickLoader(false);
    }, 2500);
  };

  return (
    <>
      {/* Loader Overlay */}
      {showClickLoader && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-white dark:bg-gray-900 transition-opacity duration-500 animate-fade">
          {/* Animated Logo */}
          <img
            src="/Jp.png"
            alt="Logo"
            className="w-16 h-16 mb-4 animate-spin-slow"
          />

          {/* Name and Subtitle */}
          <h1 className="text-3xl font-bold text-indigo-400 dark:text-indigo-400 animate-pulse mb-1">
            John Paul J. Litrero
          </h1>
          <h2 className="text-sm text-gray-700 dark:text-gray-300">
            IT Support Specialist & Web Developer
          </h2>

          {/* Dots Loader */}
          <div className="flex items-center justify-center space-x-2 mt-4">
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.2s]"></div>
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.4s]"></div>
          </div>
        </div>
      )}

      {/* Navbar Container */}
      <nav className="fixed top-0 left-0 w-full bg-gray-100 text-black dark:bg-gray-800 dark:text-white shadow z-40 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Clickable Logo + Name */}
          <div
            onClick={handleNameClick}
            className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-transform duration-300"
          >
             {/* Logo beside name */}
            {/* <img
              src="/Jp1.png"
              alt="Logo"
              className="w-11 h-11 rounded-full object-cover"
            /> */}
            
            <span className="font-bold text-2xl text-indigo-400">
              John Paul J. Litrero
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-4 ml-8">
            <ul className="flex space-x-6">
              {navLinks.map(({ name, href }) => {
                const isActive = activeSection === href.slice(1);
                return (
                  <li key={name}>
                    <a
                      href={href}
                      className={`transition-all duration-300 pb-1 border-b-2 ${
                        isActive
                          ? "text-indigo-400 border-indigo-400 font-semibold"
                          : "border-transparent hover:text-indigo-600 hover:border-indigo-600"
                      }`}
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Contact Button */}
            <a
              href="#contact"
              className="ml-4 transition transform hover:scale-110 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded"
            >
              Contact
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600/30 transition"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <ul className="md:hidden px-6 pb-6 flex flex-col space-y-4 bg-white text-black dark:bg-gray-800 dark:text-white">
            {navLinks.map(({ name, href }) => {
              const isActive = activeSection === href.slice(1);
              return (
                <li key={name}>
                  <a
                    href={href}
                    className={`block transition-all duration-200 pb-1 border-b-2 ${
                      isActive
                        ? "text-indigo-500 border-indigo-500 font-bold"
                        : "hover:text-indigo-600 hover:border-indigo-600 border-transparent"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {name}
                  </a>
                </li>
              );
            })}

            {/* Contact Button (Mobile) */}
            <li>
              <a
                href="#contact"
                className="block text-center transition transform hover:scale-110 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>

            {/* Theme Toggle (Mobile) */}
            <li className="text-center">
              <button
                onClick={toggleDarkMode}
                className="mx-auto p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600/30 transition"
                aria-label="Toggle Theme"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
}
