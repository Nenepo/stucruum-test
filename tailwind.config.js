/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: '#939396',
        lightGrey: '#f8f8f8',
        borderGrey: '#f2f2f2',
        black: '#26272d'
      },
      fontSize: {
        sm: '12px',
        md: '14px',
        lg: '16px'
      },
      fontWeight: {
        thin: '300',
        normal: '400',
        medium: '500'
      },
      keyframes: {
        slidein: {
          '0%': { right: '-60%' },
          '100%': { right: '0%' },
        },
        slideout: {
          '0%': { right: '0%' },
          '100%': { right: '-60%' },
        },
      },
      animation: {
        slidein: 'slidein 0.6s ease-in-out forwards',
        slideout: 'slideout 0.6s ease-in-out forwards',
      },
    },
  },

  plugins: [],
}

