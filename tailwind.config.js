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
        accent: '#2563eb', // blue-600
      },
      boxShadow: {
        card: '0 2px 8px 0 rgba(0,0,0,0.04)',
      },
    },
  },
  plugins: [],
} 