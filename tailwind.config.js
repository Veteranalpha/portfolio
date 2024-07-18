/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html",
    "./src/**/*.html",  
    "./src/**/*.js",    
    "./src/input.css" ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          md: '3rem',
          lg: '1rem',
          xl: '6rem',
          '2xl': '8rem',
        },
      },
      colors: {
        'darkpurple': '#120F19',
        'greycolor': '#B6B3C5',
        'babyblue': '#7EC8E3',
        'secondaryColor': '#91E0B4',
        
      }
    },
  },
  plugins: [],
}

