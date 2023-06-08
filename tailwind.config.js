/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          greeny: "#8BAC3E",
          "greeny-2": "#A4B441",
          bluish: "#40A2B1",
          purplish: "#405EB6",
          magenta: "#B23F74",
        },
        transparent: {
          greeny: "#F0FEEB",
          bluish: "#E6F3F5",
          purplish: "#EAEEFA",
          magenta: "#F9EEF3",
          yellow: "#F3F7D9",
        },
      },
    },
  },
  plugins: [],
};
