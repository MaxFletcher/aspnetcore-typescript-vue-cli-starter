const path = require('path');

module.exports = {
    outputDir: 'wwwroot/dist',
    filenameHashing: false,
    chainWebpack: config => {
        config.plugins.delete('html');
        config.plugins.delete('preload');
        config.plugins.delete('prefetch');
        config.plugins.delete('hmr');
        config.entry('app').delete('./src/main.ts');
        config.entry('app').add('./ClientApp/main.ts');
        config.resolve.alias.set('@', path.resolve(__dirname, 'ClientApp'));
    }
};
