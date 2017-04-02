module.exports = {
    entry: "./public/js/entry.js",
    output: {
        path: __dirname,
        filename: "./public/js/bundle.js"
    },
    //module: {
    //    loaders: [
    //        { test: /\.css$/, loader: "style!css" }
    //     ]
    // }
};