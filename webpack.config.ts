const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
mode: 'development',
entry: './src/index.tsx',
devtool: 'inline-source-map',
performance: {
  hints: false,
  maxEntrypointSize: 512000,
  maxAssetSize: 512000
},
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
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
          {
            test: /\.(png|jpg|jpeg|gif)$/i,
            type: "asset/resource",
          }
        ]
    },
    resolve: {
    extensions: ['.tsx', '.ts', '.js','.css','.sass', '.scss', '.jpg', '.png', '.svg'],
    },
plugins:[
new HtmlWebpackPlugin({
template: './index.html'
})
]
}


