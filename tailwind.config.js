module.exports = {
  mode: "jit",
  purge: ["./src/**/*.js", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ['"Roboto Slab"', "serif"],
      body: ["Roboto", "sans-serif"],
    },
    extend: {
      backgroundImage: (theme) => ({
        "linear-gradient(rgba(0,0,0, 0.25), rgba(0,0,0, 0.25)), landing-background":
          "url('../img/yogaawesomebkgd.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
