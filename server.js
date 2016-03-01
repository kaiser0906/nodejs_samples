var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
  requireAuthentication: function (req, res, next) {
    console.log('private route hit!');
    next();
  },
  logger: function (req, res, next) {
    var now = new Date().toString();
    console.log('Request: ' + now + ' ' + req.method + ' ' + req.originalUrl);
    next();
  }
};

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
