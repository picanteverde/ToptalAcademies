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
    }
};
