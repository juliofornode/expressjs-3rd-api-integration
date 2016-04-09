//dependencies
var express = require('express');
var routes = require('./routes');


//app instantiation
var app = express();


//app configuration
var port = 3000;

//middleware
app.get('/', routes.index);

//server
app.listen(port, function() {
    console.log('the server is listening on port ', port);
});