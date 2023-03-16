/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          tyre: "#18171C",
          'tyre-transp': "#18171C55",
          fire: "#EC8B1D"
        }
      },
      fontFamily: {
        sans: ['Monument Extended', "sans-serif"]
      }
    },
    plugins: [],
  };
  