import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0F104C',
        blue: '#0977FF',
        red: '#F83434',
        green: '#4DD837',
        black: '#1E1E1E',
        white: '#FFFFFF',
        gray: {
          light: '#DADADA',
          dark: '#878787',
        },
        lavender: '#E0E0F6'
      },
      fontFamily: {
        satoshi: ['var(--font-satoshi)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config