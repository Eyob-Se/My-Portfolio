/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // <-- add this line
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primone: "#272624",
        primtwo: "#363331",
        primthree: "#272624",
      },
      fontFamily: {
        heading: ["ClashDisplay", "sans-serif"],
        uibod: ["Manrope", "sans-serif"],
        microlab: ["Space", "sans-serif"],
      },
    },
  },
  plugins: [],
};
