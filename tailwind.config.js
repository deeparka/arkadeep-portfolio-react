/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '26': '100px'
      }
    },
    colors: {
      'customBlack': '#171717',
      'customGrey': '#444444',
      'customRed': '#DA0037',
      'customWhite': '#EDEDED'
    }
  },
  plugins: [],
}
