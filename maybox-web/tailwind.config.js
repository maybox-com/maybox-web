/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        customWhite: '#FFFFFF',
        customPink: '#F85C70',
        customOrangeDark: '#A03302',
        customRed: '#E43D40',
        customOrangeLight: '#ED6C30',
      },
      fontFamily: {
        playtip: ['Platypi', 'san-serif'],
        ordinary: ['Ordinary', 'sans-serif'],
        neueEinstellung: ['Neue Einstellung', 'sans-serif'],
      },
      fontWeight: {
        thin: 100,
        extraLight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
        black: 900,
      },
    },
  },
  plugins: [
        require('@tailwindcss/forms'),
  ],
}

