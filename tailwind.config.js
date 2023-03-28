/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: 'class',
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    }, 
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#64748b',
        dark: '#0f172a'
      },
    },
  },
  plugins: [],
}
