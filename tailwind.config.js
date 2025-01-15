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
        mainColor: "#D97706",        // Orange brûlé pour un aspect chaleureux et audacieux
        secondColor: "#FACC15",      // Jaune doré lumineux pour attirer l'attention
        blackBG: "#00000077",          // Bleu-noir profond pour un contraste élégant
        textLight: "#F3F4F6",        // Blanc cassé pour une bonne lisibilité
        accentColor: "#EF4444",      // Rouge vif pour des éléments marquants
        thirdColor: "#FDE68A"        // Jaune pastel doux pour un équilibre visuel
        
        
      },
      backgroundImage: {
        'custom-bg': "url("
      }
    },
  },
  plugins: [],
};
