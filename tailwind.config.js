/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "soft-orange": "hsl(35, 77%, 62%)",
      "soft-red": "hsl(5, 85%, 63%)",
      "off-white": "hsl(36, 100%, 99%)",
      "grayish-blue": "hsl(233, 8%, 79%)",
      "dark-grayish-blue": "hsl(236, 13%, 42%)",
      "very-dark-blue": "hsl(240, 100%, 5%)",
    },

    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },

    fontWeight: {
      normal: "400",
      bold: "700",
      extrabold: "800",
    },

    screens: {
      sm: "716px",
      md: "1080px",
      lg: "1142px",
    },
  },
  plugins: [],
};
