'use strict';

var http = require('http');
var routes = require('./routes');

var server = http.createServer(function(req, res) {
  routes(req, res);
});

server.listen(3000);
