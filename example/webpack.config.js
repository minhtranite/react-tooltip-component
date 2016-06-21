import webpack from 'webpack';
import path from 'path';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import StylelintWebpackPlugin from 'stylelint-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import pkg from '../package.json';

const ENV = process.env.NODE_ENV || 'development';
const DEV = ENV === 'development';
const PROD = ENV === 'production';

const webpackConfig = {
  entry: {
    app: PROD
      ? path.join(__dirname, 'app/app.js')
      : ['webpack-hot-middleware/client?reload=true&quiet=true', path.join(__dirname, 'app/app.js')]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: PROD ? '[hash].js' : '[name].js',
    chunkFilename: PROD ? '[chunkhash].js' : '[name].chunk.js',
    hashDigestLength: 32,
    publicPath: PROD ? `/${pkg.name}/` : '/'
  },
  resolve: {
    root: path.join(__dirname, 'app'),
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.jsx', '.js'],
    alias: {
      [`${pkg.name}$`]: path.join(__dirname, '../src/index.js'),
      [`${pkg.name}/src`]: path.join(__dirname, '../src')
    }
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loader: PROD
          ? ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
          : 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.scss$/,
        loader: PROD
          ? ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader')
          : 'style-loader!css-loader!postcss-loader!sass-loader'
      },
      {
        test: /\.(png|jpg|gif|swf)$/,
        loader: PROD
          ? 'file-loader?name=[hash].[ext]'
          : 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\S+)?$/,
        loader: PROD
          ? 'file-loader?name=[hash].[ext]'
          : 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.html$/,
        loader: 'html-loader?interpolate'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(ENV)
      }
    }),
    new StylelintWebpackPlugin({
      files: '**/*.?(s)@(a|c)ss',
      configFile: path.join(__dirname, '../.stylelintrc'),
      failOnError: PROD
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'app/index.html')
    })
  ],
  eslint: {
    configFile: path.join(__dirname, '../.eslintrc'),
    failOnError: PROD,
    emitError: PROD
  },
  postcss: () => {
    let processors = [
      autoprefixer({
        browsers: [
          'ie >= 10',
          'ie_mob >= 10',
          'ff >= 30',
          'chrome >= 34',
          'safari >= 7',
          'opera >= 23',
          'ios >= 7',
          'android >= 4.4',
          'bb >= 10'
        ]
      })
    ];
    if (PROD) {
      processors.push(cssnano({
        safe: true,
        discardComments: {
          removeAll: true
        }
      }));
    }
    return processors;
  },
  sassLoader: {
    includePaths: [
      path.join(__dirname, '../bower_components'),
      path.join(__dirname, '../node_modules')
    ],
    outputStyle: PROD ? 'compressed' : 'expanded'
  },
  node: {
    net: 'mock',
    dns: 'mock'
  },
  debug: DEV,
  devtool: DEV ? '#eval' : false,
  stats: {
    children: false
  },
  progress: PROD,
  profile: PROD,
  bail: PROD
};

if (DEV) {
  webpackConfig.plugins = webpackConfig.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]);
}

if (PROD) {
  webpackConfig.plugins = webpackConfig.plugins.concat([
    new ExtractTextPlugin('[contenthash].css'),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),
    new webpack.optimize.DedupePlugin()
  ]);
}

export default webpackConfig;
