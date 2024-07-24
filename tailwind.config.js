/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        
        //MAIN
        payton: ["Paytone One", ...defaultTheme.fontFamily.sans],
        yatra: ["Yatra One", ...defaultTheme.fontFamily.sans],
        gochi: ["Gochi Hand", ...defaultTheme.fontFamily.sans],
        jaro: ["Jaro", ...defaultTheme.fontFamily.sans],


      }
    },
  },
  plugins: [],
}

