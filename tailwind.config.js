/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
    "./**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '24px',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      unique: ["Lily Script One", 'system-ui'],
    },
    extend: {
      backgroundImage: {
        'jumbotron': "url('/src/public/media/bannerBGT.webp')",
      },
      colors: {
        dark: '#101820',
        'gold': {
          100: '#FFF9E6',
          200: '#FFE38E',
          300: '#FFD861',
          400: '#FFCE35',
          500: '#EAB308',
          600: '#C19200',
          700: '#987300',
          800: '#705400',
          900: '#473600',
        },
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}