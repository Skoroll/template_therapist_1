/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Chemin correct pour vos fichiers
  ],
  theme: {
    extend: {
      fontFamily: {
        handwriting: ['parisienne'], // Police manuscrite
        sans: ['"Lato"', ...defaultTheme.fontFamily.sans], // Police principale
      },
      colors: {
        mainColor: "#022c22", // Couleur personnalisée principale
        secondColor: "#c4bb3f",
        blackBG: "#00000077",
      },
    },
  },
  plugins: [],
};
