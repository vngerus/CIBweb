/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        inycolor: '#204c9c',
        inybg: '#64a4da',
        inypurple: '#7A57A4',
      },
    },
  },
  plugins: [],
}