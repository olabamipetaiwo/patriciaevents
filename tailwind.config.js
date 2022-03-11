module.exports = {
  content: [
    "./views/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  purge: [],
  darkMode: false,

  theme: {
    fontFamily: {
      display: ["BR Firma", "sans-serif"],
    },
    extend: {
      borderRadius: {
        xxs: "0.625rem",
      },
      fontSize: {
        xxs: ["0.625rem", "0.75rem"],
      },
      minHeight: {
        300: "18.75rem",
      },
      backgroundImage: {
        badge: "url('/src/assets/badge.png')",
      },
      gridTemplateColumns: {
        all__events: "repeat(auto-fit, minmax(250px, 1fr))",
        featured__events: "repeat(auto-fit, minmax(524px, 1fr))",
      },
      colors: {
        dark: "#2F2F2F",
        grey: {
          one: "#6C757D",
          two: "#E8E8E8",
          three: "#EAEDF7",
          four: "#6C757D",
        },
        primary: {
          main: "#372AA4",
          bg: "#F8F9FB",
        },
        secondary: {
          main: "#FF6A2C",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
