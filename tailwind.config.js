/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html','katalog.html','login.html','register.html','admin.html','premium_ac.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#14bBa6',
        dark: '#0f172a'
      },
      screens:{
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

