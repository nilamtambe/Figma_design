import { Padding } from '@mui/icons-material';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      }
      // colors:"#0190ec",
      // secondary: "blue",    
    },
    container:{
      center: true,
      Padding:{
        DEFAULT : "1rem",
        sm:'3rem,'
      }
    }
  },
  plugins: [],
}

