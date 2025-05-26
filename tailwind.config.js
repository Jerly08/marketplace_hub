/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // This changes from 'media' (system preference) to 'class' (manual toggle)
  theme: {
    extend: {},
  },
  plugins: [],
}; 