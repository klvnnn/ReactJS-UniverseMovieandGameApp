/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "103%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "gray"
          },
          "100%": {
            borderColor: "gray-900"
          }  
        }
      },
      animation: {
        typing: "typing 4s steps(40) infinite alternate, blink 1s infinite"
      }
    },
  },
  plugins: [],
}