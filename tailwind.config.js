module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      darkGray: '#1c1e27',
      white: '#FFFFFF'
    },
    container: {
      padding: {
        DEFAULT: '2rem',
        sm: '4rem',
        lg: '20%',
        xl: '20%',
        '2xl': '20%',
      }
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
