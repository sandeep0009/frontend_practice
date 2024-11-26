/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        yellow:{
          300:"#E4B40D"
        },
        blue:{
          500:"#071624"
        }
      }
    },
  },
  plugins: [],
}