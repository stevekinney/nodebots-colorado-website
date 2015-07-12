var express = require('express');
var path = require('path');
var expressLayouts = require("express-ejs-layouts")
var app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(expressLayouts);

app.get('/', function(request,response) {
  response.render('index');
});

app.get('/about', function(request,response) {
  response.render('about');
});

app.get('/events', function(request,response) {
  response.render('events')
});

app.get('/resources', function(request,response) {
  response.render('resources')
});

var server = app.listen(8080, function() {
  var host = server.address().address
  var port = server.address().port

  console.log('App listening at http://%s:%s', host, port)
});