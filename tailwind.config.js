/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {},
      boxShadow: {
        "3xl": "0 30px 10px -12px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
