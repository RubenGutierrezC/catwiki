module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        "-1": "-1",
      },
      borderRadius: {
        42: "42px",
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        mistery: ["Mystery Quest", "sans-serif"],
      },
      height: {
        breed: "135px",
        "breed-md": "220px",
      },
      width: {
        breed: "135px",
        "breed-md": "220px",
        33: "9.375rem",
      },
      textColor: {
        customBrown: "#291507",
      },
      backgroundColor: {
        heroDown: "#E3E1DC",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};