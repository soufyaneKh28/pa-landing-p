/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#4C4780",
        secondary: "#6D67B8",
        dimWhite: "#A2A2A2",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        Changa: ["Changa", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1500px",
    },
  },
  plugins: [],
};
