const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // enty points
    entry: path.resolve('src', 'index.tsx'),

    // the output directory for the compiled and bundled files
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    // defines loaded for different content types
    module: {
        rules: [
            {
                test: /\.(js|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            compilerOptions: {
                                jsx: process.env.NODE_ENV === 'development' ? 'react-jsxdev' : 'react-jsx'
                            }
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    // removes the need to add file extensions for import statements
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },

    // plugins
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        })
    ]
};
