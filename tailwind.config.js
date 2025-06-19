/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#253C01',
          dark: '#1a3409',
          light: '#2c4a15'
        },
        secondary: {
          DEFAULT: '#AB773D',
          dark: '#8e6636',
          light: '#b17f45'
        },
        cream: '#f5f1e6',
      },
      fontFamily: {
        sans: ['Tajawal', 'sans-serif'],
      },
      screens: {
        sm: '390px',
        md: '768px',
        lg: '1440px',
      },
    },
  },
  plugins: [],
}

