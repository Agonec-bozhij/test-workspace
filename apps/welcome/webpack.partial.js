const webpack = require('webpack');
const path = require('path');

module.exports = {
    plugins: [
        new webpack.DllReferencePlugin({
            context: path.resolve(__dirname, '../angular-dll/'),
            manifest: require(path.resolve(__dirname, '../../dist/apps/angular-dll/vendor-manifest.json'))
        })
    ]
};
