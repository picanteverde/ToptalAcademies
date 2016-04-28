var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var api = require('./api');
var webpack = require('webpack');
var webpackConfig = require('../webpack.config.js');
var compiler = webpack(webpackConfig);


var port = 8080;
var app = express();

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true, publicPath: webpackConfig.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

app.use(bodyParser.json());
app.use('/api', api);
app.use(express.static(path.join(__dirname, '../public')));
app.listen(port);

console.log('react test server listening on ' + port);
