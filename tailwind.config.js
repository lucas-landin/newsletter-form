/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        colors:{
          'tomato': '#FF6257',
          'dark-gray':'#242742',
          'coal-gray':'#36384E',
          'base-gray': '#9294A0',
          'peach':'#E95553',
          'peach-p':'#FF527B'
          
        },
        backgroundImage: {
          "list-icon": "url('/icon-list.svg')",
        },   
    },
  },
  plugins: [],
}
