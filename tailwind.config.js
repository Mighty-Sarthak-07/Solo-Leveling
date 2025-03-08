/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          facebook: '#3b5998',
          twitter: '#1DA1F2',
          linkedin: '#0077b5',
          instagram: '#C13584',
        'custom-purple': '#6f2c91', // Add your custom color  
      },  
      fontFamily:{
        zentry: ['zentry','sanf-serif'],
        general: ['general','sanf-serif'],
        'circular-web':['circular-web','sanf-serif'],
        'robert-medium':['robert-medium','sanf-serif'],
        'robert-regular':['robert-regular','sanf-serif'],
      },
      colors: {
        blue: {
          50: "#DFDFF0",
          75: "#dfdff2",
          100: "#F0F2FA",
          200: "#010101",
          300: "#4FB7DD",
        },
        violet: {
          300: "#5724ff",
        },
        yellow: {
          100: "#8e983f",
          300: "#edff66",
        },
      },
    },
  },
  plugins: [],
}