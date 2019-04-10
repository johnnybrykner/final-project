module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // Files defined here will be available in all our Components
        data: ["@import '@/assets/style.scss';"]
      }
    }
  }
};