/*jshint esversion: 6 */

'use strict';

// const fs = require('fs');
// const fsp = require('fs-promise');
const path = require('path');
// const petsPath = path.join(__dirname, 'pets.json');

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
// const bodyParser = require('body-parser');
// const morgan = require('morgan');

app.use(express.static('.'));

app.disable('x-powered-by');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));


app.listen(port, () => {
    console.log('Listening on port', port);
});

module.exports = app;
