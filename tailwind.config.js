/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': {'max': '1500px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '950px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '765px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '420px'},
        // => @media (max-width: 767px) { ... }
  
        'xs': {'max': '390px'},
        
      },
    },
  },
  plugins: [],
}
