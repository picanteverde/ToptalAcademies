var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var api = require('./api');

var port = 8080;
var app = express();

app.use(bodyParser.json());
app.use('/api', api);
app.use(express.static(path.join(__dirname, '../public')));
app.listen(port);
console.log('react test server listening on ' + port);
