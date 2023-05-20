/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '767.89px',
      md: '991px',
      lg: '1200px',
      xl: '1800px',
    },
    fontFamily: {
      sans: '"Encode Sans Semi Condensed", sans-serif',
      serif: 'Coustard, serif'
    },
    container: {
      center: true,
      padding: '1.25rem'
    },
    extend: {
      screens: {
        xs: '500px'
      },
      width: {
        '1/1': '1%'
      },
      fontFamily: {
        highlight: 'Mohave, sans-serif'
      },
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        gray: {
          50: '#eee',
          800: '#333'
        }
      },
      height: {
        '450': '28rem',
        '550': '34rem',
        '600': '37rem',
        '700': '44rem'
      },
      fontSize: {
        h1: 'var(--size-title-h1)',
        h2: 'var(--size-title-h2)',
        h3: 'var(--size-title-h3)'
      },
      gridTemplateColumns: {
        'md-layout': '3fr 12fr 5fr',
        'layout': '1fr repeat(2,6fr) 6fr'
      },
      transitionProperty: {
        'height': 'height'
      },
      backgroundImage: {
        'select-appearance': 'var(--select-icon)',
        'checkbox-appearance': 'var(--checkbox-icon)'
      },
      boxShadow: {
        'link': 'var(--shadow-link)',
        'link-hover': 'var(--shadow-link-hover)',
      }
    }
  },
  plugins: [],
}

