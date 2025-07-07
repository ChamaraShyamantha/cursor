module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: '#6366f1', // indigo-500
        accent: '#f472b6', // pink-400
        glass: 'rgba(255,255,255,0.7)',
        darkglass: 'rgba(30,41,59,0.7)',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(90deg, #6366f1 0%, #f472b6 100%)',
      },
    },
  },
  plugins: [],
} 