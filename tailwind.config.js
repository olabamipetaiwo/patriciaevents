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
      maxWidth: {
        container: "68rem",
      },
      backgroundImage: {
        badge: "url('/src/assets/badge.png')",
      },
      gridTemplateColumns: {
        all__events: "repeat(auto-fit, minmax(15.625rem, 1fr))",
        featured__events: "repeat(auto-fit, minmax(32.75rem, 32.75rem))",
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
      screens: {
        container: "68rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
