import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      darkblue: '#1a237e',
      blue: '#303f9f',
      mediumblue: '#3949ab',
      lightblue: '#3f51b5',
      pink: '#e91e62',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#d3dce6',
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
} satisfies Config;
