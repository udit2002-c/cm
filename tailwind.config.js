
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        deepskyblue: "#42abd9",
        white: "#fff",
        black: "#000",
        darkslategray: "#383838",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "integral-cf": "'Integral CF'",
      },
    },
    fontSize: {
      "6xl": "25px",
      "11xl": "30px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
