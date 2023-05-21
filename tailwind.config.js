/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#13d602",
        
"secondary": "#f7f75b",
        
"accent": "#b7ff3d",
        
"neutral": "#2B2834",
        
"base-100": "#F4F4F6",
        
"info": "#99BBEA",
        
"success": "#63EEBD",
        
"warning": "#F4911F",
        
"error": "#E6614C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

