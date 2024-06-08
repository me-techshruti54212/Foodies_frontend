/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
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
         "yellow":"#F3BA00",
          "grey":"#F2F2F2",
        
       
      }
    },
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

