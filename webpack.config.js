const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    module: {
            rules: [{ 
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: {
                           loader: 'babel-loader'
                        }
                    },
                    {
                        test: /\.css$/,
                        use: [
                           'style-loader',
                           'css-loader'
                        ]
                    },
                    {           
                        test: /\.(png|svg|jpg|gif)$/,
                        use: [
                          'file-loader'
                        ]
                    },
                    {
                        test: /\.(mp3|wav|ogg)$/,
                        use: [
                        'file-loader'
                        ]
                  }]
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: './src/index.html'
                })
            ]
        };