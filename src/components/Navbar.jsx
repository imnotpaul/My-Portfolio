// Importing React hooks to manage component state and side effects
import { useState, useEffect } from "react";

// Importing icons from lucide-react for menu toggle and theme switch
import { Menu, X, Sun, Moon } from "lucide-react";

// Defining and exporting the Navbar component
export default function Navbar() {
  // State to track whether the mobile menu is open
  const [isOpen, setIsOpen] = useState(false);

  // State to track which section is currently visible (for nav highlighting)
  const [activeSection, setActiveSection] = useState("home");

  // State to toggle dark mode
  const [darkMode, setDarkMode] = useState(false);

  // State to control showing the loader screen when name/logo is clicked
  const [showClickLoader, setShowClickLoader] = useState(false);

  // Array of navigation links with section targets
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
  ];

  // useEffect runs when component mounts
  useEffect(() => {
    // Get saved theme preference from localStorage
    const savedTheme = localStorage.getItem("theme");

    // If user previously set dark mode, apply it
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }

    // Get all sections that have an ID (used for scroll tracking)
    const sections = document.querySelectorAll("section[id]");

    // A map to store how visible each section is on screen
    const visibilityMap = new Map();

    // IntersectionObserver to track which section is most visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityMap.set(entry.target.id, entry.intersectionRatio);
        });

        // Find the section with the highest visibility ratio
        let mostVisibleSection = "";
        let maxRatio = 0;
        visibilityMap.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            mostVisibleSection = id;
          }
        });

        // If "contact" is visible, remove highlight
        if (mostVisibleSection === "contact") {
          setActiveSection("");
        } else {
          setActiveSection(mostVisibleSection);
        }
      },
      { threshold: [0.25, 0.5, 0.75] } // Triggers callback at different visibility levels
    );

    // Start observing each section
    sections.forEach((section) => observer.observe(section));

    // Handle bottom-of-page scroll (clear active section)
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const totalHeight = document.body.offsetHeight;
      if (scrollPosition >= totalHeight - 50) {
        setActiveSection("");
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup: disconnect observer and remove scroll listener on unmount
    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle dark mode and store preference in localStorage
  const toggleDarkMode = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  // When name/logo is clicked, show full-screen loader for 2.5 seconds
  const handleNameClick = () => {
    setShowClickLoader(true);
    setTimeout(() => {
      setShowClickLoader(false);
    }, 2500);
  };

  return (
    <>
      {/* Full-screen loader overlay when logo/name is clicked */}
      {showClickLoader && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-white dark:bg-gray-900 transition-opacity duration-500 animate-fade">
          {/* Logo animation */}
          <img
            src="/Jp.png"
            alt="Logo"
            className="w-16 h-16 mb-4 animate-spin-slow"
          />
          {/* Name under logo */}
          <h1 className="text-3xl font-bold	text-indigo-400 dark:text-indigo-400 animate-pulse">
            John Paul J. Litrero
          </h1>
          {/* Spinning circle loader */}
          <div className="w-6 h-6 border-4 border-indigo-400 border-t-transparent rounded-full animate-spin mt-4"></div>
        </div>
      )}

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-100 text-black dark:bg-gray-800 dark:text-white shadow z-40 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo + Name section (clickable) */}
          <div
            onClick={handleNameClick}
            className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            {/* Logo beside name */}
            {/* <img
              src="/Jp.png"
              alt="Logo"
              className="w-11 h-11 rounded-full object-cover"
            /> */}
            {/* Name text */}
            <span className="font-bold text-2xl text-indigo-400">
              John Paul J. Litrero
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-4 ml-8">
            <ul className="flex space-x-6">
              {/* Map each nav link */}
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

            {/* Contact button (desktop) */}
            <a
              href="#contact"
              className="ml-4 transition transform hover:scale-110 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded"
            >
              Contact
            </a>

            {/* Theme toggle button (sun/moon) */}
            <button
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600/30 transition"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Hamburger menu button (for mobile) */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu (only visible if isOpen is true) */}
        {isOpen && (
          <ul className="md:hidden px-6 pb-6 flex flex-col space-y-4 bg-white text-black dark:bg-gray-800 dark:text-white">
            {/* Map mobile nav links */}
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
                    onClick={() => setIsOpen(false)} // Close mobile menu when link clicked
                  >
                    {name}
                  </a>
                </li>
              );
            })}
            
            {/* Contact button (mobile) */}
            <li>
              <a
                href="#contact"
                className="block text-center transition transform hover:scale-110 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>

            {/* Dark mode toggle (mobile) */}
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
