/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-10": "#454545",
        "gray-20": "#E4C59E",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#F5F7F8",
        "primary-100": "#FFE1E0",
        "primary-200": "#FF6000",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "primary-600": "#FFA559",
        "secondary-300": "#FF6000",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
        "red-100": "#803D3B",
        "brown-100" : "#AF8F6F",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/Fitness.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};