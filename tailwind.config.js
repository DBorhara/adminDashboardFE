/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        calcVH: "calc(100vh - 50px)",
      },
      flex: {
        4: "4 4 0%",
      },
    },
  },
  plugins: [],
};
