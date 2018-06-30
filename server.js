var express = require('express');
var app = express();
var port = 5000;

app.use(express.static('.'));

// app.get('/', function(req, res) {
//   res.send('I made an Express app!');
// });

app.listen(port, function(){
  console.log('Listening on ' + port);
});
