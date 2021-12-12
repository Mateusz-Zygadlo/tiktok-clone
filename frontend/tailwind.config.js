module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '28.125': '28.125rem',
        '37.5': '37.5rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}