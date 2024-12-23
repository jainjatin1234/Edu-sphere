/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'rotate(75deg) translateX(0)' },
          '25%': { transform: 'rotate(73deg) translateX(-5px)' },
          '50%': { transform: 'rotate(78deg) translateX(5px)' },
          '75%': { transform: 'rotate(79deg) translateX(-5px)' },
        },
      },
      animation: {
        shake: 'shake 0.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};