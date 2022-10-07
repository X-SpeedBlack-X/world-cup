/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "18px"],
      base: ["16px", "24px"],
      xl: ["20px", "28px"],
      "2xl": ["24px", "32px"],
      "3xl": ["32px", "40px"],
      "4xl": ["48px", "56px"],
    },
    extend: {
      container: {
        center: true,
      },
      colors: {
        black: "#0B0E16",
        white: "#F4F6FF",

        red: {
          300: "#AF053F",
          600: "#300219",
        },
        pink: {
          300: "#BB2E57",
        },
        gray: {
          300: "#B1B4BD",
          400: "#91949D",
          600: "#696C74",
        },
      },
    },
  },
  plugins: [],
};
