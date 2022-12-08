/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '100px': '100px',
        '280px': '280px',
        '300px': '300px',
        '360px': '360px',
        '410px': '410px',
        '470px': '470px',
        '490px': '490px',
        '550px': '550px',
        '680px': '680px',
        '720px': '720px'
      }
    },
    colors: {
      'customBlack': '#171717',
      'customGrey': '#444444',
      'customRed': '#DA0037',
      'customWhite': '#EDEDED'
    },
    boxShadow: {
      'same': '3px 8px 12px 5px #444444'
    },
    backgroundImage: {
      'body-background': "url('/src/images/bg-leaf.webp')"
    }
  },
  plugins: [],
}
