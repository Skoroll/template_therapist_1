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
        mainColor: "#022c22",
        secondColor: "#c4bb3f",
        blackBG: "#00000077",
        textLight: "#4b5563",
        accentColor: "#15803D",
        thirdColor: "#D1FAE5"
      },
      backgroundImage: {
        'custom-bg': "url("
      }
    },
  },
  plugins: [],
};
