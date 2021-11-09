// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  chainWebpack: (config) => {
    // this path is specific to my project
    config.resolve.alias.set('styles', path.resolve('src/styles'));
  },
};
