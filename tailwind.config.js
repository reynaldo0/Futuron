/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100 : "#34D399",
          200 : "#A7F3D0",
          300 : "#064E3B",
        },
        secondary: {
          100 : "#EF4444",
          200 : "#FEE2E2",
          300 : "#7F1D1D",
        },
        normal: {
          100 : "#F3F4F6",
          200 : "#9CA3AF",
          300 : "#1F2937",
        },
      },
    },
  },
  plugins: [],
};
