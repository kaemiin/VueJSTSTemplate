const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const WatchIgnorePlugin = require('watch-ignore-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    
    mode: "development",
    devtool: "inline-source-map",

    // mode: "production",
    // devtool: "source-map",

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
    // Add the loader for .ts files.
    // module: {
    //     rules: [
    //       {
    //         test: /\.vue$/,
    //         exclude: /node_modules/,
    //         use: [
    //           {
    //             loader: 'awesome-typescript-loader',
    //             options: {
    //               useBabel: true
    //             },
    //           }
    //         ],
    //       },
    //       { test: /\.ts$/, loader: 'ts-loader' },
    //     ]
    // },
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
            //{ test: /\.vue$/,
             
            // NONO    
            //   loader: 'ts-loader',
            //   options: {
            //     appendTsSuffixTo: [/\.vue$/]
            //   },

            //   include: [
            //     path.resolve(__dirname, "src")
            //   ],  
            //   exclude: [
            //     path.resolve(__dirname, "src/assets"),
            //   ], 

            // loader: 'vue-loader',
            //   options: {
            //     loaders: {
            //       ts: [{ loader: 'ts-loader', options: { appendTsSuffixTo: [/\.vue$/], transpileOnly: true } }],
            //     },
            //   },

            // loader: 'vue-loader',
            //   options: {
            //     esModule: true,
            //   },

            // loader: 'vue-loader',
            // options: {
            //     loaders: {
            //       ts: [
            //             { 
            //                 loader: 'ts-loader', 
            //                 //options: { appendTsSuffixTo: [/\.vue$/] }, 
            //             },
            //       ],
            //       tsx: [
            //             { 
            //                 loader: 'babel-loader!ts-loader', 
            //                 //options: { appendTsSuffixTo: [/\.vue$/] }, 
            //             },
            //       ],
            //     },
            // },

            //   loader: 'vue-loader',
            //   options: {
            //     loaders: {
            //       ts: [{loader: 'ts-loader', options: { appendTsSuffixTo: [/\.vue$/] }}],
            //       tsx: [{loader: 'babel-loader!ts-loader', options: { appendTsSuffixTo: [/\.vue$/] }}],
            //     },
            //   },
            //},
            // {
            //     test: /\.vue$/,
            //     loader: 'vue-loader',
            //     exclude: /node_modules/,
            //     options: {
            //         loaders: {
            //           ts: [{loader: 'ts-loader', options: { appendTsSuffixTo: [/\.vue$/] }}],
            //           tsx: [{loader: 'babel-loader!ts-loader', options: { appendTsSuffixTo: [/\.vue$/] }}],
            //         },
            //     },
            // },
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

            // { 
            //     test: /\.ts$/,
            //     loader: 'ts-loader',
            //     exclude: /node_modules|vue\/src/,
            //     options: {   appendTsxSuffixTo: [/\.vue$/], },
            // },
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
            // { test: /\.tsx$/, 
            //     loader: 'babel-loader',
            //     exclude: /node_modules|vue\/src/,
            //     options: {
            //         loaders: {
            //             tsx: [
            //                 { 
            //                     loader: 'ts-loader', 
            //                     options: { appendTsSuffixTo: [/\.vue$/] }, 
            //                 },
            //             ],
            //         },
            //     },
            // },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // template: 'public/index.html',
            // filename: 'index.html',
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
 