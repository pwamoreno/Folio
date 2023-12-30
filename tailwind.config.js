const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        poppins: 'poppins',
      },
      colors: {
        'primary-color': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)',
        'tertiary-color': 'var(--tertiary-color)',
        'accent-color': 'var(--accent-color)',
        'shadow-color': 'var(--shadow-color)',
      },
      keyframes: {
        scale: {
          '0%': {transform: 'scale(0.5)'},
          '100%': {transform: 'scale(1)'},
        }
      },
      animation: {
        'scale-up-center': 'scale 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
      },
    },
  },
  plugins: [],
}
