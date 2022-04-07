module.exports = {
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  transpileDependencies: ['quasar'],
  pages: {
    index: {
      entry: "src/index/main.js",
      template: "public/index.html",
      title: "IQD",
    },
    admin: {
      entry: "src/admin/main.js",
      template: "public/index.html",
      title: "Admin Page",
    },
    
  },
};
