
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./App.css",
  ],
  theme: {
    extend: {
      colors : {
        'main' : "#00000",
      }
    },
  },
  plugins: [],
}
