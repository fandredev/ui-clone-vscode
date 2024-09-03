/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,tsx}"],
  theme: {
    extend: {
      colors: {
        version_text: "#9ba3b4",
        background_buttons: "#0078d4",
      },
    },
  },
  plugins: [],
};
