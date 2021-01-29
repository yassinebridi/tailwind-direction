module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-direction').default,
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
  corePlugins: {
    borderRadius: false,
    borderWidth: false,
    clear: false,
    divideWidth: false,
    float: false,
    margin: false,
    padding: false,
    space: false,
    textAlign: false,
    transformOrigin: false,
  },
};
