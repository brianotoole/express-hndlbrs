// webpack.config.js
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    // The standard entry point and output config
    entry: "./public/js/index.js",
    output: {
        path: __dirname,
        // compiled path
        filename: "./public/js/bundle.js"
    },
module: {
        rules: [{
            test: /\.scss$/,
            use:  "sass-loader"
        }]
    },
    // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
    plugins: [
        new ExtractTextPlugin("./public/stylesheets/compiled.css")
    ]
}
