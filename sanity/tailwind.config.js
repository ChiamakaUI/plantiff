/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'black-overlay': 'rgba(0, 0, 0, 0.5)',
        'bg-primary': '#004529'
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
