/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        primary:"#ffff",
        fontcolor:"#272727",
        blue:"#2ca4ab",
        primary2:"#ebf9fa",
      },
      container: {
        center:true,
        padding: {
          default:"1rem",
          sm:"3rem",
        }
      }
    },
  },
  plugins: [],
}

