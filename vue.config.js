module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/styles/_variables.scss";
          @import "@/styles/_reset.scss";
          @import "@/styles/_mixins.scss";
          @import "@/styles/_typos.scss";
          @import "@/styles/_icons.scss";
          @import "@/styles/_util.scss";
        `
      }
    }
  }
};