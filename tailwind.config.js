/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      main: { 500: "#414141", 600: "#151515", 200: "#646464", 100: "#b1b1b1" },
      offwhite: "#fafafa",
      offblack: "#151515",
      accent: "#f61354",
    },
    backgroundImage: {
      marquee: "url('/MqBq.jpg')",
    },
  },
  plugins: [],
};
