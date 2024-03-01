/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "serif"],
    },
    extend: {
      colors: {
        "primary-purple": "#6100C2",
        "light-purple": "#7900C2",
        "dark-purple": "#6100C2",
        "primary-dark": "#0c020f",
        "primary-grey": "#D9D9D9",
        "secondary-grey": "#969696",
        "primary-white": "#FFFFFF",
      },
      boxShadow: {
        "right-xl": "0 0 3px rgba(200, 100, 255, 0.7)",
      },
    },
  },
  plugins: [],
};
