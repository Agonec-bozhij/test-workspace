const webpack = require('webpack');
const path = require('path');

module.exports = {
    plugins: [
        new webpack.DllPlugin({
            name: '[name]_dll',
            path: path.resolve(__dirname, '../../dist/apps/angular-dll/[name]-manifest.json')
        })
    ]
};
