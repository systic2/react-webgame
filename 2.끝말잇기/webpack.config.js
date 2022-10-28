const path = require('path');

module.exports = {
  name: 'wordrelay-setting',
  mode: 'development', // 실서비스: production
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx']
  },

  entry: {
    app: ['./client'],
  }, // 입력

  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 1% in KR',], // browserslist
            },
          }], 
          '@babel/preset-react'],
        plugins: [],
      }
    }],
  },

  output: {
    path: path.join(__dirname, 'dist'), // d:\react-webgame\
    filename: 'app.js',
  }, // 출력
};