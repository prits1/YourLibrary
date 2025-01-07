/** @type {import('tailwindcss').Config} */
export default {
  content:[
    "./index.html",
    "./src/*/**.{js,jsx}",
  ],
  theme: {
    extend: {
      animation:{
        'loop-scroll' : 'loop scroll 50s linear infinite',
      },
      keyframes: {
        "loop-scroll" :{
          from: {transform: "translateX(0)"},
          to: {transform: "translateX(-100%)"},
        },
      },
      colors: {
        primary :'#CA8620',
        secondary: '#E9C57F',
        lightwhite: '#F8F8F8',
        CardColor: '#FFF7E8',
        Pink: "#FE4773",
        LightBlue: "#47DDFE",
        DarkBlue: "#234578",
      },
      container: {
        center : true,
        padding: {
          DEFAULT: "1rem",
          sm: '3rem',
        }
      }
    },
    fontFamily: {
      abc: ["Kodchasan", 'sans-serif'],
      'dmserif': ['DM Serif', 'serif'],
        'com': ['Comfortaa', 'cursive'],
    }
  },
  plugins: [],
}

