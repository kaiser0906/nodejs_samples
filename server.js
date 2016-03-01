var express = require('express');
var app = express();
var PORT = 3000;

var middleware = require('./middleware.js');

app.use(middleware.logger);

// About us
app.get('/aboutus', function(req, res) {
  res.send('About us.');
});

app.use(express.static(__dirname + '/templates'));
// console.log(__dirname);

app.listen(3000, function() {
  console.log('Express server started on port ' + PORT + '!');
});
