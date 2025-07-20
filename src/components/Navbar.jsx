import { useState, useEffect } from "react"; // Import React hooks for state and lifecycle
import { Menu, X, Sun, Moon } from "lucide-react"; // Import icons from lucide-react

// Define the Navbar component
export default function Navbar() {
  // State for mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);
  // State to track the currently visible section
  const [activeSection, setActiveSection] = useState("home");
  // State to track dark mode
  const [darkMode, setDarkMode] = useState(false);
  // State to show loading animation when name is clicked
  const [showClickLoader, setShowClickLoader] = useState(false);
  // State to toggle the contact modal
  const [showContactModal, setShowContactModal] = useState(false);

  // Define navigation links
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
  ];

  // Run on component mount
  useEffect(() => {
    // Check local storage for saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }

    // Select all sections with id attributes
    const sections = document.querySelectorAll("section[id]");
    const visibilityMap = new Map();

    // Observe section visibility using IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityMap.set(entry.target.id, entry.intersectionRatio);
        });

        // Determine which section is most visible
        let mostVisibleSection = "";
        let maxRatio = 0;
        visibilityMap.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            mostVisibleSection = id;
          }
        });

        // If "contact" is visible, don't highlight any nav link
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

    // Handle scroll near bottom to reset active section
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const totalHeight = document.body.offsetHeight;
      if (scrollPosition >= totalHeight - 50) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle dark mode and save preference to localStorage
  const toggleDarkMode = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  // Show loading animation when name is clicked
  const handleNameClick = () => {
    setShowClickLoader(true);
    setTimeout(() => {
      setShowClickLoader(false);
    }, 2500);
  };

  return (
    <>
      {/* Loader shown when name is clicked */}
      {showClickLoader && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-white dark:bg-gray-900 transition-opacity duration-500 animate-fade">
          <img src="/Jp.png" alt="Logo" className="w-16 h-16 mb-4 animate-spin-slow" />
          <h1 className="text-3xl font-bold text-indigo-400 dark:text-indigo-400 animate-pulse mb-1">
            <span className="relative inline-block text-4xl font-extrabold text-indigo-400 drop-shadow-[2px_2px_0px_#4f46e5]">
              J
            </span>ohn Paul J. Litrero
          </h1>
          <h2 className="text-sm text-gray-700 dark:text-gray-300">
            IT Support Specialist & Web Developer
          </h2>
          <div className="flex items-center justify-center space-x-2 mt-4">
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.2s]"></div>
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.4s]"></div>
          </div>
        </div>
      )}

      {/* Contact Modal (shown when "Contact" is clicked) */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-30 dark:bg-opacity-70 flex items-center justify-center px-4">
          <div className="bg-white dark:bg-[#1e293b] text-gray-800 dark:text-white w-full max-w-md p-6 rounded-xl shadow-xl relative">
            {/* Close button for modal */}
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
            >
              <X size={24} />
            </button>

            {/* Form Heading */}
            <h2 className="text-2xl font-semibold mb-6 text-center text-indigo-600 dark:text-white">Hire Me</h2>

            {/* Form Fields */}
            <form className="space-y-5">
              <div>
                <label className="block mb-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">Name</label>
                <input type="text" placeholder="Your name" className="w-full px-4 py-2 border border-indigo-300 dark:border-indigo-500 rounded-md bg-white dark:bg-[#334155] text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">Email</label>
                <input type="email" placeholder="Your email" className="w-full px-4 py-2 border border-indigo-300 dark:border-indigo-500 rounded-md bg-white dark:bg-[#334155] text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">Message</label>
                <textarea placeholder="Your message..." rows="4" className="w-full px-4 py-2 border border-indigo-300 dark:border-indigo-500 rounded-md bg-white dark:bg-[#334155] text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
              </div>
              <button type="submit" className="w-auto px-6 mx-auto bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 rounded-md transition block">Send Message</button>
            </form>
          </div>
        </div>
      )}

      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-100 text-black dark:bg-gray-800 dark:text-white shadow z-40 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Brand / Name clickable with loader */}
          <div onClick={handleNameClick} className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-transform duration-300">
            <span className="font-bold text-2xl text-indigo-400">
              <span className="relative inline-block text-4xl font-extrabold text-indigo-400 drop-shadow-[3px_3px_0px_#4f46e5]">J</span>ohn Paul J. Litrero
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-4 ml-12">
            <ul className="flex space-x-5">
              {navLinks.map(({ name, href }) => {
                const isActive = activeSection === href.slice(1);
                return (
                  <li key={name}>
                    <a href={href} className={`transition-all duration-300 pb-1 border-b-2 ${isActive ? "text-indigo-400 border-indigo-400 font-semibold" : "border-transparent hover:text-indigo-600 hover:border-indigo-600"}`}>{name}</a>
                  </li>
                );
              })}
            </ul>

            {/* Contact Button */}
            <button onClick={() => setShowContactModal(true)} className="ml-4 transition transform hover:scale-110 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded">Contact</button>

            {/* Dark Mode Toggle */}
            <button onClick={toggleDarkMode} className="ml-4 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600/30 transition" aria-label="Toggle Theme">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Toggle Icon */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <ul className="md:hidden px-6 pb-6 flex flex-col space-y-4 bg-white text-black dark:bg-gray-800 dark:text-white">
            {navLinks.map(({ name, href }) => {
              const isActive = activeSection === href.slice(1);
              return (
                <li key={name}>
                  <a href={href} onClick={() => setIsOpen(false)} className={`block transition-all duration-200 pb-1 border-b-2 ${isActive ? "text-indigo-500 border-indigo-500 font-bold" : "hover:text-indigo-600 hover:border-indigo-600 border-transparent"}`}>{name}</a>
                </li>
              );
            })}

            {/* Contact Button on Mobile */}
            <li>
              <button onClick={() => { setIsOpen(false); setShowContactModal(true); }} className="block text-center transition transform hover:scale-110 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded w-full">Contact</button>
            </li>

            {/* Theme Toggle for Mobile */}
            <li className="text-center">
              <button onClick={toggleDarkMode} className="mx-auto p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600/30 transition" aria-label="Toggle Theme">
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
}
