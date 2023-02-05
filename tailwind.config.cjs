/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  
    "./src/**/*.jsx",
    "./index.html"
    ],

  theme: {

    colors: {
      'blue': '#C3EEFF',
      'blue-fundo': '#F0FBFF',
      'black': '#292929'

    },
  
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        "lg": '976px',
        'xl': '1440px',
        '2xl': '1536px',
      },

     

    },
  },
  plugins: [],
}
