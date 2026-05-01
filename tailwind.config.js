/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mood-happy': '#FFD93D',
        'mood-sad': '#6C63FF',
        'mood-excited': '#FF6B6B',
        'mood-relaxed': '#4ECDC4',
        'mood-angry': '#FF8C42',
        'mood-romantic': '#FF69B4',
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
