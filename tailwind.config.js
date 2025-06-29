/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',

  theme: {
    extend: {
        keyframes: {
        flyIn: {
          '0%': {
            transform: 'translateY(-200px) rotate(-5deg)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0) rotate(0deg)',
            opacity: '1',
          },
        },
      },
      animation: {
        'fly-in': 'flyIn 0.6s ease-out forwards',
      },
    
    },
  },
  plugins: [],
}

