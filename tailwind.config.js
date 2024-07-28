/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBg: '#FFFFFF',
        lightSecondaryBg: '#E9F0FA',
        lightAccent: '#5C7AEA',
        lightFont: '#213E3C',
        lightExtraAccent: '#FFA500',
        darkBg: '#121212',
        darkSecondaryBg: '#213E3C',
        darkAccent: '#90E0EF',
        darkFont: '#E9F0FA',
        darkExtraAccent: '#FF6347',
      }
    },
  },
  plugins: [],
}
