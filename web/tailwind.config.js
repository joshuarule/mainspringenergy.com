const defaultTheme = require('tailwindcss/defaultTheme')

// gatsby-plugin-purgecss already handling unused css.
module.exports = {
  purge: {
    enabled: false,
  },
  theme: {
    extend: {
      fontFamily: {
        medium: ['CamphorStd-Medium', ...defaultTheme.fontFamily.sans],
        regular: ['CamphorStd-Regular', ...defaultTheme.fontFamily.sans],
        light: ['CamphorStd-Light', ...defaultTheme.fontFamily.sans],
        bold: ['CamphorStd-Bold', ...defaultTheme.fontFamily.sans],
        heavy: ['CamphorStd-Heavy', ...defaultTheme.fontFamily.sans],
        thin: ['CamphorStd-Thin', ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      sm: '320px',
      'sm-only': { max: '639px' },
      md: '640px',
      'md-max': { max: '1239px' },
      'md-only': { min: '640', max: '1239px' },
      lg: '1240px',
    },
    spacing: {
      0: 0,
      1: 'var(--unit-1)',
      2: 'calc(var(--unit-1) * 2)',
      3: 'calc(var(--unit-1) * 3)',
      4: 'calc(var(--unit-1) * 4)',
      5: 'calc(var(--unit-1) * 5)',
      6: 'calc(var(--unit-1) * 6)',
      7: 'calc(var(--unit-1) * 7)',
      8: 'calc(var(--unit-1) * 8)',
      9: 'calc(var(--unit-1) * 9)',
      10: 'calc(var(--unit-1) * 10)',
      11: 'calc(var(--unit-1) * 11)',
      12: 'calc(var(--unit-1) * 12)',
      13: 'calc(var(--unit-1) * 13)',
      14: 'calc(var(--unit-1) * 14)',
      15: 'calc(var(--unit-1) * 15)',
      16: 'calc(var(--unit-1) * 16)',
      17: 'calc(var(--unit-1) * 17)',
      18: 'calc(var(--unit-1) * 18)',
      19: 'calc(var(--unit-1) * 19)',
      20: 'calc(var(--unit-1) * 20)',
      a: 'var(--unit-a)',
      b: 'var(--unit-b)',
      c: 'var(--unit-c)',
      d: 'var(--unit-d)',
      e: 'var(--unit-e)',
      f: 'var(--unit-f)',
      g: 'var(--unit-g)',
    },
    colors: {
      transparent: 'transparent',
      'black-40': 'rgba(0,0,0,.4)',
      current: 'currentColor',
      brand: 'var(--c-brand)',
      navy: 'var(--c-navy)',
      seaGreen: 'var(--c-seaGreen)',
      freshBlue: 'var(--c-freshBlue)',
      green: 'var(--c-green)',
      yellow: 'var(--c-yellow)',
      orange: 'var(--c-orange)',
      lavender: 'var(--c-lavender)',
      cream: 'var(--c-cream)',
      tan: 'var(--c-tan)',
      ivory: 'var(--c-ivory)',
      porcelain: 'var(--c-porcelain)',
      black: 'var(--c-black)',
      charcoal: 'var(--c-charcoal)',
      iron: 'var(--c-iron)',
      steel: 'var(--c-steel)',
      smoke: 'var(--c-smoke)',
      fog: 'var(--c-fog)',
      white: 'var(--c-white)',
      techGradientFrom: '#4C8CF6',
      techGradientTo: '#2B2C58',
    },
    fontSize: {
      h1: ['var(--f-h1--size)', 'var(--f-h1--lineHeight)'],
      h2: ['var(--f-h2--size)', 'var(--f-h2--lineHeight)'],
      h3: ['var(--f-h3--size)', 'var(--f-h3--lineHeight)'],
      b1: ['var(--f-b1--size)', 'var(--f-b1--lineHeight)'],
      b2: ['var(--f-b2--size)', 'var(--f-b2--lineHeight)'],
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      5: '5px',
      6: '6px',
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/aspect-ratio')],
  corePlugins: {
    container: false,
  },
}