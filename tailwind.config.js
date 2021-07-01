module.exports = {
//   mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
        fontFamily: {
            sans: ['"DM Sans"', 'sans-serif'],
            body: ['"Inter"', 'sans-serif']
        },
        colors: {
            custom: {
                background: '#f3f3f3',
            }
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
