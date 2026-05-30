/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#08060E',
        cardBg: '#1E1D20',
        cardBgLight: '#27262C',
        inputBg: '#372F47',
        primary: '#7645D9',
        accent: '#31D0AA',
        textPrimary: '#F4EEFF',
        textSecondary: '#B8ADD2',
        success: '#31D0AA',
        error: '#ED4B9E',
        warning: '#FFB237',
      },
      fontFamily: {
        sans: ['Kanit', 'sans-serif'],
      },
      borderRadius: {
        'card': '24px',
        'input': '16px',
        'btn': '12px',
      }
    },
  },
  plugins: [],
}
