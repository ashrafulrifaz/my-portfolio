/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      'main': ['Inter', 'sans-serif'],
      'second': ['Raleway', 'sans-serif']
      },
      colors: {
        'second': '#282A2D',
        'br': '#ffffff3b'
      }
    },
  },
  plugins: [require("daisyui")],
}

