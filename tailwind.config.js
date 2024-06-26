/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const defaultTheme=require("tailwindcss/defaultTheme")
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "brand-light":'#2EBF91',
         "brand-dark": "#1AC073",
         "white": "#F0FAF7",
         "yellowish":"#F3BA00",
          "grey":"#F2F2F2",
        
       
      }
    },
    screens:{
      'xs': '250px',
      ...defaultTheme.screens
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-none': {
          '&::-webkit-scrollbar': {
            'display': 'none'
          }
        }
      })
    })
  ],
}

