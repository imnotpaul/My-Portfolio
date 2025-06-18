// Importing React hooks (useState, useEffect) and icons (Menu, X, Sun, Moon) from Lucide React
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

// Exporting the default Navbar functional component
export default function Navbar() {
  // State for showing/hiding the mobile menu (hamburger toggle)
  const [isOpen, setIsOpen] = useState(false);

  // State for tracking which section of the page is currently active (for link highlighting)
  const [activeSection, setActiveSection] = useState("home");

  // State for toggling between dark and light mode
  const [darkMode, setDarkMode] = useState(false);

  // Navigation links that will appear in the navbar
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
  ];

  useEffect(() => {
    // Check for saved theme in localStorage and apply it
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }

    // Select all section elements that have an ID
    const sections = document.querySelectorAll("section[id]");
    const visibilityMap = new Map();

    // Create an IntersectionObserver to detect which section is visible on screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityMap.set(entry.target.id, entry.intersectionRatio);
        });

        // Find the section with the highest visibility
        let mostVisibleSection = "";
        let maxRatio = 0;

        visibilityMap.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            mostVisibleSection = id;
          }
        });

        // If most visible section is 'contact', clear highlighting
        if (mostVisibleSection === "contact") {
          setActiveSection("");
        } else {
          setActiveSection(mostVisibleSection);
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] } // Use multiple thresholds for better tracking
    );

    // Start observing each section
    sections.forEach((section) => observer.observe(section));

    // Detect when the user scrolls to the bottom of the page (footer area)
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const totalHeight = document.body.offsetHeight;

      if (scrollPosition >= totalHeight - 50) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up observers and scroll listener when the component unmounts
    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to toggle between dark and light themes
  const toggleDarkMode = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    // Main navigation bar container, fixed to the top of the page
    <nav className="fixed top-0 left-0 w-full bg-gray-100 text-black dark:bg-gray-800 dark:text-white shadow z-50 transition-colors duration-300">
      {/* Wrapper div for logo and nav items */}
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo and name area */}
        <div className="flex items-center space-x-3">
          {/* Optional logo image */}
          {/* <img src="/jp logo.png" alt="Logo" className="w-10 h-10 rounded-full" /> */}
          <span className="font-bold text-2xl">John Paul J. Litrero</span>
        </div>

        {/* Desktop navigation links - hidden on small screens */}
        <div className="hidden md:flex items-center space-x-4 ml-8">
          {/* Unordered list of nav links */}
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

          {/* "Contact" button (desktop only) */}
          <a
            href="#contact"
            className="ml-4 transition transform hover:scale-110 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded"
          >
            Contact
          </a>

          {/* Dark mode toggle button (desktop) */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 rounded hover:bg-gray-200 dark:hover:bg-indigo-600/30 transition"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Hamburger menu button (mobile only) */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile navigation dropdown menu */}
      {isOpen && (
        <ul className="md:hidden px-6 pb-6 flex flex-col space-y-4 bg-white text-black dark:bg-[#072126] dark:text-white">
          {/* Navigation links for mobile */}
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

          {/* Contact button for mobile view */}
          <li>
            <a
              href="#contact"
              className="block text-center transition transform hover:scale-110 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>

          {/* Theme toggle button for mobile */}
          <li className="text-center">
            <button
              onClick={toggleDarkMode}
              className="mx-auto p-2 rounded hover:bg-gray-200 dark:hover:bg-indigo-600/30 transition"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}