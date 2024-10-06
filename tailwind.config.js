/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Back: '#ffc300',
        putih: '#fffef3',
        Primer: '#ff9e01',
        Orange: '#ff7b00',
        Tan: '#150d0a'

      },
      fontFamily: {
        Poppins: ['Poppins'],
        PoppinsBold: ['PoppinsBold']
      }
    },
  },
  plugins: [],
};
