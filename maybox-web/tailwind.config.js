/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/html/utils/withMT";
 
export default withMT({
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        customWhite: '#FFFFFF',
        customPink: '#6EACDA',
        customOrangeDark: '#021526',
        customRed: '#03346E',
        customOrangeLight: '#FF9B50',
      },
      fontFamily: {
        playtip: ['Platypi', 'san-serif'],
        ordinary: ['Ordinary', 'sans-serif'],
        clash: ['ClashDisplay', 'sans-serif'],
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
})

