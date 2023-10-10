const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue,d.ts}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
        gray: colors.slate,
        rose: colors.rose,
        green: colors.emerald,
      },
    },
    fontFamily: {
      RobotoCondensed: ['Roboto Condensed, system-ui, sans-serif']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}