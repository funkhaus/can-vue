const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
    mode: process.env.NODE_ENV,
    output: {
        path: path.resolve(__dirname + '/dist/')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['vue-style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: ExtractTextPlugin.extract({
                            use:
                                'css-loader?minimize&url=false!sass-loader?minimize',
                            fallback: 'vue-style-loader'
                        })
                    },
                    extractCSS: true,
                    preserveWhitespace: false,
                    postcss: [
                        require('autoprefixer')({
                            browsers: ['last 5 versions']
                        })
                    ]
                }
            },

            {
                test: /\.css$/,
                loader: 'style!less!css'
            }
        ]
    },
    externals: {},
    plugins: [new VueLoaderPlugin()],
    optimization: {
        minimize: process.env.NODE_ENV === 'production'
    }
}

module.exports = [
    merge(config, {
        output: {
            filename: 'can-vue.min.js',
            libraryTarget: 'window',
            library: 'CanVue'
        }
    }),
    merge(config, {
        output: {
            filename: 'can-vue.js',
            libraryTarget: 'umd',
            library: 'vue-clock',
            umdNamedDefine: true
        }
    })
]
