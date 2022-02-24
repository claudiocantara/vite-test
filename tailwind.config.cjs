const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    screen: {
      '2xl': '1536px',
      ...defaultTheme.screens
    },
    extend: {},
  },
  plugins: [],
}
