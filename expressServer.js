'use strict'
const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('common'));

app.use(express.static('.'));

app.listen(3000, () => {
  console.log('Example app listenning on port 3000!');
});
