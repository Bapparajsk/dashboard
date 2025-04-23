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
        "user-post-card": "linear-gradient(to left top, #1d267d, #18236c, #151f5c, #131b4c, #11173c, #161331, #170f26, #160a1d, #150616, #12040e, #0b0206, #000000)",
        "user-post-card-hidden": "linear-gradient(to left top, #7d1935, #6a163c, #54173e, #3e173c, #281636, #21132d, #1b1025, #160a1d, #150616, #12040e, #0b0206, #000000)",
        "employee-level-bronze": "linear-gradient(to left top, #000000, #000000, #000000, #000000, #000000, #190e10, #29171a, #3a1e21, #62302d, #8a4534, #ae6036, #cd7f32)",
        "employee-level-silver": "linear-gradient(to left top, #000000, #000000, #000000, #000000, #000000, #0e0e0e, #171717, #1f1f1f, #2a2a2a, #353535, #404040, #4b4b4b)",
        "employee-level-gold": "linear-gradient(to left top, #000000, #000000, #000000, #000000, #000000, #201215, #381c1f, #522728, #8d4433, #c16c32, #e99d24, #ffd700)",
        "employee-level-diamond": "linear-gradient(to left top, #000000, #000000, #000000, #000000, #000000, #191617, #2a2528, #3b353b, #605d6b, #808b9f, #9bbdd2, #b9f2ff)",
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
