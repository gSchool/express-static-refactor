var express = require('express');
var PORT =7001;
var app = express();

app.use(express.static('.'));

app.listen(PORT, () => {
  console.log("example are listening on" + PORT);
})
