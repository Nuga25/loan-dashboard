/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "deep-blue": "#041643",
        "ink-text": "#252424",
        "ink-dark": "#696969",
        "ink-darker": "#3F3F3F",
        "input-bg": "#F5F5F5",
        "gray-bg": "#F7F9FA",
        "light-blue": "rgba(224, 233, 255, 0.72)",
        "light-green": "#E4FFE0",
        "light-red": "#FFE0E0",
        "light-yellow": "#FFFCE0",
        "card-gray-bg": "#F6F6F6",
      },
    },
  },
  plugins: [],
};
