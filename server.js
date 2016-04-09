//dependencies
var express = require('express');
var consolidate = require('consolidate');


//app instantiation
var app = express();


//app configuration
app.set('views', __dirname + '/views');
app.engine('html', consolidate.handlebars);
app.set('view engine', 'html');
app.set('port', 3000);
var port = app.get('port');


//middleware
app.use(express.static(__dirname + '/public'));


//routes
app.get('/', function(req, res) {
    res.render('index', {title: "Hello World!"});
});


//server
app.listen(port, function() {
    console.log('the server is listening on port ', port);
});