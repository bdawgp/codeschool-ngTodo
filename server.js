var express = require('express'),
	http = require('http'),
	morgan = require('morgan');

// create a new express app
var app = express();

// log our requests in terminal
app.use(morgan('dev'));
// serve the current directory
app.use(express.static('.'));

// start the http server
http.createServer(app).listen(8080);