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
        },
        media: {
          facebook: '#3b5998',
          twitter: '#00acee',
          whatsapp: '#25D366'
        },
        danger: {
          100: '#dc3545',
          200: '#dc35454d'
        }
      },
      fontFamily: {
        primary:['Yanone Kaffeesatz', 'sans-serif']
      },
      backgroundImage: {
        'parallax': "url('./assets/images/foto5.webp')",
      }
    },
  },
  plugins: [],
}