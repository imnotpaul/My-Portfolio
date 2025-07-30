// Import React hooks and components
import { useEffect, useState, Suspense } from "react";

// Section/component imports
import Navbar from "./components/Navbar";
import LandingSection from "./components/LandingSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectSection from "./components/ProjectSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import LoaderOverlay from "./components/LoaderOverlay";

export default function App() {
  const [isLoading, setIsLoading] = useState(true); // Control splash screen loading state

  // Set dark/light theme on first render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme"); // Load theme preference from localStorage
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches; // Check system preference
    const theme = savedTheme || (prefersDark ? "dark" : "light"); // Decide final theme

    // Apply theme to HTML root
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, []);

  // Simulate loading splash screen delay
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // 2 second delay
    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  return (
    // Root container with theming and transition
    <div className="relative bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen transition-colors duration-300">
      
      {/* Splash screen overlay (e.g., animated loader) */}
      <LoaderOverlay show={isLoading} />

      {/* Main content shows only when loading is complete */}
      {!isLoading && (
        <>
          <Navbar />
          {/* Main page content */}
          <main>
            {/* Lazy load fallback for sections */}
            <Suspense fallback={<div className="text-center py-8">Loading sections...</div>}>
              <LandingSection />
              <AboutSection />
              <SkillsSection />
              <ProjectSection />
              <ExperienceSection />
              <EducationSection />
              <ContactSection />
              <Footer />
            </Suspense>
          </main>
        </>
      )}
    </div>
  );
}
