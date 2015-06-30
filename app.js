'use strict';
var express = require('express')
    ,app = express();

// Util
var timer = require('./utilities/timer');

// Set port
app.set('port', process.env.PORT || 8080);

// Routing
app.use('/', timer);

// Handle static files
app.use('/js', express.static('public/js'));
app.use('/css', express.static('public/css'));
app.use('/images', express.static('public/images'));

// Root path.
app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// Handle all handled...

// Start server.
app.listen(app.get('port'), function() {
  console.log(
    'Express Starting at http://localhost: %d, ' + 
    'The Enviroment is : %s \n' + 
    'Press Ctrl+c to stop', 
    app.get('port'), app.get('env'));
});
