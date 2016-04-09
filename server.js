//dependencies
var express = require('express');
var consolidate = require('consolidate');
var superagent = require('superagent');


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
var user = 'otsebyatin';
var story_slug = 'kazan2015-luchshie-snimki';

app.get('/',function(req, res){
    //Fetch elements from Storify API
    superagent
        .get("http://api.storify.com/v1/stories/" + user + "/" + story_slug)
        .set({  Accept: 'application/json' })
        .end(function(error, storifyResponse){
            if (error) next(error);
            //Render template with story object in response body
            return res.render('index',storifyResponse.body.content);
        });

});


//server
app.listen(port, function() {
    console.log('the server is listening on port ', port);
});