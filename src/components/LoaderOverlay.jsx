// components/LoaderOverlay.jsx

// This is a React component that shows a full-screen loading overlay
export default function LoaderOverlay({ show }) {
  // If the 'show' prop is false, return nothing (don't render anything)
  if (!show) return null;

  return (
    // This div covers the entire screen and centers its content
    <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-white dark:bg-gray-900 transition-opacity duration-500 animate-fade">
      {/* Logo image with a slow spin animation */}
      <img
        src="/Jp.png"
        alt="Logo"
        className="w-16 h-16 mb-4 animate-spin-slow"
      />

      {/* Main name text with large font, colored text, and a glowing drop shadow effect */}
      <h1 className="text-3xl font-bold text-indigo-400 dark:text-indigo-400 animate-pulse mb-1">
        {/* The first letter 'J' is styled separately with even bolder effects */}
        <span className="relative inline-block text-4xl font-extrabold">
          J
        </span>
        ohn Paul J. Litrero
      </h1>

      {/* Subtitle/Description below the name */}
      <h2 className="text-sm text-gray-700 dark:text-gray-300">
        IT Support Specialist & Web Developer
      </h2>

      {/* Loading dots animation below the text */}
      <div className="flex items-center justify-center space-x-2 mt-4">
        {/* First bouncing dot */}
        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
        {/* Second bouncing dot with delay */}
        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.2s]"></div>
        {/* Third bouncing dot with more delay */}
        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.4s]"></div>
      </div>
    </div>
  );
}
