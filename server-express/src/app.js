require('./data/dbconnection.js')
var express = require('express'),
    app = express(),
    path = require('path'),
    cors = require('cors'),
    morgan = require('morgan'),
    bodyParser = require('body-parser')

var routes = require('./routes');

app.set('port',3000);

// access params eg: req.body
app.use(bodyParser.json())
// console login frame work
app.use(morgan('tiny'))
//cross origin resource sharing allows 8080 to talk to 3000
app.use(cors())

// middleware
app.use(function(req, res, next){
  console.log(req.path, req.method, req.url);
  next();
});

//// Set static directory before defining routes
app.use(express.static(path.join(__dirname, 'public')));

// adding routes
app.use('/', routes);

app.get('/sample', function(req, res){
  console.log('inside sample');
  res.send('sample rendering');
});

var server = app.listen(app.get('port'), function(){
  var port = server.address().port;
  console.log("hello world " + port);
});


