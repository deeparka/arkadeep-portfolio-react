/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        '26': '100px'
      }
    },
    colors: {
      'customBlack': '#0f0e0e',
      'customWhite': '#eeeeee'
    }
  },
  plugins: [],
}
