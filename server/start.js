require("@babel/polyfill");
require("@babel/register")({
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: [
        ["@babel/plugin-proposal-decorators",{"legacy": true}],
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-syntax-dynamic-import",
        "@loadable/babel-plugin"
    ]
});
const csshook = require('css-modules-require-hook');
const assethook = require('asset-require-hook');
csshook({
    generateScopedName: '[name]__[local]___[hash:base64:5]',
});
assethook({
    extensions: ['png', 'jpg', 'ico', 'svg'],
    name: '[name].[hash:8].[ext]',
    publicPath: '/static/media/',
});
require('./server.js');