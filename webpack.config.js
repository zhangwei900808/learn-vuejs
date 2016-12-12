var htmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry:{
    "index":__dirname + "/src/js/index.js"
  },
  output:{
    path:__dirname+"/src/webapp/js",
    filename:'[name].js'
  },
  resolve:{
    alias:{
      vue:"vue/dist/vue.js"
    }
  },
  externals:{

  },
  module:{
    loaders:[
      {
        test:/\.js$/,
        loader:'babel',
        query:{
          compact:true
        }
      },
      {
        test:/\.vue$/,
        loader:'babel!vue',
        exclude:"/node_modules/"
      }
    ]
  },
  plugins:[
    new htmlWebpackPlugin({
      filename:__dirname+'/src/webapp/index.html',
      template:__dirname+'/src/html/index.html',
      inject:'body',
      hash:true,
      chunnks:['index']
    })
  ]
}
