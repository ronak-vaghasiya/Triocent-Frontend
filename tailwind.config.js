/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue": "#4784bc",
        "li-blue": "#529bde",
        "dark-blue": "#031B4E",
        "green": "#6c901c",
        "li-green": "#8cbc21",
        "gray": "#27272a",
        "li-gray": "#737373",
        "white-blur": "#ebf0f5",
        "field" : "#f0f7fd"
      },
      backgroundImage: {
        "hero-banner": "url('./src/assets/hero-banner.jpg')",
        "about-banner": "url('./src/assets/about-banner.jpg')",
        "product-banner": "url('./src/assets/product-banner.jpg')",
        "contact-banner": "url('./src/assets/contact-banner.jpg')",
        "contact-form": "url('./src/assets/contact-us-form.jpg')",
        "default-banner": "url('./src/assets/default-banner.jpeg')",
      },
    },
  },
  plugins: [],
};
