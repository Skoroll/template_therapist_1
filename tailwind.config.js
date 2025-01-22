/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Chemin correct pour vos fichiers
  ],
  theme: {
    extend: {
      spacing: {
        'gapBase': '1.5rem',
        'gapXS': '0.5rem',
        'gapS': '0.75rem',
        'paddingS': '0.75rem',
        'paddingBase': '1.5rem',
        'marginxS': '0.5rem'
      },
      fontFamily: {
        handwriting: ['parisienne'], // Police manuscrite
        sans: ['"Lato"', ...defaultTheme.fontFamily.sans], // Police principale
      },
      colors: {
        mainColor: "#237e7f",        
        secondColor: "#FACC15",      
        blackBG: "#00000077",          
        textLight: "#F3F4F6",        
        accentColor: "#4B8D6C ",      
        thirdColor: "#D7C2B2 ",        
        grayBack: "#F3F4F6"
        
      },
      backgroundImage: {
        'custom-bg': "url("
      }
    },
  },
  plugins: [],
};
