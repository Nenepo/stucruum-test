/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: '#939396',
        lightGrey: '#f8f8f8',
        borderGrey: '#E0E0E0',
        black: '#26272d', 
        textGrey: '#A5A5A5',
        textDark: '#26272D',
        inputBorder: '#F0F0F0',
        btnBg: ' #26272D',
      },
      fontSize: {
        sm: '12px',
        md: '14px',
        lg: '16px',
        xl: '18px'
      },
      fontWeight: {
        thinner: '200',
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

