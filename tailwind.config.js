import {heroui} from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
          "poppins": ["Poppins", "sans-serif"],
      },
      animation: {
        "bell-spin": "bell-spin .3s linear",
      },
        keyframes: {
          "bell-spin": {
            "0%, 100%": { transform: "rotate(0deg)" },
            "35%": { transform: "rotate(45deg)" },
            "75%": { transform: "rotate(-45deg)" },
          },
        },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
