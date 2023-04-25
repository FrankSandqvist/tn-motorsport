/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tyre: "#18171C",
        "tyre-transp": "#18171C55",
        fire: "#EC8B1D",
        ultra: "#DC2626"
      },
      dropShadow: {
        fire: ["0 0px 4px #EC8B1D"],
        ultra: ["0 0px 4px #DC2626"],
      },
    },
    fontFamily: {
      sans: ["Monument Extended", "sans-serif"],
    },
    lett
  },
  plugins: [],
};
