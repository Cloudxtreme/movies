import path from 'path';
import webpack from 'webpack';

let config = {
  // sourcemap support
  devtool: '#cheap-module-eval-source-map',

  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', include: path.join(__dirname, 'src') },
      { test: /\.css$/, loader: 'style!css?module&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss' }
    ]
  },

  devServer: {
    contentBase: './dist',
    hot: false,
    inline: true,
    historyApiFallback: true
  }
}

export default config;
