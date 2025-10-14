/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        header: ["2.25rem", { lineHeight: "2.5rem", fontWeight: "700" }],
        subheader: ["1.5rem", { lineHeight: "2rem", fontWeight: "600" }],
      },
      keyframes: {
        gradientMove: {
          "0%, 100%": {
            backgroundPosition: "30% 40%, 80% 70%",
          },
          "50%": {
            backgroundPosition: "25% 45%, 75% 65%",
          },
        },
      },
      animation: {
        gradientMove: "gradientMove 12s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [daisyui],
};
