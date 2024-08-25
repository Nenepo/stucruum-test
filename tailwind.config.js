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
        thin: '300' ,
        normal: '400',
        medium: '500'
      }
    },
  },
  plugins: [],
}

