/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'forBody': ['Roboto', 'sans-serif'],
      'forTitle': ['Lexend Deca','sans-serif']
    }
  },
  plugins: [],
}
