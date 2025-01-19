/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shine: {
          "0%": { transform: "translateX(-150%)" },
          "100%": { transform: "translateX(300%)" },
        },
      },
      animation: {
        shine: "shine 2s linear infinite",
      },
    },
  },
  plugins: [],
};
