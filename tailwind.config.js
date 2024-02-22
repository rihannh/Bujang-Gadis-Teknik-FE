/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
    "./**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      backgroundImage: {
        'jumbotron': "url('/src/public/media/banner.webp')",
      },
      colors: {
        primary: '#E6A514',
        secondary: '#27274A',
        background: '#151521',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}