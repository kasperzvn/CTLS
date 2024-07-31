/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        
        //MAIN
        gochi: ["Gochi Hand", ...defaultTheme.fontFamily.sans],
        gara: ["EB Garamond", ...defaultTheme.fontFamily.sans],


      }
    },
    fontSize: {
      'sm': ['14px', {
        lineHeight: '21px',
      }],
      'base': ['16px', {
        lineHeight: '21px',
        fontWeight: '450',
      }],
      '5xl': ['48px', {
        lineHeight: '38px',
        fontWeight: '800',
        }],
      '6xl': ['60px', {
        lineHeight: '52px',
        fontWeight: '800',
        }],
    }
  },
  plugins: [],
}

