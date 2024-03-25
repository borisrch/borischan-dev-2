/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    fontFamily: {
      'sans': ['"Poppins"', 'Poppins', 'ui-sans-serif', 'sans-serif'],
      'serif': ['"Libre Baskerville"', 'Libre Baskerville', 'ui-serif', 'serif']
    },
    extend: {
      colors: {
        'prussian': `#003049`,
        'fire': `#D62828`,
        'mulberry': `#8c033e`,
        'tangerine': `#F77F00`,
        'xanthous': `#FCBF49`,
        'vanilla': `#EAE2B7`,
        'mirage': `#1D2D35`,
        'catskill': `#EFF3F7`,
        beige: {
          DEFAULT: `#faf8f7`,
        }
      }
    },
  },
  plugins: [],
}

