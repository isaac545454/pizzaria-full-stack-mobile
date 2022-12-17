/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-900': '#101026',
        'dark-700': '#1d1d2e',
        'green-primary': '#3fffa3',
        'red-primary': '#ff3f4b'

      },
    },
  },
  plugins: [],
}