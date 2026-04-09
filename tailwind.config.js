/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {

    extend: {
          screens: {
      sm: "576px",
      md: "860px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
      colors: {
        primary: "#C4DDF2",
        secondary: "#3457BF",
        main: "#1F1F26",
      },
      keyframes: {
        moveUp: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(10px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        moveUp: "moveUp 4s ease-in-out infinite",
      },
    },
  },

  plugins: [],
};
