const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
mode: 'development',
entry: './src/index.tsx',
devtool: 'inline-source-map',
output: {
path: path.join(__dirname, '/dist'),
filename: 'bundle.js'
},
devServer: {
static: './dist',
},
module: {
    rules: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.s[ac]ss$/i,
            use: ['sass-loader',],
          },
          {
            test: /\.(png|jpe?g|svg)$/,
            loader: 'file-loader',
            options: {
                name: '/src/assets/[name].[ext]',
            }
        }
        ]
    },
    resolve: {
    extensions: ['.tsx', '.ts', '.js','.css','.sass', '.jpg', '.png', '.svg'],
    },
plugins:[
new HtmlWebpackPlugin({
template: './index.html'
})
]
}


