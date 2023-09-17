/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,tsx}', './node_modules/react-tailwindcss-select/dist/index.esm.js'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      farro: ['Roboto Condensed', 'sans-serif'],
      workSans: ['Work Sans', 'sans-serif'],
      inter: ['Inter', 'sans-serif']
    },
    extend: {
      spacing: {
        100: '10rem',
        112: '15rem',
        116: '20rem',
        120: '24rem',
        124: '28rem',
        128: '32rem',
        144: '36rem'
      }
    }
  },
  plugins: []
}

