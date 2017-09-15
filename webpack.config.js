
var path = require("path");


var ExtractTextPlugin = require('extract-text-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var extractPlugin = new ExtractTextPlugin({
    filename:'main.css'
});


var config = {

    entry: SRC_DIR + "/app/index.js",
    output:{
        path:DIST_DIR+ "/app",
        filename:"bundle.js",
        publicPath: "/app/"
    },
    module:{
      loaders:[
          {
              test: /\.js?/,
              include:SRC_DIR,
              loader:"babel-loader",
              query:{
                  presets:["react","es2015","stage-2"]
              }
          },
          {
              test:   /\.css?/,
              use: ["style-loader", "css-loader", "postcss-loader","font-loader?format[]=truetype&format[]=woff&format[]=embedded-opentype"],
              options:{config:'postcss.config.js'}
          },
      ],

    },
    plugins:[
        extractPlugin
    ]
};

module.exports = config;