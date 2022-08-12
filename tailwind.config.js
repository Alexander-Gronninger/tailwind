/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        red: {
          700: "#ff0000",
        },
      },
      borderRadius: {
        "28px": "28px",
      },
      width: {
        "730px": "730px",
      },
    },
  },
  plugins: [],
};
