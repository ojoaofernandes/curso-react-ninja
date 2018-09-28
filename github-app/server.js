const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const compiler = webpack(config);
const options = {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
};

const server = new WebpackDevServer(compiler, options);

server.listen(3000, 'localhost', err => {
  const log = err
    ? console.log(err)
    : 'Listening on http://localhost:3000';

  console.log(log);
});
