/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './html/*.{html,js}',
    './css/output.css',
  ],
  theme: {
    /* colors:{
      'orangetransition':'#4A2800'

    }, */
    extend: {
      colors: {
        orangef: '#4A2800',
        blue: '#007ace',
        red: '#de3618',
        marron:'#241300'
    
      },
      
      backgroundImage: {
        'control-play': "url('../images/logos.png')",
        'montaña-rocosa': "url('../images/monte.png')",

      }
    }
  },
  plugins: [],
  
}
