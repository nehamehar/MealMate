/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",  
    "./src/**/*.{html,js,ts,jsx,tsx}", 
    // telling our project we can use tailwind any of this file with this extension
  ],

  theme: {
    extend: {},
  },
  
  plugins: [],

}

