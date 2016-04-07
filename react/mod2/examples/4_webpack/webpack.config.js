var WebpackNotifierPlugin = require('webpack-notifier');
module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: './public/js/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true
                }
            }
        ]
    },
    plugins: [
        new WebpackNotifierPlugin({alwaysNotify: true})
    ],
    'devtool': 'source-map'
};
