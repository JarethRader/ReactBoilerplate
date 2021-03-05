const colors = require("tailwindcss/colors");

module.exports = {
  purge: false,
  theme: {
    extend: {
      height: {
        "1/12": "8.33333333333333%",
        "1/6": "16.66666666666667%",
        "1/4": "25%",
        "1/3": "33.33333333333333%",
        "5/12": "41.66666666666667%",
        "1/2": "50%",
        "7/12": "58.33333333333333%",
        "2/3": "66.66666666666667%",
        "3/4": "75%",
        "5/6": "83.33333333333333%",
        "11/12": "91.66666666666667%",
      },
      spacing: {
        18: "4.5rem",
        27: "6.75rem",
        30: "7.5rem",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      fuschia: colors.fuchsia,
      green: colors.green,
      black: colors.black,
      white: colors.white,
      gray: colors.blueGray,
      blue: colors.blue,
      red: colors.rose,
      yellow: colors.amber,
      orange: colors.orange,
    },
  },
  variants: {},
  plugins: [],
};
