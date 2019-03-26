module.exports = (env, { mode }) => {
    const path = require('path');
    const ExtractTextPlugin = require('extract-text-webpack-plugin');
    const HtmlWebpackPlugin = require('html-webpack-plugin');

    const production = (mode === 'production') ? true : false;
    const development = !production;

    return {
        devtool: development ? 'eval-sourcemap' :
            production ? 'sourcemap' : null,

        watch: development,

        entry: {
            main: './src/index.js'
        },

        output: {
            filename: '[name].[chunkhash].js',
            path: path.resolve(__dirname, 'build'),
        },

        devServer: {
            port: 8080,
            overlay: true,
            contentBase: path.resolve(__dirname, 'public'),
        },

        module: {
            rules: [
                {
                    test: /\.jsx?$/i,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/env', '@babel/preset-react'],
                            plugins: [
                                '@babel/plugin-proposal-class-properties',
                                '@babel/plugin-transform-react-jsx-self',
                                '@babel/plugin-transform-react-jsx-source'
                            ]
                        }
                    }
                },
                {
                    test: /\.css$/i,
                    use: ExtractTextPlugin.extract({
                        use: [
                            {
                                loader: 'css-loader'
                            }
                        ]
                    })
                },
                {
                    test: /\.less$/i,
                    use: ExtractTextPlugin.extract({
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'less-loader',
                                options: {
                                    sourceMap: true
                                }
                            }
                        ]
                    })
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    use: {
                        loader: 'url-loader',
                        options: {
                            limit: 1,
                            name: '[name].[ext]',
                            outputPath: 'img/'
                        }
                    }
                },
                {
                    test: /\.(eot|ttf|woff|woff2|)$/i,
                    use: {
                        loader: 'url-loader',
                        options: {
                            limit: 1,
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                },
            ]
        },

        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                        name: 'vendor',
                        chunks: 'all',
                    }
                }
            }
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html'
            }),
            new ExtractTextPlugin('[name].[chunkhash].css'),
        ],

        resolve: {
            extensions: ['.js', '.json', '.jsx', '*']
        }
    };
};