/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#00beae",
        secondaryColor: "#ff9501",
        thirdColor: "rgb(243 245 244)",
        primaryTextColor: "#0f2a47",
        secondaryTextColor: "#a5a5a5",
      }
    },
  },
  plugins: [],
}
