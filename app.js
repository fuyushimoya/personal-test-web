'use strict';
var express = require('express')
    ,app = express();

// Set port
app.set('port', process.env.PORT || 3000);

// Routing

// Root path.
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// Start server.
app.listen(app.get('port'), function() {
  console.log('Express Starting at http://localhost:' + app.get('port') + 
  '. Enviroment is : ' + app.get('env') + 'Press Ctrl+c to Stop.');
});