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
      },
      keyframes: {
        trans: {
          '0%': { transform: 'translateY(-50px)' },
          '100%':{ transform: 'translateY(0px)' }
        }
      }
    },
  },
  plugins: [],
}

