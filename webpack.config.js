const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    resolve: {
        extensions: ['.ts', '.js', '*'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.(png|jpe?g|gif)$/i,
            use: [{
                loader: 'file-loader'
            }]
        }, {
            test: /\.(css|scss|sass)$/i,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    }
};
