const express = require('express');
const app = express();

app.use(express.static('.'))

app.use( (req, res) => {
  res.sendStatus(404)
})

app.listen(9001, () => {
  console.log("Listening on 9001")
})

module.exports = app;
