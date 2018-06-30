const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.static('.'));

app.listen(PORT, () => {
  console.log('Listening on ' + PORT);
});

// require('express')().use(require('require').static('.').listen(8008), () => console.log(8008));
