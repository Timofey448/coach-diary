const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue,d.ts}',
  ],
  darkMode: false, // or 'media' or 'class'
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
  },
  variants: {
    extend: {},
  },
  plugins: [],
}