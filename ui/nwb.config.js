module.exports = {
  type: 'react-app',
  babel: {
    stage: 2
  },
  polyfill: true,
  webpack: {
    html: {
      title: 'Life-Shout UI'
    },
    publicPath: ''

  }
}
  /*,
  webpack: {
    extra: {
      module: {
        rules: [
          {
            test: /\.js$/,
            enforce: 'pre',
            loader: 'eslint-loader',
            exclude: /node_modules/
          }
        ]
      }
    }
  }
}*/
