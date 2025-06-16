/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class", // ✅ Enables class-based dark mode
  theme: {
    extend: {},
  },
  plugins: [],
};
