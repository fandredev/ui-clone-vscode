/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,tsx}"],
  theme: {
    extend: {
      colors: {
        version_text: "#9ba3b4",
        background_buttons: "#0078d4",
        background_cards_extensions: "#ffffff0a",
        border_color_hover_card_extensions: "#fff3",
      },
    },
  },
  plugins: [],
};
