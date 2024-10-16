/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary : {
          100 : "#D6EFD8",
          200 : "#80AF81",
          300 : "#508D4E",
          400 : "#1A5319",
        }
      },
    },
  },
  plugins: [],
};
