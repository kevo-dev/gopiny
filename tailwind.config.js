/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      keyframes: {
        headingz: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(50px)' },
          opacity:0
        }
      },
      animation: {
        headingz: 'headingz 3s ease-in-out  ',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require("tailwind-gradient-mask-image"),
    require("flowbite/plugin"),
  ],
}
