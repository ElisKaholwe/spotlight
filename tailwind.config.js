/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      //{For Light & Faster Load time, Use Cloud Fonts from Google}
      fontFamily: {
        primary: 'poppins',
        secondary: 'inter',
        ternary: 'Times New Roman',
      },
      // Screens and Media Queries
      screens: {
        xxs: '370px',
        xexs: '331px',
      },
      colors: {
        PrimaryWhite: 'rgb(247,247,248)',
        NeutralWhite: 'rgb(138,141,153)',
        PrimaryBlack: 'rgb(17, 19, 23)',
        NeutralStone: 'rgb(41,37,36)',
        BlueSpecial: 'rgb(42,106,211)',
        PurpleSpecial: 'rgb(126,76,224)',
        PinkSpecial: 'rgb(236,69,96)',
        GreenSpecial: 'rgb(98,182,94)',
      },
    },
  },
  plugins: [],
};
