module.exports = {
  content: [
    './app.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx,html}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
    './pages/**/*.{vue,js,ts,jsx,tsx,html}',
    './plugins/**/*.{js,ts}',
    './pages/index.vue',
  ],
  theme: {
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '4/12': '33.333333%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
      '96': '24rem'
            },
    extend: {
      boxShadow: {
        '': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}