/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#99FFFF',
          200: '#00FFFF',
          300: '#00CCCC',
          400: '#009999',
          500: '#006666',
        },
        secondary: {
          100: '#F0F0F0',
          200: '#C0C0C0',
          300: '#A0A0A0',
          400: '#808080',
          500: '#606060',
          600: '#404040',
          700: '#202020',
        },
      },
      borderColor: {
        100: '#C0C0C0',
        200: '#A0A0A0',
        300: '#808080',
        400: '#606060',
        500: '#404040',
        600: '#202020',
      },
      margin: {
        'sm': 5,
        'md': 10,
        'lg': 15,
        'xl': 20,
      },
      padding: {
        'sm': 5,
        'md': 10,
        'lg': 15,
        'xl': 20,
        'xxl': 25,
        'xxxl': 30,
      },
      borderRadius: {
        'sm': 3,
        'md': 6,
        'lg': 9,
        'full': 'full',
      },
      width: {
        'sm': 1000
      }
    },
  },
  plugins: [],
}
