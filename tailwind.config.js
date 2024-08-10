/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      spacing: {
        'rts-banner-area-one': 'your-value-here', // Example of custom class definition
        // Define other custom classes similarly
      },
      colors: {
        primary: '#0066ff',
        background: '#0b2316',
        green: '#4caf50',
        lightGreen: '#81c784',
        white: '#ffffff',
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
