/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        headingz: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(50px)' },
          opacity:0
        }
      },
      animation: {
        headingz: 'headingz 3s ease-in-out infinite ',
      }
    },
  },
  plugins: [],
}
