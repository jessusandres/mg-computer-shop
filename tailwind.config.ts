import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{html,ts}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      fontSize: {
        tinny: '0.95rem',
      },
      colors: {
        primary: {
          50: '#f0f4fe',
          100: '#dde6fc',
          200: '#c2d4fb',
          300: '#99baf7',
          400: '#6895f2',
          500: '#4570ec',
          600: '#3052e0',
          700: '#273fce',
          800: '#2634a7',
          900: '#26348c',
          950: '#1a2051',
        },
      },
      content: {
        rowd: "url('/icons/rowd.svg');",
        cart: "url('/icons/cart-white.svg');",
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      maxWidth: {
        df: '1345px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar'),
    require('tailwindcss-animated'),
    require('flowbite/plugin'),
  ],
};
export default config;
