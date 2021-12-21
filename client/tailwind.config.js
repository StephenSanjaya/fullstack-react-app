module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      filter: ['hover', 'focus'],
      blur: ['group-hover', 'focus'],
      opacity: ['active'],
    },
  },
  plugins: [],
}
