/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './html/*.{html,js}',
    './css/output.css',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'control-play': "url('../images/logos.png')",
      }
    }/* ,
    backgroundPosition: {
      'center-right': 'right center',
    } */
  },
  plugins: [],
  
}
