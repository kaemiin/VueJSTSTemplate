const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const WatchIgnorePlugin = require('watch-ignore-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    
    mode: "development",
    devtool: "inline-source-map",

    entry: path.resolve(__dirname, './src/main.ts'),
    output: {
        path: path.resolve(__dirname, './dev'),
        filename: "app.js",
    },
    // Currently we need to add '.ts' to the resolve.extensions array.
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue', '.vuex'],
        plugins: [new TsconfigPathsPlugin({ /*configFile: "./path/to/tsconfig.json" */ })],
    },
    // Source maps support ('inline-source-map' also works)
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192
                    }
                  }
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                  loaders: {
                    ts: 'ts-loader',
                    tsx: 'babel-loader!ts-loader',
                  },
                },
            },

            {
                test: /\.ts?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
                options: { appendTsxSuffixTo: [/\.vue$/], },
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                  'babel-loader',
                  {
                    loader: 'ts-loader',
                    options: { appendTsxSuffixTo: [/\.vue$/], },
                  }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "vue-style-loader", },
                    { loader: "css-loader", },
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.join(__dirname, 'dev', 'index.html'),
            template: path.join(__dirname, 'public', 'index.html'),
            inject: true,
        }),
       new VueLoaderPlugin(),
       new WatchIgnorePlugin([
        /\.js$/,
        /\.d\.ts$/
       ]),
    ],
}
 