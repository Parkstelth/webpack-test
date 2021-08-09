const path = require('path')
const Htmlplugin = require('html-webpack-plugin')
const Copyplugin = require('copy-webpack-plugin')

module.exports = {
  entry:"./js/main.js",

  output:{
    // path: path.resolve(__dirname,'dist'),
    // filename:'main.js',
    clean:true
  },
  module:{
    rules:[
      {
        test:/\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
      test:/\.js$/,
      use:[
        'babel-loader'
      ]
      }
    ]
  },


  plugins:[
    new Htmlplugin({
      template:'./index.html'
    }),
    new Copyplugin({
      patterns:[
        {from:'static'}
      ]
    })
  ],
  devServer:{
    host:'localhost'
  }

}