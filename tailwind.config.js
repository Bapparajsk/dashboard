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
      backgroundImage: {
        "hero-pattern": "linear-gradient(to right bottom, #000000, #000000, #000000, #000000, #000000, #0d0205, #15030b, #1b0511, #24091d, #290c2d, #291140, #1b1a55)",
        "user-post-card": "linear-gradient(to left top, #09122c, #09122c, #09122c, #09122c, #09122c, #0f1028, #130d24, #150b20, #160718, #130410, #0c0106, #000000)",
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
