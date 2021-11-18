module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      animation: {
        'skeleton-loading': 'skeleton-loading 1.4s ease infinite',
      },
      backgroundImage: {
        'gradient-skeleton-loading':
          'linear-gradient(90deg,rgba(190,190,190,.2) 25%,rgba(129,129,129,.24) 37%,rgba(190,190,190,.2) 63%)',
      },
      backgroundSize: {
        'skeleton-loading': '400% 100%',
      },
      colors: {

        '0099ffff' : '#0099ffff',
        'f5f2f2ff' : '#f5f2f2ff',
        '66c2ffff' : '#66c2ffff',
        '005c99ff' : '#005c99ff',
        '231f1f': '#231f1f',
        'bf8415': '#bf8415',

        danger: {
          DEFAULT: '#FF464F',
          dark: '#FF323C',
        },
        primary: {
          light: '#66C2FF',
          DEFAULT: '#0099FF',
          dark: '#005C99',
        },
        secondary: {
          light: '#F9DA9F',
          DEFAULT: '#F2A71B',
          dark: '#916108',
        },
        blue: {
          light: '#E5F5FF',
          DEFAULT: '#0099FF',
          dark: '#004F83',
        },
        orange: {
          light: '#FFF8ED',
          DEFAULT: '#F2A71B',
          dark: '#7A3700',
        },
        green: {
          light: '#D9F7BE',
          DEFAULT: '#389E0D',
          dark: '#266B09',
        },
        purple: {
          light: '#EFDBFF',
          DEFAULT: '#531DAB',
          dark: '#3A1478',
        },
        teal: {
          light: '#B5F5EC',
          DEFAULT: '#08979C',
          dark: '#056569',
        },
        grey: {
          light: '#EBE4E4',
          dark: '#594E4E',
          DEFAULT: '#121111',
        },
        light: {
          100: '#EBE4E4',
          300: '#F5F2F2',
        },
        dark: {
          100: '#231F1F',
          200: '#332C2C',
          300: '#594E4E',
          400: '#877878',
          500: '#B2A1A1',
        },
      },
      borderRadius: {
        '3xl': '1.5rem',
        'custom': '0.625rem',
      },
      fontFamily: {
        sans:
          '"Inter",ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
      },
      fontSize: {
        base: '0.9375rem',
        'heading-1': ['5.75rem', '7rem'],
        'heading-2': ['3.625rem', '4.375rem'],
        'heading-3': ['3rem', '3.5rem'],
        'heading-4': ['2rem', '2.5rem'],
        'heading-5': ['1.5rem', '1.75rem'],
        'heading-6': ['1.1875rem', '1.5rem'],
        xxs: '0.625rem',
      },
      keyframes: {
        'skeleton-loading': {
          '0%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0 50%' },
        },
      },
      letterSpacing: {
        'heading-1': '-1.5px',
        'heading-2': '-0.5px',
        'heading-3': '0',
        'heading-4': '0.25px',
        'heading-5': '0',
        'heading-6': '0.15px',
      },
      lineHeight: {
        3.5: '0.875rem',
        4.5: '1.125rem',
      },
    },
  },
  variants: {
    width: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
    backgroundColor: ['active'],
    extend: {
      width: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
      backgroundColor: ['active'],
    }
  },
  plugins: [],
}
