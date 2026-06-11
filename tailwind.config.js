/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Roboto"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        ink: "#0D0D0D",
        paper: "#F5F2EE",
        accent: "#E84C1E",
        muted: "#888880",
        border: "#D8D4CE",
        card: "#EDEAE6",
      },
    },
  },
  plugins: [],
};
