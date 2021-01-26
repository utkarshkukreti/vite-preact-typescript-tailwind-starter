module.exports = {
  purge: ['./index.html', './src/**/*'],
  theme: {
    extend: {
      colors: {
        ...require('tailwindcss/colors'),
        gray: require('tailwindcss/colors').coolGray,
      },
      fontFamily: {
        sans: '"Trebuchet MS", "Lucida Grande", sans-serif',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
