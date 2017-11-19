var express = require('express');
var path = require('path');
var open = require('open');
var webpack = require('webpack');
var config = require('../webpack.config');

/* eslint-disable no-console */
var port = 3000;
var app = express();
var compiler = webpack(config);

app.use(
  require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
  })
);

app.get('/', function(req, res) {
  console.log('getting file');
  res.sendFile(path.join(__dirname, '../src/xindex.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
