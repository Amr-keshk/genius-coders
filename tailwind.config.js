/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#00beae",
        orange: "#ff9501",
        thirdColor: "rgb(243 245 244)",
        darkblue: "#0f2a47",
        gray: "#a5a5a5",
        gradientStart: "#34d399",
        gradientEnd: "#3b82f6",
      }
    },
  },
  plugins: [],
}
