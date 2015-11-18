/* globals require, console, __dirname */

'use strict';

var express = require('express');
var app = express();

app.use(express.static(__dirname));

var server = app.listen(3033, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Node app is listening at http://%s:%s', host, port);
});