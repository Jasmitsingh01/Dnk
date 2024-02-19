/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {  
        'banner-1':"url('./src/assets/banner_1.jpg')"  ,
        'card-1':"url('./src/assets/women_card.jpg')",
        'card-2':"url('./src/assets/men_card.jpg')",
        'card-3':"url('./src/assets/other_card.jpg')",
        'banner-2':"url('/src/assets/banner-03.jpg')",
        'banner-3':"url('/src/assets/banner-04.jpg')",
        'banner-4':"url('/src/assets/banner-05.jpg')",
        'banner-5':"url('/src/assets/banner-06.jpg')",

        
      },
      colors:{
        'nav':"#403f3f4f",
        'banner-overlay':"#0b4463ad"
      }
    }
    
  },
  plugins: [],
}