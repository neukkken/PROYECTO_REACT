/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azul-lol': '#00C8C8',
        'azul-lol-opaco': 'rgba(0, 200, 200, 0.5)',
        'negro-lol': '#111111'
      }
    },
  },
  plugins: [],
}

