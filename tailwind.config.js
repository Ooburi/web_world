/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'trans': 'trans 1s linear infinite',
        'shake': 'shake 0.2s linear infinite'
      },
      keyframes: {
        trans: {
          '0%': { transform: 'translateY(-50px)' },
          '100%':{ transform: 'translateY(0px)' }
        },
        shake: {
          '0%': { transform: 'translateY(0px)' },
          '20%': { transform: 'translateY(-1px)' },
          '40%': { transform: 'translateY(1px)' },
          '60%':{ transform: 'translateX(1px) translateY(0px)' },
          '80%':{ transform: 'translateX(-1px)' },
          '100%':{ transform: 'translateX(0px)' }
        }
      }
    },
  },
  plugins: [],
}

