
const defaultTheme = require('tailwindcss/defaultTheme');

// gatsby-plugin-purgecss already handling unused css.
module.exports = {
  purge: {
    enabled: false,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      'sm': '320px',
      // => @media (min-width: 320px) { ... }

      'md': '640px',
      // => @media (min-width: 640px) { ... }

      'lg': '1240px',
      // => @media (min-width: 1024px) { ... }
    },
    spacing: {
      '1': 'var(--unit-1)',
      '2': 'calc(var(--unit-1) * 2)',
      '3': 'calc(var(--unit-1) * 3)',
      '4': 'calc(var(--unit-1) * 4)',
      '5': 'calc(var(--unit-1) * 5)',
      '6': 'calc(var(--unit-1) * 6)',
      '7': 'calc(var(--unit-1) * 7)',
      '8': 'calc(var(--unit-1) * 8)',
      '9': 'calc(var(--unit-1) * 9)',
      '10': 'calc(var(--unit-1) * 10)',
      '11': 'calc(var(--unit-1) * 11)',
      '12': 'calc(var(--unit-1) * 12)',
      '13': 'calc(var(--unit-1) * 13)',
      '14': 'calc(var(--unit-1) * 14)',
      '15': 'calc(var(--unit-1) * 15)',
      '16': 'calc(var(--unit-1) * 16)',
      '17': 'calc(var(--unit-1) * 17)',
      '18': 'calc(var(--unit-1) * 18)',
      '19': 'calc(var(--unit-1) * 19)',
      '20': 'calc(var(--unit-1) * 20)',
      'a': 'var(--unit-a)',
      'b': 'var(--unit-b)',
      'c': 'var(--unit-c)',
      'd': 'var(--unit-d)',
      'e': 'var(--unit-e)',
      'f': 'var(--unit-f)',
      'g': 'var(--unit-gz)',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'brand': 'var(--c-brand)',
      'navy': 'var(--c-navy)',
      'seaGreen': 'var(--c-seaGreen)',
      'freshBlue': 'var(--c-freshBlue)',
      'green': 'var(--c-green)',
      'yellow': 'var(--c-yellow)',
      'orange': 'var(--c-orange)',
      'lavender': 'var(--c-lavender)',
      'cream': 'var(--c-cream)',
      'tan': 'var(--c-tan)',
      'ivory': 'var(--c-ivory)',
      'porcelain': 'var(--c-porcelain)',
      'black': 'var(--c-black)',
      'charcoal': 'var(--c-charcoal)',
      'iron': 'var(--c-iron)',
      'steel': 'var(--c-steel)',
      'smoke': 'var(--c-smoke)',
      'fog': 'var(--c-fog)',
      'white': 'var(--c-white)',
    },
    fontSize: {
      'h1': ['1.75rem', '1'],
      'h2': ['1.50rem', '1'],
      'b1': ['1.25rem', '1'],
      'b2': ['1.00rem', '1'],
      'b3': ['0.75rem', '1'],
    }
  },
  variants: {},
  plugins: [],
};