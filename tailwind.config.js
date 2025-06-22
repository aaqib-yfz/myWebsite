module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#55E6A5",
        dark: "#141C27",
      },
      keyframes: {
        "draw-hexagon": {
          to: { "stroke-dashoffset": "0" },
        },
      },
      animation: {
        "draw-hexagon": "draw-hexagon 3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
