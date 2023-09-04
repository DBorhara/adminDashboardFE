/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        featuredInfoBoxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
      },
      height: {
        calcVH: "calc(100vh - 50px)",
      },
      flex: {
        4: "4 4 0%",
        2: "2 2 0%",
      },
    },
  },
  plugins: [],
};
