module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/Styles/SCSS/app.scss";',
        outputDir: "./CSS/app.css"
      }
    }
  }
};
