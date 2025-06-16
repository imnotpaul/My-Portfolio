// Import the Navbar component from the same directory
import Navbar from "./Navbar";

// Export the Layout component, which accepts `children` as props
export default function Layout({ children }) {
    return (
        // Outer container taking full height of the screen,
        // using flexbox in column direction, with dark background and light text
        <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
            
            {/* Include the Navbar component at the top */}
            <Navbar />

            {/* Main content area: expands to take available space (`flex-grow`) */}
            {/* max-w-5xl limits the width for readability, mx-auto centers it horizontally */}
            {/* p-6 adds padding around the content */}
            <main className="flex-grow max-w-5xl mx-auto p-6">
                {children} {/* Render the child components passed to Layout */}
            </main>

            {/* Footer at the bottom with smaller text and gray color */}
            <footer className="text-center text-sm p-4 text-gray-500">
                © 2025 Your Name. All rights reserved.
            </footer>
        </div>
    );
}
