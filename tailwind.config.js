/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        "68px": "68px",
        "100px": "100px",
        "180px": "180px",
        "280px": "280px",
        "300px": "300px",
        "360px": "360px",
        "410px": "410px",
        "470px": "470px",
        "490px": "490px",
        "550px": "550px",
        "680px": "680px",
        "720px": "720px",
      },
    },
    colors: {
      customBlack: "#171717",
      customGrey: "#444444",
      customDrawerGrey: "#696969",
      customRed: "#DA0037",
      customHoverRed: "#C10031",
      customWhite: "#EDEDED",
    },
    backgroundImage: {
      "body-background": "url('/src/images/bg-leaf.webp')",
    },
    rotate: {
      17: "17deg",
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
