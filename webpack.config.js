module.exports = {
    entry: __dirname + '/app/src/App.jsx',
    mode: 'production',

    output: {
        filename: 'bundle.js',
        path: __dirname + '/app/build/'
    },

    devServer: {
        inline: true,
        contentBase: './app/build',
        port: 9000
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.css?$/,
            loader: ['style', 'css']
        }]
    },

    devtool: 'eval-source-map',

    resolve: {
        extensions: ['.js', '.jsx']
    }
}