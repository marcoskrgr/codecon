/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wobble: {
          '0%, 100%': {
            transform: 'translateX(0%)',
            transformOrigin: '50% 50%',
          },
          '15%': {
            transform: 'translateX(-5px) rotate(-6deg)',
          },
          '30%': {
            transform: 'translateX(5px) rotate(6deg)',
          },
          '45%': {
            transform: 'translateX(-5px) rotate(-3.6deg)',
          },
          '60%': {
            transform: 'translateX(3px) rotate(2.4deg)',
          },
          '75%': {
            transform: 'translateX(-2px) rotate(-1.2deg)',
          },
        },
      },
      animation:{
        'wobble': 'wobble 1s linear infinite',
      }
    },
  },
  plugins: [],
}

