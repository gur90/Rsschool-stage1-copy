const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const EslingPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

let mode = 'development';
const baseConfig = {
    entry: path.resolve(__dirname, './src/index.ts'),
    mode: 'development',
   
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use:  {
                    loader: 'ts-loader',
                  },
                  include: [path.resolve(__dirname, 'src')],
                exclude: /node_modules/,
            },
           { test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
       },
       {
        test: /\.(png|jpg|svg|gif)$/,
        type: 'asset/resource',
    },
    {
       test: /\.(ttf|woff|woff2|eot)$/,
       type: 'asset/resource'
    },
     
    
        {
            test: /\.(s[ac]|c)ss$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'], // читается справа на лево, т.е. сначала стили прогоняются через sass > css >  MiniCss
          },
        ],
    },
    resolve: {
        extensions: ['.ts', ".js"],
    },
    output: {
        assetModuleFilename: 'assets/[hash][ext][query]',
        filename: 'index.js',
        path: path.resolve(__dirname, './dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
        new EslingPlugin({ extensions: 'ts' }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new CopyWebpackPlugin(
            {
                patterns: [
                    {
                      from: path.resolve(__dirname, 'online-store/assets'),
                      to: path.resolve(__dirname, 'dist/assets'),
                      noErrorOnMissing: true,
                    },
                  ],
            })
    ]
};

module.exports = ({ mode }) => {
    const isProductionMode = mode === 'prod';
    const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

    return merge(baseConfig, envConfig);
};