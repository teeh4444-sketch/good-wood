import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        wood: {
          50: '#f8f2eb',
          100: '#f0e4d5',
          200: '#ddc3a3',
          300: '#c69463',
          400: '#ab6a35',
          500: '#814918',
          600: '#653812',
          700: '#4f2d13',
          800: '#382111',
        },
        cream: '#f8f4ef',
        charcoal: '#171718',
        sage: '#dfe8d4',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(23,23,24,0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
