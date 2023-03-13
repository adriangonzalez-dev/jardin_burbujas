/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          100:'#364F6B',
          200:'#3FC1C9',
          300:'#F5F5F5',
          400:'#FC5185'
        }
      },
      fontFamily: {
        primary:['Yanone Kaffeesatz', 'sans-serif']
      }
    },
  },
  plugins: [],
}