import { useState, useEffect, useRef } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(false);
  const [showClickLoader, setShowClickLoader] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const contactFormRef = useRef();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    }

    const sections = document.querySelectorAll("section[id]");
    const visibilityMap = new Map();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        visibilityMap.set(entry.target.id, entry.intersectionRatio);
      });

      let mostVisibleSection = "";
      let maxRatio = 0;
      visibilityMap.forEach((ratio, id) => {
        if (ratio > maxRatio) {
          maxRatio = ratio;
          mostVisibleSection = id;
        }
      });

      if (mostVisibleSection === "contact") {
        setActiveSection("");
      } else {
        setActiveSection(mostVisibleSection);
      }
    }, { threshold: [0.25, 0.5, 0.75] });

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const totalHeight = document.body.offsetHeight;
      if (scrollPosition >= totalHeight - 50) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  const handleNameClick = () => {
    setShowClickLoader(true);
    setTimeout(() => setShowClickLoader(false), 2500);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const formData = new FormData(contactFormRef.current);
    const senderName = formData.get("name") || "Someone";

    emailjs
      .sendForm(
        "service_yvgyij4",
        "template_n1xv0uf",
        contactFormRef.current,
        "7HM8uLATty13WTOrj" 
      )
      .then(() => {
        toast.success(`Message sent successfully. Thank you, ${senderName}!`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
          style: {
          background: "#6366f1", // Indigo-500
          color: "#fff",
          fontWeight: "bold",
          borderRadius: "0.5rem",
          boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
          },
          icon: "📨",
        onClose: () => {
          const toastDOM = document.querySelector(".Toastify__toast-container");
          if (toastDOM) {
            toastDOM.style.display = "none"; // fully hide the container after toast ends
          }
        }
      });
      contactFormRef.current.reset();
      setShowContactModal(false);
    })
    .catch(() => {
        toast.error("Failed to send message. Please try again.", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
          style: {
            background: "#ef4444", // Red-500
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "0.5rem",
            boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
          },
          icon: "⚠️",
        });
      })
      .finally(() => setIsSending(false));
  };

  return (
    <>
      {/* Loader animation on name click */}
      {showClickLoader && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-white dark:bg-gray-900 transition-opacity duration-500 animate-fade">
          <img src="/Jp.png" alt="Logo" className="w-16 h-16 mb-4 animate-spin-slow" />
          <h1 className="text-3xl font-bold text-indigo-400 dark:text-indigo-400 animate-pulse mb-1">
            <span className="relative inline-block text-4xl font-extrabold">J</span>ohn Paul Litrero
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

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-30 dark:bg-opacity-70 flex items-center justify-center px-4">
          <div className="bg-white dark:bg-[#1e293b] text-gray-800 dark:text-white w-full max-w-md p-6 rounded-xl shadow-xl relative">
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-semibold mb-6 text-center text-indigo-600 dark:text-white">Hire Me</h2>
            <form ref={contactFormRef} onSubmit={handleContactSubmit} className="space-y-5">
              <div>
                <label className="block mb-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">Name</label>
                <input name="name" type="text" placeholder="Your name" required className="w-full px-4 py-2 border border-indigo-300 dark:border-indigo-500 rounded-md bg-white dark:bg-[#334155] text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">Email</label>
                <input name="email" type="email" placeholder="Your email" required className="w-full px-4 py-2 border border-indigo-300 dark:border-indigo-500 rounded-md bg-white dark:bg-[#334155] text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">Message</label>
                <textarea name="message" placeholder="Your message..." rows="4" required className="w-full px-4 py-2 border border-indigo-300 dark:border-indigo-500 rounded-md bg-white dark:bg-[#334155] text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="py-3 px-8 bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded font-semibold transition-transform transform hover:scale-105 focus:scale-105 focus:outline-none mx-auto block"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Toastify notification container */}
       <ToastContainer
        transition={Slide}
        autoClose={2000}      // automatically closes after 2 seconds
        hideProgressBar={false} // show the progress bar
      />

      {/* Top Navigation Bar */}
     <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full bg-gray-100 text-black dark:bg-gray-800 dark:text-white shadow z-40 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Brand / Name clickable with loader */}
          <div onClick={handleNameClick} className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-transform duration-300">
            <span className="font-bold text-2xl text-indigo-400">
              <span className="relative inline-block text-4xl font-extrabold">J</span>ohn Paul Litrero
            </span>
          </div>

          {/* Desktop Navigation Links */}      
          <div className="hidden md:flex items-center space-x-4 ml-12">
            {/* Animated UL with staggerChildren for sequential animation */}
            <motion.ul
              className="flex space-x-5"
              initial="hidden"               // initial state of the UL
              animate="visible"             // animate to this state on load
              variants={{
                hidden: {},                 // no changes for UL itself
                visible: {
                  transition: {             // stagger each child <li>
                    staggerChildren: 0.2,   // delay between each link animation
                  },
                },
              }}
            >
              {navLinks.map(({ name, href }) => {
                const isActive = activeSection === href.slice(1);
                return (
                  // Animated LI for each nav link
                  <motion.li
                    key={name}
                    variants={{
                      hidden: { y: -20, opacity: 0 }, // start above and invisible
                      visible: { 
                        y: 0, 
                        opacity: 1, 
                        transition: { type: "spring", stiffness: 300, damping: 30 } // smooth spring animation
                      },
                    }}
                  >
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
                  </motion.li>
                );
              })}
            </motion.ul>
  
            {/* Contact Button */}
            <button onClick={() => setShowContactModal(true)} className="ml-4 transition transform hover:scale-110 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded">Contact</button>

            {/* Dark Mode Toggle */}
            <button onClick={toggleDarkMode} className="ml-4 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600/30 transition transform hover:scale-110" aria-label="Toggle Theme">
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
      </motion.nav>
    </>
  );
}
