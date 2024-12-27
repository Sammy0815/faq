/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orangeLight: "#F4A226",
        orangeDark: "#E5771F",
        chocolate: "#5A3E2B",
        offGreen: "#76C7AD",
        accent: "#FFEBB3",
      },
      fontFamily: {
        Monoton: "Monoton",
      },
    },
  },
  plugins: [],
};
