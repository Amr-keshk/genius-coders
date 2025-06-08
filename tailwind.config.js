/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "var(--green)",
        orange: "var(--orange)",
        thirdColor: "var(--thirdColor)",
        darkblue: "var(--darkBlue)",
        gray: "var(--gray)",
        gradientStart: "var(--gradientStart)",
        gradientEnd: "var(--gradientEnd)",
        lightOrange: "var(--lightOrange)",
      }
    },
  },
  plugins: [],
}
