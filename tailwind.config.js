/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '1.2': '3.07rem',
        '3.5': '3.1rem',
        '25': '1.17rem',
        '100': '40rem',
        '128': '50rem',
      }
    },
  },
  plugins: [],
}