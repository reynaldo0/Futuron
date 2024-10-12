/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#4CAF50", // Soft Green (used for accents)
          200: "#80E27E", // Light Green (used for hover or highlighted states)
          300: "#388E3C", // Darker Green (for titles and emphasis)
        },
        secondary: {
          100: "#FF7043", // Soft Coral (used for contrast)
          200: "#FFAB91", // Lighter Coral (subtle accents)
        },
        normal: {
          100: "#F5F5F5", // Very Light Gray (background)
          200: "#B0BEC5", // Medium Gray (used for secondary text)
          300: "#212121", // Dark Gray (used for primary text and contrast)
        },
      },
    },
  },
  plugins: [],
};
