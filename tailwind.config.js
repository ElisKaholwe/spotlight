/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      //{For Light & Faster Load time, Use Cloud Fonts from Google}
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
        secondary: ['var(--font-geist-sans)', 'sans-serif'],
      },
      // Screens and Media Queries
      screens: {},
      // Theme Colors
      colors: {
        theme: 'rgb(32, 38, 52)',
        accent: 'rgb(246, 248, 247)',
        primary: 'rgb(37,38,39)',
        secondary: 'rgb(24,28,37)',
        ternary: 'rgb(191, 19, 19)',
      },
    },
  },
  plugins: [],
};
