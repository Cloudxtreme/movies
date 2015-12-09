import path from 'path';
import webpack from 'webpack';
import {default as production} from './webpack.prod.config';
import {default as development} from './webpack.dev.config';
import autoprefixer from 'autoprefixer';
import customProperties from 'postcss-custom-properties';
import fontVariant from 'postcss-font-variant';

const configs = {
  production: production,
  development: development
};
let config = configs.hasOwnProperty(process.env.NODE_ENV) ?
             configs[process.env.NODE_ENV] :
             configs[development];

// webpack input
config.entry = {
  app: [
    './src/routes.jsx'
  ],
  vendor: [
    'react',
    'react-dom',
    'normalize.css',
    'fontloader',
    'picturefill',
    'picturefill/src/plugins/typesupport/pf.type'
  ]
};

// webpack output
config.output = {
  path: path.join(__dirname, 'dist'),
  filename: '[name].js'
};

config.postcss = () => [ customProperties, fontVariant, autoprefixer ];

config.resolve = {
  // specify paths which `from <name>` will match
  alias: {
    'fontloader': path.resolve('./node_modules/fontloader/fontloader.js')
  },
  // extensions listed here can be omitted in `import`s
  extensions: ['', '.js', '.jsx'],
  // directories which are searched implicitly in `import`s
  modulesDirectories: ['node_modules', 'components', 'assets']
};

// parsers
config.module.loaders = config.module.loaders.concat([
  { test: /\.jpe?g$|\.gif$|\.png$|\.jpf$|\.webp$|\.svg$|\.woff$|\.woff2$|\.ttf$|\.wav$|\.mp3$/, loader: 'file' }
]);

config.plugins = (config.plugins || []).concat([
  // create vendor chunk
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: 2
  })
]);

module.exports = config;
