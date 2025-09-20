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
        namefont: ["Eyob", "sans-serif"],
        navfont: ["Nav", "sans-serif"],
        intern: ["Intern", "sans-serif"],
      },
    },
  },
  plugins: [],
};
