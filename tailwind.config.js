/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        turquoise: "hsl(180, 50%, 40%)",
        lightGrey: "hsl(0, 0%, 97%)",
      },
    },
  },
  plugins: [],
};
