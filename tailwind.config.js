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
            fontFamily: {
                highlight: 'Mohave, sans-serif'
            },
            fontSize: {
                special: 'var(--size-title-special)',
                'xs-special': 'var(--size-title-special-xs)',
                h1: 'var(--size-title-h1)',
                h2: 'var(--size-title-h2)',
                h3: 'var(--size-title-h3)'
            },
            colors: {
                primary: 'rgb(var(--color-primary) / <alpha-value>)',
                secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
                gray: {
                    50: '#eee',
                    800: '#333'
                }
            },
            width: {
                '1/1': '1%'
            },
            height: {
                '450': '28rem',
                '550': '34rem',
                '600': '37rem',
                '700': '44rem'
            },
            transitionProperty: {
                'height': 'height',
                'width': 'width'
            },
            backgroundImage: {
                'select-appearance': 'var(--select-icon)',
                'checkbox-appearance': 'var(--checkbox-icon)'
            },
            boxShadow: {
                'link': 'var(--shadow-link)',
                'link-hover': 'var(--shadow-link-hover)',
            },
            zIndex: {
                '1': '1'
            },
            gridTemplateRows: {
                'full-height': '5rem 1fr 5rem',
                'poster': '5rem 50vh minmax(20vh,1fr) 5rem',
                'sm-poster': 'repeat(5,minmax(6.25rem,10vw)) minmax(9.375rem,1fr) minmax(30vh,1fr) minmax(6.25rem,1fr) 8rem',
                'lg-poster': 'repeat(5,minmax(6.25rem,10vw)) minmax(9.375rem,1fr) minmax(auto,1fr) minmax(6.25rem,1fr) 8rem',
                'xl-poster': 'repeat(5,minmax(6.25rem,7vw)) minmax(9.375rem,1fr) minmax(auto,1fr) minmax(6.25rem,1fr) 8rem'
            },
            gridTemplateColumns: {
                'md-layout': '3fr 12fr 5fr',
                'layout': '1fr repeat(2,6fr) 6fr',
                'poster': 'minmax(6.25rem,10vw) 1fr 1fr',
                'sm-poster': 'repeat(2,minmax(6.25rem,10vw)) minmax(auto,1fr) repeat(4,minmax(6.25rem,10vw))',
                'lg-poster': 'repeat(2,minmax(6.25rem,10vw)) minmax(40vw,1fr) repeat(4,minmax(6.25rem,10vw))',
                'xl-poster': 'repeat(2,minmax(6.25rem,7vw)) minmax(40vw,1fr) repeat(4,minmax(6.25rem,7vw))'
            },
            gridRowStart: {
                '8': '8',
                '9': '9',
                '10': '10'
            },
            gridRowEnd: {
                '8': '8',
                '9': '9',
                '10': '10'
            },
            gridColStart: {
                '8': '8',
                '9': '9',
                '10': '10'
            },
            gridColEnd: {
                '8': '8',
                '9': '9',
                '10': '10'
            }
        }
    },
    plugins: [],
}
