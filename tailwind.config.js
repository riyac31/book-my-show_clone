// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        aradhana:
{
  50: '#fdfce0',
  100: '#f5f3b9',
  200: '#eeeb90',
  300: '#e7e265',
  400: '#e0da3b',
  500: '#c6c122',
  600: '#9a9618',
  700: '#6e6b0f',
  800: '#424005',
  900: '#171500',
},

navCol:



{
  50: '#e8f3fd',
  100: '#c6d8eb',
  200: '#2B3148',
  300: '#7ea3cd',
  400: '#5b89bf',
  500: '#426fa5',
  600: '#335782',
  700: '#243e5d',
  800: '#142539',
  900: '#040c17',
}
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
